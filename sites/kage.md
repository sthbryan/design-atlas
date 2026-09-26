---
title: Kage
description: Real interfaces packaged as agent-ready prompts and design briefs, browsable by component, with its own MCP server.
url: https://kage.design
type: gallery
formats: inspiration gallery · AI prompts · MCP server
topics: [inspiration, agents-and-prompts, components]
verdict: very-useful
agent: [mcp, prompts]
pricing: not-stated
licence: Not stated (the MCP server itself says "no API key, no sign-up, no usage limits beyond the site's normal rate limit")
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [scrolltide, refero-styles, component-gallery, vibeprompts]
---
[← Atlas](../README.md) · Topics: [inspiration](../topics/inspiration.md), [agents-and-prompts](../topics/agents-and-prompts.md), [components](../topics/components.md)

# Kage

## What it is

Kage is a library of real-interface inspiration that converts directly into prompts for coding agents (Claude Code, Codex, Cursor). Instead of just showing screenshots, it packages each design as ready-to-feed material for an LLM.

## When to open it

- When you want to tell an agent "build me something like [product X]" and need the prompt and reference screenshots already prepared.
- When you're looking for a specific component pattern (hero, feature grid, pricing, testimonials) from a real product, not a generic template.
- When you want to plug an inspiration source directly into your agent workflow via MCP instead of copy-pasting screenshots by hand.

## Most useful

- The site states 335 designs across 187 products, with 1,778 components and 17 catalogued "skills."
- Cross-browsing by component (navigation, hero, feature grids, pricing, testimonials...), by industry (dev tools, AI, fintech, productivity...), by page style (minimal, dark, editorial, brutalist, retro, playful, bento...) and by tech stack (Next.js, Tailwind, Framer, Vercel, Cloudflare...).
- Curated collections like "minimal landing pages" or "Tailwind CSS landing pages."
- Separate "most copied" and "most viewed" counters showing what the community actually uses.
- Lets you submit your own sites to expand the library.

## Using it with agents

It ships its own MCP server, added with a single command ("claude mcp add --transport http kage https://kage.design/mcp", with equivalents for Codex, Cursor, OpenCode and Pi), exposing four tools: `design_brief` (generates a design brief from a request like "a site like Linear for a dental clinic"), `search_designs`, `get_design` (full prompt, components and screenshots) and `get_component` (a single component with its prompt and cropped image). Prompts give structural and stylistic guidance without reproducing original branding or copy.

## Watch out for

- Since it uses screenshots of real products, keep usage to style/structure reference, not literal copying of brand or content.
- No pricing or business limits are stated; check the MCP's rate limit under heavy use.
- Like any community-submitted gallery, the quality and freshness of entries can vary.

## Reusable ideas

- Turning each piece of inspiration into a reusable "prompt," not just an image, shortens the path from reference to code.
- Exposing an MCP with separate tools for brief, search, full design and single component gives granularity depending on the stage of work.
- Tracking "most copied" and "most viewed" separately is a useful signal of what inspiration actually gets used vs. just looked at.

## Related

[Scrolltide](scrolltide.md), [Refero Styles](refero-styles.md), [The Component Gallery](component-gallery.md), [VibePrompts](vibeprompts.md)
