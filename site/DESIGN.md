---
version: alpha
name: Design Atlas
description: Visual identity for the Design Atlas website, a reference wiki of reviewed design sites that designers, developers and coding agents scan, filter and read.
colors:
  bg: "#F8F7F2"
  surface: "#F1EFE7"
  surface-raised: "#FFFDF9"
  border: "#DFDBCE"
  border-control: "#837752"
  text: "#2A2618"
  text-muted: "#625C4A"
  accent: "#7E5E14"
  accent-strong: "#61470D"
  accent-soft: "#F3E7C6"
  focus: "#2A2618"
  success: "#2C6A3C"
  success-soft: "#E1F1E3"
  warning: "#8A4A00"
  warning-soft: "#F8EACF"
  danger: "#A93236"
  danger-soft: "#FBE5E4"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: 49px
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -0.02em
  heading-1:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: 31px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: 0em
  heading-2:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: 25px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0em
  heading-3:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0em
  body:
    fontFamily: system-ui
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  body-sm:
    fontFamily: system-ui
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0em
  label:
    fontFamily: system-ui
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0em
  code:
    fontFamily: ui-monospace, SF Mono, Menlo, Consolas, monospace
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
rounded:
  sm: 4px
  md: 6px
  lg: 10px
  pill: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
components:
  link:
    textColor: "{colors.accent}"
    typography: "{typography.body}"
  link-hover:
    textColor: "{colors.accent-strong}"
  nav:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    height: 56px
    padding: 0px 16px
  search-field:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    height: 40px
    padding: 0px 12px
  button:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    height: 32px
    padding: 0px 12px
  button-hover:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.text}"
  table-header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-muted}"
    typography: "{typography.label}"
    padding: 8px 12px
  gazetteer-row:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    typography: "{typography.body-sm}"
    padding: 12px
  gazetteer-row-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
  badge-ship:
    backgroundColor: "{colors.success-soft}"
    textColor: "{colors.success}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 2px 8px
  badge-conditional:
    backgroundColor: "{colors.warning-soft}"
    textColor: "{colors.warning}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 2px 8px
  badge-look-only:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 2px 8px
  badge-broken:
    backgroundColor: "{colors.danger-soft}"
    textColor: "{colors.danger}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 2px 8px
  card:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: 16px
  code-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  code-inline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.code}"
    rounded: "{rounded.sm}"
    padding: 0px 4px
  legend:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 8px 12px
---

# Design Atlas design system

The identity of the Design Atlas website, a VitePress theme in `site/.vitepress/`. Tokens live in `site/.vitepress/theme/style.css`.

## Overview

- Surface: reading, with product density on the lists.
- Audience and job: designers, developers and coding agents picking a reviewed reference and checking its licence and agent channels first, on desktop or phone, in either theme.
- Subject world: a gilded gazetteer: ruled index columns, mono metadata, survey ticks, dark umber and brass.
- Signature element: the gazetteer row. Name and description, then four slots in a fixed order: verdict, licence class, agent channels, reviewed date. A header labels the columns when they fit; a legend explains the licence badges.
- Home cover: a hero band with the title, the lede and the two ways in, a figures strip counting the catalog (references, hubs, shippable licences, latest review), the five most recent gazetteer rows, and the hubs as a numbered contents page.
- Share identity: the gazetteer mark is a light/dark SVG favicon; the 1200 × 630 PNG social card repeats the same seal, umber paper, gold ink, brass rule, contour lines and grotesque type, so the favicon and the card read as one identity.
- Will not: screenshot card grids, a gradient hero, a purple accent, colour-only licence signals, animated lists.

## Colors

Neutrals are bone in light and umber in dark, chroma at or below 0.023 (C3); the accent is brass at hue 78, body text is gold on umber and bronze on bone, and the palest champagne carries the focus ring in dark. Dark surfaces step lighter per level (C6). The dark column is `:root.dark`.

| Token | Light | Dark | OKLCH (light) | Job | Pairs (measured) |
|---|---|---|---|---|---|
| bg | #F8F7F2 | #1A140E | 0.976 0.007 97 | Page |  |
| surface | #F1EFE7 | #221A12 | 0.951 0.011 95 | Sidebar, legend, facts panel, table header, code |  |
| surface-raised | #FFFDF9 | #2A2117 | 0.994 0.006 85 | Topic cards, search field, buttons |  |
| border | #DFDBCE | #3B2E22 | 0.891 0.018 93 | Row rules and card edges; decorative, below 3:1 on purpose |  |
| border-control | #837752 | #8E7B5E | 0.571 0.055 92 | Edges of the search field and buttons | ui on bg 4.14:1 / 4.47:1; ui on surface 3.86:1 / 4.20:1; ui on surface-raised 4.37:1 / 3.87:1 |
| text | #2A2618 | #EDD9A8 | 0.269 0.025 94 | Body, titles, row names | text on bg 14.10:1 / 13.12:1; text on surface 13.13:1 / 12.32:1; text on surface-raised 14.88:1 / 11.36:1; text on accent-soft 12.28:1 / 10.34:1; text on success-soft 12.88:1 / 11.13:1; text on warning-soft 12.72:1 / 11.10:1; text on danger-soft 12.55:1 / 11.41:1 |
| text-muted | #625C4A | #B9A57E | 0.475 0.029 92 | Descriptions, metadata, look-only badge | text on bg 6.22:1 / 7.60:1; text on surface 5.79:1 / 7.14:1; text on surface-raised 6.56:1 / 6.58:1 |
| accent | #7E5E14 | #F0C06A | 0.502 0.095 83 | Links, current-page mark, sidebar indicator | text on bg 5.60:1 / 10.83:1; text on surface 5.21:1 / 10.17:1; text on surface-raised 5.91:1 / 9.37:1 |
| accent-strong | #61470D | #F7D998 | 0.416 0.079 82 | Link hover, search-match text | text on bg 8.11:1 / 13.33:1; text on accent-soft 7.06:1 / 10.51:1 |
| accent-soft | #F3E7C6 | #33281A | 0.929 0.045 90 | Button hover, search-match highlight |  |
| focus | #2A2618 | #FFF0C8 | 0.269 0.025 94 | Focus ring only | ui on bg 14.10:1 / 16.13:1; ui on surface 13.13:1 / 15.15:1; ui on surface-raised 14.88:1 / 13.96:1 |
| success | #2C6A3C | #8FD3A5 | 0.471 0.098 150 | Ship licence badge | text on bg 6.05:1 / 10.46:1; text on success-soft 5.53:1 / 8.87:1 |
| success-soft | #E1F1E3 | #17281B | 0.942 0.025 149 | Ship badge fill |  |
| warning | #8A4A00 | #F09A55 | 0.477 0.113 59 | Conditional licence, stale status | text on bg 6.40:1 / 8.22:1; text on warning-soft 5.77:1 / 6.96:1 |
| warning-soft | #F8EACF | #34200F | 0.941 0.039 84 | Conditional and stale badge fill, warning callout |  |
| danger | #A93236 | #F28E86 | 0.498 0.155 23 | Broken status | text on bg 6.12:1 / 7.81:1; text on danger-soft 5.45:1 / 6.80:1 |
| danger-soft | #FBE5E4 | #38191A | 0.939 0.024 21 | Broken badge fill, danger callout |  |

## Typography

- Families: system grotesque for headings and body, so every machine renders the same stack without a webfont; code and metadata use the system monospace stack.
- Scale: 1.25 from a 16px body (T6), 14px for dense rows (T4), weights 400 and 600 only. Headings stay at 20px or more and never set figures; dates and counts use `tabular-nums`.

| Role | Size | Weight | Line height | Tracking | Use |
|---|---|---|---|---|---|
| display | 31 to 49px, `clamp(1.9375rem, 1.2rem + 2.6vw, 3.0625rem)` | 600 | 1.08 | -0.02em | Home title |
| heading-1 | 31px | 600 | 1.15 | 0em | Page titles |
| heading-2 | 25px | 600 | 1.2 | 0em | Sections |
| heading-3 | 20px | 600 | 1.25 | 0em | Nav title and card titles |
| body | 16px | 400 | 1.55 | 0em | Prose, search input |
| body-sm | 14px | 400 | 1.45 | 0em | Descriptions, slots, legend, facts, tables |
| label | 14px | 600 | 1.3 | 0em | Row names, badges, buttons, nav, table headers |
| code | 14px | 400 | 1.5 | 0em | Code, licence class in the facts panel |

## Layout and spacing

- Scale: 4 to 48px (L1); gaps between groups at least twice the gaps inside one.
- Frame: VitePress nav, sidebar and content. Prose at `max-width: 68ch` (T5); rows and legends span the content width.
- Home: a hero band with the title, lede and the two ways in, a figures strip derived from the catalog, the five latest rows, task-based topic links, the hubs as a numbered contents list, and installation commands for compatible agents and Claude Code; the README has its own `/readme` route. Topics index: cards in `repeat(auto-fill, minmax(16rem, 1fr))`. Site index: labelled search field, live count, legend and rows, with 50 initially shown and more revealed on demand. Hubs: "All sources" as rows, no table of contents; hubs with more than 50 sources use the same live filter and groups of 50 as the site index. Site pages: the seven sections beside a 280px facts rail.
- Density: rows at least 48px with 12px padding; buttons 32px, 44px on coarse pointers (L2); search field 40px.

## Elevation and depth

- Strategy: borders (C8), no shadows; the VitePress shadow variables are `none`. Panels use `surface`; cards, the search field and buttons use `surface-raised` with a 1px edge.

## Shapes

- `sm` 4px on badges and inline code; `md` 6px on the search field, buttons, code blocks, legend and facts panel; `lg` 10px on topic cards; `pill` unused. Rows are square.

## Components

| Component | Tokens | States |
|---|---|---|
| Link | `link`, underline offset 0.15em | `link-hover`; focus ring; external links open in a new tab, no icon |
| Nav | `nav`; title in heading-3; Topics, Sites, DESIGN.md; GitHub icon; local search | Current: 2px `{colors.accent}` bar under the label; hover underline |
| Sidebar | `{colors.surface}` | Current: accent indicator; one named disclosure per group with `aria-expanded` |
| Search field | `search-field`, `border-control` edge, magnifier, visible label | Filters live; Clear with a value; query in `?q=`; empty state names the query and offers to clear |
| Result count | body-sm, `role="status"`, under the field | "Showing N of M sites" or "Showing N of M matches" |
| Button | `button`, `border-control` edge | `button-hover`; press `--scale-press` |
| Home paths | `bg`, `border`, `accent`, `text-muted`; two columns above 36rem | Whole links; hover uses `surface`; one column below 36rem |
| Home guide | `border`, `accent`, `text-muted`; rule-separated rows | Task links lead to topic hubs |
| Cover figures | `border`, `text-muted`; a `dl` between two rules, two columns below 52rem and four above | Values derived from the catalog, never typed |
| Home hero | `surface`, `accent`; rings in `border-control` at 50%, faded before the links; station hidden under 64rem | Title, lede and two ways in on a tinted band; the only filled surface on the page |
| Hub band | `surface`, `accent` | Every hub and index opens with its title and scope on the same band; the station mark sits at the right |
| Latest reviews | The same legend, header and gazetteer row as every list | Five most recent pages, newest first |
| Topic contents | `border`, `text-muted`, mono index numbers, `surface` hover | Ordered as the hubs are numbered, count right-aligned; two columns from 1024px |
| Gazetteer header | `{colors.surface}`, `{colors.text-muted}`, bottom `border`, label type | Visible with fixed columns from 52rem; hidden below |
| Gazetteer row | `gazetteer-row`, bottom `border`, name in label, muted description, four slots | `gazetteer-row-hover` (M9); stale and broken rows add a badge |
| Legend | `legend`, above each list | Explains the three licence glyphs |
| Badge | `badge-ship`, `badge-conditional`, `badge-look-only`, `badge-broken`, glyph plus word | Static; the licence class is screen-reader text |
| Topic card | `card`, 1px `border`; title, description, site count | One link; hover edge `border-control` |
| Site facts | `{colors.surface}`, `{rounded.md}`; site, type, verdict, licence, agent channels, pricing, reviewed, note | Rail from 1280px, inline under the H1 below; compact label/value rows below 36rem |
| Code | `code-block`, `code-inline`; syntax colours flattened to `{colors.text}` | VitePress copy button |
| Prose table | `table-header` | Static |
| Callout | VitePress blocks: warning on `{colors.warning-soft}`, danger on `{colors.danger-soft}`, others on `{colors.surface}` | Static; unused so far |

- Long lists: reveal 50 rows per action, with Virtua window virtualization for pointer scrolling and measured, variable row heights. Tab navigation switches to the complete revealed list so every link stays reachable; those offscreen rows defer painting with `content-visibility: auto` and an initial 8rem block estimate. Small hubs retain their complete static lists.

- Icons: Phosphor Regular from `@phosphor-icons/core`, 16px, in an inline sprite: check, warning, eye, link-break, magnifying-glass.
- Out of scope: filter chips, a filter rail, sortable columns, a sticky table header, topic tags, tooltips.

## Motion

| Token | Value | Used for |
|---|---|---|
| `--ease-out` | cubic-bezier(0.23, 1, 0.32, 1) | Button press |
| `--dur-press` | 120ms | Button press |
| `--scale-press` | 0.97 | Button press |
| `--dur-hover` | 150ms | Link, nav, button and card colour |
| `--dur-row-out` | 100ms | Row highlight fade-out; it appears at 0ms |

- No orchestrated moment (M5); filtering and search results are instant (M8, M14).
- Reduced motion: the press scale runs only under `no-preference`; colour changes stay (M11).

## Accessibility

- Contrast: WCAG 2.2 AA in both themes, every declared pair recomputed by the repository check.
- Targets: 24px floor, row name and facts links included; buttons per L2.
- Focus ring: 2px solid `focus`, 2px offset; `Highlight` under forced colours.
- Structure: VitePress skip link, `lang="en"`, one `h1`, site sections as `h2` in fixed order. Badges pair a glyph with a word.
- Disclosure: each sidebar group has one keyboard control, named for its section, exposing `aria-expanded` and `aria-controls`; a redundant caret is removed from the tab order.
- Exceptions: none.

## Responsive behaviour

| Breakpoint | What changes |
|---|---|
| Row container under 36rem | Slots wrap under the description, keys shown |
| Viewport under 36rem | Home paths stack; site facts use compact label/value rows |
| Viewport under 52rem | Cover figures take two columns |
| Viewport 52rem | Cover figures take four columns |
| Row container 36rem | Slots stack in a right-hand column |
| Row container 52rem | Header appears; slots take fixed columns (7, 8.5, 9, 6.5rem); keys become screen-reader text |
| Viewport under 768px | Nav links move behind the menu button |
| Viewport 960px | Sidebar stays open |
| Viewport 1024px | Topic contents take two columns |
| Viewport 1280px | Facts rail appears; below it the facts sit under the H1 |

Test at 320, 390, 768 and 1280px plus 200% zoom (L3), with no horizontal page scroll at 320px.

## Do's and Don'ts

- Do: keep the four slots in order on every list, with a legend above.
- Do: show a live count under the search field and keep the query in the URL.
- Do: search the full catalog, including visible licence badge labels, verdict, status and reviewed date, while revealing index rows in groups of 50.
- Do: write dates as `YYYY-MM-DD` and "at review" next to counts.
- Do: derive the cover figures and every count on a page from the catalog; a typed number goes stale.
- Don't: show screenshots, logos or favicons of reviewed sites, or put site lists in cards.
- Don't: use `accent` beyond links, the current-page mark and the sidebar indicator.
- Don't: add shadows, gradients or blur, or animate lists and rows.
- Don't: use weights other than 400 and 600, or em dashes in UI copy (T11).

## Overrides

| Row | Project value | Reason |
|---|---|---|
| C1 | Ink for the focus ring in light, champagne in dark | A brass ring would read as another link state |
| C5 | Light and dark from `prefers-color-scheme`, no toggle | Long sessions beside light and dark tools |

## References

| Atlas page (`sites/<slug>.md`) | Live example and visual evidence | What we adapted | Licence class | Reviewed |
|---|---|---|---|---|
| [sites/uswds.md](../sites/uswds.md) | https://designsystem.digital.gov/components/overview/, desktop and 375px, 2026-09-27 | Live count under the filter, underlined titles | mixed; ideas only | 2026-09-26 |
| [sites/nacelle.md](../sites/nacelle.md) | https://dotcolon.net/fonts/nacelle/, desktop, 2026-09-27 | Narrow facts rail | open-source-permissive | 2026-09-27 |
| [sites/montagu-slab.md](../sites/montagu-slab.md) | https://fonts.floriankarsten.com/montagu-slab, desktop, 2026-09-27 | Headings with optical sizing, no figures | open-source-permissive | 2026-09-27 |
| [sites/ramps.md](../sites/ramps.md) | none, tool | A ratio beside every colour, recomputed | open-source-permissive | 2026-09-25 |
| [sites/phosphor.md](../sites/phosphor.md) | none, icon library | One set, one weight | open-source-permissive | 2026-09-25 |

## Agent guide

- New colour: add it to the front matter, both themes in `style.css` and the Colors table with OKLCH and pairs, then run the check.
- New state: a suffixed component such as `button-hover`. New motion value: an Overrides row naming the token.
- Example requests: "Add a 'New this month' badge." "Review the site index at 320px and 1280px in both themes."
- Known gaps: prose tables and code blocks keep VitePress padding; no chart palette, syntax colours, print styles or right-to-left test.

## Provenance

- Date: 2026-11-11.
- Read: `site/.vitepress/`, the design-atlas-ui references and the five atlas pages above.
- Measured: contrast ratios and OKLCH values, computed from the hex values by the check.
- Inferred: none; layout values are read from `style.css` and VitePress, not measured in a browser.
- Unverified: system font metrics on Windows and Android; the Ramps and Phosphor sites.
