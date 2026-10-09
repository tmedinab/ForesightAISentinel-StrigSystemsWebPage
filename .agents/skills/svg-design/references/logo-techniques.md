# Logo Design Techniques

## Principles of Clean, Scalable Logos

1. **Simplicity scales.** A logo must read clearly at 16px favicon size and 200px hero size. Eliminate detail that disappears at small sizes.
2. **Geometric construction.** Build from circles, rectangles, and triangles. Organic curves should still derive from geometric foundations.
3. **Consistent stroke weight.** If using strokes, keep them uniform unless intentional contrast is the design concept.
4. **Limited color palette.** 1-3 colors max. A good logo works in single-color (monochrome) form first, then gets color added.
5. **No raster effects.** Avoid filters, blur, drop shadows in the SVG itself. These don't scale cleanly and add file size.

## Typography in SVGs

### When to use `<text>`

- Internal tools, dashboards, or prototypes where the font is guaranteed
- Dynamic text that changes (user names, labels)
- SVGs that need to be searchable/indexable
- When file size matters (text is tiny compared to outlined paths)

### When to convert text to paths

- Logo wordmarks distributed as standalone files
- Any SVG that must render identically without font dependencies
- Icons containing letterforms (like a "B" for bold icon)
- Print/brand assets

**Trade-off:** Outlined text bloats file size significantly. Only outline when portability is required.

## Negative Space Techniques

Negative space creates shapes through absence rather than presence.

### Using fill-rule="evenodd"

Overlapping subpaths within a single `<path>` automatically create holes:

```xml
<path fill-rule="evenodd" d="
  M 12 2 A 10 10 0 1 1 12 22 A 10 10 0 1 1 12 2 Z
  M 8 8 h 8 v 8 h -8 Z
" fill="currentColor" />
```

### Compound path (single path, multiple subpaths)

Multiple `M` commands in one path create subpaths. Combined with `fill-rule="evenodd"`, overlapping areas become transparent.
