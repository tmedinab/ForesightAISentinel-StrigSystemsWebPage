"""Extract Space Grotesk uppercase wordmarks without changing the source font.

Dependency: python -m pip install --target scratch/font-runtime fonttools==4.60.1
Run from any directory: python tools/brand/outline_wordmarks.py
Optional: --font PATH --output PATH
Paths use SVG coordinates (y down), baseline y=0. No tracking is added.
GPOS kern pair positioning is applied; uppercase Latin needs no complex shaping.
"""
from pathlib import Path
import argparse
import hashlib
import json
import sys

ROOT = Path(__file__).resolve().parents[2]
HERE = ROOT / "assets/img/brand/round-04/source"
sys.path.insert(0, str(ROOT / "scratch/font-runtime"))
from fontTools import __version__
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen


def number(value):
    return format(value, ".3f").rstrip("0").rstrip(".") or "0"


def kern_lookups(font):
    if "GPOS" not in font:
        return []
    table = font["GPOS"].table
    indices = []
    for record in table.FeatureList.FeatureRecord:
        if record.FeatureTag == "kern":
            indices.extend(record.Feature.LookupListIndex)
    lookups = []
    for index in dict.fromkeys(indices):
        lookup = table.LookupList.Lookup[index]
        subtables = []
        for subtable in lookup.SubTable:
            if lookup.LookupType == 9:
                if subtable.ExtensionLookupType != 2:
                    raise ValueError("Unsupported extension lookup in kern feature")
                subtable = subtable.ExtSubTable
            elif lookup.LookupType != 2:
                raise ValueError("Unsupported lookup in kern feature")
            if subtable.Format not in (1, 2):
                raise ValueError("Unsupported pair positioning format")
            subtables.append(subtable)
        lookups.append(subtables)
    return lookups


def pair_values(subtable, left, right):
    if left not in subtable.Coverage.glyphs:
        return None
    if subtable.Format == 1:
        position = subtable.Coverage.glyphs.index(left)
        for record in subtable.PairSet[position].PairValueRecord:
            if record.SecondGlyph == right:
                return record.Value1, record.Value2
        return None
    c1 = subtable.ClassDef1.classDefs.get(left, 0)
    c2 = subtable.ClassDef2.classDefs.get(right, 0)
    record = subtable.Class1Record[c1].Class2Record[c2]
    return record.Value1, record.Value2


def apply_value(position, value):
    if value is None:
        return
    if getattr(value, "YAdvance", 0) or getattr(value, "YPlacement", 0):
        raise ValueError("Unexpected vertical adjustment in uppercase Latin wordmark")
    position["xAdvance"] += getattr(value, "XAdvance", 0)
    position["xOffset"] += getattr(value, "XPlacement", 0)


def outline(font, text, weight):
    cmap = font.getBestCmap()
    names = [cmap[ord(char)] for char in text]
    positions = [dict(xAdvance=font["hmtx"][name][0], xOffset=0) for name in names]
    for subtables in kern_lookups(font):
        for index in range(len(names) - 1):
            for subtable in subtables:
                values = pair_values(subtable, names[index], names[index + 1])
                if values is not None:
                    apply_value(positions[index], values[0])
                    apply_value(positions[index + 1], values[1])
                    break
    glyphset = font.getGlyphSet()
    combined = SVGPathPen(glyphset, ntos=number)
    bounds = BoundsPen(glyphset)
    glyphs = []
    cursor = 0
    for char, name, pos in zip(text, names, positions):
        origin = cursor + pos["xOffset"]
        glyph = glyphset[name]
        native = SVGPathPen(glyphset, ntos=number)
        glyph.draw(TransformPen(native, (1, 0, 0, -1, 0, 0)))
        transform = (1, 0, 0, -1, origin, 0)
        glyph.draw(TransformPen(combined, transform))
        glyph.draw(TransformPen(bounds, transform))
        glyphs.append(dict(character=char, glyphName=name,
                           advanceWidth=font["hmtx"][name][0],
                           xAdvance=pos["xAdvance"], xOffset=pos["xOffset"],
                           cursorX=cursor, originX=origin, svgPath=native.getCommands()))
        cursor += pos["xAdvance"]
    return dict(text=text, weight=weight, unitsPerEm=font["head"].unitsPerEm,
                advance=cursor, inkBounds=list(bounds.bounds),
                svgPath=combined.getCommands(), glyphs=glyphs)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--font", type=Path, default=HERE / "SpaceGrotesk.ttf")
    parser.add_argument("--output", type=Path, default=ROOT / "assets/img/brand/round-04/wordmark-source.json")
    args = parser.parse_args()
    source = args.font.read_bytes()
    result = dict(schemaVersion=1, fontFile=args.font.name,
                  fontSha256=hashlib.sha256(source).hexdigest(),
                  fontToolsVersion=__version__,
                  licenseFile="assets/img/brand/SpaceGrotesk-OFL.txt",
                  coordinates="SVG y-down, baseline y=0, dimensions in font units",
                  shaping="GPOS kern pair positioning, uppercase Latin; no tracking",
                  sourceFontModified=False, runs={})
    for weight in (700, 400):
        original = TTFont(args.font, recalcTimestamp=False)
        axis = next(axis for axis in original["fvar"].axes if axis.axisTag == "wght")
        if not axis.minValue <= weight <= axis.maxValue:
            raise ValueError("Requested weight outside the source font axis")
        font = instantiateVariableFont(original, {"wght": weight}, inplace=False)
        for text in ("STRIG", "SYSTEMS", "ATHENE"):
            result["runs"][f"{text}_{weight}"] = outline(font, text, weight)
        font.close()
        original.close()
    if hashlib.sha256(args.font.read_bytes()).hexdigest() != result["fontSha256"]:
        raise RuntimeError("Source font changed during extraction")
    args.output.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    for name, run in result["runs"].items():
        print(f"{name}: unitsPerEm={run['unitsPerEm']}, advance={run['advance']}, bounds={run['inkBounds']}")


if __name__ == "__main__":
    main()
