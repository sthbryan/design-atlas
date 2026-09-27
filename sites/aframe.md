---
title: A-Frame
description: An HTML-first framework for interactive WebXR scenes, with live 3D examples and a visual inspector.
url: https://aframe.io
type: js-library
formats: JavaScript WebXR framework · HTML entity-component model · live scene examples
topics: [3d-and-shaders, motion]
verdict: useful
agent: []
pricing: free
licence: The framework source is MIT-licensed in the repository. Check each example's third-party assets separately; the site content has no stated blanket reuse licence.
licence_class: open-source-permissive
reviewed: 2026-09-27
status: active
related: [threejs, playcanvas]
---
[← Atlas](../README.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [motion](../topics/motion.md)

# A-Frame

## What it is

A-Frame is a JavaScript framework for building interactive 3D, augmented-reality and virtual-reality scenes with an HTML entity-component model. Its examples show how geometry, lighting, animation and interface elements can work together in spatial environments. The current documentation is for version 1.8.0.

## When to open it

Open it when a design calls for a navigable 3D environment or an interface that sits inside one. Browse the showcase for scene composition and spatial controls, then open an individual example to see the rendered result. The Anime UI example is a useful reference for placing thin, bright HUD graphics inside a dark, blue-toned environment.

## Most useful

- **Showcase examples**: live scenes with source links, including Anime UI, Responsive UI, 360° Image and Post-Processing
- **Documentation**: guides for scenes, components, animation, interaction, controllers and 3D models
- **Visual Inspector**: inspect and edit the entities in a running A-Frame scene
- **Entity-component model**: combine HTML-like scene markup with JavaScript and Three.js for custom behavior

## Using it with agents

No `llms.txt` was available at the site root when checked, and the project does not list an MCP server or other agent endpoint. Agents can still use the versioned documentation, the example source links and the public GitHub repository. Pin the framework version when generating a scene so the code matches the docs being used.

## Watch out for

- These are spatial scenes, so their composition does not map directly to ordinary page layouts
- Many examples assume a 3D camera, headset or controller interaction; check the controls on the target device
- The Model Viewer example opened with its model input empty in this review, while Anime UI rendered successfully
- The project is MIT-licensed, but check the licence and attribution for third-party models, textures and other assets in each example

## Reusable ideas

- Place interface marks in the scene's perspective, rather than overlaying a conventional flat dashboard
- Use luminous outlines and restrained labels to make controls readable against a dark environment
- Pair a live scene with an adjacent source link and a visual inspector so designers can move from viewing to understanding its structure

## Related

[Three.js](threejs.md), [PlayCanvas](playcanvas.md)
