---
title: GetLayers
description: Paid library of WebGL scenes, gradients and cinematic templates, each copied as one prompt; MCP needs the top tier.
url: https://www.getlayers.ai
type: template-library
formats: template library · prompt library · MCP
topics: [3d-and-shaders, landing-pages, motion, agents-and-prompts]
verdict: useful
agent: [mcp, llms-txt, prompts, skill]
pricing: paid
licence: "there is a small free set, meant for trying the product, not for shipping unchanged. Unlimited (the prompt library, commercial licence) is $99/year or $139 lifetime. Full Stack (adds source code, 3D scenes, animated backgrounds, gradients with live tuning, and a private Discord) is $139/year, shown reduced from $497, or $199 lifetime, shown reduced from $759. The MCP server requires Full Stack Lifetime. Under the Terms, your licence covers what you generate, not the prompts: you may not scrape, redistribute or resell the library, and bulk or automated copying gets accounts restricted."
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [scrolltide, libraries-dev-orbs, aura, neuform, 60fps]
---
[← Atlas](../README.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [landing-pages](../topics/landing-pages.md), [motion](../topics/motion.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# GetLayers

## What it is

GetLayers is a library of hand-designed visual pieces for cinematic marketing sites, made by the design studio Textura. Every piece (a "layer") can be copied as one long prompt that an agent rebuilds in your stack. Paid plans also let you download the source. Its `llms.txt` counted 50 page templates, 114 real-time 3D WebGL scenes, 10 animated sections, 276 backgrounds and 1,088 pointer-reactive gradients at review. The gradients are pure WebGL2, about a kilobyte each. The site says new layers arrive weekly.

## When to open it

- When a landing page needs a signature moment (a 3D hero, a fluid or particle field, an animated backdrop) that an agent won't come up with on its own.
- When you want a whole motion-heavy template as a starting point and plan to swap the subject for your own.
- When you want to tune a shader's look in the browser and hand the exact settings to an agent.

## Most useful

- **Live configuration**: scenes and gradients are tuned on the page before you copy, so the prompt carries your values.
- **Compose**: pair a scene, gradient or background with a UI template and copy the combination as one prompt.
- **Prompt output**: by default the prompt builds one self-contained HTML page. One extra line asks for Next.js, Astro, Vue or WordPress instead. The studio also sells a Next.js + Claude starter.
- **Sections**: carousels, feature grids, card stacks and roadmaps with their own scroll or mouse motion already wired.

## Using it with agents

Copy a layer's prompt into any coding agent. For MCP, add `https://mcp.getlayers.ai/mcp` (in Codex, through `npx -y mcp-remote`), sign in with a GetLayers account, and load the published skill from `storage.getlayers.ai/skill/getlayers/SKILL.md`. The skill tells the agent to call `getlayers_start` first. Through the MCP the agent can build a whole site from the library, pull one asset, pick a matching background, or read your repo and suggest where motion fits. An `llms.txt` describes the catalogue and plans.

## Watch out for

- Access is tiered: 3D scenes, backgrounds and gradient tuning need Full Stack, and the MCP needs the lifetime version of it.
- A prompt is a description, not code. The agent's rebuild will differ from the preview; the pricing copy itself points to source downloads for a one-to-one result.
- Heavy WebGL costs battery and frame rate on mobile. Ask for a reduced-motion path and a static fallback.
- Prices are shown against struck-through "original" prices, and the site runs an affiliate programme.

## Reusable ideas

- Ship each visual effect as one self-contained prompt that includes its tuned parameters, not just a description of the look.
- Let people adjust a shader live and copy the current state, so the handoff carries the exact values.
- Treat a template as a foundation to re-theme: keep the motion and depth, swap the subject and copy.
- Offer the same asset as both prompt and source, and say plainly which one gives an exact match.

## Related

[Scrolltide](scrolltide.md), [Libraries.dev: Thinking orbs](libraries-dev-orbs.md), [Aura](aura.md), [Neuform](neuform.md), [60fps](60fps.md)
