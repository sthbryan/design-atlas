---
title: Three.js
description: "The default MIT WebGL/WebGPU library: 607 examples, an editor, TSL, and an llms.txt with rules for code generators."
url: https://threejs.org
type: js-library
formats: JavaScript 3D library (npm) · docs, manual and examples with llms.txt
topics: [3d-and-shaders, motion]
verdict: very-useful
agent: [llms-txt]
pricing: free
licence: free; MIT (repository `mrdoob/three.js`). Some sample models and textures in the examples carry their own licences, credited on each example
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [react-three-fiber, drei, shaderfrog, book-of-shaders, paper-shaders, compute-toys]
---
[← Atlas](../README.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [motion](../topics/motion.md)

# Three.js

## What it is

Three.js is the most widely used JavaScript library for 3D in the browser. Ricardo Cabello (mrdoob) started it, and a large group of contributors now maintains it. It gives you a scene graph, cameras, lights, physically based materials, loaders for glTF and many other formats, an animation system, post-processing and WebXR, and it draws with either the mature `WebGLRenderer` or the newer `WebGPURenderer`. The WebGPU renderer uses TSL, a node-based shading language that also compiles for WebGL. At review the release was r186 (npm `0.186.1`, 24 September 2026), with about 116,000 GitHub stars and roughly 58 million npm downloads a month. The site lists 607 official examples, among them 230 WebGPU demos, and links to the docs, a manual, a TSL guide, a browser-based editor and devtools.

## When to open it

Open it when you need 3D on a web page and want full control, whether in plain JavaScript or underneath React Three Fiber, Spline's exports or a shader tool. Use the examples page first: someone has usually built a working version of the effect you need.

## Most useful

- **Examples gallery**: searchable, with source for every demo, grouped into WebGL, WebGPU, post-processing, WebXR, physics, CSS3D and more
- **Manual**: installation, scene fundamentals, responsive canvases, loading models, materials, textures, lights, shadows and colour management
- **Editor**: a browser scene editor for importing, arranging and exporting models without writing code
- **glTF pipeline**: `GLTFLoader` with Draco, Meshopt and KTX2 support, which matches assets from Blender, Poly Haven or glTF Transform
- **TSL**: node materials such as `MeshStandardNodeMaterial` and compute shaders without string-patched GLSL

## Using it with agents

The site's `/llms.txt` points to `/docs/llms.txt` and a roughly 360 kB `/docs/llms-full.txt` that includes the TSL reference. The shorter file begins with rules for code generators: use ES modules with an import map and a pinned version instead of old `three.min.js` CDN tags, choose `WebGLRenderer` by default and `WebGPURenderer` for TSL or compute work, and write custom materials in TSL rather than raw GLSL when on WebGPU. Give the agent that URL and the exact version in your `package.json`, because models often write code for an older API. There is no MCP server.

## Watch out for

- Releases come roughly monthly and each one can remove or rename APIs. Pin the version and read the migration notes before upgrading
- Old tutorials and many AI answers use removed patterns (global `THREE` scripts, `Geometry`, legacy colour settings); check them against the current docs
- WebGPU support and TSL are still changing faster than the WebGL path
- Performance is up to you: dispose of geometries, materials and textures, cap device pixel ratio, and keep draw calls low on phones
- Check the licence of any example asset before reusing it; some require attribution

## Reusable ideas

- Put a working, view-source example beside every feature, and make the gallery searchable
- Open the llms.txt with explicit wrong-versus-right patterns aimed at code generators
- Keep two renderers behind one scene API so projects can move from WebGL to WebGPU gradually
- Ship a small in-browser editor so non-developers can test assets against the real renderer

## Related

[React Three Fiber](react-three-fiber.md), [Drei](drei.md), [Shaderfrog](shaderfrog.md), [The Book of Shaders](book-of-shaders.md), [Paper Shaders](paper-shaders.md), [compute.toys](compute-toys.md)
