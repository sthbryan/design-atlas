---
title: Componentry
description: "53 animated React effects: text, WebGL hero backgrounds and image effects, installed through the shadcn CLI."
url: https://componentry.dev
type: component-registry
formats: animated component registry (shadcn)
topics: [motion, components, 3d-and-shaders]
verdict: useful
agent: [llms-txt, registry]
pricing: free
licence: Free. MIT (repo `harshjdhv/componentry`, about 520 GitHub stars at review). A paid "Componentry Pro" for blocks is announced but not yet available
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [reactbits, magic-ui, aceternity-ui, motion-primitives, canvas-ui]
---
[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md), [3d-and-shaders](../topics/3d-and-shaders.md)

# Componentry

## What it is

Componentry is an open-source collection of animated React components and visual effects by Harsh Jadhav, built with TypeScript, Tailwind CSS and Framer Motion, with WebGL or canvas for the heavier effects. Despite the name, it is not a set of primitives. It is a showcase-style library of interactive pieces, and it joined Vercel's open-source programme in 2026. At review the `llms.txt` listed 53 components in five groups: 7 text animations (letter cascade, text repel, particle typography, velocity scroll), 24 interactive components (magnetic dock, sticky scroll cards, fisheye image grid, Mac keyboard, vinyl music player, GitHub contribution calendar), 11 hero backgrounds (aurora, liquid chrome, grain and dither gradients, WebGL liquid), 10 visual effects (image ripple, image trail, matrix rain, magnet lines, pixel canvas) and one ASCII effect. Themed "collections" pages group items for text, scroll, background and image effects.

## When to open it

Open it when a portfolio, launch page or 404 needs one memorable interactive moment: a headline that reacts to the cursor, an image wall that bends, a hero background with moving light. It is less useful for everyday app UI.

## Most useful

- **Text animations** with spring physics and per-letter control, easy to drop into a headline
- **Hero backgrounds**: gradient, aurora and liquid shaders sized for a full-width hero
- **Image effects**: WebGL ripples, trails, a liquid-glass carousel and a dithered particle logo
- **Scroll pieces**: sticky scroll cards and a case-study flip stack for editorial pages
- **Collections pages** that compare several effects of one kind side by side

## Using it with agents

Each component installs through the shadcn CLI as `npx shadcn@latest add @componentry/<name>` once the `@componentry` namespace (`https://componentry.dev/r/{name}.json`) is in `components.json`. The MCP page simply points to shadcn's own MCP server (`shadcn mcp init`) with that registry added, so agents can search and add items by name. An `llms.txt` lists every component with a one-line description and its docs URL.

## Watch out for

- Many effects use WebGL or canvas and can be heavy, so test performance on low-end devices and check reduced-motion handling before shipping
- It is mostly one developer's work (a handful of outside contributors), started in December 2025 and still changing quickly
- The Pro subdomain linked from the Blocks page did not resolve during this review
- Several pieces are novelty items (eyes that track the cursor, a keyboard replica) that fit playful sites more than products

## Reusable ideas

- Group effects into themed collections so people compare options for one job instead of browsing a flat list
- Let text react to cursor distance with spring physics for a tactile headline
- Use a single interactive hero background instead of scattering small animations across the page
- Point agents at the shadcn MCP server plus a namespaced registry rather than running a custom MCP server

## Related

[React Bits](reactbits.md), [Magic UI](magic-ui.md), [Aceternity UI](aceternity-ui.md), [Motion Primitives](motion-primitives.md), [Canvas UI](canvas-ui.md)
