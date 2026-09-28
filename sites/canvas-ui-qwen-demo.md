---
title: Canvas UI Qwen Demo
description: An interactive Canvas UI showcase that previews shader effects over live HTML and keeps its controls and install snippets beside each example.
url: https://canvas-ui.qwen.demos.sulat.com
type: component-library
formats: interactive WebGL showcase · shadcn registry · five framework targets
topics: [3d-and-shaders, components, motion]
verdict: useful
agent: [registry]
pricing: free
licence: "The showcased Canvas UI components use MIT + Commons Clause: free for products, but not for resale or redistribution as a component collection."
licence_class: source-available
reviewed: 2026-09-26
status: active
related: [canvas-ui, paper-shaders, liquid-glass]
---
[← Atlas](../site/home.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [components](../topics/components.md), [motion](../topics/motion.md)

# Canvas UI Qwen Demo

## What it is

This is a separate interactive showcase for Canvas UI, the GPU-effects library already documented at `canvasui.dev`. It presents 25 live previews for effects such as liquid distortion, glass, shatter, particles, cloth and retro rendering, with install commands and framework choices.

## When to open it

Open this page when you want to see shader effects operating over HTML that remains selectable and clickable, or compare a large set of visual treatments in a single catalogue view.

## Most useful

- The first live example communicates the core “real HTML in canvas” technique immediately.
- The numbered effect index turns a long catalogue into a scannable set of named previews.
- Install snippets sit beside framework and renderer context, so the visual example has a clear path to implementation.
- The showcase identifies graceful fallback behavior where experimental browser support is unavailable.

## Using it with agents

The page offers shadcn-compatible install commands for the Canvas UI namespace. Use the canonical Canvas UI site for its documentation and broader agent setup.

## Watch out for

- This is a separate demo site, not the canonical `canvasui.dev` catalogue; the library and licence details are shared.
- Live HTML drawing depends on experimental browser support; examples may fall back to simpler GPU effects in ordinary environments.
- The Commons Clause prohibits repackaging the effects as a competing kit or redistributing the components themselves.

## Reusable ideas

- Keep an effects catalogue lively with real rendered previews instead of static thumbnails.
- Pair each effect name with a concise category label such as lens, particles, fabric or retro.
- Explain how content behaves during a fallback so visual enhancement does not imply broken core UI.

## Related

[Canvas UI](canvas-ui.md), [Paper Shaders](paper-shaders.md), [Liquid Glass](liquid-glass.md)
