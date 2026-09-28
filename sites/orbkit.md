---
title: Orbkit
description: 33 state-driven WebGL orbs for voice and chat agents, with llms.txt, a skill, a JSON API and a shadcn install.
url: https://orbkit.zzzzshawn.cloud
type: component-registry
formats: Component registry
topics: [3d-and-shaders, ai-interfaces, components]
verdict: useful
agent: [llms-txt, registry, api, skill]
pricing: free
licence: Free / runtime and 14 original orbs MIT; 19 orbs ported from XorDev's shaders are non-commercial only, with attribution
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [shadercn, libraries-dev-orbs, paper-shaders, reactbits]
---
[← Atlas](../site/home.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [ai-interfaces](../topics/ai-interfaces.md), [components](../topics/components.md)

# Orbkit

## What it is

Orbkit is a set of 33 WebGL shader orbs for React by the developer zzzzshawn, meant as the avatar or status indicator of a voice or chat agent. Each orb reacts to a `state` prop (`idle`, `thinking` or `speaking`). The state sets two internal volume signals, one for the user's speech and one for the agent's, and the shader reads those to change motion, colour and energy. The looks range from cut glass, plasma and caustics to a voxel planet, an ASCII globe, a weather-radar mosaic and a risograph thermal print. Orbs install as local source through the shadcn CLI, never npm. Each install adds two files, a shared runtime and the orb, with no dependencies beyond React 18+. They render with WebGL 1. The repo went up in September 2026.

## When to open it

Open it when an AI product needs a live presence that shows what the agent is doing, such as a voice-assistant screen, a call UI or a status indicator next to a chat input. The calmer glass and cloud orbs also work as a small hero object or a loading state.

## Most useful

- **Chooser table**: suggested orbs by goal (voice avatar, calm hero, retro/CRT, nature, cosmic, ornament)
- **Real audio input**: pass mic and TTS levels (0 to 1) through `volumes` so the orb follows the actual conversation instead of simulated energy
- **Retuning without forking**: `statePresets` and `stateColors` override one parameter of one state and keep the shipped defaults for everything else
- **Built-in care**: stops rendering off-screen by default, draws one still frame under reduced motion, caps DPR, and becomes `role="img"` only when you give it a label
- **Playground**: every parameter as a slider for all three states, with the matching JSX to copy

## Using it with agents

Orbkit is one of the best-documented shader sources for agents in the atlas. It publishes an `llms.txt`, an `agents.md`, an installable `skill.md` with recipes, an OpenAPI description and a JSON API at `/api/v1/components` that returns each orb's exact parameter keys, ranges and presets. Install one orb with `npx shadcn@latest add zzzzshawn/orbkit/shdr-11`. The site's own rules for agents: one orb per agent, map the app's connection status onto `state` instead of animating it by hand, only override parameters the API lists, and keep fewer than about a dozen orbs on a page.

## Watch out for

- The licence depends on the orb. Before a commercial launch, check the `credit` and licence fields in the API, or the notice at the top of the file. Installing everything with `r/all.json` also brings in the non-commercial orbs
- Every orb is its own WebGL context, and browsers cap those at around 16 per page
- The orbs render nothing on the server, so reserve their space to avoid layout shift
- It is a new, one-person project, so expect renames and pin the files you install

## Reusable ideas

- Drive an agent avatar from three clear states and let the component handle the easing between them
- Feed real input and output audio levels into the visual so "listening" and "speaking" look different
- Offer a small API that returns every allowed parameter and range, so agents never invent props
- Put the licence notice inside each file, not only in a README, so it stays with every copy

## Related

[shadercn](shadercn.md), [Libraries.dev: Thinking orbs](libraries-dev-orbs.md), [Paper Shaders](paper-shaders.md), [React Bits](reactbits.md)
