---
title: React Three Fiber
description: MIT React renderer that writes three.js scenes as JSX, with performance guides, llms-full.txt and a docs MCP.
url: https://r3f.docs.pmnd.rs
type: js-library
formats: React renderer for three.js (npm) · docs with llms.txt and MCP server
topics: [3d-and-shaders, components]
verdict: very-useful
agent: [mcp, llms-txt]
pricing: free
licence: free; MIT (repository `pmndrs/react-three-fiber`)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [drei, threejs, spline, gltf-report, canvas-ui, reactbits]
---
[← Atlas](../site/home.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [components](../topics/components.md)

# React Three Fiber

## What it is

React Three Fiber (R3F, package `@react-three/fiber`) is a React renderer for three.js from the Poimandres (pmndrs) collective. Instead of building a scene imperatively, you write it as JSX: `<mesh>`, `<boxGeometry>` and `<meshStandardMaterial>` become three.js objects, props become their properties, and components carry their own state, events and animation loop. Because it maps JSX onto three.js directly, new three.js features work without waiting for a wrapper. It works with React DOM and React Native (via Expo). At review it was on 9.8.1, the release for React 19 (version 8 goes with React 18), with about 32,500 GitHub stars and roughly 19 million npm downloads a month. The docs link to about 150 runnable examples.

## When to open it

Open it when a React or Next.js product needs real 3D (a product viewer, a configurator, an interactive hero, a data scene) and you want it to share state, routing and components with the rest of the app instead of living in a separate imperative island.

## Most useful

- **`<Canvas>`**: sets up renderer, scene, camera, resizing and colour management in one component, with options for shadows, DPR and frame loop
- **Hooks**: `useFrame` for per-frame updates, `useThree` for renderer and camera state, `useLoader` for cached asset loading with Suspense
- **Pointer events on meshes**: `onClick`, `onPointerOver` and friends with raycasting built in, so 3D objects behave like DOM elements
- **Performance guides**: on-demand rendering (`frameloop="demand"` plus `invalidate`), instancing, movement regression, and a pitfalls page that warns against `setState` inside `useFrame` or fast events
- **Ecosystem**: Drei helpers, `gltfjsx` (turns a GLB into a JSX component), postprocessing, Rapier physics, XR, accessibility and a test renderer

## Using it with agents

The docs publish an `llms.txt` and a roughly 170 kB `llms-full.txt` covering the API, tutorials and performance advice. The R3F `llms.txt` still shows an older SSE setup for the pmndrs docs MCP server, but the endpoint that answered at review was the HTTP one listed in Drei's `llms.txt`, `https://docs.pmnd.rs/api/mcp`. Its tools return any pmndrs docs page or a complete example with source. Ask the agent to follow the pitfalls page: mutate refs in `useFrame` rather than setting state, reuse geometries and materials, and use on-demand rendering for mostly static scenes.

## Watch out for

- Versions are tied to React majors. Fiber 9 requires React 19, and at review its peer range stopped below React 19.4, so check before upgrading React
- It is still three.js underneath, so you need to understand cameras, lights, materials and disposal. R3F does not hide GPU cost
- Next.js and other bundlers may need some three.js add-ons transpiled; the installation page covers this
- Many tutorials and AI answers are written for Fiber 8. Check the v9 migration guide when examples do not compile

## Reusable ideas

- Turn an imperative graphics API into declarative components by mapping JSX elements to constructors and props to properties
- Give 3D objects DOM-like events so interaction code looks like the rest of the app
- Render on demand and invalidate on change, instead of drawing 60 frames a second for a still scene
- Document performance mistakes as a "don't / do" list with side-by-side code

## Related

[Drei](drei.md), [Three.js](threejs.md), [Spline](spline.md), [gltf.report](gltf-report.md), [Canvas UI](canvas-ui.md), [React Bits](reactbits.md)
