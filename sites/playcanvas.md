---
title: PlayCanvas
description: A WebGL and WebGPU engine whose Explore catalog links to live games, product configurators and real-time graphics demos.
url: https://playcanvas.com/explore
type: gallery
formats: interactive project gallery · games · product configurators · WebGL/WebGPU demos
topics: [inspiration, 3d-and-shaders]
verdict: useful
agent: []
pricing: freemium
licence: The engine and editor frontend are MIT-licensed and the engine is free; the hosted service has paid plans. Featured projects are created by others and have their own rights and terms.
licence_class: mixed
reviewed: 2026-09-26
status: active
related: [threejs, spline]
---
[← Atlas](../README.md) · Topics: [inspiration](../topics/inspiration.md), [3d-and-shaders](../topics/3d-and-shaders.md)

# PlayCanvas

## What it is

PlayCanvas is a browser-based 3D engine and collaborative editor. Its [Explore catalog](https://playcanvas.com/explore) is also a substantial set of live references: games, product configurators and graphics demonstrations made with the engine.

## When to open it

Open Explore when a page needs a convincing real-time 3D reference rather than a still render. The catalog makes it easy to move between game scenes, product views and technical demonstrations, then launch the project itself.

## Most useful

- [After the Flood](https://playcanv.as/p/vexafQ6D/) is an abstract natural-and-industrial world with glass, steel, trees and water; study its scene layering, atmosphere and contrast between materials.
- [Polaris Vehicle Configurator](https://rzr.polaris.com/) shows how a 3D product view can support vehicle customization and shopping controls.
- [Kånken Me](https://fjallraven.com/uk/en-gb/bags-gear/kanken/kanken-bags/kanken-me) uses colour choices and a shared link to make a customizable product a social activity.
- [Pirron Pool](https://pirron.one/pool/) is an architectural visualization with runtime graphics options, useful for seeing how material and lighting controls can be presented beside a scene.

The catalog's featured carousel and category groupings help distinguish different interaction patterns: continuous exploration in games, deliberate option changes in configurators, and parameter toggles in rendering demos.

## Using it with agents

There is no MCP or agent API on the catalog. The [engine](https://github.com/playcanvas/engine) and [editor frontend](https://github.com/playcanvas/editor) are MIT-licensed; use their official documentation for implementation. An agent can inspect the public demos as visual references, but should check the individual project before reusing code, models, textures or branding.

## Watch out for

- The Explore list mixes evergreen references with third-party projects that can change, move or disappear. Test the launch link and its controls on the intended device.
- A live scene can need a capable GPU and may load slowly on mobile. Check the initial frame, loading state and touch behavior as well as the finished scene.
- PlayCanvas's service terms give it broad rights over content published publicly through the service. Review the current terms before publishing a project there.

## Reusable ideas

- Group interactive examples by the task they serve, such as games, configurators and rendering techniques, so visual research starts with the right interaction model.
- Put concise controls beside the 3D scene and make each option change visible immediately.
- Use a project carousel with a large active preview when the goal is to sell the experience of opening a demo, not just browse thumbnails.

## Related

[Three.js](threejs.md), [Spline](spline.md)
