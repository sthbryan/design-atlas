[← Atlas](../README.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [components](../topics/components.md), [motion](../topics/motion.md)

# Canvas UI

- **URL:** https://canvasui.dev
- **Type:** Component library
- **Topics:** 3d-and-shaders, components, motion
- **Pricing / licence:** Free / MIT + Commons Clause (use it in any product, including commercial ones; don't sell or redistribute the components themselves)
- **Reviewed:** 2026-09-25

## What it is

Canvas UI is a library of GPU effects by David Haz, who also makes React Bits. Most effects run on top of real, still-clickable HTML. The trick is the experimental html-in-canvas API, which lets a canvas paint live DOM so a shader can sample and distort it. The docs list 35 components. Some are page-level treatments (Liquid fluid simulation, Ripple, Frost, Clouds, Droplets, Glitch, VHS, Peel, Shatter, Cloth). Some are cursor lenses (Glass, Magnify, Asciify, Retro Dither). Others are standalone 3D pieces that turn a GLB model, SVG or image into glass, particles or a dithered object. Each effect comes in two renderers, WebGL (GLSL, no dependencies) and WebGPU (WGSL through vgpu), and in six flavours: React, Solid, Preact, Vue, Svelte and vanilla TypeScript. That gives 420 entries in its shadcn registry. The GitHub repo, created in July 2026, has about 4,700 stars.

## When to open it

Open it for a landing page or portfolio moment where the content itself should react, for example a hero that ripples when clicked or a section that dissolves into sand as you scroll. The 3D object effects also work as hero art built from a product model or logo, and they don't need html-in-canvas.

## Most useful

- **One install per framework and renderer**: `npx shadcn@latest add @canvas-ui/liquid-react`, or add `-webgpu` to the name. Each install is a single source file in `components/canvasui/`
- **Same API in both renderers**: `create<Name>()`, typed options, `setOptions()` and `destroy()`, so switching from WebGL to WebGPU means replacing one file
- **Degrades without breaking**: where html-in-canvas or WebGPU is missing, the wrapped content renders as plain HTML and no error is thrown
- **Playground**: every effect on a mock landing page with live controls
- **Rendering guide**: a clear comparison of WebGL and WebGPU, with browser versions for each

## Using it with agents

The site has an `llms.txt` that summarises every component. Each docs page also has a "Copy as Markdown" button. `@canvas-ui` is a trusted namespace in the shadcn CLI, so the shadcn MCP server can list and install components with no `components.json` setup. Tell the agent which framework and renderer to use, and have it wrap only the section the effect should cover, not the whole app. The `llms.txt` lists fewer components than the docs, so check the sidebar for newer ones.

## Watch out for

- The html-in-canvas effects only fully work in Chrome, either with the `canvas-draw-element` flag or on a domain registered for Chrome's origin trial. The site's own trial token only covers canvasui.dev, so an effect can look right there and fall back to plain HTML on your site
- The Commons Clause means this is not OSI open source. You can't repackage the components into your own kit, template pack or port for sale
- WebGPU builds need Chrome or Edge 113+, Safari 26+ or Firefox 141+, and add `vgpu` and `@webgpu/types`. The object effects also pull in three.js
- Full-page distortion can hurt readability and focus visibility. Keep text-heavy areas calm and respect reduced motion

## Reusable ideas

- Treat live DOM as a texture so effects stay interactive instead of working on a screenshot
- Ship each effect in two renderers with the same props, so the renderer choice can wait
- Detect support at runtime and fall back to plain content, never to an error or a blank area
- Keep one settings bar across the docs (framework, renderer, package manager) and rewrite every snippet to match it

## Related

[React Bits](reactbits.md), [Paper Shaders](paper-shaders.md), [Liquid Glass](liquid-glass.md), [Aceternity UI](aceternity-ui.md), [shadcn/ui](shadcn-ui.md)
