---
title: DESIGN.md
description: Community library of whole design systems as single markdown files, with light/dark previews, an MCP server and a CLI.
url: https://designmd.ai
type: style-library
formats: design-system library in markdown · MCP · CLI
topics: [design-md, documentation, agents-and-prompts, typography-and-styles]
verdict: very-useful
agent: [mcp, cli]
pricing: free
licence: free to browse and download; a free API key is needed to use the MCP/CLI for uploading, downloading or deleting. Not indicated for the licence of each individual design system.
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [vibeprompts, shadcn-ui, uiable, 21st-dev]
---
[← Atlas](../site/home.md) · Topics: [design-md](../topics/design-md.md), [documentation](../topics/documentation.md), [agents-and-prompts](../topics/agents-and-prompts.md), [typography-and-styles](../topics/typography-and-styles.md)

# DESIGN.md

## What it is

A platform that distributes complete design systems as a single markdown file (`DESIGN.md`): palette, typography, spacing and tone for a given style. It works as a community library, with light/dark previews and filters by tag (saas, dark, minimal, dashboard...).

## When to open it

When starting a new project (or a redesign) and you want to give a coding agent a coherent style starting point without writing a design system from scratch, or when you want to pin down the style an agent should apply to an existing repo.

## Most useful

- Explorer with search and sort by trending/newest
- Hundreds of ready-made systems, each as a single `.md` file
- A "What is DESIGN.md" section explaining the format
- Community uploads of new systems

## Using it with agents

The stated flow is "download a DESIGN.md → drop it in your project root → ask your AI to use it" (e.g. "use the @DESIGN.md file and style my app"). It also offers:

- An MCP server to search, browse and download systems without leaving the editor (about 7 tools, ~2000 tokens of overhead according to the site); search needs no authentication, downloading/uploading/deleting does
- A standalone CLI as a "zero context window overhead" alternative to the MCP
- Compatibility with Claude, Cursor and other AI coding tools

## Watch out for

There's no explicit licence stated for the code/tokens of each individual design system (it depends on who uploaded it), so check each file before using it on a commercial project. Since content is community-submitted, quality and consistency vary a lot between systems.

## Reusable ideas

- Keep a project's look as a single reference file any agent can read, instead of scattering it across config
- Use tags like "saas / dark / minimal / dashboard" to classify internal style variants
- Give agents an explicit style source of truth instead of letting them infer it from existing code

## Related

[VibePrompts](vibeprompts.md), [shadcn/ui](shadcn-ui.md), [UIAble](uiable.md), [21st.dev](21st-dev.md)
