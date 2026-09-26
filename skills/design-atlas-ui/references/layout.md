# Layout

Composition per surface, spacing and alignment, responsive rules, the states every view needs, and what a redesign must preserve. Spacing scale, target sizes, test widths, radius, content-shaped layouts, icons and depth are rows L1 to L6 and C8 in `resolved-conflicts.md`.

## Contents

- [Marketing surfaces](#marketing-surfaces)
- [Product surfaces](#product-surfaces)
- [Reading surfaces](#reading-surfaces)
- [Group, align, order](#group-align-order)
- [Responsive rules](#responsive-rules)
- [States](#states)
- [Surfaces and radius](#surfaces-and-radius)
- [Redesigns preserve](#redesigns-preserve)
- [Before you finish](#before-you-finish)

## Marketing surfaces

Choose the structure before the styling. Swapping colours on the default section order changes nothing a visitor notices.

1. List the facts the page must carry, from PRODUCT.md or the brief. Each fact appears once.
2. Give each section one job: show the product, prove a claim, explain a process, compare options, answer an objection or ask for the action.
3. Order sections by the visitor's questions, not by the default order in `direction.md`.
4. Vary the composition between neighbours. No two adjacent sections share the same layout, and a full-width moment breaks up runs of columns.
5. Cut any section that exists only because landing pages usually have one.

First viewport:

- One headline of at most two lines at 1280px, saying one concrete thing about this product.
- One supporting sentence, one primary action and at most one secondary action.
- The product, its output or the subject itself is visible. An abstract glow is not the product.
- No logo strip, rating or statistic unless it is real (`content.md`).

## Product surfaces

Name the screen's job and the one decision the user makes on it, then build the hierarchy around that decision.

- The work surface is the loudest thing on screen. Navigation and chrome step back once the user has arrived.
- Put status, freshness and the next action where the eye lands first. A failing job list outranks a row of totals.
- Use layout, not boxes. A card is justified when the card itself is the thing you click, drag or select.
- Choose table columns from the decision the user makes, with the deciding field early. The row menu holds only actions that exist.
- Keep header actions in the same slot across comparable views.
- Control heights sit on the 4px grid: 32, 36, 40 or 44px, one height per density level.
- Keep a documented z-index scale: base, sticky, dropdown, overlay, modal and toast.

## Reading surfaces

- Hold the measure from T5 and let the text column set the layout.
- Put labelled metadata near the title: "Updated 12 May 2026", not a bare date chip.
- Add a table of contents only for long documents. On phones it becomes a plain list.
- Give anchored headings `scroll-margin-top` equal to any sticky header height.

## Group, align, order

- Group with space first, background second and lines last. The gap between groups is at least twice the gap inside one (L1).
- Choose alignment edges and keep to them. Every stray edge reads as noise.
- Put the most important content at the top and the leading edge.
- Use logical properties (`margin-inline-start`, `padding-inline-end`) so the layout mirrors for right-to-left languages.
- Give every control a shape, border or fixed zone, so it never looks like static text.

## Responsive rules

- Break where the content stops fitting, not at device presets. Record the real breakpoints in DESIGN.md.
- Prefer container queries for components that appear in several widths.
- Grid tracks use `minmax(0, 1fr)` so long content cannot force overflow.
- Flex and grid children holding text get `min-width: 0`.
- Set `overflow-x: clip` on `html` and `body` only after fixing the overflow's cause. It hides the symptom and, unlike `hidden`, keeps sticky positioning working.
- Controls and text stay inside `env(safe-area-inset-*)`. Backgrounds and media may bleed to the edges.
- Sticky headers and footers must not cover the focused element: use `scroll-padding-top` and `scroll-padding-bottom` on the scroller.
- Hover-only functionality does not exist on touch. Every hover-revealed action is also visible on `:focus-within` and under `(hover: none)`.
- Clickable text never wraps onto two lines at supported widths. Shorten the label or let the control grow.

## States

| State | What it must say or do |
|---|---|
| Loading | What is loading. Reserve the final size so nothing shifts when data arrives. |
| Empty, first run | What this place is and the one action that fills it |
| Empty, filtered | The filter or query that emptied it and a way to clear it |
| Error | What failed, what the user can do, and a retry that actually retries |
| Disabled | Why it is unavailable, beside the control or on focus |
| Permission denied | Who can grant access, or how to ask |
| Partial or stale data | How old the data is, and a way to refresh |

## Surfaces and radius

- Nested radius: outer radius equals inner radius plus the padding between them (L4).
- Use one depth strategy per product (C8). In light themes a layered ring works well:

```css
.panel {
  box-shadow:
    0 0 0 1px oklch(0 0 0 / 0.06),
    0 1px 2px -1px oklch(0 0 0 / 0.06),
    0 2px 4px oklch(0 0 0 / 0.04);
}
```

- Images get a 1px inside outline at 10% black, or 10% white in dark themes (C2): `outline: 1px solid oklch(0 0 0 / 0.1); outline-offset: -1px`.
- Dividers, table rules and input borders stay as borders. They describe structure, not depth.

## Redesigns preserve

A redesign changes presentation, not contracts. Keep these unless the user names them, and list them in the report:

- URLs, slugs and anchor IDs.
- Navigation labels and their order.
- Form field `name` attributes, input types and validation rules.
- The wordmark, logo files and legal copy.
- Analytics and test hooks: `data-*` attributes, IDs and event names.
- Content the user wrote, including its punctuation.

Capture the current page at every test width before editing, so the comparison is honest.

## Before you finish

| Detect | Fix |
|---|---|
| Two adjacent sections with the same layout | Change one composition, or merge them |
| A section restating facts another section already said | Cut it |
| Stat cards above the content the user acts on | Move the actionable content first |
| Cards nested inside cards | Flatten to layout |
| Horizontal scroll at 320px | Find the overflowing element and fix it, starting with `min-width: 0` |
| A fixed `height` on a text container | `min-height`, or let it grow |
| `margin-left` or `padding-right` in a layout that must mirror | Logical properties |
| A view with no empty, loading or error state | Add the states from the table above |
| A preserved item changed without the user asking | Restore it |
