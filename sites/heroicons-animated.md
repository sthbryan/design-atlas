---
title: Heroicons Animated
description: 316 Heroicons outline icons with hover animations built on Motion, via shadcn registry, npm and llms.txt.
url: https://www.heroicons-animated.com
type: icon-library
formats: animated icon library · shadcn registry
topics: [icons, motion, components]
verdict: useful
agent: [llms-txt, registry]
pricing: free
licence: Free / MIT (GitHub Sponsors optional). The underlying Heroicons artwork by Tailwind Labs is also MIT
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [lucide-animated, morphicons, animated-icons, useanimations, shadcn-ui]
---
[← Atlas](../site/home.md) · Topics: [icons](../topics/icons.md), [motion](../topics/motion.md), [components](../topics/components.md)

# Heroicons Animated

## What it is

Heroicons Animated is an open-source set of 316 Heroicons that move when you hover them. It is made by Aniket Pawar (GitHub `Aniket-508/heroicons-animated`, about 190 stars, started January 2026) and carries a Vercel OSS Program badge. The site says it borrows the approach of Lucide Animated and credits it directly. Each icon is a React component built on Motion that wraps the 24px outline Heroicon (1.5 stroke) and gives it a short movement of its own: a beaker wobbles and shrinks slightly, a bell swings from side to side. You can copy a single component through the shadcn CLI or install npm packages for React, Vue and Svelte.

## When to open it

Open it when a product already uses Heroicons, often in Tailwind projects, and you want a few icons to react on hover in buttons, menus or empty states without redrawing them. The components reuse the original Heroicons paths, so animated and still icons can sit side by side.

## Most useful

- **shadcn registry**: `@heroicons-animated` is listed in the shadcn registry directory, so one command copies a single `.tsx` file you then own and can edit
- **npm packages**: `@heroicons-animated/react` (with `motion`), `@heroicons-animated/vue` (with `motion-v`) and `@heroicons-animated/svelte`
- **Imperative handle**: every component exposes `startAnimation` and `stopAnimation` on its ref, so a parent button or a state change can play the motion instead of hover
- **One icon per page**: each icon has its own preview page, and names follow Heroicons' kebab-case (`arrow-down-tray`, `chat-bubble-left-right`)

## Using it with agents

The site publishes an `llms.txt` that lists all 316 icon names, the install commands and the registry URL pattern (`/r/{icon-name}.json`). Give an agent that file and ask it to run `npx shadcn@latest add @heroicons-animated/<name>` for each icon it needs, checking names against the list. There is no MCP server or agent skill. Registry files import `cn` from `@/lib/utils`, so the project should already have shadcn set up.

## Watch out for

- The README lists packages for Solid, Angular, React Native, Preact, Astro and Flutter, but only React, Vue and Svelte were on npm when reviewed. Flutter installs from a git dependency
- Components render a `<div>` wrapper around the SVG. Hover is detected on the wrapper, the default `size` is 28, not 24, and props like `className` land on the div
- The SVG has no `aria-hidden` by default. Add it for decorative use, or give the parent control an accessible name
- Hover does not exist on touch screens. Trigger the ref methods from taps or state changes if the motion matters on mobile
- Only the 24px outline style is covered. There are no animated solid, 20px mini or 16px micro variants
- It is a young, single-maintainer project with modest npm use (about 1,400 React downloads a month)

## Reusable ideas

- Pair every animated icon with the exact static glyph it came from, so motion is an upgrade and never a redesign
- Expose play and stop on a ref, so the animation can follow the parent control instead of only the icon's own hover
- Give each icon a motion that matches its meaning (a bell rings, a beaker sloshes) rather than one generic bounce
- Publish icons through a registry so teams copy only the few they use

## Related

[Lucide Animated](lucide-animated.md), [morphicons](morphicons.md), [Animated Icons](animated-icons.md), [useAnimations](useanimations.md), [shadcn/ui](shadcn-ui.md)
