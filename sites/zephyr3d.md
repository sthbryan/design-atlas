---
title: Zephyr3D
description: MIT TypeScript 3D engine and visual editor targeting WebGL2 and WebGPU, with node-graph materials.
url: https://github.com/gavinyork/zephyr3d
type: js-library
formats: 3D engine · visual editor · node-graph materials · WebGL2 and WebGPU
topics: [3d-and-shaders, motion, components]
verdict: niche
agent: [mcp]
pricing: free
licence: MIT, stated in the repository at review (143 stars).
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [threejs, babylonjs, spline]
---
[← Atlas](../site/home.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [motion](../topics/motion.md), [components](../topics/components.md)

# Zephyr3D

## What it is

Zephyr3D is a TypeScript 3D engine for the browser that targets WebGL, WebGL2 and WebGPU from one codebase, with a visual editor, node-graph materials, animation, shaders, terrain, water and character rendering. The repository is MIT-licensed (143 stars at review).

## When to open it

Open it when a product needs interactive 3D and you want an editor plus an engine, rather than assembling an engine and a separate authoring tool.

## Most useful

- **One codebase, three backends**: WebGL, WebGL2 and WebGPU without rewriting scenes.
- **Node-graph materials**: build materials visually instead of in shader code.
- **Local MCP in the desktop editor**: an agent can drive the editor through a local MCP service.

## Using it with agents

The desktop editor offers a local MCP service and built-in LLM chat; the browser editor does not, per the project's documentation.

## Watch out for

- It is a smaller ecosystem than Three.js, so expect to read source for advanced work.
- WebGPU availability still varies by device, so plan the WebGL fallback.

## Reusable ideas

- Author materials as graphs so non-programmers can iterate.
- Give the editor a local MCP bridge, not a cloud one, so agents can work offline.


## Related

[Three.js](threejs.md), [Babylon.js](babylonjs.md), [Spline](spline.md)
