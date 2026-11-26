---
title: ShaderVine
description: MIT WebGPU shader toolkit with a node graph, live preview, compute simulations and export.
url: https://github.com/metavert-io/shadervine
type: tool
formats: WGSL shader editor · node graph · compute simulations · MCP server
topics: [3d-and-shaders, agents-and-prompts]
verdict: niche
agent: [mcp]
pricing: free
licence: MIT, stated in the repository at review (25 stars).
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [shaders, shadertoy, zephyr3d]
---
[← Atlas](../site/home.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# ShaderVine

## What it is

ShaderVine is a WebGPU shader programming toolkit in the browser: write WGSL with live preview, build effects with a visual node graph, run compute simulations, morph between shaders and export to several graphics formats. It was created in March 2026 and is MIT-licensed (25 stars at review).

## When to open it

Open it when you need to develop and iterate a WGSL effect with visual feedback, or explore compute shaders for generative visuals.

## Most useful

- **Node graph and code together**: visual wiring with the WGSL available underneath.
- **Compute, not only pixels**: simulations are treated as a first-class use.
- **Built-in MCP server**: an agent can drive the editor, documented for Claude and Cursor.

## Using it with agents

The repository documents a built-in MCP server for MCP-compatible clients such as Claude and Cursor.

## Watch out for

- Early-stage project (25 stars, 2026) with no hosted pricing verified.
- WebGPU only, so it will not run on older browsers.

## Reusable ideas

- Offer a node graph and the underlying shader side by side, so people can graduate from one to the other.
- Treat compute as a category in a visual editor, not an afterthought.


## Related

[Shaders](shaders.md), [Shadertoy](shadertoy.md), [Zephyr3D](zephyr3d.md)
