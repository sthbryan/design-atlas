[← Atlas](../README.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [motion](../topics/motion.md), [components](../topics/components.md)

# Paper Shaders

- **URL:** https://shaders.paper.design
- **Type:** JS library
- **Topics:** 3d-and-shaders, motion, components
- **Pricing / licence:** Free / Apache-2.0 (no visible attribution needed in end products; keep LICENSE and NOTICE if you redistribute the code)
- **Reviewed:** 2026-09-25

## What it is

Paper Shaders is an open-source set of canvas shaders from the team behind the Paper design tool (Lost Coast Labs, Inc.). It has 30 effects. Some are gradients and textures (mesh gradient, grain gradient, static radial gradient, paper texture). Some are noise fields (Perlin, simplex, Voronoi, warp, swirl). Others are patterns (dot grid, dithering, halftone, waves, spiral) or 3D-looking effects (liquid metal, metaballs, smoke ring, god rays, colour panels). Ten of them, including fluted glass, water, heatmap and image dithering, take an image as input. You get them as React components from `@paper-design/shaders-react` or as raw GLSL and a mount helper from `@paper-design/shaders`. The core package has no dependencies and renders with WebGL2. Each package gets more than two million npm downloads a month.

## When to open it

Open it when a hero, card, button border or section background needs a moving texture and you don't want to add three.js or write GLSL. It is also the quickest way to put a designer-tuned gradient into code, because the same shaders can be designed on the Paper canvas and exported with their settings.

## Most useful

- **One page per shader**: a live preview, presets, an "open in Paper" link, a copyable JSX snippet that updates as you change settings, and a table of every prop with its range
- **Shared props on every effect**: `speed` (0 stops the loop), `frame` for a fixed static state, `scale`, `rotation`, offsets, `fit` and world size for framing
- **Performance limits built in**: `minPixelRatio` and `maxPixelCount` put a ceiling on how many pixels a shader draws on large or high-DPI screens
- **Image filters**: halftone CMYK, fluted glass, lens distortion and water turn a photo or logo into a treated graphic without a separate export step

## Using it with agents

The site publishes a long `llms.txt` that lists every shader with a description and each prop's type and range. Give that URL to the agent, have it run `npm i @paper-design/shaders-react`, and ask it to use only the props listed there. For a static poster frame, have it set `speed={0}` and choose a `frame` value rather than faking a still with CSS. There is no MCP server or registry, and Vue and other frameworks are not supported yet (the README says community PRs are welcome).

## Watch out for

- It is still on 0.0.x and the README warns that breaking changes ship in patch versions, so pin the exact version
- Every mounted shader is its own WebGL2 canvas. A page with many live effects will hit browser context limits and battery cost, so stop off-screen ones or use static frames
- Behaviour under reduced motion is not documented. Handle `prefers-reduced-motion` yourself, for example by setting `speed` to 0
- If you fork the shaders into your own library or plugin, Apache-2.0 requires you to keep the LICENSE and NOTICE files

## Reusable ideas

- Give every effect the same framing props so layouts never need per-shader positioning code
- Let `speed={0}` plus a `frame` value turn any animated effect into a deterministic still for print, email or reduced motion
- Cap pixel count, not just DPR, so full-bleed shaders stay affordable on 4K displays
- Publish one machine-readable prop table covering every effect instead of scattering it across demo pages

## Related

[Canvas UI](canvas-ui.md), [shadcn/ui](shadcn-ui.md), [Liquid Glass](liquid-glass.md), [React Bits](reactbits.md), [The Book of Shaders](book-of-shaders.md)
