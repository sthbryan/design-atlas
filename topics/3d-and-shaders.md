---
title: 3D and shaders
description: WebGL and WebGPU shader libraries, playgrounds and 3D scene templates.
order: 12
---
[← Atlas](../README.md)

# 3D and shaders

GPU effects for the web: shader libraries and registries, WebGL and WebGPU playgrounds, 3D scene templates and the references that explain how shaders work.

## Start here

- [Paper Shaders](../sites/paper-shaders.md) — 30 zero-dependency WebGL2 canvas shaders for React or vanilla JS, Apache-2.0, with every prop and range listed in `llms.txt`.
- [Canvas UI](../sites/canvas-ui.md) — 35 GPU effects that run over live, clickable HTML, in WebGL or WebGPU, for six frameworks through a shadcn registry.
- [Orbkit](../sites/orbkit.md) — 33 state-driven WebGL orbs with some of the best agent documentation in the atlas, including a JSON API of allowed parameters.
- [The Book of Shaders](../sites/book-of-shaders.md) — the classic step-by-step guide to fragment shaders, for understanding what the libraries' props actually do.
- [Shaderfrog](../sites/shaderfrog.md) — a graph editor for custom materials on lit 3D objects in Three.js, Babylon.js and PlayCanvas.

## All sources

<!-- atlas:sources:start -->
- [The Book of Shaders](../sites/book-of-shaders.md) — thirteen published chapters on GLSL, from shaping functions to noise and fBm, with editable live examples; read to learn, since the licence forbids reusing its code.
- [Canvas UI](../sites/canvas-ui.md) — liquid, ripple, frost, glitch and shatter effects that sample live DOM, plus 3D glass and particle objects from GLB models; MIT plus Commons Clause.
- [compute.toys](../sites/compute-toys.md) — WebGPU compute playground in WGSL or Slang for particles, simulations and path tracers, with a plain-text source URL per shader; user shaders carry no licence.
- [Efecto](../sites/efecto.md) — an agent-driven design canvas whose FX engine adds ASCII, dither, halftone, glitch and GLTF layers to posters and images, plus 11 generative WebGL backgrounds.
- [framecn](../sites/framecn.md) — 18 WebGL shader backdrops adapted from Paper's library among Editframe video scenes, driven frame by frame so renders repeat; Editframe is licensed by headcount.
- [GetLayers](../sites/getlayers.md) — paid library of 114 real-time 3D scenes and 1,088 pointer-reactive WebGL2 gradients, tuned live and copied as one prompt.
- [glimm](../sites/glimm.md) — one WebGL colour band that sweeps across route changes in React and Next.js, with cosine-gradient palettes and a lazily created context; MIT, 0.x.
- [Orbkit](../sites/orbkit.md) — WebGL 1 orbs driven by `idle`, `thinking` and `speaking` plus real audio levels, installed as local source; 19 of the 33 are non-commercial.
- [Paper Shaders](../sites/paper-shaders.md) — mesh and grain gradients, noise fields, dithering, halftone, liquid metal and image filters as React components or raw GLSL, with shared framing props and pixel caps.
- [React Bits](../sites/reactbits.md) — decorative WebGL backgrounds such as aurora, galaxy and silk, and 3D pieces built on three.js and ogl, inside a large animated component catalogue.
- [shadercn](../sites/shadercn.md) — WebGPU ports of the Orbkit orbs written in TypeGPU and compiled to WGSL, in shadcn format; every orb file carries a non-commercial notice.
- [Shaderfrog](../sites/shaderfrog.md) — splices full GLSL programs into an engine's own material so an effect keeps its lighting and reflections; still an alpha, with Three.js the only documented export.
<!-- atlas:sources:end -->

## Patterns worth reusing

- Give every effect the same framing props (speed, scale, rotation, fit) so layouts never need per-shader positioning code (Paper Shaders).
- Turn any animated effect into a deterministic still with `speed={0}` and a fixed `frame`, for reduced motion, print or email (Paper Shaders); seed random effects so video renders come out identical (framecn).
- Cap total pixel count as well as DPR so full-bleed shaders stay affordable on 4K screens, and stop rendering off-screen (Paper Shaders, Orbkit, shadercn).
- Treat live DOM as a texture so an effect stays interactive, and fall back to plain HTML rather than an error or a blank area when the API is missing (Canvas UI).
- Ship each effect in two renderers behind the same API, so the WebGL-or-WebGPU choice can wait (Canvas UI).
- Publish one machine-readable table of every prop and its range, so agents use only real parameters (Paper Shaders' `llms.txt`, Orbkit's JSON API).
- Compose effects into the host engine's material instead of forking its lighting code (Shaderfrog).
- Run simulation in compute passes and keep drawing as a separate, cheap final pass (compute.toys).
- Keep full-screen shader transitions for moments worth mentioning in a changelog, and swap the route while the band covers the screen (glimm).
- Let people tune a shader live and copy its current state, so the handoff carries the exact values (GetLayers).
- Learn effects as a chain of small functions (shape, repeat, distort, colour), then describe the technique to the agent in your own words (The Book of Shaders).

## Pitfalls

- Licences are the main trap. Orbkit's XorDev ports and every shadercn orb are non-commercial; The Book of Shaders forbids using its code in any project; Canvas UI's Commons Clause bars reselling the components; compute.toys shaders have no licence field; some Shaderfrog nodes include CC BY-NC-SA code.
- Every mounted shader is its own GPU context, and browsers cap WebGL contexts at around 16 per page (Orbkit); stop off-screen effects or use static frames.
- Browser support varies: WebGPU builds need Chrome or Edge 113+, Safari 26+ or Firefox 141+, and html-in-canvas effects only fully work in Chrome behind a flag or an origin trial whose token covers only canvasui.dev (Canvas UI). shadercn documents no fallback, so add a static image or CSS gradient.
- Reduced motion is often left to you: Paper Shaders doesn't document it, so set `speed` to 0 yourself; glimm gives reduced-motion users no animation at all.
- Young packages break often: Paper Shaders is on 0.0.x and ships breaking changes in patch versions, and glimm reworked its visuals across 0.2 and 0.3. Pin exact versions.
- Heavy WebGL and compute cost battery and frame rate; ask for a static fallback on mobile (GetLayers), and expect big simulations to freeze weaker GPUs (compute.toys).
- A prompt describes an effect, it doesn't reproduce it: GetLayers' rebuild differs from the preview unless you download the source, which needs a paid tier.
- Shader components render nothing on the server; reserve their space to avoid layout shift (Orbkit). Full-page distortion can hurt readability and focus visibility (Canvas UI).

## Related topics

- [Motion](motion.md)
- [Components](components.md)
- [AI interfaces](ai-interfaces.md)
- [Landing pages](landing-pages.md)
- [Inspiration](inspiration.md)
