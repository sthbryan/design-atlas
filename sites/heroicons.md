---
title: Heroicons
description: Tailwind Labs' MIT set of 316 icons, each drawn in outline, solid, mini and micro sizes, with React and Vue packages.
url: https://heroicons.com
type: icon-library
formats: icon library
topics: [icons, assets, components]
verdict: useful
agent: []
pricing: free
licence: Free. MIT licence
licence_class: open-source-permissive
reviewed: 2026-09-25
status: stale
note: "In maintenance mode: no new icons since version 2.1.5 in July 2024."
related: [heroicons-animated, headless-ui, lucide, iconoir]
---
[← Atlas](../site/home.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md), [components](../topics/components.md)

# Heroicons

## What it is

Heroicons is the SVG icon set from Tailwind Labs, the team behind Tailwind CSS. It is small on purpose: 316 icons, each drawn in four styles. Outline is 24×24 with a 1.5px stroke, Solid is 24×24, Mini is a 20×20 solid set for buttons and form controls, and Micro is a 16×16 solid set for tight, dense UI. The site lets you search, switch style, and copy each icon as SVG or JSX; there is also a Figma file. The GitHub repository `tailwindlabs/heroicons` has about 23,800 stars, and `@heroicons/react` was downloaded about 14.6 million times in the month before review.

## When to open it

Open Heroicons for Tailwind projects that need a tidy, well-balanced set and will not need thousands of glyphs: marketing sites, SaaS dashboards and admin screens. The size-specific Mini and Micro styles are the real reason to pick it over a single-size set, because small icons are redrawn for their size instead of scaled down.

## Most useful

- **Four styles per icon**, each tuned for its size rather than scaled from one drawing
- **React and Vue packages** where the import path picks the style: `@heroicons/react/24/outline`, `/24/solid`, `/20/solid` and `/16/solid`, with the same paths in `@heroicons/vue`
- **Copy SVG or Copy JSX** buttons on every icon, ready to paste into markup or a component
- **Figma file** with the full set for design work
- **Plain naming**: kebab-case file names such as `arrow-path` become `ArrowPathIcon` components

## Using it with agents

There is no llms.txt, MCP server or registry, but the set is simple enough that agents rarely struggle. Tell the agent which size and style to use and to import from the matching path, for example `import { BeakerIcon } from '@heroicons/react/24/outline'`. Ask it to check names against the package folders on UNPKG, which the README links to, because Heroicons has no aliases and a guessed name fails at build time.

## Watch out for

- The project is in maintenance mode. The README says only bug fixes are accepted, the last new icons came in version 2.1.5 (July 2024), and 2.2.0 (November 2024) only added React 19 support
- The site header still shows v2.1.5 while npm is at 2.2.0; nothing visible changed between them
- The 24px and 20px folders contain eight extra legacy icons (such as `arrow-small-*` and `plus-small`) that are not in the 16px set or on the site. Avoid them in new work
- 316 icons is a small set. Expect gaps for domain-specific needs such as charts, devices or finance
- There are no official Svelte, Angular or Solid packages; use the raw SVGs or a community port

## Reusable ideas

- Redraw icons for each target size instead of scaling one master drawing
- Let the import path encode size and style so a wrong variant is obvious in code review
- Keep the set small and say clearly which contributions you accept
- Offer copy-as-JSX alongside SVG for teams that paste icons into components

## Related

[Heroicons Animated](heroicons-animated.md), [Headless UI](headless-ui.md), [Lucide](lucide.md), [Iconoir](iconoir.md)
