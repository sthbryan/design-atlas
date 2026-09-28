---
title: framecn
description: Editframe video scenes, captions, transitions and WebGL shader backdrops; Editframe itself is licensed by headcount.
url: https://framecn.dev
type: component-library
formats: video component library (shadcn registry)
topics: [motion, components, 3d-and-shaders]
verdict: niche
agent: [llms-txt, registry, api, skill]
pricing: free
licence: free; framecn code is MIT (repo `shadcn-labs/framecn`), but it runs on Editframe, which is source-available and free only for organisations of up to 3 people (paid tiers from $49/month)
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [remocn, openmotion, motion-primitives, magic-ui, shadcn-ui]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md), [3d-and-shaders](../topics/3d-and-shaders.md)

# framecn

## What it is

A registry of time-based React scenes for making product videos in code, built on the Editframe SDK and installed with the shadcn CLI. It is part of the Shadcn Labs family (Aniket Pawar; not affiliated with shadcn). At review time it had about 100 registry items across captions, typography, transitions, primitives, UI blocks, full compositions, backgrounds, and 18 WebGL shader backdrops adapted from Paper's shader library. The repository had about 140 stars.

## When to open it

When you want a launch clip, feature teaser or animated demo rendered from React, and you already use Editframe or are willing to adopt it.

## Most useful

- **Captions**: word-level caption styles such as karaoke pills, highlight sweeps, kinetic slams, weight shifts and neon or glitch treatments, suited to short social videos.
- **Compositions**: finished scenes like a device assembling from floating layers, a dashboard filling with data, a terminal deploy that hands off to a browser, a pricing tier coming into focus and a prompt that turns into generated UI.
- **Transitions**: zoom-through, device-frame pull-back, frosted-glass and pixel-grid wipes, a card that grows into a full-screen modal and typography used as a mask.
- **UI blocks and primitives**: a glass code window, code diff wipe, animated charts, a simulated cursor that follows curved paths and clicks, a Figma-style selection box and seeded confetti.
- **Shaders**: mesh and grain gradients, liquid metal, god rays, metaballs, water caustics and noise fields, driven frame by frame so renders are repeatable.

## Using it with agents

Components install with `npx shadcn@latest add @framecn/<name>` (the namespace is in shadcn's public registry directory). The site offers `llms.txt`, `llms-full.txt`, Markdown copies of every page (append `.md` or send `Accept: text/markdown`), an OpenAPI file and a short agent skill under `/.well-known/agent-skills/`. For MCP it points to the standard shadcn MCP server.

## Watch out for

- The registry metadata looks wrong: every item we checked declared `remotion` as its dependency while the code imports `@editframe/react`, so the CLI may pull in Remotion (which has its own licence) and skip the package you actually need. Install `@editframe/react` yourself and check `package.json`.
- The Getting Started snippet uses a different API shape from the registry code; follow the component pages and Editframe's own docs.
- Many component names match Remocn's catalogue; compare the two before choosing an engine.
- Editframe's cloud rendering is billed per render minute; browser and CLI rendering are included in all tiers.

## Reusable ideas

- Treat video scenes as components with props, so a launch video can be regenerated when copy changes.
- Seed every random effect (confetti, particles) so each render comes out identical.
- Script a fake cursor along curves with a click pulse instead of recording a real screen.
- Use karaoke-style captions that emphasise the spoken word for silent autoplay feeds.

## Related

[Remocn](remocn.md), [OpenMotion](openmotion.md), [Motion Primitives](motion-primitives.md), [Magic UI](magic-ui.md), [shadcn/ui](shadcn-ui.md)
