---
title: Refero Styles
description: 2,000+ real brand styles extracted into agent-readable DESIGN.md files, searchable by mood, with an MCP connection.
url: https://styles.refero.design
type: style-library
formats: style library · AI-readable documentation · registry
topics: [design-md, documentation, agents-and-prompts, typography-and-styles]
verdict: very-useful
agent: [mcp]
pricing: not-stated
licence: Not stated (site is in beta, "new styles added every week")
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [kage, scrolltide, designmd, vibeprompts]
---
[← Atlas](../README.md) · Topics: [design-md](../topics/design-md.md), [documentation](../topics/documentation.md), [agents-and-prompts](../topics/agents-and-prompts.md), [typography-and-styles](../topics/typography-and-styles.md)

# Refero Styles

## What it is

Refero Styles is a library that extracts and publishes design specs (palettes, typography, spacing, components) from well-known product sites, in a "DESIGN.md" format meant to be read directly by an AI agent.

## When to open it

- When you want your agent to replicate the visual language of a reference brand (say, Stripe, Linear or Intercom) without describing it by hand.
- When you need a design-system starting point (color, typography, spacing) documented as text, not just screenshots.
- When you're searching for a style by feel ("huge serif headlines," "soft pastel gradients") rather than by specific brand.

## Most useful

- The site states 2,000+ catalogued design systems, each with a downloadable/browsable DESIGN.md file.
- Every style card carries descriptive mood tags (e.g. "golden hour editorial," "midnight precision instrument") plus the source brand's favicon.
- Sort by Trending, Popular and Newest, plus style search.
- A dedicated section for AI design resources and design prompts, plus an MCP integration.

## Using it with agents

The site explicitly promotes compatibility with Cursor, Claude, Codex, v0 or Lovable: the idea is to paste a style's DESIGN.md into the agent as design-system context before asking it to build an interface, instead of describing colors and typography by hand. It also offers an MCP connection path to query styles straight from the agent.

## Watch out for

- It's in beta and publishes no pricing or licence; check the terms before reusing a DESIGN.md on a commercial project.
- Extracting a real brand's style can get uncomfortably close to its visual identity: use it as a starting point, not a 1:1 copy.
- Since it's just a text file, it doesn't replace viewing the original site to validate hierarchy, motion or real accessibility.

## Reusable ideas

- Formalizing a brand's "style" as a text file (DESIGN.md) instead of just a screenshot lets an LLM consume it without visual interpretation.
- Tagging each style with a mood phrase, not just technical categories, makes it searchable by "vibe" rather than by component.
- Sorting by trending/popular/newest keeps a fast-growing library from becoming unmanageable over time.

## Related

[Kage](kage.md), [Scrolltide](scrolltide.md), [DESIGN.md](designmd.md), [VibePrompts](vibeprompts.md)
