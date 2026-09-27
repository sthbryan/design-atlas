# DESIGN.md format

The Design Atlas DESIGN.md: one markdown file at the project root that records the visual system as tokens plus the reasons behind them. It keeps the front matter of the Google spec so existing parsers and linters read it, and adds the sections the atlas comparison found in the most complete files.

## Contents

- [Rules](#rules)
- [Value types](#value-types)
- [Colors table and contrast pairs](#colors-table-and-contrast-pairs)
- [Sections](#sections)
- [Template](#template)
- [Worked excerpt](#worked-excerpt)
- [Updating an existing file](#updating-an-existing-file)
- [Extracting from code](#extracting-from-code)
- [PRODUCT.md](#productmd)

## Rules

- One DESIGN.md per project, at the root. Add one line to `AGENTS.md` or `CLAUDE.md` pointing to it, so every agent finds it.
- Front matter uses all eight spec keys and no others: `version`, `name`, `description`, `colors`, `typography`, `rounded`, `spacing` and `components`. Motion, breakpoints and accessibility targets live in body tables, because unknown keys break some parsers.
- Front-matter colours are sRGB hex strings, which every parser in the atlas comparison reads. Record the OKLCH source beside each one in the Colors table.
- Components point at tokens by path (`"{colors.ink}"`) and never repeat a raw colour, type role or radius. Only the dimension properties (`padding`, `size`, `height`, `width`) may hold raw px values.
- Every `{group.token}` reference, in the front matter or the body, resolves to a token that exists.
- The front matter holds the default theme, which is the first theme column of the Colors table. Other themes reuse the same token names in the columns after it.
- Measured values go in tokens. Uncertainty goes in prose, marked `inferred`, and a value you could not measure is written `not measured`, never guessed.
- Do's and Don'ts are hard limits a reviewer can check ("one filled button per view"), not advice ("keep it clean").
- Values that differ from `references/resolved-conflicts.md` are listed under Overrides with a reason, so later agents follow the project instead of the default. A motion token in the Motion table whose value differs from the token block there is named in an Overrides row.
- No HTML comments. Anything worth saying goes in the prose.

The Design Atlas repository checks its own DESIGN.md files against these rules with `npm run check`. Other projects can follow the same rules by hand or with their own linter.

## Value types

| Key | Type |
|---|---|
| `version` | The string `alpha` until the spec publishes another version |
| `name`, `description` | One-line strings |
| `colors.<token>` | A `"#RRGGBB"` string, six hex digits, no alpha |
| `typography.<role>` | A map with exactly `fontFamily` (string, a stack is allowed), `fontSize` (px), `fontWeight` (integer 100–1000), `lineHeight` (unitless number) and `letterSpacing` (em) |
| `rounded.<step>`, `spacing.<step>` | A px value such as `8px` |
| `components.<name>` | A map using only `backgroundColor` and `textColor` (`{colors.*}`), `typography` (`{typography.*}`), `rounded` (`{rounded.*}`), and `padding`, `size`, `height` and `width` (px values or `{spacing.*}`) |

Token, role and component names use lowercase letters, digits and hyphens. States and variants are separate components named with a suffix, such as `link-hover` or `chip-selected`.

## Colors table and contrast pairs

The Colors table is the one place that holds every theme, so it is also where contrast is declared.

- Columns, in order: `Token`, one column per theme (`Light`, `Dark`, or just one for a single-theme system), `OKLCH (<default theme>)`, `Job`, `Pairs (measured)`.
- One row per front-matter colour, and no rows for anything else. Every theme cell is a `#RRGGBB` value, and the first theme column equals the front matter.
- The OKLCH cell is `L C H` or `oklch(L C H)`, with L from 0 to 1. It must round to the default theme's hex within 0.01 in L and C, and within 5° of hue when chroma is 0.02 or more.
- A row's Pairs cell declares the pairs where that token is the foreground, separated by semicolons. Each pair reads `<kind> on <background token> <ratio>:1`, with one ratio per theme column separated by ` / `, for example `text on bg 15.10:1 / 14.87:1`.
- The kind sets the WCAG 2.2 floor from C4 and T3 in `references/resolved-conflicts.md`: `text` needs 4.5:1, `large` (large text) needs 3:1 and `ui` (control boundaries, focus rings, meaningful icons and chart marks) needs 3:1.
- Ratios are computed with the WCAG formula in `references/color.md` and written with two decimals. A declared ratio that differs from the computed one by more than 0.01 is wrong, and so is any pair below its floor in any theme.
- Every component with both `textColor` and `backgroundColor` is a pair too. It must reach 4.5:1 in every theme column, or 3:1 when its `typography` role is large text (T3).
- Background tokens, such as `bg` and `surface`, leave the Pairs cell empty.

## Sections

Keep these fifteen headings, in this order, under one H1 title. When a section truly does not apply, keep its heading and say why in one line. Use H3 headings for anything inside a section, never another H2.

| # | Section | What it holds |
|---|---|---|
| 1 | Overview | Surface, audience and job, subject world, signature element, and what the design will not do |
| 2 | Colors | Every token with hex, OKLCH, job and its measured contrast pairs, per theme |
| 3 | Typography | Families with licence and reason, the scale ratio and a role table |
| 4 | Layout and spacing | Spacing scale, grid, container widths and density |
| 5 | Elevation and depth | The one depth strategy and its values per theme |
| 6 | Shapes | Radius scale and where each step is used |
| 7 | Components | Each component's tokens and the states it must cover |
| 8 | Motion | Curves, durations, stagger and the reduced-motion behaviour |
| 9 | Accessibility | Contrast level, target sizes, focus ring and any documented exception |
| 10 | Responsive behaviour | The breakpoints actually used and what changes at each |
| 11 | Do's and Don'ts | Hard limits, including the bans this project enforces |
| 12 | Overrides | Rows of resolved-conflicts this project changes, each with a reason |
| 13 | References | Atlas pages, inspected example URLs, what was adapted, licence class and reviewed date |
| 14 | Agent guide | How to extend the system, example requests and known gaps |
| 15 | Provenance | Files read, what was measured versus inferred, and the date |

## Template

Copy this and replace every angle-bracket placeholder. Delete rows that do not apply.

```markdown
---
version: alpha
name: <product name>
description: <one sentence: what it is, for whom, in what context>
colors:
  <token>: "<#RRGGBB>"
typography:
  <role>:
    fontFamily: <family>
    fontSize: <px>
    fontWeight: <number>
    lineHeight: <unitless>
    letterSpacing: <em>
rounded:
  <step>: <px>
spacing:
  <step>: <px>
components:
  <component>:
    backgroundColor: "{colors.<token>}"
    textColor: "{colors.<token>}"
    rounded: "{rounded.<step>}"
    padding: <px values>
---

# <Product> design system

## Overview
- Surface: <marketing | product | reading>
- Audience and job: <who, where, the one task>
- Subject world: <materials, conventions or data the look comes from>
- Signature element: <the element only this product has>
- Will not: <three to five specific defaults this system rejects>

## Colors
| Token | Light | Dark | OKLCH (light) | Job | Pairs (measured) |
|---|---|---|---|---|---|
| <token> | <#RRGGBB> | <#RRGGBB> | <L C H> | <job> | <text on bg 0.00:1 / 0.00:1> |

## Typography
- Families: <family> (<licence>, <reason>); <mono family> (<licence>, <reason>)
- Scale ratio: <1.2 | 1.25> from a <16>px body

| Role | Size | Weight | Line height | Tracking | Use |
|---|---|---|---|---|---|

## Layout and spacing
- Scale: <steps>
- Grid and containers: <columns, gutters, max widths>
- Density: <control heights, row heights>

## Elevation and depth
- Strategy: <rings | borders | soft shadows>
- Light: <values>. Dark: <values>.

## Shapes
| Step | Value | Used on |
|---|---|---|

## Components
| Component | Tokens | States covered |
|---|---|---|

## Motion
| Token | Value | Used for |
|---|---|---|
- Reduced motion: <behaviour>

## Accessibility
- Contrast target: <WCAG 2.2 AA | AAA>
- Targets: <floor and build default>
- Focus ring: <width, offset, colour token>
- Exceptions: <none | each with a reason>

## Responsive behaviour
| Breakpoint | What changes |
|---|---|

## Do's and Don'ts
- Do: <checkable limit>
- Don't: <checkable limit>

## Overrides
| Row | Project value | Reason |
|---|---|---|

## References
| Atlas page (`sites/<slug>.md`) | Live example and visual evidence | What we adapted | Licence class | Reviewed |
|---|---|---|---|---|

## Agent guide
- To add a component: <steps>
- Example requests: <two or three>
- Known gaps: <list>

## Provenance
- Written: <YYYY-MM-DD> by <who or which agent>
- Read: <files>
- Measured: <values measured from computed styles>
- Inferred: <values taken from prose or guessed from context>
- Unverified: <live examples or design details that could not be visually inspected>
```

## Worked excerpt

A product surface for a fictional tide planner, showing the front matter and six of the fifteen sections. Contrast values were computed with the WCAG formula from the hex values shown.

```markdown
---
version: alpha
name: Tidewater
description: Tide and harbour-bar planner for small-boat skippers, read on a phone outdoors.
colors:
  ink: "#11212C"
  paper: "#F7FBFD"
  surface: "#EDF3F7"
  line: "#D1D9DF"
  control-border: "#76828B"
  text-muted: "#545F68"
  caution: "#B51C79"
  on-caution: "#FFFFFF"
  tide: "#287AA3"
typography:
  heading-1:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0em
  body:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  data:
    fontFamily: Atkinson Hyperlegible Mono
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0em
rounded:
  sm: 4px
  md: 8px
  lg: 12px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  caution-banner:
    backgroundColor: "{colors.caution}"
    textColor: "{colors.on-caution}"
    rounded: "{rounded.md}"
    padding: 12px 16px
---

## Overview
- Surface: product
- Audience and job: skippers deciding on a phone, outdoors, whether they can cross the bar today.
- Subject world: nautical chart conventions. Blue marks water, and magenta marks cautions and nothing else.
- Signature element: today's tide curve across each harbour, with the boat's draft drawn as the line it must clear.
- Will not: marketing hero, cards around every block, dark by default, wave illustrations, gradient washes.

## Colors
| Token | Light | Dark | OKLCH (light) | Job | Pairs (measured) |
|---|---|---|---|---|---|
| ink | #11212C | #EBEFF2 | 0.24 0.03 240 | Body text, primary fill | text on paper 15.79:1 / 15.96:1; text on surface 14.69:1 / 14.63:1 |
| paper | #F7FBFD | #0B151C | 0.985 0.005 240 | Page background, text on ink | text on ink 15.79:1 / 15.96:1 |
| surface | #EDF3F7 | #131E26 | 0.96 0.008 240 | Raised panels | |
| line | #D1D9DF | #272F35 | 0.88 0.012 240 | Decorative dividers only | |
| text-muted | #545F68 | #A1ADB5 | 0.48 0.02 240 | Secondary text | text on paper 6.28:1 / 8.05:1; text on surface 5.84:1 / 7.38:1 |
| control-border | #76828B | #67737C | 0.60 0.02 240 | Input and toggle edges | ui on paper 3.78:1 / 3.80:1; ui on surface 3.52:1 / 3.48:1 |
| caution | #B51C79 | #F080B8 | 0.52 0.2 350 | Below-draft warnings only | text on paper 5.92:1 / 7.45:1 |
| on-caution | #FFFFFF | #260B19 | 1 0 0 | Text on the caution banner | text on caution 6.16:1 / 7.41:1 |
| tide | #287AA3 | #5BB0D7 | 0.55 0.1 235 | Tide curve stroke | ui on paper 4.58:1 / 7.59:1 |

## Motion
| Token | Value | Used for |
|---|---|---|
| --dur-menu | 200ms | Harbour picker |
| --dur-toast | 200ms | "Saved to passage plan" |
- Reduced motion: the tide curve draws instantly; the time scrubber moves without easing.
- Orchestrated moment: none. The app is opened many times a day.

## Overrides
| Row | Project value | Reason |
|---|---|---|
| C5 | Light by default; dark only from the in-app setting, never from `prefers-color-scheme` | Read in direct sunlight, where a phone's system dark mode would hide the chart |

## References
| Atlas page (`sites/<slug>.md`) | Live example and visual evidence | What we adapted | Licence class | Reviewed |
|---|---|---|---|---|
| sites/ramps.md | none, tool | Built the blue and magenta ramps in OKLCH | MIT tool, no asset shipped | 2026-09-25 |
| sites/number-flow.md | none, code library | Animated tide heights with stable digit widths | MIT code, notice kept | 2026-09-25 |
| sites/dark-mode-design.md | not visually verified | No visual decision taken yet | Look only | 2026-09-25 |

## Provenance
- Written: 2026-09-25 by the design agent, approved by the product owner.
- Measured: all contrast pairs, computed from the hex values above.
- Inferred: control heights, pending a test with gloves on.
- Unverified: individual sites from Dark Mode Design were not opened.
```

## Updating an existing file

- Read the whole file first. Keep its layout, token names and section order, and add missing sections at the end.
- A file in the nine-part layout (Visual Theme and Atmosphere through Agent Prompt Guide) stays in that layout unless the user asks for a conversion. Map our sections onto its headings.
- Never rename a token that code already uses. Add the new token and list the old one under Agent guide as deprecated.
- Change a value only with a reason, and record the change in Provenance with the date.
- If the file conflicts with the implemented theme, report the drift instead of silently picking a side.

## Extracting from code

When asked to write DESIGN.md from an existing codebase:

1. Read the theme sources: CSS variables, the Tailwind theme or config, and any token JSON. Note which source the build actually uses.
2. Record the values the components use, not only the ones declared. A declared token nothing references goes under Agent guide as unused.
3. When a browser is available, check three or more values against computed styles on a real page and record any disagreement.
4. Write `not measured` for anything you could not confirm, and mark prose written from appearance as `inferred`.

## PRODUCT.md

Keep who and why apart from how it looks. PRODUCT.md holds the facts the design must not invent:

- Audience, their context and the main jobs.
- Accessibility needs beyond the floor, such as low vision or gloved use.
- Real plans and prices, real metrics with their sources, real customers and quotes the team may publish.
- Voice and terminology: the product's name for each action.

When a page needs a fact PRODUCT.md does not have, use a labelled placeholder and list it in the report.
