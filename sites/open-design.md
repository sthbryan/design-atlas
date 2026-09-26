---
title: OpenDesign
description: Apache-2.0 local design engine for coding agents, with 151 forkable DESIGN.md packages and MCP.
url: https://open-design.ai
type: design-workspace
formats: open-source design workspace (desktop app) · DESIGN.md system catalogue · MCP · CLI
topics: [design-md, agents-and-prompts, typography-and-styles]
verdict: very-useful
agent: [mcp, cli, skill]
pricing: freemium
licence: "the desktop app (macOS and Windows) is free and Apache-2.0 at `nexu-io/open-design` (about 98k stars on GitHub at review; the site's own counter shows 83.3K+). It's BYOK: you pay your model provider directly. Optional managed plans add bundled credits and cloud deploys: Plus $20, Pro $100, Max $200 per month, plus team seats and enterprise. The terms say you keep ownership of what you create. Each design-system package records its own provenance and licence."
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [designmd, refero-styles, getdesign-md, typeui, aura, screenshot-to-code]
---
[← Atlas](../README.md) · Topics: [design-md](../topics/design-md.md), [agents-and-prompts](../topics/agents-and-prompts.md), [typography-and-styles](../topics/typography-and-styles.md)

# OpenDesign

## What it is

A local-first "design engine" layer for the coding agents you already run (Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Qwen and many more). It bundles composable skills, rendering templates, plugins and a catalogue of DESIGN.md brand systems, and it writes real files: HTML prototypes, dashboards, decks, images, video, with HTML/PDF/PPTX/MP4 export. It's run by Powerformer, Inc. and presents itself as an open alternative to hosted AI design tools.

## When to open it

- When you want a large, free, versionable set of DESIGN.md files you can read and fork on GitHub rather than behind an account.
- When you want your local agent to generate on-brand prototypes or decks from a DESIGN.md without adopting a hosted builder.
- When you're designing your own DESIGN.md package format and want a worked example with manifests, compiled tokens and validation.

## Most useful

- The repo's `design-systems/` folder: the README states 151 bundled packages (the site says 152+). Each package is a folder with `manifest.json` (id, name, category, description, `source` provenance), `DESIGN.md` (the prose for agents) and `tokens.css` (compiled semantic tokens). Richer packages add `USAGE.md`, `components.html`, `design-tokens.json`, `tailwind-v4.css`, previews and source evidence. Some also ship DESIGN.md translations.
- Bundled brand files use a nine-part layout: Visual Theme & Atmosphere, Color Palette & Roles, Typography Rules, Component Stylings, Layout Principles, Depth & Elevation, Do's and Don'ts, Responsive Behavior, and an Agent Prompt Guide (quick color reference, example component prompts, iteration guide, known gaps). New packages only need at least seven substantive H2 sections, in any order, kept in sync with `tokens.css`.
- Importers from a local folder, a GitHub repo or a shadcn setup (`od design-systems import-*`), plus a Design System surface in the app for extracting a brand from references.
- The site also has a machine-readable `/llms.txt` and `/pricing.md`.

## Using it with agents

`od mcp install <agent>` sets up its MCP server for Claude Code, Claude Desktop, Codex, Cursor, Copilot, OpenCode, Cline, Kiro and others (`--print` for a dry run). It can also run as a skill or plugin with no GUI. Outside the app, the simplest route is to copy one package's `DESIGN.md` (and `tokens.css`) into your repo and reference it from your agent's rules file.

## Watch out for

- Many packages are named after real brands (Airbnb, Stripe, Apple and so on). The repo says these are aesthetic inspirations, not official brand assets. Much of the content comes from upstream sources, mainly `VoltAgent/awesome-design-md` (MIT) and `bergside/awesome-design-skills`, so check each package's `manifest.source` and any local licence file before reusing or republishing it.
- Apache-2.0 covers the software. Trademarks and the hosted interface belong to Powerformer, and Cloud use falls under separate terms, credits and billing.
- The site's messaging is SEO-heavy and changes often (agent counts, star counts, promo banners), so trust the repo over the landing page for facts.
- Compared with [DESIGN.md](designmd.md) and [Refero Styles](refero-styles.md), it's a full workspace to install, not just a library to browse.

## Reusable ideas

- Ship each DESIGN.md with a manifest that records provenance and a compiled token file, so prose and values can be checked against each other.
- Treat derived exports (Tailwind, DTCG JSON, component index) as caches rebuilt from one token source, never edited by hand.
- End a DESIGN.md with an "agent prompt guide" and a "known gaps" list, so the agent knows how to use the file and where it's thin.

## Related

[DESIGN.md](designmd.md), [Refero Styles](refero-styles.md), [getdesign.md](getdesign-md.md), [TypeUI](typeui.md), [Aura](aura.md), [Screenshot to Code](screenshot-to-code.md)
