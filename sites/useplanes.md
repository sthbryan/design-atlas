---
title: Planes
description: 230+ animated React components for shadcn/ui and Next.js, shipped as React, Tailwind and Motion source.
url: https://useplanes.com
type: component-library
formats: component library · shadcn-compatible source · Motion animations
topics: [components, motion, ai-interfaces]
verdict: useful
agent: [registry, llms-txt]
pricing: freemium
licence: Free components are public source. A Planes Pro licence (about $99 until 1 December 2026, then $149) unlocks Pro components and updates as a perpetual licence to use the source in your own projects, not a transfer of ownership.
licence_class: mixed
reviewed: 2026-11-26
status: active
related: [shadcn-ui, motion-dev, dissolve]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [ai-interfaces](../topics/ai-interfaces.md)

# Planes

## What it is

Planes is a library of 230+ animated React components for shadcn/ui and Next.js. Each component ships as React, Tailwind and Motion source that drops into a Next.js or React app, installed as source through the shadcn flow.

## When to open it

Open it when you need interactive, animated components that feel product-grade, and you want the source in your repo rather than a dependency.

## Most useful

- **Animated by default**: the components are built around Motion, so interaction is part of the component, not an afterthought.
- **Source, not a package**: copy-in model means the code is yours to change.
- **shadcn shaped**: the install flow matches the shadcn/ui workflow teams already know.

## Using it with agents

The site publishes an `llms.txt` and the components install through the shadcn-compatible registry flow, which agents already know how to drive.

## Watch out for

- Pro components and future updates sit behind a paid licence; the licence is for use in your projects, not ownership.
- Animation-heavy components need a reduced-motion path in your product.

## Reusable ideas

- Ship animation as part of the component API (duration, easing, trigger) instead of as examples.
- Keep the install flow identical to shadcn so existing tooling keeps working.

## Related

[shadcn/ui](shadcn-ui.md), [Motion](motion-dev.md), [dissolve](dissolve.md)
