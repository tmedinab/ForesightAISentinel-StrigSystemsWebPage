---
name: svg-design
description: Generates and edits SVG logos, icons, and graphics. Use when creating SVG files, designing logos or icons, writing path data, optimizing SVGs, building icon systems, animating SVG elements, or modifying existing vector graphics. Covers path commands, shape primitives, styling, accessibility, gradients, masks, sprites, optimization, and animation.
---

# SVG Creation and Editing

**Core principle:** SVGs are code. Write them by hand like you'd write any markup: clean, minimal, semantically meaningful. Every element and attribute should earn its place.

## Topic Routing

| Task | Load reference |
|------|---------------|
| Arc flag combinations, common path shapes | [references/path-patterns.md](references/path-patterns.md) |
| Logo design, typography, negative space | [references/logo-techniques.md](references/logo-techniques.md) |
| Icon design, grid systems, pixel alignment | [references/icon-design.md](references/icon-design.md) |
| Gradients, masks, clips, filters, transforms (design decisions) | [references/advanced-techniques.md](references/advanced-techniques.md) |
| Animation (CSS keyframes, stagger, GPU, easing, SVG-specific) | [references/animation.md](references/animation.md) |
| Optimization, sprites, SVGO config | [references/optimization.md](references/optimization.md) |
| Accessibility, browser pitfalls | [references/accessibility-and-pitfalls.md](references/accessibility-and-pitfalls.md) |
| Editing workflow, boolean operations, combining SVGs | [references/editing-workflow.md](references/editing-workflow.md) |

## SVG Skeleton

Always start from this structure:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <!-- content -->
</svg>
```

Adjust `viewBox` to match the design canvas. Omit `width`/`height` attributes to let the SVG scale with its container (add them only when a fixed size is needed).

## Canvas Size Conventions

| Size | Use case | Notes |
|------|----------|-------|
| `0 0 16 16` | Micro icons, favicons | Heroicons micro, GitHub Octicons |
| `0 0 20 20` | Small UI icons, form elements | Heroicons mini |
| `0 0 24 24` | Standard icons (most common) | Lucide, Heroicons outline, Material |
| `0 0 32 32` | Medium icons, navigation | Phosphor uses 256x256 internally |
| `0 0 48 48` | Large display icons | App icons, illustrations |
| Custom | Logos, illustrations | Match the natural aspect ratio |

**Default to 24x24** unless there's a reason not to. It's the industry standard.

## Shape vs Path Decision

| Use shape primitive when... | Use `<path>` when... |
|---|---|
| The shape is a basic geometric form | The shape has curves, complex outlines |
| Readability matters (a circle should look like `<circle>`) | You need to minimize element count |
| You need to animate individual properties (r, cx, cy) | Combining multiple shapes into one element |
| The shape will be programmatically modified | Exporting from design tools (paths are universal) |

## Styling Defaults

Set these on the root `<svg>` element to avoid repetition on children:

| Attribute | Icon default | Logo default | Why |
|-----------|-------------|--------------|-----|
| `fill` | `none` | varies | Icons are typically stroked, logos are filled |
| `stroke` | `currentColor` | `none` or `currentColor` | Inherits text color from parent |
| `stroke-width` | `2` (on 24x24) | varies | Consistent weight across icons |
| `stroke-linecap` | `round` | `round` or `butt` | Rounded ends look cleaner at small sizes |
| `stroke-linejoin` | `round` | `round` or `miter` | Prevents sharp spikes at joins |

**`currentColor` is your friend.** It lets the SVG inherit whatever color the parent element has, making icons themeable with zero extra CSS.

## Stroke-Width Relative to ViewBox

`stroke-width` is in viewBox units, not pixels. Always set relative to your canvas dimensions:

| viewBox | Typical stroke-width | Visual result |
|---------|---------------------|---------------|
| 16x16 | 1.5 | ~9.4% of canvas |
| 24x24 | 2 | ~8.3% of canvas |
| 32x32 | 2-2.5 | ~6.3-7.8% of canvas |
| 48x48 | 3 | ~6.3% of canvas |
| 256x256 | 16 | ~6.3% of canvas |

## When to Convert Shapes to Paths

**Convert when:**
- Combining multiple shapes into a single compound path (boolean operations)
- You need the shape as part of a larger path composition
- Distributing to environments that only support `<path>`
- Optimizing for minimal DOM elements

**Keep as shapes when:**
- Code readability matters (a `<circle>` is self-documenting)
- You need to animate specific properties (animating `r` on a circle is cleaner than animating path data)
- The SVG will be programmatically modified

### Rounded rect-to-path template

```xml
<!-- <rect x="2" y="2" width="20" height="20" rx="3" /> becomes: -->
<path d="M 5 2 h 14 a 3 3 0 0 1 3 3 v 14 a 3 3 0 0 1 -3 3 h -14 a 3 3 0 0 1 -3 -3 v -14 a 3 3 0 0 1 3 -3 Z" />
```

## fill-rule: evenodd vs nonzero

Use `evenodd` when you have compound shapes with holes. It's simpler because you don't need to worry about winding direction of paths.
Use `nonzero` (the default) when you have complex paths where fill direction matters.
