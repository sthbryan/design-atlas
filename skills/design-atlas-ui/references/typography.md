# Typography

Recipes for choosing, loading and setting type. The contested numbers (families, large text, sizes, measure, ratio, tracking, display cap, emphasis, case and dashes) are rows T1 to T12 in `resolved-conflicts.md`.

## Contents

- [Choose faces from the subject](#choose-faces-from-the-subject)
- [Load fonts without layout shift](#load-fonts-without-layout-shift)
- [Build the scale](#build-the-scale)
- [Line height and weight](#line-height-and-weight)
- [Wrapping and truncation](#wrapping-and-truncation)
- [Numbers and punctuation](#numbers-and-punctuation)
- [Rendering details](#rendering-details)
- [Before you finish](#before-you-finish)

## Choose faces from the subject

1. Keep the project's faces. Only a new direction chooses new ones.
2. Start from the subject world. Ask what the product's own documents, signs or tools are set in, and what the reader's conditions demand: glare, small screens, dense numbers, long reading.
3. Decide the roles first: one face for reading and UI, optionally one for display, and a mono only for code or tabular data.
4. Pair for contrast, not similarity. Two near-identical sans faces read as a mistake.
5. Check the licence before choosing. The SIL Open Font Licence allows self-hosting. A commercial face needs a web licence the team actually holds. Record the licence in DESIGN.md.
6. If the face is on the T1 reflex list, write its one-line reason in DESIGN.md.

Useful atlas hubs: `typography-and-styles` for faces and treatments, `design-md` for how other systems document type.

## Load fonts without layout shift

- Serve `.woff2`. Self-host, or use the loader the framework already provides.
- Load only the weights and styles the design uses. Browsers fake missing bold and italic, and the fakes look wrong.
- Use `font-display: swap` and preload only the one file the first viewport needs.
- Match fallback metrics so the swap does not shift the layout: the framework's font tooling, or `size-adjust` and `ascent-override` on a local fallback.
- Prefer CSS properties over raw feature tags: `font-weight: 650`, `font-optical-sizing: auto`, `font-variant-numeric: tabular-nums`. Raw tags are for custom axes and stylistic sets only.

## Build the scale

1. Start from the body size in T4 and multiply by the T6 ratio for each step up. Round to whole pixels.
2. Name steps by role, not size: `display`, `heading-1` to `heading-3`, `body`, `body-sm`, `label`, `caption`, `data`.
3. Make adjacent steps clearly different or identical. Two sizes 1px apart look like an error.
4. Heading sizes descend with heading level. Choose the heading element for structure and set its size in CSS.
5. Make display sizes fluid with `clamp()`, with the maximum from T8:

```css
.display {
  font-size: clamp(2.25rem, 1.2rem + 4vw, 6rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  text-wrap: balance;
}
```

## Line height and weight

| Role | Line height |
|---|---|
| Display | 1.05–1.1 |
| Headings | 1.15–1.25 |
| UI labels and buttons | 1.2–1.4 |
| Body and descriptions | 1.5–1.6 |
| Any text that wraps to three or more lines | at least 1.4 |

- Use unitless line heights so they scale with the size.
- Below 18px, use weight 400 or heavier. Weights under 300 are for display sizes of 28px and up.
- Use three weights or fewer across the product, and build hierarchy from size and spacing before weight.
- Never change weight on hover or selection. The width change reflows neighbouring text, so change colour or underline instead.
- Light text on dark grounds looks heavier. Keep the weight, and tighten tracking slightly on display lines if needed.

## Wrapping and truncation

- `text-wrap: balance` on headings, `text-wrap: pretty` on short descriptions, neither on long-form text.
- `overflow-wrap: anywhere` and `min-width: 0` wherever a URL, ID or long word could escape its box.
- `white-space: nowrap` on badges and short labels where a break looks broken.
- Truncate with `text-overflow: ellipsis` or `line-clamp` only when the full value stays reachable in a tooltip, a title attribute or an expanded view.
- No fixed heights on text containers, because translated strings grow.
- No justified text in interfaces.

## Numbers and punctuation

- `font-variant-numeric: tabular-nums` on anything that updates or sits in a column: prices, timers, counters and tables.
- Right-align numeric columns and keep one precision per column.
- Format with `Intl.NumberFormat` and `Intl.DateTimeFormat` in the page's locale.
- Curly quotes in prose and straight quotes in code.
- The single ellipsis character `…`, not three dots.
- A non-breaking space between a number and its unit: `16&nbsp;GB`.
- Store copy in natural case and apply capitals with `text-transform`.

## Rendering details

- Set `lang` on `<html>`, and on any passage in another language.
- Underlines: `text-underline-offset` around 0.15em and `text-decoration-skip-ink: auto`.
- Style `::selection` in brand colours only if the selected text still passes C4.
- Keep text selectable. `user-select: none` belongs only on drag handles and gesture surfaces.

## Before you finish

| Detect | Fix |
|---|---|
| A font size that is not a scale step | Snap it to the nearest step |
| A heading visually larger than its parent heading | Re-map that section to descending steps |
| `font-weight` below 400 on text under 18px | Weight 400 or more |
| A weight change on `:hover` or a selected state | Change colour or underline instead |
| Changing numbers without `tabular-nums` | Add it |
| `leading-none` or `line-height: 1` on text that wraps | At least 1.4 |
| Three dots instead of `…` | The ellipsis character |
| A webfont loaded in weights the design never uses | Drop them |
