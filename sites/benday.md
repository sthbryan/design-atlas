---
title: benday
description: An MIT React component that turns a logo into a halftone mark with 21 controllable loading and agent-state animations.
url: https://benday.kacemmathlouthi.dev
type: component-library
formats: React component · shadcn registry · logo-based loading indicator
topics: [motion, components, ai-interfaces]
verdict: useful
agent: [registry, llms-txt]
pricing: free
licence: Free; the public GitHub repository declares MIT.
licence_class: open-source-permissive
reviewed: 2026-09-26
status: active
related: [heroicons-animated, animated-icons, motion-primitives, magic-ui]
---
[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md), [ai-interfaces](../topics/ai-interfaces.md)

# benday

## What it is

benday is a small React component that rasterizes a logo into a dot map and animates that same mark as an agent or product loading state. Its black-and-white playground makes the halftone treatment easy to assess, and its source is distributed through a shadcn-compatible registry.

## When to open it

- When a product needs a loading or thinking state that carries its own brand mark instead of a generic spinner.
- When studying dot-matrix animation with explicit idle, thinking and done states.

## Most useful

- **Preset playground**: inspect 21 motion treatments, including contour, shimmer, ripple, cascade, orbit, rain, equalizer, scatter and glitch. The [playground](https://benday.kacemmathlouthi.dev/playground) exposes size, speed, dot scale, dot shape and color controls.
- **State transitions**: idle and done settle back to the crisp logo, while thinking runs the selected pattern; several effects move across the mark rather than spinning the whole graphic.
- **Implementation notes**: the [usage page](https://benday.kacemmathlouthi.dev/usage) describes rasterizing once, sampling a grid and respecting reduced motion.

## Using it with agents

The site publishes a Markdown twin and `llms.txt`, and the component can be copied from shadcn's registry with `bunx shadcn@latest add @benday/benday`. It installs into the project as source files rather than requiring a runtime package.

## Watch out for

- The effect needs a recognizable, high-contrast logo; fine details can disappear when reduced to a coarse dot grid.
- Respect the component's reduced-motion handling and provide a clear static mark for idle or completed states.
- It is a focused React component rather than a broad loader collection.

## Reusable ideas

- Animate the identity mark itself so the waiting state remains brand-specific.
- Use different movement phases to communicate waiting, progress or completion without changing the underlying silhouette.
- Cache or precompute the dot map when source-image rasterization would be expensive during rendering.

## Related

[Heroicons Animated](heroicons-animated.md), [Animated Icons](animated-icons.md), [Motion Primitives](motion-primitives.md), [Magic UI](magic-ui.md)
