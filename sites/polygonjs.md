---
title: Polygonjs
description: Node-based 3D editor that compiles scenes into three.js projects; the MIT version is frozen while a paid v2 continues the product.
url: https://polygonjs.com
type: tool
formats: node-based editor in browser and desktop · node contexts for animation, audio, textures, events, GLSL, materials, objects, post-processing and modelling · exports to vanilla JS, three.js, React, Vue and react-three-fiber · scenes stored as JSON and JS in the repo · four official plugins
topics: [3d-and-shaders, motion]
verdict: niche
agent: []
pricing: freemium
licence: The v1 repository is MIT and in maintenance mode; the current Polygon v2 is sold as a subscription or perpetual licence at $25 monthly, $200 yearly or $495 once at review, and the licence for the v2 product is not stated on the pricing page
licence_class: mixed
licences:
  code: open-source-permissive
reviewed: 2026-11-11
status: active
related: [threejs, spline, needle-engine]
---
[← Atlas](../site/home.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [motion](../topics/motion.md)

# Polygonjs

## What it is

A node editor for WebGL scenes, closer in spirit to Houdini or Nuke than to a drag-and-drop 3D design tool. A scene is a graph, and the nodes are grouped by job: ANIM for animation, AUDIO for generated sound, COP for textures, EVENT for triggers, GL for GLSL shaders, JS for state, MAT for materials, OBJ for objects, POST for post-processing, ROP for renderers, SOP for procedural modelling. Nothing is baked until you ask, so experimenting does not damage the graph.

The output is a normal web project. Scenes are saved as JSON and JavaScript files, so they live in git and are reviewed like code; exports are tree-shaken to the nodes you used, and the runtime is three.js underneath, with an escape hatch — `scene.threejsScene()` or a node's computed objects — when the graph runs out.

The version history matters more than usual here. The repository is MIT and explicitly frozen: v1 takes only critical fixes. The product has moved to Polygon v2, sold by subscription or as a perpetual licence, with browser and desktop editors, a native app, the SDK, and a metered AI agent.

## When to open it

Open it when a 3D scene is procedural — a grid of objects driven by data, a shader-heavy background, a generated environment — and writing three.js by hand would mean rebuilding an inspector before you can see anything. It is also worth opening when you want to read how a node editor represents a 3D graph in text files, which is a design problem as much as a technical one.

## Most useful

- **Node contexts borrowed from compositing software**, so anyone who has used a node graph already knows where to look.
- **Scenes as text in the repository**, which makes 3D reviewable, diffable and mergeable in a way that a binary scene file never is.
- **Tree-shaken exports** that ship only the nodes in use, rather than the whole editor.
- **A three.js escape hatch at scene and node level**, so the graph is a starting point rather than a cage.
- **A public live demo with no account**, which is rare for a paid 3D tool.
- **Plugins with real uses** — Mapbox, occlusion, MediaPipe face tracking, physics — rather than cosmetic add-ons.

## Using it with agents

No agent channel at review. `polygonjs.com/llms.txt` returns the application shell rather than a text file, which is exactly the false positive to check for: the status code says 200 and the body is HTML. The "AI agent" on the pricing page is an in-product feature of the paid v2 that spends credits per turn and per generated model; it is not an MCP server or an API you can call from outside.

## Watch out for

- Two products, one domain. Tutorials, docs and the MIT repo describe v1; the pricing page sells v2. Check which one a page is about before following it.
- v1 is frozen, so a long-lived project that depends on it is depending on archived code.
- The v2 licence is not stated on the pricing page — a real gap for anyone shipping commercially.
- The AI features are metered in credits that do not roll over, and the agent and model generation are the only things that spend them.
- A hosted embed for your own site is listed as coming soon, so embedding is still your build's job.
- One seat per licence; it is a tool for an individual, not a team.

## Reusable ideas

- Save scenes as text so they can be reviewed in a pull request.
- Group nodes by the task they perform and name the groups as verbs; the taxonomy does the teaching.
- Always expose the underlying engine object, so a user can leave the abstraction without leaving the project.
- Keep a public demo that needs no account; a 3D tool has to be seen before it is believed.

## Related

[Three.js](threejs.md), [Spline](spline.md), [Needle Engine](needle-engine.md)
