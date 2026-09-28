# Colour

How to build and check a colour system. The contested values (accent share, pure black and white, neutral tint, the contrast floor, theme choice, dark elevation, gradients, depth and translucent surfaces) are rows C1 to C9 in `resolved-conflicts.md`.

## Contents

- [Three tiers of tokens](#three-tiers-of-tokens)
- [Roles every system needs](#roles-every-system-needs)
- [Build a ramp](#build-a-ramp)
- [Measure contrast](#measure-contrast)
- [Status colours](#status-colours)
- [Dark theme](#dark-theme)
- [Charts](#charts)
- [Before you finish](#before-you-finish)

## Three tiers of tokens

1. **Primitives** name a value by hue and step: `--blue-600`. Components never use them.
2. **Semantic tokens** name a job: `--color-text-muted`. They point at primitives and are the only tier components read.
3. **Component tokens** exist only when a component needs a value no semantic token covers.

Keep the project's notation. A hex codebase stays hex unless a migration is in scope. For a new system, author ramps in OKLCH and write sRGB hex into DESIGN.md front matter.

Name tokens by role, never by appearance or first use. `--color-accent-solid` survives a rebrand; `--color-blue-button` does not. Never borrow a token because its value happens to fit: a border colour used for text breaks the day borders get lighter.

## Roles every system needs

| Role | Job |
|---|---|
| `bg` | Page background |
| `surface`, `surface-raised` | Panels and overlays, one lightness step apart |
| `border` | Dividers and hairlines, decorative only |
| `border-control` | Edges that identify an input, toggle or checkbox; must reach 3:1 (C4) |
| `text`, `text-muted` | Body copy and secondary copy |
| `accent`, `on-accent` | The one accent fill and the text placed on it |
| `focus` | The focus ring |
| `danger`, `warning`, `success`, `info` | Only the states the product actually renders |
| `chart-1` onward | Data series, separate from UI states |

A role without a consumer is maintenance with no pixels. Delete it.

## Build a ramp

A ramp is a set of steps, each with a job, not a gradient to pick from by eye.

- Keep the hue constant from end to end. For difficult hues such as yellow, allow a shift of up to 15° across the ramp.
- Step evenly in OKLCH lightness, with steps denser at the light end, where surfaces need small differences.
- Let chroma peak mid-ramp and fall off at both ends.
- Stop short of pure black and white (C2).
- Check the gamut. Declare the sRGB value first, and wide-gamut overrides inside `@media (color-gamut: p3)`.
- Build ramps with a tool rather than by eye. The `color` hub in the atlas lists OKLCH ramp builders and contrast checkers.

One mapping that makes states derivable, for a 10-step ramp:

| Steps | Role |
|---|---|
| 100, 200, 300 | Background, hover background, active background |
| 400, 500, 600 | Border, hover border, active border |
| 700, 800 | Solid fill and its hover |
| 900, 1000 | Secondary text and icons, primary text and icons |

## Measure contrast

Measure the foreground against the background it actually renders on, including any opacity, overlay or image underneath. Never report a ratio you did not compute.

Pairs to measure in every shipped theme:

- `text` and `text-muted` on `bg`, `surface` and `surface-raised`.
- `on-accent` on `accent`, and each status text on its own background.
- `border-control` and `focus` against the colours next to them.
- Chart marks against the plot background and against each other where they touch.
- Text over images, textures and translucent surfaces, at the worst case the text can meet (C4, C9). Add a scrim or a solid surface when it fails.

The WCAG formula, for two sRGB hex values:

```python
def lum(h):
    c = [int(h.lstrip("#")[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    c = [v / 12.92 if v <= 0.04045 else ((v + 0.055) / 1.055) ** 2.4 for v in c]
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]

def ratio(a, b):
    hi, lo = sorted((lum(a), lum(b)), reverse=True)
    return round((hi + 0.05) / (lo + 0.05), 2)

print(ratio("#545F68", "#F7FBFD"))
```

Report two decimals and compare them with the threshold for that text size (T3, C4). To fix a failing pair, change lightness, the channel contrast responds to, not hue. In a review, report the failing pair and leave the colours alone unless the user asked for fixes.

## Status colours

- One colour, one meaning across the product. Hues within 15° of each other count as the same colour.
- Keep `danger` at least 30° of hue away from the accent, so a destructive button never reads as primary.
- Never carry meaning with colour alone. Pair it with an icon, a label or a pattern (WCAG 1.4.1).
- Never use a status hue against its meaning, such as the danger colour on a harmless action.

## Dark theme

A dark theme is designed, not inverted.

1. Background at OKLCH lightness 0.15–0.22, tinted per C3. Avoid pure black (C2).
2. Each elevation step adds 0.03–0.04 lightness. The highest surface is the lightest.
3. Text at lightness 0.93–0.96 and muted text at 0.70–0.78. Re-measure every pair.
4. Raise the accent's lightness and lower its chroma until `on-accent` and accent-on-bg pass C4.
5. Replace shadow stacks with the C6 ring.
6. Set `color-scheme: light dark` on `:root`, or `dark` alone for dark-only pages, so native controls and scrollbars follow.
7. Give logos and SVG illustrations a dark variant. Never fake one with `filter: invert()`.
8. Suppress transitions during the switch (`motion.md`).

## Charts

- Title each chart with the question it answers (`content.md`).
- Sequential data: one hue, stepping in lightness. Categorical data: at most six hues, with distinct lightness, so they survive greyscale and colour-blindness.
- Trend colour follows the metric's meaning. Lower latency is good news, even though the line goes down.
- Label series directly where space allows, instead of relying on a legend.
- Start bar axes at zero.

## Before you finish

| Detect | Fix |
|---|---|
| A primitive such as `--blue-500` used in a component | Point a semantic token at it |
| A token named for its look or first use | Rename it for its role |
| A ramp built by stepping HSL lightness | Rebuild it in OKLCH with a constant hue |
| A contrast value in the report with no measurement behind it | Measure it, or mark it `Not verified` |
| A status hue within 30° of the accent | Move it until the two read apart |
| A dark theme made by reversing the light ramp | Rework it with the dark theme steps above |
| `filter: invert()` on a logo or image for dark mode | Ship a real dark variant |
