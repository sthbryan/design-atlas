[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [typography-and-styles](../topics/typography-and-styles.md), [components](../topics/components.md)

# Torph

- **URL:** https://torph.lochie.me
- **Type:** JS library
- **Topics:** motion, typography-and-styles, components
- **Pricing / licence:** Free / MIT
- **Reviewed:** 2026-09-25

## What it is

Torph is a text-morphing component by Lochie Axon. When a string changes, the characters shared by the old and new text slide to their new places, and only the characters that differ fade or scale in and out, so the label changes without a hard cut. It has no dependencies and ships one npm package with subpath imports for React (`torph/react`, as a component and a `useTextMorph` hook), Vue, Svelte 5 and plain JavaScript. The README credits Benji Taylor with the name and the method. When reviewed it was at 0.1.3, had about 1.4k GitHub stars and got roughly 177k npm downloads a week.

## When to open it

Open it for labels that change in place: button states ("Copy" to "Copied"), status lines ("Processing" to "Done"), live totals and editable values. It works best where the old and new strings share letters, because that is where the continuity shows.

## Most useful

- **One-line use**: wrap the text in `<TextMorph>` and it animates whenever its children change
- **Numbers by place value** (on by default): digits roll along the vertical axis, currency signs and separators travel with their places, and only the places that changed move. Pass a number and set `locale` and `decimals` to have it formatted for you
- **Caret-aware updates**: pass `cursorIndex` for inputs, so typing inserts a digit instead of renumbering the column
- **Spring easing**: pass `{ stiffness, damping, mass }` as `ease` and the duration is worked out from the spring
- **Options**: exit scaling, `disabled`, a debug overlay, and `respectReducedMotion` (on by default). The low-level `segmentText` and `diffSegments` helpers are exported too
- The site has examples, a playground and a showcase of production uses, including an integration with the Numora numeric-input library

## Using it with agents

No `llms.txt`, MCP or prompts. The API is small and is fully documented in the package README on GitHub. Point an agent at `github.com/lochie/torph` and name the strings that should morph.

## Watch out for

- Still 0.x; pin the version
- Place-value matching is right for values that change on their own. For fields someone is typing in, use `cursorIndex`, which exists only on the React component and the vanilla `update()` call
- Morphing only reads well between related strings. Two unrelated sentences just look like a busy crossfade

## Reusable ideas

- Keep shared characters still and animate only the difference
- Animate numbers by place so a total that ticks up does not reshuffle every digit
- Let symbols like `$` and `,` move with the digits they belong to
- Make reduced-motion support the default, not an opt-in

## Related

[NumberFlow](number-flow.md), [slot-text](textmotion.md), [CSS Text Effects](css-text-effects.md), [Motion Primitives](motion-primitives.md)
