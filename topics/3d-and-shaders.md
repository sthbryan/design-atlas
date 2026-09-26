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
- [Backgrounds Supply](../sites/backgrounds-supply.md) — Paid lifetime library of gradient, AI and animated hero backgrounds, plus a free Gradient Lab shader tool.
- [Blender](../sites/blender.md) — Free GPL 3D suite for making and baking web assets, with glTF export and an official MCP server.
- [Canvas UI](../sites/canvas-ui.md) — 35 GPU effects over live, clickable HTML in WebGL or WebGPU, for six frameworks through a shadcn registry.
- [Componentry](../sites/componentry.md) — 53 animated React effects: text, WebGL hero backgrounds and image effects, installed through the shadcn CLI.
- [compute.toys](../sites/compute-toys.md) — Browser playground for WebGPU compute shaders in WGSL or Slang: simulations, particles and path tracers to fork.
- [Design DNA](../sites/design-dna.md) — Turns references into a three-part JSON profile (tokens, style, WebGL effects), with measured colours and a ΔE verify loop.
- [Drei](../sites/drei.md) — 133 MIT helpers for React Three Fiber (staging, loaders, controls, materials), with llms.txt and a docs MCP.
- [Efecto](../sites/efecto.md) — Browser canvas your agent drives through MCP tools, plus an FX engine for dither, ASCII and halftone posters.
- [framecn](../sites/framecn.md) — Editframe video scenes, captions, transitions and WebGL shader backdrops; Editframe itself is licensed by headcount.
- [GetLayers](../sites/getlayers.md) — Paid library of WebGL scenes, gradients and cinematic templates, each copied as one prompt; MCP needs the top tier.
- [glimm](../sites/glimm.md) — WebGL colour-band page transitions for React/Next.js, with a copyable agent prompt.
- [gltf.report](../sites/gltf-report.md) — Drop in a GLB to inspect, validate, script and Draco/Meshopt-compress it locally, built on glTF Transform.
- [Lafys](../sites/lafys.md) — Paid library of long website prompts for Claude, Lovable and v0, each with a video of the result; conflicting licence terms.
- [Lightswind](../sites/lightswind.md) — Huge flashy 3D/WebGL and liquid-glass library with its own CLI, MCP server and llms-full.txt.
- [Loader Buttons](../sites/loader-buttons.md) — 25 experimental loading-state buttons in WebGL, SVG, Canvas and CSS; no licence published.
- [Orbkit](../sites/orbkit.md) — 33 state-driven WebGL orbs for voice and chat agents, with llms.txt, a skill, a JSON API and a shadcn install.
- [Paper Shaders](../sites/paper-shaders.md) — 30 zero-dependency WebGL2 canvas shaders for React or vanilla JS, Apache-2.0, with a full prop reference in llms.txt.
- [Poly Haven](../sites/poly-haven.md) — About 2,400 CC0 HDRIs, PBR textures and models made by people, with a keyless API that asks for credit.
- [React Bits](../sites/reactbits.md) — Large catalogue of animated React components and WebGL backgrounds (GSAP, three.js, Framer Motion) with an llms.txt index.
- [React Three Fiber](../sites/react-three-fiber.md) — MIT React renderer that writes three.js scenes as JSX, with performance guides, llms-full.txt and a docs MCP.
- [Reverse UI](../sites/reverse-ui.md) — 68 animated React feature illustrations and shader effects for SaaS pages; 19 free, the rest a one-time paid licence. MUI and Emotion.
- [shadercn](../sites/shadercn.md) — WebGPU ports of the Orbkit orbs in shadcn registry format; the orb files are non-commercial despite the MIT repo.
- [Shaderfrog](../sites/shaderfrog.md) — Graph editor that splices GLSL shaders into Three.js, Babylon and PlayCanvas materials, with a community gallery.
- [Spline](../sites/spline.md) — Browser and desktop 3D tool with an event system, code and glTF export, and an MCP server in the desktop app.
- [The Book of Shaders](../sites/book-of-shaders.md) — Classic step-by-step guide to fragment shaders with editable live examples; learning only, all rights reserved.
- [Theatre.js (stale)](../sites/theatrejs.md) — In-browser keyframe editor for THREE.js and R3F scenes; Apache core, AGPL studio, stalled since 2024.
- [Three.js](../sites/threejs.md) — The default MIT WebGL/WebGPU library: 607 examples, an editor, TSL, and an llms.txt with rules for code generators.
- [ui.camera](../sites/ui-camera.md) — Puts UI screenshots in a 3D scene for angled 4K stills and camera-move videos; commercial use needs Pro.
- [wwwtf.site](../sites/wwwtf.md) — A young gallery of 25 weird, WebGL-heavy experimental websites from the curator of Sections.wtf.
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
