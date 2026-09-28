---
title: Liquid Glass Web React
description: A detailed playground for draggable refractive lenses, with live controls for shape, light, colour fringing and motion.
url: https://agpallav.com/liquid-glass
type: component-library
formats: React component · framework-free engine · interactive playground
topics: [motion, components, 3d-and-shaders]
verdict: useful
agent: []
pricing: free
licence: MIT; the demo and package source are linked from the project repository.
licence_class: open-source-permissive
reviewed: 2026-09-26
status: active
related: [liquid-glass, canvas-ui, motion-primitives]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md), [3d-and-shaders](../topics/3d-and-shaders.md)

# Liquid Glass Web React

## What it is

Liquid Glass Web React is a React component and framework-free engine for refracting live DOM through a movable lens. The demo expands the effect into a playground with editable lens geometry, edge lighting, chromatic aberration, presets and motion examples.

## When to open it

Open it to study how a glass lens reads over different surfaces, or to compare subtle tab indicators, dock highlights, magnifiers and larger glass panes before building a glass-heavy interface.

## Most useful

- The playground applies named looks to the same lens chart and lets users compare them over a common surface.
- Real UI examples demonstrate a lens as selection indicator, dock hover, toggle highlight and reading glass.
- Sliders separate shape controls, which rebuild the displacement map, from lighter filter adjustments.
- The draggable lens keeps text and controls live underneath rather than using a screenshot.

## Using it with agents

No MCP, registry or `llms.txt` channel was advertised. The MIT project repository provides source and API examples for agents that can read GitHub.

## Watch out for

- The refraction relies on SVG filter behavior and has browser-specific limitations, especially for video in Safari.
- A strong lens can reduce text clarity; use the small-strength selection examples as a restraint reference.
- The demo is one implementation of liquid glass and does not guarantee equivalent performance across browsers.

## Reusable ideas

- Separate expensive shape changes from cheap per-frame position changes.
- Use one global light direction to keep highlights coherent across several glass surfaces.
- Compare every preset over identical backgrounds so differences remain easy to judge.
- Use refraction to emphasize a live selected control, not just to decorate a static card.

## Related

[Liquid Glass](liquid-glass.md), [Canvas UI](canvas-ui.md), [Motion Primitives](motion-primitives.md)
