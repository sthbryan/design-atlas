---
title: Scrolltide
description: Paid library of 145 cinematic scroll-driven templates, each paired with a prompt for Claude, Cursor or v0, plus an MCP server.
url: https://scrolltide.co
type: template-library
formats: template library · AI prompts · MCP server
topics: [motion, agents-and-prompts, inspiration, landing-pages]
verdict: useful
agent: [prompts, mcp]
pricing: paid
licence: Paid. At this review the monthly plan is $29 a month (down from $39, with a fair use of 10 premium copies a week), yearly is $108 billed as $9 a month, and lifetime is $239 one-time (down from $299). The 3D templates, UI screens, shader backgrounds and the MCP server come only with yearly and lifetime, while monthly covers the core library. A personal and client-use licence is included on all plans.
licence_class: proprietary-paid
reviewed: 2026-11-11
status: active
related: [kage, refero-styles, animejs, kinetics]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [agents-and-prompts](../topics/agents-and-prompts.md), [inspiration](../topics/inspiration.md), [landing-pages](../topics/landing-pages.md)

# Scrolltide

## What it is

Scrolltide is a curated library of templates and prompts built around cinematic, scroll-driven website motion. It sells the workflow of "copy the prompt, paste it into your AI, get production-ready code" rather than just visual inspiration.

## When to open it

- When you need a hero, landing page or portfolio with scroll motion but don't want to build the animation system from scratch.
- When you're working with Claude, Cursor or v0 and want an already-tuned prompt instead of describing the effect yourself.
- When you need a GPU background shader for a specific section without hand-writing WebGL.

## Most useful

- The catalog states 145 templates (landing pages, heroes, portfolios, 3D sites), 95 components, 55 shaders, 24 sections (pricing, footers, CTAs, forms) and 14 UI screens (dashboards, finance, commerce) at this review.
- Stack covered: React, Vite, Next.js, Tailwind, Framer Motion, GSAP, Three.js, WebGL and Lenis.
- Filters by type, framework and aesthetic within each category (Library, Components, Shaders, Sections, UI).
- The yearly and lifetime plans unlock 3D templates, UI screens, shaders and the MCP server that the monthly plan doesn't include.

## Using it with agents

Each template ships with an "AI-engineered" prompt meant to be pasted straight into Claude, Cursor or v0; the site itself promises the exported result is production-ready Next.js code, not just a visual mockup. Yearly and lifetime plans add an MCP server at `https://www.scrolltide.co/api/mcp`, connected with `claude mcp add --transport http scrolltide https://www.scrolltide.co/api/mcp`; it works with Claude Code, the Claude app, Cursor, Codex and VS Code, needs no API key, and authenticates against your plan.

## Watch out for

- It's a paid product with a fair-use limit on the monthly plan (10 premium template copies per week, per the site).
- Refund policy: "all sales are final," including a renewal you forgot to cancel.
- Since it relies on prompts to generate the code, final quality depends on the AI model used, not just the template.

## Reusable ideas

- Splitting the catalog into "prompts" vs. "components" vs. "shaders" instead of one mixed grid makes it easier to find exactly the missing piece.
- Bundling each template with its matching AI prompt shortens the path from inspiration to code.
- Offering shaders as their own category (not buried inside "templates") helps anyone who just needs an animated background.

## Related

[Kage](kage.md), [Refero Styles](refero-styles.md), [Anime.js](animejs.md), [Kinetics](kinetics.md)
