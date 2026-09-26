[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md), [ux-patterns](../topics/ux-patterns.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# interior.dev

- **URL:** https://www.interior.dev
- **Type:** component library (shadcn registry)
- **Topics:** motion, components, ux-patterns, agents-and-prompts
- **Pricing / licence:** free, MIT / Open source (GitHub Sponsors optional)
- **Reviewed:** 2026-09-25

## What it is

interior.dev is a set of 54 animated React micro-interactions by the design engineer known as ozzy (GitHub `ddoemonn`), launched in July 2026 and named a 21st.dev "Library of the Month". It focuses on what happens right after a click: buttons that change label without resizing, skeletons that swap to content without layout shift, drags that can be abandoned cleanly. Components come in ten groups: action feedback, input, async, notification, overlay, navigation, scroll, data, gesture and content. Each is a single TypeScript file built with Motion and styled with Tailwind CSS. The repository had about 800 GitHub stars at review time.

## When to open it

When a product's basic controls work but feel cheap: a copy button that jumps, a spinner that outlasts the request, a modal without focus trapping, a list that jumps when rows reorder. Open it before building your own hold-to-confirm, OTP input, tag input, command palette, sortable table or swipe deck.

## Most useful

- **Headless hook plus styled example**: most files export a `useX` hook that owns the behaviour and a styled `X` built on it, so reskinning only means changing classes. Progress Bar and Segmented Control export only the component
- **Edge cases covered**: keyboard support is a full second path rather than an afterthought, gestures handle cancellation, space is reserved for every state, and with `prefers-reduced-motion` the information still arrives without the animation
- **Practical examples**: copy button, loading button, hold to confirm, like burst, press depth, inline validation, live activity, tooltip group, slider detents, reorder list, long press, logo marquee
- **Documented props and usage** on every docs page

## Using it with agents

It is well set up for agents. `/llms.txt` lists every component with a one-line purpose, `/llms-full.txt` (about 760 kB) includes the full source, and every component has a plain-text reference at `/reference/<name>` with install steps, usage and props. Components install with `npx shadcn@latest add @interior/<name>` (listed in the shadcn registry index) or from `https://www.interior.dev/r/<name>.json`, and the catalogue is at `/r/registry.json`.

## Watch out for

- React only, with `motion` as a runtime dependency; the styled examples assume Tailwind CSS
- The README mentions a DESIGN.md describing the design language, but no such file was in the public repository at review time
- A young project from a single maintainer

## Reusable ideas

- Lock a button's width before its label changes so the layout never shifts
- Delay the first tooltip in a group, then show the next ones instantly
- Put a hold-to-confirm gesture in front of destructive actions instead of a modal
- Show new items in a pill rather than pushing content while someone is reading
- Let slider detents snap to meaningful values

## Related

[Kinetics](kinetics.md), [MicroKit](microkit.md), [Motion Primitives](motion-primitives.md), [Rare UI](rareui.md), [Bencho](bencho.md)
