---
title: Refero Styles
description: 2,000+ real brand styles extracted into agent-readable DESIGN.md files, searchable by mood, with an MCP connection.
url: https://styles.refero.design
type: style-library
formats: style library · AI-readable documentation · registry · per-style markdown files
topics: [design-md, documentation, agents-and-prompts, typography-and-styles]
verdict: very-useful
agent: [mcp]
pricing: not-stated
licence: Not stated (site is in beta, "new styles added every week"). The exported files carry no licence of their own, only a link to the style page they came from, so treat them as look-only until the site says otherwise.
licence_class: not-stated
reviewed: 2026-11-26
status: active
related: [kage, scrolltide, designmd, vibeprompts]
---
[← Atlas](../site/home.md) · Topics: [design-md](../topics/design-md.md), [documentation](../topics/documentation.md), [agents-and-prompts](../topics/agents-and-prompts.md), [typography-and-styles](../topics/typography-and-styles.md)

# Refero Styles

## What it is

Refero Styles is a library that extracts and publishes design specs (palettes, typography, spacing, components) from well-known product sites, in a "DESIGN.md" format meant to be read directly by an AI agent.

## When to open it

- When you want your agent to replicate the visual language of a reference brand (say, Stripe, Linear or Intercom) without describing it by hand.
- When you need a design-system starting point (color, typography, spacing) documented as text, not just screenshots.
- When you're searching for a style by feel ("huge serif headlines," "soft pastel gradients") rather than by specific brand.

## Most useful

- The site states 2,000+ catalogued design systems, each with a downloadable/browsable DESIGN.md file. A sample of 1,343 downloaded files at review covered about 1,286 distinct brands, so the library is a subset of the catalogue rather than the whole thing.
- Each file follows the same shape: a one-line mood summary, colour tokens with a named role per colour, typography with weights, sizes, line heights and letter spacing plus a free substitute, a spacing scale with a base unit, radius and layout rules, named components, layout, elevation and a short do's and don'ts list. Motion appeared in only 39 of the sampled files.
- Every file ends with HTML reconstructions of its components, and states plainly that measurements are normalised, roles are interpreted and the HTML is rebuilt rather than taken from the source site.
- Sort by Trending, Popular and Newest, plus style search.
- A dedicated section for AI design resources and design prompts, plus an MCP integration.

## Using it with agents

The site explicitly promotes compatibility with Cursor, Claude, Codex, v0 or Lovable: the idea is to paste a style's DESIGN.md into the agent as design-system context before asking it to build an interface, instead of describing colors and typography by hand. It also offers an MCP connection path to query styles straight from the agent.

## Watch out for

- It's in beta and publishes no pricing or licence; check the terms before reusing a DESIGN.md on a commercial project. The files themselves carry no licence, only a link to the style page they came from.
- The typography sections often name a commercial typeface and suggest a free substitute, so a file describes the look rather than licensing the font.
- A sample of the exported files showed duplicate brands caught at different pages, some from generic homepages, so check the style page before trusting a file's brand claim.
- Extracting a real brand's style can get uncomfortably close to its visual identity: use it as a starting point, not a 1:1 copy.
- Since it's just a text file, it doesn't replace viewing the original site to validate hierarchy, motion or real accessibility.

## Reusable ideas

- Formalizing a brand's "style" as a text file (DESIGN.md) instead of just a screenshot lets an LLM consume it without visual interpretation.
- Tagging each style with a mood phrase, not just technical categories, makes it searchable by "vibe" rather than by component.
- Sorting by trending/popular/newest keeps a fast-growing library from becoming unmanageable over time.
- Name every colour, type size and spacing step by the role it plays, so an agent can choose by intent ("muted helper text") instead of by hex value.
- Pair each commercial typeface with a free substitute, so the file stays usable when the licence is not available.

## Related

[Kage](kage.md), [Scrolltide](scrolltide.md), [DESIGN.md](designmd.md), [VibePrompts](vibeprompts.md)
