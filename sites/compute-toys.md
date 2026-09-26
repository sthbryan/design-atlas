[← Atlas](../README.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [inspiration](../topics/inspiration.md)

# compute.toys

- **URL:** https://compute.toys
- **Type:** Tool
- **Topics:** 3d-and-shaders, inspiration
- **Pricing / licence:** Free (sign-in to publish) / site code MIT; no licence stated for the shaders users publish
- **Reviewed:** 2026-09-25

## What it is

compute.toys is a browser playground for WebGPU compute shaders, often described as a Shadertoy for compute. You write shaders in WGSL or Slang, and Slang is compiled to WGSL in the browser by a WebAssembly build of the compiler. The results run live on your GPU. Compute passes can write to storage buffers and read them back on the next frame, so the site can do things fragment-only tools can't: particle systems, fluid and physics simulations, path tracers, cellular automata and small neural-network demos. The public gallery runs to 43 pages of about a dozen shaders each. The project is open source and mainly built by David A. Roberts with community contributors. It runs on Next.js with a Monaco editor and a Supabase backend, and the Rust engine lives in the separate `wgpu-compute-toy` repository.

## When to open it

Open it when an effect needs state that carries over between frames or more particles than a fragment shader can handle, for example a hero with thousands of drifting points, a reaction-diffusion texture or a live simulation. It is also a good place to learn WGSL compute patterns before moving one into a real WebGPU renderer.

## Most useful

- **Compute-first editor**: several compute passes per frame, storage buffers, keyboard and mouse input, texture channels, and a default template to start from
- **Two languages**: plain WGSL, or Slang with its modules, generics and standard library
- **Plain-text source**: add `/wgsl` to any shader's view URL (for example `/view/3345/wgsl`) to get its source as raw text
- **Gallery to learn from**: every public shader opens in the editor for forking, with its author linked

## Using it with agents

There is no llms.txt, MCP or documented API. The plain-text source route is the easiest way to give an agent one shader's code for study, but the site does not document it and it could change. The code is written against compute.toys' own bindings (screen texture, time and mouse uniforms, custom inputs), so ask the agent to swap those for your renderer's bindings rather than pasting it in unchanged.

## Watch out for

- It needs WebGPU. Use a current Chrome or Edge, or a recent Safari or Firefox where WebGPU is enabled
- Shaders published on the site have no licence field, and the site has no terms page. Ask the author before shipping someone else's code, and don't treat the site's MIT licence as covering user shaders
- There are no written docs beyond the code templates and the source repository. Expect to learn from reading other people's shaders
- Heavy simulations can freeze a weaker GPU or drain a laptop battery quickly

## Reusable ideas

- Run simulation in compute passes and keep drawing as a separate, cheap final pass
- Offer a raw-source URL for every shared piece so it is easy to diff, fork or feed to tools
- Start new users from a template that already wires time, mouse and screen output

## Related

[The Book of Shaders](book-of-shaders.md), [Shaderfrog](shaderfrog.md), [Canvas UI](canvas-ui.md), [Paper Shaders](paper-shaders.md)
