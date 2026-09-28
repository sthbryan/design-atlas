---
title: Efecto
description: Browser canvas your agent drives through MCP tools, plus an FX engine for dither, ASCII and halftone posters.
url: https://efecto.app
type: design-workspace
formats: design canvas · MCP server · REST API · visual-effects tool
topics: [agents-and-prompts, 3d-and-shaders, assets]
verdict: useful
agent: [mcp, llms-txt, api, skill]
pricing: freemium
licence: "driving Efecto from your own agent over MCP is free, with no API key or account, according to the docs. The pricing page renders only in JavaScript. Its code lists a Free plan (5 design files, all 30+ FX effects, screenshot and video export, share links) and paid plans for the built-in AI agent: Starter $4.99/mo (10 AI credits), Pro $14.99/mo (50 credits) and Max $89.99/mo (500 credits). The MCP package `@efectoapp/mcp` is MIT. The Terms say you keep ownership of what you create and grant Efecto a limited licence to host and process it."
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [open-design, aura, impeccable, screenshot-to-code]
---
[← Atlas](../site/home.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [3d-and-shaders](../topics/3d-and-shaders.md), [assets](../topics/assets.md)

# Efecto

## What it is

Efecto is a browser design tool by Pablo Stanley that is built to be driven by coding agents. The agent opens a session, gets a browser URL, and builds artboards in front of you: pages, dashboards, social posts, slides, posters and OG images. Layouts use flexbox auto-layout and Tailwind classes. A second product, FX, is a visual-effects engine for posters and images: ASCII, dithering, halftone, glitch, painterly filters, post-processing (grain, bloom, scanlines), and text, image, video and 3D (GLTF) layers. The docs also cover a brand-system feature, multi-agent "teams" with 16 roles, 11 generative WebGL backgrounds, Figma import, and an "Open in v0" export to React and Tailwind.

## When to open it

- When you want an agent to produce visual artefacts (a social carousel, a slide, an event poster, a hero comp) rather than code in your repo.
- When you want to watch and tweak what the agent designs on a canvas, instead of reading JSX.
- When you want dithered, ASCII or halftone treatments for images or posters without writing shaders.

## Most useful

- **68 MCP tools** (per the docs), from `create_artboard` and `add_section` (JSX plus Tailwind) to `set_theme`, `export_image` (PNG, JPEG, WebP, SVG) and `audit_design`, which checks typography, contrast, spacing and AI tells.
- **Three design skills** (web design, social media, graphic design) that teach the agent how to use the tools.
- **REST API** at `/api/v1/design` with an OpenAPI spec, for scripted sessions without an MCP client.
- **FX catalogue**: 30+ effects and post-process filters, each documented on its own page, with a separate FX MCP (`npx @efectoapp/mcp-fx install`).

## Using it with agents

The quickest setup is `npx skills add pablostanley/efecto-plugin` (skills plus MCP). For MCP only, add `npx -y @efectoapp/mcp` to your config. In Claude Code, use `/plugin marketplace add pablostanley/efecto-plugin`. The usual loop is `create_session` → open the URL → `wait_for_connection` → `create_artboard` → `add_section` → refine → `export_image`. The site publishes an `llms.txt`, a JSON docs index, and per-page "page-data" JSON with summaries, recipes and token estimates.

## Watch out for

- The work lives on Efecto's canvas and servers, not in your codebase. Getting code out goes through the v0 export or a rebuild.
- The numbers disagree: the site says 68 tools, while the plugin repo's description still says 46. The plugin repo has no licence file.
- It is young: the MCP package was first published in March 2026 and is still 0.x (0.11.2 at review).
- The paid credits are for Efecto's built-in agent (named Jules in the plan list). The plan figures come from the page's code, so check the live pricing page before relying on them.

## Reusable ideas

- Hand the agent a session URL that the human opens, so both see the same canvas while the agent works.
- Publish a machine-readable summary for each docs page, with recipes and a token estimate, next to the human docs.
- Give the agent a built-in design-audit tool so it can check its own output before exporting.
- Split skills by output type (web, social, print) instead of one general design skill.

## Related

[OpenDesign](open-design.md), [Aura](aura.md), [Impeccable](impeccable.md), [Screenshot to Code](screenshot-to-code.md)
