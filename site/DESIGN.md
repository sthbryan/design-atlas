---
version: alpha
name: Design Atlas
description: Visual identity for the Design Atlas website, a reference wiki of reviewed design sites that designers, developers and coding agents scan, filter and read.
colors:
  bg: "#F6FAF8"
  surface: "#ECF3EF"
  surface-raised: "#FAFEFC"
  border: "#D7DFDB"
  border-control: "#79837E"
  text: "#18231E"
  text-muted: "#525E58"
  accent: "#974E0C"
  accent-strong: "#723D12"
  accent-soft: "#FAE5D7"
  on-accent: "#FDF9F6"
  focus: "#1762B6"
  success: "#2D693D"
  success-soft: "#DFF3E2"
  warning: "#7C6009"
  warning-soft: "#F7ECCF"
  danger: "#AD3138"
  danger-soft: "#FDE7E6"
typography:
  display:
    fontFamily: Montagu Slab
    fontSize: 49px
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -0.02em
  heading-1:
    fontFamily: Montagu Slab
    fontSize: 31px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: 0em
  heading-2:
    fontFamily: Montagu Slab
    fontSize: 25px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0em
  heading-3:
    fontFamily: Montagu Slab
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0em
  body:
    fontFamily: Nacelle
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  body-sm:
    fontFamily: Nacelle
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0em
  label:
    fontFamily: Nacelle
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
  4xl: 64px
  5xl: 96px
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
  nav-link-current:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
  search-field:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    height: 40px
    padding: 0px 12px
  filter-chip:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    height: 32px
    padding: 0px 12px
  filter-chip-hover:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.text}"
  filter-chip-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
  table-header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-muted}"
    typography: "{typography.label}"
    padding: 8px 12px
  table-row:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    typography: "{typography.body-sm}"
    padding: 12px
  table-row-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
  tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 2px 8px
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
  callout-licence:
    backgroundColor: "{colors.warning-soft}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  callout-note:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  legend:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 8px 12px
---

# Design Atlas design system

The visual identity for the published Design Atlas website: the home page, the topic hubs, the site index and the site pages built from this repository's Markdown. Nothing is built yet, so every value here is a decision, not a measurement of a rendered page.

## Overview

- Surface: reading, with product density on the index views. People come to look something up, scan a long list against a few criteria and then read one page.
- Audience and job: designers, developers and coding agents choosing which of about 400 reviewed references to open for a task, and checking its licence and agent channels before they do. Mostly desktop, sometimes a phone, in either theme.
- Subject world: the apparatus at the back of a printed atlas, not its maps. The gazetteer index with one line per place, the legend that explains every symbol, the survey date on each sheet, and the contour brown and water blue of the linework.
- Signature element: the gazetteer row. Every site is one line with its name and description, then the same four legend slots in the same order on every list: verdict, licence class, agent channels and reviewed date. A one-line legend above each list explains the glyphs used in those slots.
- Will not: card grids of site screenshots (the repository forbids images of reviewed sites anyway), a hero with a gradient or glow, a purple or indigo accent, licence signals carried by colour alone, and animation on filtering, sorting or rows.

### Default it replaces

The default plan for a reference directory: a centred hero with a big search box, a grid of screenshot cards with a heart icon, and a docs-style page with left nav, centred prose, a right-hand table of contents and a violet accent.

| Axis | Default | This system | Same? |
|---|---|---|---|
| Page structure | Hero search, card grid, docs three-column page | Gazetteer list with a filter rail; site pages with a legend rail on the right | Partly: the site page keeps a right rail, but it holds the site's facts, not a table of contents |
| Type | One geometric sans everywhere, mono headings | Montagu Slab headings over Nacelle text and UI | No |
| Palette | White and slate with violet | Grey-green paper with contour sienna, water blue kept for focus | No |
| Signature element | None | Gazetteer row and its legend | No |
| Imagery | Screenshots and thumbnails | None; type, rules and glyphs only | No (the brief forbids images) |
| Motion | Fade-up on every section, hover lift on cards | Colour changes only, and an instant row highlight | No |

One axis partly matches, below the three-axis limit.

## Colors

The neutrals lean toward hue 165 at OKLCH chroma 0.004 to 0.018, one cool temperature across the site (C3). The accent is contour sienna at hue 55. Water blue at hue 255 is used only for the focus ring. Status hues sit at least 30° from the accent: success at 150, warning at 88 and danger at 22. In the light theme, panels sit one step darker than the page; in the dark theme, one step lighter (C6).

| Token | Light | Dark | OKLCH (light) | Job | Pairs (measured) |
|---|---|---|---|---|---|
| bg | #F6FAF8 | #121815 | 0.982 0.006 165 | Page background | |
| surface | #ECF3EF | #191F1C | 0.957 0.009 165 | Panels one step from the page: filter rail, table header, legend, code | |
| surface-raised | #FAFEFC | #202724 | 0.993 0.004 165 | Cards, search field, chips, popovers | |
| border | #D7DFDB | #313935 | 0.895 0.010 165 | Row rules and card edges; decorative only | |
| border-control | #79837E | #6D7772 | 0.600 0.014 165 | Edges of the search field, chips and checkboxes | ui on bg 3.72:1 / 3.88:1; ui on surface 3.48:1 / 3.61:1; ui on surface-raised 3.85:1 / 3.29:1 |
| text | #18231E | #E5EDE9 | 0.245 0.018 165 | Body copy, titles, row names | text on bg 15.37:1 / 15.10:1; text on surface 14.36:1 / 14.05:1; text on surface-raised 15.91:1 / 12.80:1; text on accent-soft 13.29:1 / 11.64:1; text on success-soft 13.91:1 / 11.83:1; text on warning-soft 13.76:1 / 11.69:1; text on danger-soft 13.67:1 / 11.89:1 |
| text-muted | #525E58 | #A5AFAA | 0.470 0.018 165 | Row descriptions, metadata, captions | text on bg 6.43:1 / 7.98:1; text on surface 6.01:1 / 7.43:1; text on surface-raised 6.66:1 / 6.76:1 |
| accent | #974E0C | #E6A375 | 0.505 0.120 55 | Links, the selected chip fill, the current-page mark | text on bg 5.85:1 / 8.45:1; text on surface 5.46:1 / 7.86:1; text on surface-raised 6.05:1 / 7.16:1 |
| accent-strong | #723D12 | #EFC4A8 | 0.420 0.092 55 | Link hover, text on accent-soft | text on bg 8.34:1 / 11.25:1; text on accent-soft 7.21:1 / 8.67:1 |
| accent-soft | #FAE5D7 | #3F2717 | 0.935 0.030 55 | Chip hover fill, search-match highlight | |
| on-accent | #FDF9F6 | #121815 | 0.985 0.006 55 | Text on a selected chip | text on accent 5.88:1 / 8.45:1 |
| focus | #1762B6 | #81B4F6 | 0.500 0.150 255 | Focus ring only | ui on bg 5.77:1 / 8.39:1; ui on surface 5.39:1 / 7.81:1; ui on surface-raised 5.97:1 / 7.11:1 |
| success | #2D693D | #85CF95 | 0.470 0.095 150 | Ship licence class | text on bg 6.23:1 / 9.73:1; text on success-soft 5.64:1 / 7.63:1 |
| success-soft | #DFF3E2 | #1B301F | 0.945 0.030 150 | Ship badge background | |
| warning | #7C6009 | #DDBD6E | 0.505 0.100 88 | Conditional licence class, stale status | text on bg 5.64:1 / 9.92:1; text on warning-soft 5.05:1 / 7.68:1 |
| warning-soft | #F7ECCF | #352B14 | 0.945 0.040 90 | Conditional and stale badges, licence callouts | |
| danger | #AD3138 | #F18B88 | 0.505 0.160 22 | Broken status, error text | text on bg 6.09:1 / 7.53:1; text on danger-soft 5.42:1 / 5.93:1 |
| danger-soft | #FDE7E6 | #422221 | 0.945 0.024 22 | Broken badge and error callout background | |

- `border` is decorative and stays below 3:1 on purpose. Nothing depends on it: rows stay readable without their rules, and every control edge uses `border-control`.
- Licence classes map to status colours: ship is `success`, conditional is `warning` and look-only is `text-muted`. Each badge also carries its own glyph and word.
- Chart colours are not defined. The atlas has no charts yet.

## Typography

- Families: Montagu Slab for headings (SIL Open Font Licence 1.1, per [its atlas page](../sites/montagu-slab.md) and the live family page; its optical-size axis moves from a sturdy, low-contrast cut near 20px to the sharper display cut at large sizes, which suits a reference book voice without becoming the high-contrast editorial serif). Nacelle for text and UI (SIL Open Font Licence 1.1, per [its atlas page](../sites/nacelle.md) and the live specimen; a neo-grotesque drawn for legible, distinguishable UI lettering, with Regular and SemiBold covering every role here). The system monospace stack for code and commands, because code blocks are copy targets and a third web font would add weight for no gain.
- Neither face is on the T1 reflex list.
- Scale ratio: 1.25 from a 16px body (T6, reading surface). `body-sm` and `label` sit at 14px for dense rows and chips (T4).
- Weights: 400 and 600 only.
- Headings use `font-optical-sizing: auto`. Montagu Slab never sets text below 20px.
- Figures: Montagu Slab lists lining and proportional figures but no tabular figures on its family page, so counts and dates never use it. Rows set dates and counts in Nacelle with `font-variant-numeric: tabular-nums`; whether Nacelle ships tabular figures is not verified (see Agent guide).

| Role | Size | Weight | Line height | Tracking | Use |
|---|---|---|---|---|---|
| display | 49px (fluid from 31px) | 600 | 1.08 | −0.02em | The home page title only |
| heading-1 | 31px | 600 | 1.15 | 0 | Page titles: a site, a topic |
| heading-2 | 25px | 600 | 1.2 | 0 | Page sections such as "When to open it" |
| heading-3 | 20px | 600 | 1.25 | 0 | Hub card titles, sub-sections |
| body | 16px | 400 | 1.55 | 0 | Prose, search input, callouts |
| body-sm | 14px | 400 | 1.45 | 0 | Row descriptions, legend, metadata |
| label | 14px | 600 | 1.3 | 0 | Row names, chips, badges, table headers, nav |
| code | 14px | 400 | 1.5 | 0 | Code blocks, inline code, slugs |

The display size is `clamp(1.9375rem, 1.2rem + 2.6vw, 3.0625rem)`, 31px at 320px wide and 49px from about 1150px.

## Layout and spacing

- Scale: 4, 8, 12, 16, 24, 32, 48, 64 and 96px (L1), named `xs` to `5xl`. The gap between groups is at least twice the gap inside one.
- Containers: the page is at most 1200px wide with 16px side padding under 768px and 24px above. Prose runs at `max-width: 68ch` (T5).
- Index views (the site list, a topic's sources): a 256px filter rail on the left and the gazetteer list beside it. A search field with a visible label sits above the list, and the live result count ("128 sites") sits directly under it.
- Site pages: the prose column and a 280px legend rail on the right holding URL, type, verdict, licence class and text, agent channels, pricing and reviewed date. The seven section headings stay in their fixed order.
- Home page: the display title, one sentence, the search field, then the topic hubs as cards in a grid of `repeat(auto-fill, minmax(16rem, 1fr))`.
- Density: control height 32px with a fine pointer and 44px with a coarse pointer (L2). Gazetteer rows are at least 48px tall with 12px vertical padding. The sticky table header is 40px.
- Z-index scale: base 0, sticky header 10, popover 20, overlay 30, toast 40.

## Elevation and depth

- Strategy: borders (C8). No shadows in either theme.
- Light: panels use `surface`, one step darker than the page. Cards, the search field, chips and popovers use `surface-raised` with a 1px `border` edge; interactive edges use `border-control`.
- Dark: the same tokens, where each higher surface is lighter (`bg`, then `surface`, then `surface-raised`) and the 1px `border` edge plays the part of the C6 ring.

## Shapes

| Step | Value | Used on |
|---|---|---|
| sm | 4px | Badges, tags, inline code |
| md | 6px | Search field, code blocks, callouts, legend, popovers |
| lg | 10px | Topic cards on the home page |
| pill | 999px | Filter chips only (L4) |

Rows and table headers have square corners, since they are lines in a list, not boxes.

## Components

| Component | Tokens | States covered |
|---|---|---|
| Link | `{colors.accent}` text, underline in prose with `text-underline-offset: 0.15em`; hover `{colors.accent-strong}` | Default, hover, focus-visible, visited (same colour), external (trailing arrow glyph with "opens in new tab" only when it does) |
| Nav | 56px bar on `{colors.bg}` with a bottom `border`; wordmark in heading-3, then Topics, Sites, DESIGN.md and GitHub in label | Current page: text stays `{colors.text}` with a 2px `{colors.accent}` bar under the label and `aria-current="page"`; hover underline; focus ring; under 768px the links move behind a Menu button |
| Search field | `{colors.surface-raised}`, `border-control` edge, `{rounded.md}`, body text, leading search glyph, visible label | Empty with example text, typing, has value with a Clear button, focus ring, no results (says which query found nothing and offers to clear filters) |
| Filter chip | `{colors.surface-raised}`, `border-control` edge, `{rounded.pill}`, label text with the count at review in tabular figures | Hover `{colors.accent-soft}`, selected `{colors.accent}` with `{colors.on-accent}` and a check glyph, focus ring, disabled when a count is 0 (with the reason in its accessible name), pressed per M1 |
| Gazetteer row (table row) | `{colors.bg}`, bottom `border`, name in label linked to the page, description in body-sm `{colors.text-muted}`, then the four legend slots | Hover `{colors.surface}` (M9), focus-within ring on the name link, stale and broken rows keep their place and add a badge |
| Table header | `{colors.surface}`, label `{colors.text-muted}`, sticky under the nav | Sortable columns (name, reviewed) as buttons with `aria-sort`; sorted column shows an arrow glyph |
| Tag | `{colors.surface}`, label `{colors.text-muted}`, `{rounded.sm}` | Topic tags link to their hub: hover underline, focus ring |
| Badge | Licence and status: `badge-ship`, `badge-conditional`, `badge-look-only`, `badge-broken`, each glyph plus word | Static; never clickable |
| Card | `{colors.surface-raised}`, 1px `border`, `{rounded.lg}`, 16px padding; hub title in heading-3, description, site count at review | The whole card is one link: hover border becomes `border-control`, focus ring on the card |
| Code block | `{colors.surface}`, code text, `{rounded.md}`, horizontal scroll inside the block only | Copy button (quiet, glyph plus "Copy") that announces "Copied" in a polite status region; no syntax colours |
| Callout | `callout-licence` on `{colors.warning-soft}` with a warning glyph and a bold "Licence" label; `callout-note` on `{colors.surface}` | Static; never a side stripe |
| Legend | `{colors.surface}`, body-sm `{colors.text-muted}`, one line above each list | Wraps onto two lines on phones; lists every glyph the rows below use |

Icons come from one set, Phosphor, in the Regular weight at 16px beside 14px and 16px text. The atlas uses only a handful: check (ship), warning (conditional, stale), eye (look only), broken link (broken), magnifier, menu, arrow, copy.

## Motion

| Token | Value | Used for |
|---|---|---|
| `--ease-out` | cubic-bezier(0.23, 1, 0.32, 1) | Menu and popover enter and exit |
| `--dur-press` | 120ms | Chip and button press |
| `--scale-press` | 0.97 | Chip and button press |
| `--dur-hover` | 150ms | Link, chip and card colour changes |
| `--dur-row-out` | 100ms | Row highlight fading out; it appears at 0ms |
| `--dur-menu` | 200ms | Menu button panel and sort popover enter |
| `--dur-menu-exit` | 140ms | The same, exiting |
| `--scale-enter` | 0.96 | Popover enter scale, from the trigger |
| `--dur-tooltip` | 150ms | Glyph explanations in the legend and badges |
| `--tooltip-delay` | 500ms | Pointer hover before a tooltip; keyboard focus shows it at once |
| `--tooltip-skip-window` | 300ms | Later tooltips open without delay |
| `--dur-reduced` | 150ms | The only fade allowed under reduced motion |

- Orchestrated moment: none (M5). The atlas is opened many times a day, and its lists are filtered constantly (M8, M14).
- Filtering, sorting, search results and theme changes switch instantly.
- Reduced motion: no scale or travel; popovers fade over `--dur-reduced`, and every state change stays visible (M11).

## Accessibility

- Contrast target: WCAG 2.2 AA in both themes, computed for every pair in the Colors table by `npm run check`.
- Targets: 24px floor; chips and buttons are 32px with a fine pointer and 44px under `(pointer: coarse)` (L2). Row name links have a `min-height` of 24px.
- Focus ring: 2px solid `focus`, 2px offset, drawn instantly; `Highlight` under forced colours.
- Structure: a "Skip to content" link first, one `h1` per page, the site-page sections as `h2` in their fixed order, and `lang="en"` on the page.
- Filters: chips are toggle buttons with `aria-pressed`, grouped under a visible facet heading. The result count lives in a `role="status"` region, so each change is announced once.
- Meaning never rides on colour: every licence and status badge has a glyph and a word, and verdicts are words.
- Exceptions: none.

## Responsive behaviour

| Breakpoint | What changes |
|---|---|
| Below 768px | One column. The filter rail becomes a "Filters" disclosure above the list with the count beside it. Legend slots wrap under the description in the same order. Nav links move behind the Menu button. The site-page legend rail sits above the first section. |
| 768px to 1119px | The filter rail becomes a wrapping chip bar above the list. Rows keep name and description on the left and stack the four slots on the right. The site-page legend rail still sits above the prose. |
| 1120px and up | Filter rail on the left, gazetteer rows with the four slots in fixed columns, site pages with the legend rail on the right. |

Test at 320, 390, 768 and 1280px, plus 200% zoom (L3). No horizontal page scroll at 320px; only code blocks and wide tables scroll inside themselves.

## Do's and Don'ts

- Do: show the four legend slots in the same order (verdict, licence class, agent channels, reviewed) on every list.
- Do: put a live result count directly under every search field or filter bar.
- Do: keep search and filter state in the URL query string, so a filtered list can be linked and an agent can build the link.
- Do: write dates as `YYYY-MM-DD` next to a "Reviewed" label, and write "at review" next to every count.
- Do: give every licence and status badge a glyph and a word.
- Don't: show screenshots, logos, favicons or thumbnails of reviewed sites.
- Don't: lay site lists out as cards. Cards are only for the topic hubs on the home page.
- Don't: use `accent` for anything other than links, the selected chip fill and the current-page mark. At most one filled accent element type per view: selected chips.
- Don't: add shadows, gradients or blur.
- Don't: animate filtering, sorting, search results or rows entering.
- Don't: set Montagu Slab below 20px or Nacelle in headings, and don't use weights other than 400 and 600.
- Don't: write em dashes in UI copy (T11).

## Overrides

| Row | Project value | Reason |
|---|---|---|
| C1 | A second hue, water blue, for the focus ring only | Selected chips are filled with the sienna accent, so a sienna ring would disappear against them; blue keeps focus distinct from selection |
| C5 | A reading surface that ships light and dark, following `prefers-color-scheme` | People read the atlas in long sessions beside both light design tools and dark editors |

## References

| Atlas page (`sites/<slug>.md`) | Live example and visual evidence | What we adapted | Licence class | Reviewed |
|---|---|---|---|---|
| [sites/uswds.md](../sites/uswds.md) | https://designsystem.digital.gov/components/overview/ at desktop width and 375px on 2026-09-27: a persistent left index of every component, a grey filter panel with a live "components found" count under the field, underlined link titles; at 375px the index folds into a Menu button and the two-column cards squeeze each description to a few words a line | The live result count under the filter, a persistent index rail, underlined link titles. Not carried over: the government banner and identity, the blue palette, the card grid | mixed; ideas only, nothing copied | 2026-09-26 |
| [sites/nacelle.md](../sites/nacelle.md) | https://dotcolon.net/fonts/nacelle/ at desktop width on 2026-09-27: a narrow fixed rail with name, styles, download and licence beside one huge word sample | Nacelle as the text and UI face; the narrow rail of facts became the site-page legend rail | open-source-permissive (font under OFL 1.1) | 2026-09-27 |
| [sites/montagu-slab.md](../sites/montagu-slab.md) | https://fonts.floriankarsten.com/montagu-slab at desktop width on 2026-09-27: the optical-size axis runs from a low-contrast, large x-height text cut to a sharp display cut; the feature list names lining and proportional figures, with no tabular figures | Montagu Slab for headings with optical sizing on, and never for counts or dates | open-source-permissive (font under OFL 1.1) | 2026-09-27 |
| [sites/ramps.md](../sites/ramps.md) | none, tool; not opened | A measured ratio written beside every colour token and recomputed by a checker | open-source-permissive tool; no asset shipped | 2026-09-25 |
| [sites/phosphor.md](../sites/phosphor.md) | none, icon library; not opened | One icon set in one weight, Regular | open-source-permissive (MIT) | 2026-09-25 |

## Agent guide

- To add a component: reuse existing tokens first. If it needs a new colour, add the token to the front matter and a row to the Colors table with its dark value, OKLCH source and every pair where it is the foreground, then add the component and run `npm run check`, which recomputes every ratio.
- To add a state: add a component with a suffix (`filter-chip-selected`), never a raw value.
- To change a motion value: change it here and add an Overrides row naming the token, or the check fails.
- Example requests: "Build the site index page from DESIGN.md with the gazetteer row and the filter rail." "Add a 'New this month' badge that fits the badge family." "Review the topic hub page against DESIGN.md at 320px and 1280px in both themes."
- Known gaps: whether Nacelle has tabular figures and a true italic for every weight is not verified; if it lacks `tnum`, set counts and dates in the `code` role. No chart palette, no syntax-highlighting colours, no print styles and no right-to-left test yet.

## Provenance

- Written: 2026-09-27 by a Claude agent working in this repository, with the design-atlas-ui workflow.
- Read: `README.md`, `AGENTS.md`, `CONTRIBUTING.md`, `topics/design-md.md`, the design-atlas-ui references (format, direction, resolved conflicts, typography, colour, layout, motion, accessibility) and the five atlas pages above.
- Measured: every contrast ratio and OKLCH value in the Colors table, computed from the hex values by `npm run check`.
- Inferred: control heights, row heights, rail widths and breakpoints. No page is built yet, so none were measured from computed styles.
- Unverified: Nacelle's tabular figures and italic coverage; how Montagu Slab's optical sizing renders at 20px on Windows; the Ramps and Phosphor sites, which were not opened for this file.
