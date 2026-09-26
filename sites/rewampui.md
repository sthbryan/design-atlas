---
title: RewampUI
description: About 75 animated React navbars, backgrounds, toggles and cursors with a copy CLI and per-component prompts; designs are admitted remixes.
url: https://www.rewampui.com
type: component-library
formats: copy-paste animated component library with its own CLI
topics: [components, motion, navigation]
verdict: niche
agent: [cli, prompts]
pricing: free
licence: Free. The `rewampui` CLI package is MIT; the repository (`palakonweb/Rewamp-UI`, about 170 GitHub stars at review) has no LICENSE file, so the component code itself has no stated licence
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [reactbits, aceternity-ui, magic-ui, skiper-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [navigation](../topics/navigation.md)

# RewampUI

## What it is

RewampUI is a one-person showcase of heavily animated React components by Palak Sharma (palakonweb on GitHub). The site is a Vite single-page app laid out like a dashboard: you pick a category, watch the live demo and copy the source. At review the registry held about 75 items across ten categories: animated backgrounds, buttons, text animations, toggles, cursors, navbars, search bars, sidebars, cards and "UI for AI" pieces such as orbs. The stack is React 19, Tailwind CSS 4, Framer Motion and three.js for the WebGL effects. The components are plain `.jsx` files rather than TypeScript, and the project is very active, with about 100 commits since March 2026.

## When to open it

Open it when you want one expressive, attention-grabbing element for a portfolio or landing page: a navbar that morphs, a toggle that turns into a day and night sky, a cursor trail or a shader-like background. It is less suited to product UI that needs forms, tables or strict accessibility.

## Most useful

- **Navbars**: about a dozen variants, including a radial menu, a curtain reveal, a magnetic pill, a liquid underline and a jelly-style indicator
- **Backgrounds**: particle waves, ripple and spotlight grids, aurora and silk effects, water caustics and a warp-speed tunnel
- **Toggles and buttons**: a glass orb switch, a landscape theme toggle, a slide-to-confirm control and a googly-eyes button
- **Cards and carousels**: an arch carousel with pendulum motion, a perspective flip deck and a wallet card that slides open
- **Per-component prompts**: many entries ship a short written brief that describes the motion and geometry, which can be copied next to the code

## Using it with agents

The CLI copies source into your project: `npx rewampui add <name>` (or `--all`), reading a custom JSON registry served from the GitHub repository. It is not a shadcn-format registry, so `shadcn add` will not work. There is no `llms.txt` (404 at review) and no MCP server. The copyable prompts are the most agent-friendly part: you can hand one to a coding model to rebuild the effect in your own stack.

## Watch out for

- The README and the in-app credits say none of the designs are original: each component is described as a study, remix or homage of other people's work, without per-component sources. Check the origin before shipping anything prominent
- Without a repository licence, reuse rights for the components are unclear even though the CLI is MIT
- Plain JavaScript files and WebGL effects mean extra work in strict TypeScript or low-power contexts
- The site renders only with JavaScript, so there is little a crawler or agent can read from the page itself

## Reusable ideas

- Keep a short natural-language brief with each animated component so it can be recreated in another framework
- Group showcase entries by the page region they fill (navbar, sidebar, background) instead of by primitive type
- Tie the theme toggle to a small illustrated scene so the state change feels physical

## Related

[React Bits](reactbits.md), [Aceternity UI](aceternity-ui.md), [Magic UI](magic-ui.md), [Skiper UI](skiper-ui.md)
