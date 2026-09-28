---
title: Componentry
description: 53 animated React effects, from text and WebGL hero backgrounds to image effects, installed through the shadcn CLI.
url: https://componentry.dev
type: component-registry
formats: animated component registry (shadcn)
topics: [motion, components, 3d-and-shaders]
verdict: useful
agent: [llms-txt, registry]
pricing: free
licence: Free. MIT for the component code (repo `harshjdhv/componentry`); some items use GSAP, whose separate licence terms apply. The site and branding are proprietary.
licence_class: open-source-permissive
reviewed: 2026-09-26
status: active
related: [reactbits, magic-ui, aceternity-ui, motion-primitives, canvas-ui]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md), [3d-and-shaders](../topics/3d-and-shaders.md)

# Componentry

## What it is

Componentry is an animated React component and visual-effects collection built with TypeScript, Tailwind CSS and Framer Motion, with WebGL or canvas for heavier effects. It is a showcase-style library rather than a set of primitives. Its `llms.txt` groups text animations, interactive components, hero backgrounds and visual effects. The homepage redirects from `componentry.fun` to `componentry.dev`.

## When to open it

Open it when a portfolio, launch page or 404 needs one memorable interactive moment: a headline that reacts to the cursor, an image wall that bends, or a hero background with moving light. It is less useful for everyday app UI.

## Most useful

- **[Magnetic Dock](https://componentry.dev/docs/components/magnetic-dock)**: a row of glossy icon tiles sits in a large dark rounded stage. Hover magnifies nearby icons, tooltips identify them, a badge marks Mail and a small dot marks the active Home item. The docs expose default, solid and large-scale variants.
- **Text animations** with spring physics and per-letter control, easy to drop into a headline.
- **Hero backgrounds**: gradient, aurora and liquid shaders sized for a full-width hero.
- **Image effects**: WebGL ripples, trails, a liquid-glass carousel and a dithered particle logo.
- **Collections pages** compare several effects of one kind side by side.

## Using it with agents

Each component installs through the shadcn CLI as `npx shadcn@latest add @componentry/<name>` after adding the `@componentry` namespace to `components.json`. The `llms.txt` lists components with short descriptions and docs URLs. The MCP instructions point to shadcn's own MCP server with this registry added; there is no dedicated Componentry MCP server.

## Watch out for

- Many effects use WebGL or canvas and can be heavy; test performance on low-end devices and check reduced-motion handling before shipping.
- The image-trail and layered-stack components use GSAP, which has separate licensing terms.
- It is mostly one developer's work and changes quickly; check the exact source and dependencies before shipping.
- The Pro subdomain linked from the Blocks page did not resolve during the review.

## Reusable ideas

- Give a dock a clear active marker as well as hover feedback, so selection stays visible after the magnification settles.
- Group effects into themed collections so people compare options for one job instead of browsing a flat list.
- In the Magnetic Dock preview, combine magnification with a persistent active marker and badge so transient hover state does not obscure selection.

## Related

[React Bits](reactbits.md), [Magic UI](magic-ui.md), [Aceternity UI](aceternity-ui.md), [Motion Primitives](motion-primitives.md), [Canvas UI](canvas-ui.md)
