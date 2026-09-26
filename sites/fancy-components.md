---
title: Fancy Components
description: "Playful MIT React effects: text swaps, variable-font play, Matter.js gravity, with llms.txt and shadcn registry."
url: https://www.fancycomponents.dev
type: component-library
formats: component library (shadcn registry)
topics: [components, motion, typography-and-styles]
verdict: very-useful
agent: [llms-txt, registry]
pricing: free
licence: free; MIT (copyright Daniel Petho), personal and commercial use allowed
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [reactbits, motion-primitives, css-text-effects, rareui, magic-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [typography-and-styles](../topics/typography-and-styles.md)

# Fancy Components

## What it is

A library of deliberately playful React components and micro-interactions by Daniel Petho, built with TypeScript, Tailwind CSS and Motion. The stated aim is to recreate the odd, delightful effects seen on award-winning sites so you can reuse or remix them. At review time its `llms.txt` listed about 40 components across text, physics, blocks, image, background, filter and carousel groups, and the GitHub repository had roughly 3.2k stars. The changelog's last dated entry was June 2025, though the repo received commits in 2026.

## When to open it

When a portfolio, agency site or launch page needs one memorable interaction: letters that react to the cursor, elements that fall and bounce under gravity, a wobbly line you can pluck, or an image trail that follows the pointer. It is a toolbox for personality, not a set of form controls.

## Most useful

- **Text effects**: letter swaps on hover or scroll, scramble-in and scramble-on-hover, vertical cut reveals, text along an SVG path, a typewriter, a highlighter with several triggers, and underline-to-background transitions.
- **Variable-font effects**: several components animate font axes by cursor proximity, position or hover, plus a continuous breathing effect; these need a variable font.
- **Physics**: Matter.js wrappers for gravity and cursor attractors that turn DOM elements into bodies, and an elastic SVG line on a spring.
- **Blocks and images**: stacking cards, a sticky footer, a marquee along an SVG path, a screensaver bounce, parallax floating media, image and pixel trails, and a 3D box carousel with drag.
- **Filters**: gooey and pixelate SVG filters (with limited or no Safari support).

## Using it with agents

Components install through the shadcn CLI after adding the `@fancy` namespace (`https://fancycomponents.dev/r/{name}.json`) to `components.json`, then `npx shadcn add @fancy/<name>`. An `llms.txt` indexes every component with a one-line description, and appending `.md` to any docs URL returns a Markdown version with props and usage, which gives an agent clean context without scraping the demo page.

## Watch out for

- The docs note that the CLI only adds extra dependencies to `package.json`; you still run the install yourself.
- Some pieces pull in heavier libraries (the gravity component depends on matter-js, lodash, svg-path-commander and poly-decomp).
- Many effects are pointer-driven and decorative; check keyboard, touch and reduced-motion behaviour before shipping them in core flows.
- SVG filter effects are unreliable in Safari, as the docs themselves warn.

## Reusable ideas

- Swap letters one by one on hover so a link feels alive without changing its layout.
- Let brand words or tags fall into a container and settle under gravity as a hero moment.
- Tie variable-font weight or width to cursor distance for a tactile headline.
- Reveal a footer from underneath the page as the last section scrolls away.
- Run a marquee along a custom SVG path instead of a straight line.

## Related

[React Bits](reactbits.md), [Motion Primitives](motion-primitives.md), [CSS Text Effects](css-text-effects.md), [Rare UI](rareui.md), [Magic UI](magic-ui.md)
