---
title: HexGL
description: A WebGL racing game whose landing page frames a playable 3D experience with a futuristic visual theme.
url: https://hexgl.bkcore.com/
type: tool
formats: browser-based WebGL racing game · source on GitHub
topics: [3d-and-shaders, inspiration]
verdict: niche
agent: []
pricing: free
licence: Free browser demo. The source repository says its code and resources are MIT unless a file specifies otherwise; check individual assets because the repository notes exceptions
licence_class: open-source-permissive
reviewed: 2026-09-26
status: active
related: [threejs, react-three-fiber, wwwtf, blender]
---
[← Atlas](../site/home.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [inspiration](../topics/inspiration.md)

# HexGL

## What it is

HexGL is a browser racing game by Thibaut Despoulain (BKcore), built with HTML, JavaScript and WebGL on three.js. The front page links to a playable build and a public source repository. It is a small, focused reference for turning a 3D game scene into an interactive web experience.

## When to open it

Open it when a concept needs a fast, game-like 3D scene, or when you want to study how a landing page can introduce a playable experience without surrounding it with a conventional marketing layout.

## Most useful

- The landing hero pairs a large empty media frame with a rendered hovercraft, then places a single orange Play button against a pale blue, angular panel.
- A faint hexagonal grid and cut-in side shapes carry the racing theme through the page without competing with the vehicle.
- The About and Q&A sections explain the premise, controls and graphics quality choices; the live score ladder is closed.

## Using it with agents

There is no published agent interface. The play page exposes the game, while the repository provides source code. Ask an agent to study one concrete move from the landing page, such as its angular stage, hexagonal texture or orange play control, and describe a new implementation rather than copying the project wholesale.

## Watch out for

- The play page did not render in this browser session because WebGL was unsupported, so the visual notes here are based on the landing page.
- The project describes itself as a beta and its source README says development is on hiatus.
- The repository gives MIT as the default, with file-specific exceptions. Check asset headers and credits before reusing models, textures or code.
- Its compact, dated interface is a game reference, not a current general-purpose site pattern.

## Reusable ideas

- Put one clear play action beside a visual preview, then keep explanatory material below the fold.
- Carry a theme through background geometry and panel silhouettes instead of adding more interface chrome.

## Related

[Three.js](threejs.md), [React Three Fiber](react-three-fiber.md), [wwwtf.site](wwwtf.md), [Blender](blender.md)
