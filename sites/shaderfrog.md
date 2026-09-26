---
title: Shaderfrog
description: Graph editor that splices GLSL shaders into Three.js, Babylon and PlayCanvas materials, with a community gallery.
url: https://shaderfrog.com
type: tool
formats: Tool
topics: [3d-and-shaders, inspiration]
verdict: niche
agent: []
pricing: free
licence: Free (sign-in to save) / editor MIT, `@shaderfrog/core` ISC; each shared shader carries whatever licence its source says
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [book-of-shaders, compute-toys, paper-shaders, canvas-ui]
---
[← Atlas](../README.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [inspiration](../topics/inspiration.md)

# Shaderfrog

## What it is

Shaderfrog is a browser shader editor made by Andy Ray. He launched version 1.0 about a decade ago and made the current Shaderfrog 2.0 public as an alpha in October 2023. It uses what it calls a "hybrid graph": each node holds full GLSL source instead of one math operation. Connecting two nodes tells the tool to parse both programs and splice one into a chosen spot in the other. It can compose into the materials that 3D engines generate themselves, so an effect can sit on top of Three.js's physical material and keep its lighting, reflections and transparency. Plugins support Three.js, Babylon.js and PlayCanvas. The homepage shows featured community shaders over several pages, and you can browse by engine.

## When to open it

Open it when a WebGL scene needs a custom material on a lit 3D object: an iridescent product shot, a glowing fireball or an animated surface pattern on a real mesh. The featured gallery is also a good place to find ideas for material effects.

## Most useful

- **Composing in the engine's own material**: add noise, glow or distortion to a standard Three.js material without rewriting its lighting code
- **One graph, three engines**: the same effect can run in Three.js, Babylon.js and PlayCanvas
- **Remixable community shaders**: every featured piece opens in the editor with its graph and uniforms visible
- **Three.js export**: `FrogMaterial` from `@shaderfrog/core` rebuilds an exported graph as an extendable Three.js material
- **Open source**: the editor UI (MIT) and the GLSL parser behind it are on GitHub under the ShaderFrog organisation

## Using it with agents

There is no llms.txt, MCP or API, and the editor only works in the browser. The useful route is by hand: design the material in Shaderfrog, export it, then give the agent the generated GLSL and the `@shaderfrog/core` README so it can wire up `FrogMaterial` in a Three.js project. Remind the agent that Shaderfrog's snippets expect Three.js's built-in uniforms and varyings.

## Watch out for

- It is still labelled an alpha. The 2023 launch post called export an early preview, and today the only documented path is Three.js through `FrogMaterial`
- Licences vary by shader. Some shared shaders include third-party code under CC BY-NC-SA, such as Inigo Quilez's Voronoi code, which rules out commercial use. Read the header comment in every node before shipping
- The Shaderfrog 1.0 runtime no longer works with modern Three.js, so ignore old tutorials that use it
- It is built around GLSL for WebGL engines. WebGPU and WGSL are not mentioned anywhere

## Reusable ideas

- Build effects as small full shaders that plug into a host material instead of forking the host
- Show the same graph running in several engines to prove the abstraction works
- Keep each source's licence comment inside its node so remixes carry it forward

## Related

[The Book of Shaders](book-of-shaders.md), [compute.toys](compute-toys.md), [Paper Shaders](paper-shaders.md), [Canvas UI](canvas-ui.md)
