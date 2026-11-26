---
title: Framewave
description: MIT GPU-first toolkit for deterministic, frame-based motion graphics on the web, with WebCodecs export.
url: https://github.com/VFitter/framewave
type: js-library
formats: motion graphics toolkit · WebGPU rendering · WebCodecs export · Canvas2D fallback
topics: [motion, 3d-and-shaders]
verdict: niche
agent: []
pricing: free
licence: MIT, stated in the repository at review; free for companies of any size. Created July 2026.
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [motion-dev, wix-interact, rive]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [3d-and-shaders](../topics/3d-and-shaders.md)

# Framewave

## What it is

Framewave is a deterministic, frame-based motion graphics toolkit for the web: it renders with WebGPU, exports video through WebCodecs, falls back to Canvas2D, and provides analytic springs and OKLab colour. "Deterministic" means the same frame time produces the same image, which is what makes rendered motion reproducible.

## When to open it

Open it when motion has to be rendered as video (launch films, social clips) with frame-accurate output, instead of captured from a live page.

## Most useful

- **Frame-exact rendering**: reproducible output, which screen recording cannot promise.
- **Video export in the browser**: WebCodecs instead of a server render.
- **Colour and springs built in**: OKLab interpolation and analytic springs as primitives.

## Using it with agents

No dedicated MCP or agent integration was documented at review; the open code and examples are the path for an agent.

## Watch out for

- Very early: no stars at review, created July 2026.
- WebGPU and WebCodecs support vary by browser, so verify export in your targets.

## Reusable ideas

- Make rendering deterministic so motion can be tested frame by frame.
- Use OKLab for interpolation so gradients between colours stay perceptually even.


## Related

[Motion](motion-dev.md), [Wix Interact](wix-interact.md), [Rive](rive.md)
