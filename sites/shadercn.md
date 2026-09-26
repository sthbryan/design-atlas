---
title: shadercn
description: WebGPU ports of the Orbkit orbs in shadcn registry format; the orb files are non-commercial despite the MIT repo.
url: https://www.shadercn.run
type: component-registry
formats: Component registry
topics: [3d-and-shaders, components, ai-interfaces]
verdict: niche
agent: [llms-txt, registry, api, skill]
pricing: free
licence: Free / repository MIT, but every orb shader file carries a non-commercial, attribution-required notice for XorDev
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [orbkit, shadcn-ui, libraries-dev-orbs, canvas-ui]
---
[← Atlas](../README.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [components](../topics/components.md), [ai-interfaces](../topics/ai-interfaces.md)

# shadercn

## What it is

shadercn is a shadcn-format registry of GPU shader components for React, published by Shadcn Labs, a community GitHub organisation. Any link to shadcn/ui's author is not stated. So far the catalogue has one family: 33 animated orbs (ORB-01 to ORB-33). These are WebGPU ports of the Orbkit orbs, which the README credits, and they keep the same looks and the same `idle`, `thinking` and `speaking` states. Instead of Orbkit's WebGL 1 runtime, they run on vgpu and TypeGPU, with shaders written in typed TypeScript that compiles to WGSL. The repo was created at the end of August 2026 and is updated often.

## When to open it

Open it if your React project already uses WebGPU or TypeGPU, or you want these orbs as TypeScript-authored WGSL you can read and extend. For the same looks with wider browser support, Orbkit is the original.

## Most useful

- **One-command install**: `npx shadcn@latest add @shadercn/orb-01` after registering the namespace, or the full `https://shadercn.run/r/orb-01.json` URL
- **Typed props**: `state`, `size`, `params` and `colors` overrides, per-state presets, input and output volume, `paused`, `pauseOffscreen`, `maxDpr` and `ariaLabel`
- **Readable GPU code**: each orb comes as a small component, a metadata file and a TypeGPU shader module on a shared renderer, so you can study one effect without a GLSL toolchain
- **Markdown mirrors**: add `.md` to any docs URL, or send `Accept: text/markdown`, to get the page as plain markdown

## Using it with agents

The site covers the agent basics well. It has an `llms.txt` index, `llms-full.txt`, an agent skill at `/.well-known/agent-skills/site-skill.md`, an OpenAPI file and a registry index at `/r/registry.json`. For MCP it points to the official shadcn MCP server, which can browse and install from any shadcn-format registry. Tell the agent to install the dependencies first (`vgpu`, `typegpu`, and `@webgpu/types` as a dev dependency) and to map your app's connection status onto `state`.

## Watch out for

- The README says "100% free" and MIT, but all 33 orb files open with a notice that the shader is by XorDev, may only be used non-commercially, and needs attribution. Orbkit marks only 19 of its versions that way. For commercial work, treat every shadercn orb as non-commercial unless the authors say otherwise
- Everything is WebGPU. If it can't start, the orb stays invisible and logs a console error, and the docs describe no fallback, so add your own static image or CSS gradient
- Component names differ between pages (`OrbPreview` in the install guide, `Orb01` on the component pages). Follow the component page
- It is young and has one main maintainer, so pin what you install

## Reusable ideas

- Share one renderer across a family of effects so each new piece is only a shader and a metadata file
- Serve every docs page as markdown on request so agents get clean text instead of scraped HTML
- Publish a skill file under `/.well-known/` so an agent can find the install rules without a search

## Related

[Orbkit](orbkit.md), [shadcn/ui](shadcn-ui.md), [Libraries.dev: Thinking orbs](libraries-dev-orbs.md), [Canvas UI](canvas-ui.md)
