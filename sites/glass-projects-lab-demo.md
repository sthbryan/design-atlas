---
title: Liquid Glass Playground by Pallav
description: A long-form playground that maps liquid-glass presets, parameters and interface uses into a browsable visual lab.
url: https://glass-projects-lab-custom-demo.vercel.app
type: design-workspace
formats: interactive visual playground · liquid-glass-web-react showcase
topics: [motion, components, 3d-and-shaders]
verdict: useful
agent: []
pricing: free
licence: Demonstrates the MIT-licensed `liquid-glass-web-react` project; no separate licence for the demo page was stated.
licence_class: open-source-permissive
reviewed: 2026-09-26
status: active
related: [liquid-glass, canvas-ui, motion-primitives]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md), [3d-and-shaders](../topics/3d-and-shaders.md)

# Liquid Glass Playground by Pallav

## What it is

This is an extended playground for the `liquid-glass-web-react` lens engine. It places draggable glass effects over photos, text, charts, interface bars, video and generated maps, with controls for the engine's visual parameters.

## When to open it

Use it when you need to inspect how refraction changes over different content, or want to understand the practical range between a quiet focus indicator and a pronounced physical lens.

## Most useful

- The surface switcher reuses one lens over type, imagery, interface and chart backdrops.
- The side-by-side preset area compares glass looks and applies them to common backgrounds.
- Sections on map channels and lens geometry make the visual controls easier to reason about.
- Real UI examples show the lens as a selection marker, dock highlight, magnifier and pointer-following overlay.

## Using it with agents

No agent endpoint is advertised. The page includes copyable snippets and points to the MIT upstream package for source-level integration.

## Watch out for

- This page showcases the same engine as `agpallav.com/liquid-glass`, with a more extensive configuration lab; avoid treating the demos as separate implementations.
- Browser support differs for filtered video and very large filter surfaces.
- Use the live DOM examples to judge readability; a lens that looks clear over a photo may obscure small interface text.

## Reusable ideas

- Let visitors test a visual primitive against several realistic backgrounds in place.
- Organize controls by the visual mechanism they affect: shape, refraction, edge light and animation.
- Explain a complex effect by exposing the intermediate displacement map and its channels.
- Show the same primitive in a gallery and in realistic controls to bridge technique and product use.

## Related

[Liquid Glass](liquid-glass.md), [Canvas UI](canvas-ui.md), [Motion Primitives](motion-primitives.md)
