---
title: vgpu
description: A composable WebGPU library with live shader examples, versioned docs, CLI discovery and agent resources.
url: https://vgpu.sh
type: js-library
formats: TypeScript WebGPU library · WGSL modules · browser and Node.js · CLI · MCP · agent skill
topics: [3d-and-shaders, inspiration]
verdict: useful
agent: [mcp, llms-txt, cli, skill]
pricing: free
licence: The library and repository are MIT licensed; review licences for third-party example assets and dependencies separately.
licence_class: open-source-permissive
reviewed: 2026-09-27
status: active
related: [threejs, compute-toys, canvas-ui]
---
[← Atlas](../README.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [inspiration](../topics/inspiration.md)

# vgpu

## What it is

vgpu is a small TypeScript library for WebGPU drawing, compute, effects and 3D scenes. WGSL files can be imported as typed modules. The same API targets browser rendering, headless Node.js through Dawn, and a deterministic mock for tests. Vercel maintains the open source project; the repository and package are MIT licensed.

## When to open it

Open it when a visual feature needs WebGPU or when you want a working shader example with its rendering code beside it. The gallery ranges from compact effects such as a holographic card to fluid simulations, glass objects and large compute demos.

## Most useful

- **[Simple Gradient](https://vgpu.sh/examples/gradient)** renders a smooth, full-stage blend: blue and violet at the upper left, magenta at the upper right, green at the lower left and pale yellow at the lower right. Dragging the pointer did not visibly change it. Its `index.tsx`, `renderer.ts` and `shader.wgsl` tabs sit immediately below the preview.
- **[Interactive Fluid](https://vgpu.sh/examples/fluid)** renders two soft, luminous dye plumes on black, one blue and one magenta. Dragging through them bends and stretches their trails, which then diffuse and fade. The preview is followed by its simulation and WGSL files.
- **Examples** pair previews with the files that build each scene, including renderer and shader source. The [Holographic Card](https://vgpu.sh/examples/holographic-card) page describes a dark graphite card with geometric engraving, but that preview did not render in this review.
- **Source you can study**: select files such as `scene.ts`, `renderer.ts` and `.wgsl` modules in the example viewer; the same example collection is searchable and pullable from the CLI.
- **Performance guidance**: the docs explain practical render passes, targets, instancing and pipeline setup alongside examples that use them.
- **Version-matched agent help**: `npx vgpu docs` reads docs shipped with the installed package; `npx vgpu examples search "raymarching"` finds examples, and `npx vgpu examples pull <id>` copies one locally.

## Using it with agents

The site publishes `agents.md`, `llms.txt` and `llms-full.txt`. Its documented read-only MCP endpoint is `https://vgpu.sh/api/mcp`; `npx vgpu mcp` runs the local server against the installed package's docs. Agents can also install the repository's documentation skill with `npx skills add vercel-labs/vgpu`. Use the skill for discovery, then consult the installed package's docs because the API reference can change between versions.

## Watch out for

- The Holographic Card preview stayed black here, including after pointer movement, while Simple Gradient and Interactive Fluid rendered in the same Brave browser. Its visual evidence is therefore still unverified; do not infer that the blank canvas is only a browser compatibility issue.
- The repository MIT licence covers the project software. Check any model, texture, image or dependency used by an individual example before reusing it.
- This is a lower-level graphics library: examples are implementation references, not drop-in visual components.

## Reusable ideas

- Keep a live example beside its renderer and shader files, so a visual effect can be studied from both the rendered result and its source.
- Make example discovery work from the command line and let an agent pull only the specific demo it needs.
- Keep one small GPU context explicit across the API and offer a deterministic mock for tooling that cannot use a real GPU.

## Related

[Three.js](threejs.md), [compute.toys](compute-toys.md), [Canvas UI](canvas-ui.md)
