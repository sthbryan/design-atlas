---
title: Drei
description: 133 MIT helpers for React Three Fiber (staging, loaders, controls, materials), with llms.txt and a docs MCP.
url: https://drei.docs.pmnd.rs
type: component-library
formats: React component library (npm) · docs with llms.txt and MCP server
topics: [3d-and-shaders, components]
verdict: very-useful
agent: [mcp, llms-txt]
pricing: free
licence: free; MIT (repository `pmndrs/drei`)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [react-three-fiber, threejs, poly-haven, gltf-report, canvas-ui]
---
[← Atlas](../site/home.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [components](../topics/components.md)

# Drei

## What it is

Drei is the helper library for React Three Fiber, maintained by the Poimandres (pmndrs) open-source collective. It wraps common three.js chores as ready-made components and hooks: cameras, orbit and scroll controls, model and texture loaders, text, environment lighting, soft shadows, special materials, portals and performance tools. At review, its docs listed 133 helpers in 12 groups, the largest being staging (25), abstractions (21), misc (21), loaders (13) and performance (12). The package `@react-three/drei` was on 10.7.9, needs React 19 and Fiber 9, had about 9,900 GitHub stars and was downloaded roughly 14 million times a month. A separate Storybook shows each helper running live.

## When to open it

Open it as soon as you start an R3F scene. Most things a product page, configurator or portfolio needs (load a GLB, light it well, let people orbit it, add floating text) already exist here, so you spend time on the scene rather than on three.js plumbing.

## Most useful

- **Staging**: `Environment`, `Stage`, `ContactShadows`, `AccumulativeShadows`, `Lightformer`, `Float` and `Sparkles` give a studio look in a few lines
- **Loaders**: `useGLTF` (with Draco and Meshopt support), `useTexture`, `useKTX2`, `useVideoTexture` and `useProgress` for loading screens
- **Controls**: `CameraControls`, `PresentationControls` for product spins, `ScrollControls` for scroll-driven scenes, plus pivot and transform gizmos
- **Materials**: transmission, refraction, reflector, distort and wobble materials, and a `shaderMaterial` helper for your own GLSL
- **Performance**: `Instances`, `Merged`, `Detailed` (LOD), `Bvh`, `AdaptiveDpr`, `PerformanceMonitor` and `BakeShadows`
- **HTML in 3D**: `Html` pins DOM elements to objects; `View` renders several scenes through one canvas

## Using it with agents

The docs publish an `llms.txt` index and a roughly 200 kB `llms-full.txt`. They also point to a pmndrs docs MCP server at `https://docs.pmnd.rs/api/mcp` (HTTP). At review it answered and offered two tools, one that returns a docs page for Drei, R3F, Zustand and other pmndrs libraries and one that returns a full example with its source files. Have the agent look up each helper's props there instead of relying on memory, since Drei's API has shifted between major versions.

## Watch out for

- `Environment` presets fetch HDRIs from a public CDN, and the docs say they are not meant for production. Host your own `.hdr` files (for example from Poly Haven)
- `useGLTF` loads Draco decoders from Google's CDN by default. Pass a local decoder path if you need to work offline or keep third-party requests out
- The `native` entry point for React Native leaves out `Html` and `Loader`
- Match major versions: Drei 10 goes with Fiber 9 and React 19, and older tutorials often show Drei 9 APIs
- Helpers are convenient but not free. Heavy materials such as transmission and real-time reflections cost a lot on mobile GPUs

## Reusable ideas

- Package the setup code everyone rewrites (lighting, controls, loading) as small, composable components with sensible defaults
- Group a large helper set by job (staging, loaders, controls, performance) so people find what they need by intent
- Ship a Storybook next to the docs so every helper can be seen running before install
- Serve one MCP endpoint for a whole family of libraries, with example source as well as reference pages

## Related

[React Three Fiber](react-three-fiber.md), [Three.js](threejs.md), [Poly Haven](poly-haven.md), [gltf.report](gltf-report.md), [Canvas UI](canvas-ui.md)
