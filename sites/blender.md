---
title: Blender
description: Free GPL 3D suite for making and baking web assets, with glTF export and an official MCP server.
url: https://www.blender.org
type: tool
formats: desktop 3D suite (Windows, macOS, Linux) · Python API · MCP server (Blender Lab)
topics: [3d-and-shaders, assets, agents-and-prompts]
verdict: very-useful
agent: [mcp]
pricing: free
licence: free; GNU GPL (source GPL v2 or later, binaries distributed under GPL v3; Cycles is Apache-2.0). What you make, including `.blend` files, belongs to you. Published add-ons must be GPL-compatible
licence_class: open-source-copyleft
reviewed: 2026-09-25
status: active
related: [poly-haven, gltf-report, threejs, spline, 3dicons]
---
[← Atlas](../site/home.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [assets](../topics/assets.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Blender

## What it is

Blender is the free, open-source 3D suite developed by the Blender Foundation and its community. It covers modelling, sculpting, UV unwrapping, texture painting, rigging, animation, simulation, Geometry Nodes, compositing, video editing, and two renderers: Cycles, a path tracer, and EEVEE, a real-time engine. The current release at review was 5.2.2 LTS. The site highlights Geometry Nodes physics, remote asset libraries and a more memory-efficient Cycles texture cache among recent development work. The official extensions platform listed 1,187 add-ons and 267 themes. Blender runs without registration, and the foundation is funded by donations and corporate members.

## When to open it

Open it when a web scene needs assets that no library has: a custom product model, a stylised character, a logo turned into 3D, or baked lighting that makes a small GLB look expensive. It is also the usual place to clean up, decimate and re-export a model before it goes through gltf.report or glTF Transform.

## Most useful

- **glTF 2.0 import and export** built in, with optional Draco compression, so assets move straight into Three.js, R3F or Spline
- **Baking**: render lighting, ambient occlusion or complex materials into textures, so a real-time scene gets offline-quality shading cheaply
- **Decimate and remesh modifiers** to bring scanned or high-poly models down to web budgets
- **Geometry Nodes** for procedural modelling and scattering that stays editable
- **Asset Browser**: reusable, drag-and-drop libraries of materials, objects and node groups
- **Command line**: `blender -b file.blend -P script.py` runs Python scripts headless, for batch exports and CI

## Using it with agents

Blender Lab, the foundation's experimental projects, publishes an official MCP server with docs at `blender.org/lab/mcp-server`. It needs Blender 5.1 or newer and has two parts: an add-on that runs inside Blender and a `blender-mcp` Python process that the MCP client launches, which talk over a local TCP socket. There is also an `.mcpb` bundle for clients that support it. Its tools run Python in the open session or in a background Blender, summarise data-blocks, objects, linked libraries and missing files, look up Python API docs, and take screenshots of the window. The page's examples include finding high-poly objects that look small on camera and renaming data-blocks consistently. Without MCP, an agent can still write `bpy` scripts for you to run headless.

## Watch out for

- The Lab page warns that the MCP server runs LLM-generated code with no safeguards, so it could delete data or send it elsewhere. Use a virtual machine or a machine with nothing sensitive on it
- Blender has no built-in LLM connection. The add-on, the MCP server and a client must each be installed separately
- Cycles materials and node setups do not export to glTF as they are. Bake them into textures or stick to the Principled BSDF inputs the exporter understands
- The interface and Python API change between major versions, so tutorials and generated scripts can be out of date. Check against the current manual
- Publishing a paid add-on is allowed, but buyers receive it under the GPL and may share it

## Reusable ideas

- State plainly that the artwork belongs to the artist, separate from the software's copyleft licence
- Build an MCP integration as two small pieces (an in-app add-on and a separate server) with a loud security warning
- Offer headless and interactive versions of the same agent tools
- Publish an LTS line alongside fast releases for studios that need stability

## Related

[Poly Haven](poly-haven.md), [gltf.report](gltf-report.md), [Three.js](threejs.md), [Spline](spline.md), [3dicons](3dicons.md)
