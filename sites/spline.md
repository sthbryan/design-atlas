---
title: Spline
description: Browser and desktop 3D tool with an event system, code and glTF export, and an MCP server in the desktop app.
url: https://spline.design
type: tool
formats: 3D design tool · web runtime (npm) · MCP server (desktop app)
topics: [3d-and-shaders, motion, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt]
pricing: freemium
licence: freemium; Free plan with limited files and a watermark on web exports, Hobby $12, Pro $25 and Max $60 per seat per month billed yearly ($15, $30 and $70 monthly), Enterprise on request. The editor and runtime are proprietary; community files default to Spline's "Standard Commercial License" for remixing
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [threejs, react-three-fiber, efecto, 3dicons, shaderfrog]
---
[← Atlas](../site/home.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [motion](../topics/motion.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Spline

## What it is

Spline is a collaborative 3D design tool from Spline, Inc. that runs in the browser and as a desktop app for macOS and Windows. You model with primitives, extrusions, a pen tool and 3D paths, layer materials, and add behaviour with states, events, a timeline, physics, particles, game controls and variables fed by APIs or webhooks. Scenes publish as a hosted URL, a `<spline-viewer>` web component, code for vanilla JS, React, Next.js, Three.js or react-three-fiber, native embeds for iOS and Android, or as glTF/GLB, USDZ, STL, images and video. The same company also makes Hana, a 2D canvas for interactive UI, and both products now include an AI agent that generates 3D models, textures and layouts on credits. At review, `@splinetool/runtime` was downloaded about 2.2 million times a month.

## When to open it

Open it when a designer needs to ship an interactive 3D hero, product spin, logo or small game-like moment without writing Three.js by hand, or when you want to remix a community scene as a starting point. It suits marketing pages built in Webflow, Framer or Wix Studio, which all have documented embeds.

## Most useful

- **Event system**: hover, click, scroll and key events drive state changes and transitions, so interactivity is designed rather than coded
- **Code export with a runtime API**: exported scenes can be controlled from your own JavaScript (find objects, trigger events, set variables). Animations and events work in the vanilla JS and React exports only
- **Performance panel**: estimates export size and load time, counts polygons, lights, textures and effects, and flags fixes by severity
- **Geometry and image compression** in play settings, which the docs say can cut texture-heavy scenes to about a quarter of their size
- **Community and library**: remixable scenes and a ready-made material library to learn from

## Using it with agents

Spline's MCP server is bundled with the desktop app and does not work from the browser. Once the app has been opened, it registers itself with Claude Code, Claude Desktop, Cursor, VS Code, Antigravity and ChatGPT's bundled Codex, and exposes tools that create files, run edits and call Spline's AI generation inside the open 3D or Hana tab, all over `127.0.0.1`. For coding work, the docs publish an `llms.txt` and a Markdown copy of each page (add `.md`), so an agent can read the runtime and export guides before wiring a scene into React. The Max plan advertises higher MCP call limits.

## Watch out for

- The Free plan watermarks web exports and embeds; removing it starts on the paid tiers, and self-hosted exports that bundle the runtime are Enterprise only
- Hosted URLs and viewer embeds load from Spline's servers, so availability and file size depend on their CDN unless you pay for self-hosting
- The runtime packages publish no licence on npm, and the terms forbid redistributing the software, so treat exported code as tied to Spline
- AI output may not be used to build competing models or be presented as purely human-made, according to the AI terms
- Heavy scenes cost battery and time on phones. Keep lights under three and polygon counts low, as the optimisation guide advises

## Reusable ideas

- Design interactions as named states and events so the same scene can be driven by clicks, scroll or outside code
- Publish a performance score beside the export button, so size problems surface before a scene ships
- Keep production and draft export URLs apart, and promote a draft only when it is ready
- Put an MCP server inside the desktop app and auto-register it with installed agents, so setup is one launch

## Related

[Three.js](threejs.md), [React Three Fiber](react-three-fiber.md), [Efecto](efecto.md), [3dicons](3dicons.md), [Shaderfrog](shaderfrog.md)
