[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [navigation](../topics/navigation.md)

# Rare UI

- **URL:** https://rareui.com
- **Type:** component library (shadcn registry)
- **Topics:** components, motion, navigation
- **Pricing / licence:** free, sponsor-funded; code under "MIT + Commons Clause + Attribution" (commercial use allowed, reselling or redistributing the components is not, and shipped projects must show a visible credit link)
- **Reviewed:** 2026-09-25

## What it is

A small shadcn-compatible registry of unusual animated React components by Swami Malode, built with Next.js, TypeScript, Tailwind CSS and Motion. At review time it listed about 20 components grouped as Display, AI kit, Navigation, Inputs and Feedback, each shipped as a single file you own. The repository had roughly 1.4k GitHub stars.

## When to open it

When a portfolio, landing page or app needs one standout interactive piece rather than a full design system: a sidebar with a tactile active indicator, a playful OTP field, an AI voice orb, an odometer-style counter.

## Most useful

- **Navigation**: a spring-animated bounce sidebar, a sidebar with a dashed rail, a proximity sidebar whose items grow as the pointer approaches, a scroll-progress pill that opens into a section menu, and a gooey nav bar.
- **Inputs**: a gooey duration picker, an OTP input with rolling characters and a sliding caret, an inline delete-confirm button and a task list that strikes and reorders completed items.
- **AI kit**: a WebGL fluid orb, a dot-matrix orb with idle, listening and thinking states, and a grid-reveal image loader.
- **Display and feedback**: a fanning folder, a single-accent code block, gravity letters, a GitHub activity heatmap, a step player, an animated counter, an emoji reaction bar and a notification bell.

## Using it with agents

Components install with the shadcn CLI from the GitHub-namespaced registry (`npx shadcn@latest add swamimalode07/rare-ui/<name>`), and a registry index is served at `/r/registry.json`. An `llms.txt` lists every component with its description, install command, source link and dependencies, which makes it easy for an agent to pick and install the right piece.

## Watch out for

- The licence is not plain MIT: the LICENSE file requires a visible link to rareui.com in any shipped project, while `llms.txt` only says attribution is appreciated. Follow the stricter LICENSE.
- Some components pull extra dependencies (for example Vaul, flubber, figma-squircle or prism-react-renderer), so check the list before installing.
- The "Pricing" footer link returned a 404 at review time; the only paid offering is sponsorship.
- A small, young catalogue maintained by one person.

## Reusable ideas

- Let the active marker in a sidebar travel between items on a spring instead of jumping.
- Expand navigation items by pointer proximity to hint at interactivity before hover.
- Confirm destructive actions inside the button itself instead of opening a dialog.
- Turn a reading-progress indicator into a jump menu of sections on tap.
- Animate numeric changes on a rolling digit wheel so updates are noticeable but calm.

## Related

[motion-primitives](motion-primitives.md), [aceternity-ui](aceternity-ui.md), [magic-ui](magic-ui.md), [shadcn-ui](shadcn-ui.md), [libraries-dev-orbs](libraries-dev-orbs.md)
