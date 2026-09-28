# DESIGN.md format

The Design Atlas DESIGN.md: one markdown file at the project root that records the visual system as tokens plus the reasons behind them. It keeps the front matter of the Google spec so existing parsers and linters read it, and adds the sections the atlas comparison found in the most complete files.

## Contents

- [Rules](#rules)
- [Validate](#validate)
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

## Validate

This skill ships a validator, [scripts/validate-design-md.mjs](../scripts/validate-design-md.mjs), that checks every rule on this page a machine can check. It needs Node 18 or later and nothing else. Run it from the project root:

```sh
node <this skill's folder>/scripts/validate-design-md.mjs DESIGN.md
```

- It reads the motion token block from `references/resolved-conflicts.md` beside it. Pass `--motion-tokens <file>` to read another copy.
- It prints JSON on stdout (`ok`, and each file with its `errors`) and one `path: message` line per error on stderr.
- Exit code 0 means the file is valid, 1 that it has errors and 2 that it could not run: a missing file, a bad option or no motion token block.
- Fix every error and run it again until it exits 0. When Node is not available, check the rules by hand and report the file as `Not verified` by the validator.

The Design Atlas repository runs the same checks on its website DESIGN.md with `npm run check`.

## Value types

| Key | Type |
|---|---|
| `version` | The string `alpha` until the spec publishes another version |
| `name`, `description` | One-line strings |
| `colors.<token>` | A `"#RRGGBB"` string, six hex digits, no alpha |
| `typography.<role>` | A map with exactly `fontFamily` (one string, see below), `fontSize` (px), `fontWeight` (integer 100–1000), `lineHeight` (unitless number) and `letterSpacing` (em) |
| `rounded.<step>`, `spacing.<step>` | A px value such as `8px` |
| `components.<name>` | A map using only `backgroundColor` and `textColor` (`{colors.*}`), `typography` (`{typography.*}`), `rounded` (`{rounded.*}`), and `padding`, `size`, `height` and `width` (px values or `{spacing.*}`) |

Write a font stack as one YAML string. A family name in quotes followed by the rest of the stack, as in `fontFamily: "Azeret Mono", ui-monospace, monospace`, is invalid YAML and breaks every parser. Either leave the whole stack unquoted (`fontFamily: Azeret Mono, ui-monospace, monospace`), or wrap all of it in double quotes and put single quotes inside: `fontFamily: "'Azeret Mono', ui-monospace, monospace"`. Quote hex colours for a similar reason: an unquoted `#` starts a YAML comment, so `ink: #11212C` has no value.

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

### Translucent surfaces

Front-matter colours are opaque, so a translucent surface such as a frosted panel, a scrim or a veil over a photo is recorded in two parts:

1. The tint is an ordinary token holding the colour at full strength, such as `glass: "#F4F6F8"`. The alpha lives in the code token (`color-mix(in srgb, var(--color-glass) 72%, transparent)`) and in the composite row below, never in the hex.
2. A composite row holds the worst case the text on that surface can meet. It is a Colors table row that is not in the front matter, with its Job cell starting `Composite of <tint> at <alpha>% over <black|white>`. Give one alpha or backdrop per theme, separated by ` / `, when they differ between themes. Each theme cell is the tint composited over the backdrop: for every sRGB channel, `alpha × tint + (1 − alpha) × backdrop`, rounded.

Use black as the backdrop under a light tint with dark text, and white under a dark tint with light text. Any photo, video or blurred content lies between the two, so the composite over the worse one is the lowest contrast the text can get. Declare the text's pairs against the composite row, never against the tint. A composite row leaves its own Pairs cell empty, and components never reference it.

```markdown
| Token | Light | Dark | OKLCH (light) | Job | Pairs (measured) |
|---|---|---|---|---|---|
| ink | #1B2430 | #EEF1F4 | 0.257 0.026 256 | Body text | text on glass-worst 7.29:1 / 5.52:1 |
| glass | #F4F6F8 | #1C232B | 0.972 0.003 248 | Frosted panel tint | |
| glass-worst | #B0B1B3 | #5C6166 | 0.760 0.003 265 | Composite of glass at 72% over black / white | |
```

The opaque fallback, the blur budget and the other rules for translucent surfaces are row C9 in `references/resolved-conflicts.md`. The validator recomputes each composite, checks that the row uses the worse backdrop for every pair declared on it, and fails a foreground whose luminance falls between the composites over black and over white, since some backdrop would then match it exactly.

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
    fontFamily: "<'Family Name'>, <fallback>, <generic>"
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
- Strategy: <rings | borders | soft shadows | hard offset shadows>
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

A product surface for a fictional library app, showing the front matter and seven of the fifteen sections. Contrast values were computed with the WCAG formula from the hex values shown, and the `paper-veil` row shows a translucent label over book covers.

```markdown
---
version: alpha
name: Shelfmark
description: Loans and holds for public-library members, checked on a phone between stops.
colors:
  ink: "#19251F"
  paper: "#F4F9F7"
  surface: "#EAF2EE"
  line: "#D1DAD5"
  control-border: "#76847D"
  text-muted: "#56645E"
  accent: "#176A4E"
  on-accent: "#F7FBF9"
  overdue: "#AF2B25"
  on-overdue: "#FEFBFA"
typography:
  heading-1:
    fontFamily: "'Atkinson Hyperlegible Next', system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0em
  body:
    fontFamily: "'Atkinson Hyperlegible Next', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  data:
    fontFamily: "'Atkinson Hyperlegible Mono', ui-monospace, monospace"
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
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  overdue-banner:
    backgroundColor: "{colors.overdue}"
    textColor: "{colors.on-overdue}"
    rounded: "{rounded.md}"
    padding: 12px 16px
---

## Overview
- Surface: product
- Audience and job: library members on a phone, often on a bus, checking what is due and renewing it before a fine starts.
- Subject world: the date-due slip and the catalogue card, with stamped dates, call numbers and green ink that marks what is yours.
- Signature element: each loan drawn as a date-due slip, with the next due date stamped largest and renewals counted as stamps.
- Will not: marketing hero, cards around every block, star ratings, reading-streak badges, book-spine illustrations.

## Colors
| Token | Light | Dark | OKLCH (light) | Job | Pairs (measured) |
|---|---|---|---|---|---|
| ink | #19251F | #E6EDEA | 0.251 0.020 163 | Body text, due dates | text on paper 14.89:1 / 15.45:1; text on surface 13.90:1 / 14.15:1; text on paper-veil 9.77:1 / 8.92:1 |
| paper | #F4F9F7 | #0F1612 | 0.978 0.006 170 | Page background, cover label tint | |
| paper-veil | #C8CCCB | #3A403D | 0.842 0.005 180 | Composite of paper at 82% over black / white. Worst case under the label on a cover | |
| surface | #EAF2EE | #171F1B | 0.954 0.010 165 | Raised panels | |
| line | #D1DAD5 | #2A332E | 0.880 0.012 162 | Decorative dividers only | |
| text-muted | #56645E | #A5B1AB | 0.489 0.020 168 | Call numbers, secondary text | text on paper 5.84:1 / 8.29:1; text on surface 5.45:1 / 7.59:1 |
| control-border | #76847D | #6B7872 | 0.600 0.019 164 | Input and toggle edges | ui on paper 3.68:1 / 3.98:1; ui on surface 3.43:1 / 3.65:1 |
| accent | #176A4E | #7BC3A4 | 0.469 0.090 165 | Renew and Place hold, "yours" stamps | text on paper 6.15:1 / 8.90:1 |
| on-accent | #F7FBF9 | #0F1612 | 0.985 0.005 165 | Text on the primary button | text on accent 6.27:1 / 8.90:1 |
| overdue | #AF2B25 | #ED8C80 | 0.499 0.170 28 | Overdue loans only | text on paper 6.18:1 / 7.57:1 |
| on-overdue | #FEFBFA | #1E1311 | 0.990 0.003 39 | Text on the overdue banner | text on overdue 6.38:1 / 7.49:1 |

## Elevation and depth
- Strategy: borders. Slips and panels take a 1px `line` border and no shadow in either theme.
- Cover labels: `paper` at 82% with a 16px backdrop blur, opaque `paper` under reduced transparency or without `backdrop-filter` support (C9).

## Motion
| Token | Value | Used for |
|---|---|---|
| --dur-menu | 200ms | Branch picker |
| --dur-toast | 200ms | "Hold placed" |
- Reduced motion: the due-date stamp appears without its press; the days-left counter changes without rolling.
- Orchestrated moment: none. Members open the app for seconds at a time.

## Overrides
| Row | Project value | Reason |
|---|---|---|
| L2 | 48 × 48 targets for Renew and Place hold under `(pointer: coarse)` | Many members renew one-handed on a moving bus |

## References
| Atlas page (`sites/<slug>.md`) | Live example and visual evidence | What we adapted | Licence class | Reviewed |
|---|---|---|---|---|
| sites/ramps.md | none, tool | Built the green and red ramps in OKLCH | MIT tool, no asset shipped | 2026-09-25 |
| sites/number-flow.md | none, code library | Days-left counter with stable digit widths | MIT code, notice kept | 2026-09-25 |
| sites/dark-mode-design.md | not visually verified | No visual decision taken yet | Look only | 2026-09-25 |

## Provenance
- Written: 2026-09-27 by the design agent; direction not reviewed.
- Measured: all contrast pairs and the cover-label composite, computed from the hex values above.
- Inferred: target sizes, pending a test on a moving bus.
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
