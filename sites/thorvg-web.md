---
title: ThorVG Web
description: MIT WASM renderer for Lottie and vector graphics in the browser, with WebGL and WebGPU backends.
url: https://github.com/thorvg/thorvg.web
type: js-library
formats: WASM renderer · Lottie player · Canvas · WebGL and WebGPU
topics: [motion, assets]
verdict: niche
agent: [skill]
pricing: free
licence: MIT, stated in the repository at review (56 stars).
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [lottiefiles, rive, motion-dev]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [assets](../topics/assets.md)

# ThorVG Web

## What it is

ThorVG Web brings the ThorVG vector engine to the browser through WebAssembly, rendering Lottie animations and vector graphics through Canvas2D, WebGL or WebGPU. It is the browser integration of the ThorVG engine, not a player wrapper around a video.

## When to open it

Open it when Lottie is your animation format and you need control over the renderer, for example picking a GPU backend or embedding a player in a custom runtime.

## Most useful

- **One engine, three backends**: Canvas2D, WebGL and WebGPU from the same API.
- **Lottie at the engine level**: real vector rendering instead of a bundled player.
- **Agent skill included**: the repository ships a WebCanvas skill.

## Using it with agents

The repository includes a `thorvg-webcanvas` agent skill; its supported clients are not spelled out at review.

## Watch out for

- It is infrastructure, not a design tool: expect integration work.
- WASM and GPU backends add weight; measure before shipping on mobile.

## Reusable ideas

- Offer backend choice in a rendering library instead of assuming WebGL.
- Ship a skill file next to a low-level library so agents can use it without reading the API cold.


## Related

[Lottie](lottiefiles.md), [Rive](rive.md), [Motion](motion-dev.md)
