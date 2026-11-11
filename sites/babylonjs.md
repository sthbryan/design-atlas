---
title: Babylon.js
description: Apache-2.0 WebGL and WebGPU engine from Microsoft, with a playground, node editors, sandbox and inspector for building 3D in the browser.
url: https://www.babylonjs.com
type: js-library
formats: TypeScript engine for WebGL and WebGPU · tree-shakable @babylonjs packages · Playground, Sandbox, Node Material Editor and Node Particle Editor · Inspector v2 · desktop Editor for Windows, macOS and Linux · Babylon Lite for small WebGPU bundles · llms.txt
topics: [3d-and-shaders, documentation]
verdict: useful
agent: [llms-txt]
pricing: free
licence: Apache-2.0, stated in the site's own llms.txt and in the repository at review (about 26,000 stars). Babylon Native and the desktop Editor are part of the same open project
licence_class: open-source-permissive
reviewed: 2026-11-11
status: active
related: [threejs, playcanvas, polygonjs]
---
[← Atlas](../site/home.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [documentation](../topics/documentation.md)

# Babylon.js

## What it is

A full 3D engine for the browser, written in TypeScript and developed by Microsoft with a community, rendering through WebGL and WebGPU behind one API. It is a broader instrument than a renderer: physics through Havok, glTF and other loaders, GUI, spatial audio, XR, and a set of visual tools around the core.

The release page is a version announcement — 9.0 at review — and reads as a tour of what the engine can do: clustered lighting that only computes the lights affecting a pixel, a node graph for particles, volumetric lighting, a frame graph for declaring what each render task produces, animation retargeting across different skeletons, Gaussian splat support for several formats, SDF text for crisp type in 3D, and a rebuilt inspector with light and dark themes. A geospatial camera and 3D Tiles support put it in the same room as mapping work.

Because it is a developer library rather than a design tool, the interesting part for a designer is the tooling: a Playground that runs editable multi-file TypeScript scenes in the browser, a Sandbox for dropping in a model and inspecting it, a node material editor, the new node particle editor, and an inspector overlay that works on any scene including other people's.

## When to open it

Open it when a 3D piece has to ship inside a page and the team is writing code, or when you want to prototype a look without a build step — the Playground runs before install. It is also the quickest way to judge whether a model or a scene idea carries weight, because the Sandbox needs no project.

## Most useful

- **The Playground** as a shareable artefact: a scene is a URL, which makes a 3D bug report or a design reference a link rather than a repository.
- **`llms.txt` written for agents**, naming the tree-shakable `@babylonjs/*` packages, the documentation index and the instruction to answer with Playground links.
- **Babylon Lite**, a separate WebGPU-only renderer that targets a small bundle with output matching the full engine — useful when the 3D is decoration, not the product.
- **Inspector v2 with overlay and inline modes and both themes**, which is more than debugging: it is how you check spacing, lighting and material values on a live scene.
- **Node Material Editor and Node Particle Editor**, two visual graphs for the parts of 3D that are hardest to write blind.
- **A documented open standard trail** — OpenPBR materials, 3D Tiles, glTF — so assets survive a change of engine.

## Using it with agents

`llms.txt` resolves and is unusually well aimed: it states the licence, warns against the legacy global `BABYLON` bundle in favour of ES modules, points at a second `llms.txt` for the documentation site, and asks for Playground links in answers. An agent can therefore install the right packages and cite runnable examples without web scraping.

## Watch out for

- It is an engine, not a design system: nothing here decides what looks good, and the default scene reads as a technical demo.
- The release page is a feature list. It never tells you which features cost frame time, and the heaviest ones — volumetric lighting, splats, clustered lighting — are exactly the impressive ones.
- Two renderers now share a name, so a bundle-size or compatibility question needs to say which.
- WebGPU support is a browser-support question, not an engine one.
- The desktop Editor is a separate application with its own maturity; check it before planning a pipeline on it.

## Reusable ideas

- Give every example a permanent URL a stranger can open and edit.
- Ship an `llms.txt` that names the packages to install and the wrong ones to avoid.
- Put an inspector in the product, not only in the debug build; it is how anyone learns the system.
- Offer a small renderer beside the full one for the case where fidelity matters less than weight.

## Related

[Three.js](threejs.md), [PlayCanvas](playcanvas.md), [Polygonjs](polygonjs.md)
