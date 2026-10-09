"""Rebuild lossless institutional web assets from archived supplied PNGs."""
from pathlib import Path
import argparse
import hashlib
import json
from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "docs/brand/institutional/manifest.json"


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def equivalent(source, target):
    with Image.open(source) as a, Image.open(target) as b:
        a, b = a.convert("RGBA"), b.convert("RGBA")
        assert a.size == b.size, target
        assert ImageChops.difference(a.getchannel("A"), b.getchannel("A")).getbbox() is None, target
        # Transparent pixels may carry irrelevant RGB data. Compare visible
        # results on black and white backgrounds as well as exact alpha.
        for color in ("black", "white"):
            x = Image.new("RGBA", a.size, color)
            y = Image.new("RGBA", b.size, color)
            assert ImageChops.difference(Image.alpha_composite(x, a).convert("RGB"), Image.alpha_composite(y, b).convert("RGB")).getbbox() is None, target


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--verify", action="store_true", help="Read-only verification")
    args = parser.parse_args()
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    # Verify every supplied original before writing any derivative.
    for item in manifest["files"]:
        if item["kind"] != "web-derivative":
            assert digest(ROOT / item["path"]) == item["sha256"], item["path"]
    for item in manifest["files"]:
        if item["kind"] != "web-derivative":
            continue
        source, target = ROOT / item["source"], ROOT / item["path"]
        if not args.verify:
            target.parent.mkdir(parents=True, exist_ok=True)
            with Image.open(source) as image:
                image.save(target, "WEBP", lossless=True, method=6)
            item["sha256"], item["bytes"] = digest(target), target.stat().st_size
        assert digest(target) == item["sha256"], target
        equivalent(source, target)
    if not args.verify:
        MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("PASS: archived hashes, dimensions, alpha and visible pixels of all web derivatives.")


if __name__ == "__main__":
    main()
