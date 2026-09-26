---
title: gltf.report
description: Drop in a GLB to inspect, validate, script and Draco/Meshopt-compress it locally, built on glTF Transform.
url: https://gltf.report
type: tool
formats: in-browser tool (glTF viewer, inspector, validator, optimiser)
topics: [3d-and-shaders, assets]
verdict: useful
agent: [cli]
pricing: free
licence: 'free; no terms page. The site is "open core": the interface is closed, while the engine underneath, glTF Transform, is MIT and usable from npm or its CLI'
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [threejs, drei, blender, spline, poly-haven]
---
[← Atlas](../README.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [assets](../topics/assets.md)

# gltf.report

## What it is

glTF Report is a single-page web app by Don McCurdy, who also wrote the glTF Transform SDK it runs on. You drop in a `.glb` or a `.gltf` with its files. It renders the model in a three.js viewport, lists its scenes, meshes, materials, textures and animations with sizes, runs the Khronos validation rules, and lets you rewrite the file with a script before exporting it again. Its feedback repository says the app is built with Svelte, Monaco, Tweakpane and glTF Transform, and that files are not uploaded: models stay on your machine, although anonymised usage analytics may be collected.

## When to open it

Open it before any glTF model goes onto a web page: to find out why a GLB is 40 MB, which textures take the most GPU memory, whether the file breaks the spec, or to try Draco or Meshopt compression and see the new size without installing anything. It is also where the glTF Transform docs send you to try their scripting API.

## Most useful

- **Metadata panel**: per-property tables for scenes, meshes, materials, textures and animations, with counts and sizes so the heavy parts stand out
- **Textures panel**: each image with its resolution, format and estimated GPU memory, with a download button
- **Validation**: errors, warnings, infos and hints from the glTF validator, with a status colour on the tab
- **Script tab**: a Monaco editor with typings for glTF Transform, so you can run `dedup`, `weld`, `prune`, `simplify`, `resample`, `quantize` or `textureCompress` on the loaded document and watch the result, with undo and redo
- **Export**: GLB or JSON glTF, interleaved or separate buffers, and Draco (edgebreaker or sequential) or Meshopt (medium or high) compression

## Using it with agents

The site has no API, llms.txt or MCP server, and scripts are typed by hand in the browser. For agent work, use the engine it runs on: have the agent install `@gltf-transform/cli` (MIT, 4.5.0 at review) and run the same steps from the terminal, such as `gltf-transform optimize in.glb out.glb --compress draco --texture-compress webp`. Then open the result in gltf.report yourself to check it visually and read the validation report. The script tab is a quick way to prototype a pipeline before handing it to the agent.

## Watch out for

- Some extensions can be opened and exported but are not drawn in the viewport, because three.js's loader does not support them
- The public feedback repo was archived in favour of a Canny board, and the app's interface code is not published, so you cannot fork or self-host it
- Compression changes precision. Check Draco or quantised output against the original, especially for skinned or morph-target models
- Draco- or Meshopt-compressed files need the matching decoder in your runtime (three.js, Drei `useGLTF`), which adds a download of its own

## Reusable ideas

- Pair a viewer with a validator and a size breakdown, so "why is this slow?" gets answered in one screen
- Expose the same SDK in a browser console with full typings, so the web tool doubles as a playground for the CLI
- Say plainly whether user files leave the device, in the FAQ where people look first
- Keep the engine open source and useful by itself, even when the polished interface is not

## Related

[Three.js](threejs.md), [Drei](drei.md), [Blender](blender.md), [Spline](spline.md), [Poly Haven](poly-haven.md)
