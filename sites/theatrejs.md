---
title: Theatre.js
description: In-browser keyframe editor for THREE.js and R3F scenes; Apache core, AGPL studio, stalled since 2024.
url: https://www.theatrejs.com
type: js-library
formats: JS library · animation editor
topics: [motion, 3d-and-shaders]
verdict: niche
agent: []
pricing: free
licence: Free / `@theatre/core` and most packages Apache-2.0; the `@theatre/studio` editor AGPL-3.0
licence_class: mixed
reviewed: 2026-09-25
status: stale
related: [rive, gsap, canvas-ui, shaderfrog]
---
[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [3d-and-shaders](../topics/3d-and-shaders.md)

# Theatre.js

## What it is

Theatre.js is a JavaScript animation library that comes with a visual editor, "Studio", which runs inside your own page. You declare the values you want to animate in code: a camera position, a light, a shader uniform, a CSS property. Studio then gives you an outline, a property editor, a dope sheet and a graph editor to keyframe those values on a timeline. The library only changes JavaScript values, so it works with THREE.js, React Three Fiber (through `@theatre/r3f`), plain HTML/CSS/SVG or your own renderer. It is made by Theatre.js Oy in Helsinki, which announced a $4.5M seed round in 2021. The GitHub repo has about 12.7k stars at review, and `@theatre/core` sees around 31k weekly npm downloads.

## When to open it

- For cinematic scroll or intro sequences in WebGL scenes, where tuning camera paths by hand in code is slow.
- When a designer needs to keyframe values a developer has exposed, without editing code.
- For art-directed story pages and product reveals, rather than everyday UI transitions.

## Most useful

- **Sequence editor**: block out keyframes in the dope sheet, then refine the curves in the graph editor, with easing presets.
- **Code plus GUI**: objects and props are defined in code, and their values are tweaked live in the browser.
- **Project state as JSON**: Studio keeps edits in `localStorage` and exports a JSON file that production loads with `@theatre/core` only.
- **Extensions**: an official R3F extension adds a scene editor with camera control. You can also write your own panels and tools.
- **Sheets and sequences**: several independent timelines per project, which you can drive with scroll or playback controls.

## Using it with agents

It has no MCP server, `llms.txt` or skill. An agent can still do the code half well: declare sheet objects and their props, load an exported state JSON and hook sequence position to scroll. A human then does the keyframing in Studio. Because the state is plain JSON, an agent can also read or diff it.

## Watch out for

- **Development has stalled in public.** The last npm release (0.7.2) was in May 2024, and the last public commit (April 2024) added a notice that 1.0 work had moved to a private repo "temporarily". Nothing has appeared since.
- The site is dated. Its footer says 2022, it shows a star count of 7,700 against about 12.7k real ones, and the newest blog post is from September 2022.
- Some getting-started guides still pin 0.5 packages.
- The AGPL-3.0 licence applies to `@theatre/studio`. The project says to keep it out of production bundles so that only the Apache core ships, so check your build does that.
- 141 issues were open with no maintainer activity on them.

## Reusable ideas

- Split the animation runtime from the authoring tool, and ship only the runtime.
- Store keyframed state as data (JSON) that code loads, so design tweaks don't need code changes.
- Expose named props from code so non-developers can tune them visually.

## Related

[Rive](rive.md), [GSAP](gsap.md), [Canvas UI](canvas-ui.md), [Shaderfrog](shaderfrog.md)
