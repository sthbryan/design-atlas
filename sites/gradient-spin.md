---
title: Gradient Spin
description: A tiny React grid spinner swept by an OKLab-blended gradient wave, in four patterns.
url: https://gradient-spin.vercel.app
type: js-library
formats: JS library
topics: [components, motion, color]
verdict: niche
agent: []
pricing: free
licence: Free / MIT
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [loading-dev, circle-loaders, oklch, gradient-buttons]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [color](../topics/color.md)

# Gradient Spin

## What it is

Gradient Spin is a single React component, `GradientSpin`, published on npm as `gradient-spin` by ziye (@mona_biasia). It draws a small grid of cells, 3×3 by default, and a gradient wave sweeps across them. The wave follows one of four patterns: arrow-up (a chevron), diagonal, snake and ripple. Colours come from a multi-stop gradient that is blended in the OKLab colour space, so the middle colours do not turn grey. It ships eight preset gradients, shared with the author's sister library `gradient-shimmer`, which does the same effect for text. It works with React 18 or later, has no runtime dependencies and needs no CSS import. The site is a demo page for the component. At review time the package was at version 0.1.0 (July 2026), with about 60 GitHub stars and about 6k weekly downloads.

## When to open it

Open it when you want a tiny loader that feels more crafted than a circular spinner and matches a colourful brand: a chat feed loading older messages, an AI answer that is generating, or a compact status strip.

## Most useful

- **Four wave patterns**. Each is a distance function over the grid that sets each cell's animation delay, so the wave loops without a visible jump
- **Size and timing props**: `rows`, `cols`, `cellSize`, `cellGap`, `cellRadius`, `period` and `dim` (the opacity of cells between waves)
- **Colour options**: preset names or your own gradient stops. `colorBy="row"` maps the gradient from top to bottom like a backdrop, and `colorBy="path"` gives each cell its own colour along the wave
- **Cheap to run**: all cells share one opacity-only CSS keyframe with negative delays. The README says it keeps animating while the main thread is busy and is already mid-loop on first paint
- **Accessible defaults**: `role="status"` with a configurable `label`, and a static frame under `prefers-reduced-motion`
- **`sampleGradient`** is exported, so you can reuse the OKLab sampler elsewhere

## Using it with agents

Workable but basic. There is no `llms.txt`, MCP or registry. The GitHub README is short and complete (a full props table and how the patterns are calculated), so give it to an agent together with the package name.

## Watch out for

- Very early (0.1.0), with one maintainer and no releases since July 2026
- One component only. For other loader shapes you need another library
- Styles are injected at runtime, which may conflict with a strict Content Security Policy
- The demo site uses GSAP and Lenis, but the package does not, so don't copy the demo's setup expecting it to be dependency-free

## Reusable ideas

- Blend gradients in OKLab instead of sRGB so the middle of the ramp stays vivid
- Use negative animation delays so a looping loader is already in motion on first paint
- Express a wave as a distance function over a grid and derive every cell's delay from it
- Animate only opacity on the compositor so the loader keeps moving when the page is busy

## Related

[loading.dev](loading-dev.md), [Circle Loaders](circle-loaders.md), [OKLCH](oklch.md), [Gradient Buttons](gradient-buttons.md)
