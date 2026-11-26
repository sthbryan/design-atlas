---
title: Keyline Icons
description: 1,940 MIT icons in four styles (stroke, two-tone, duotone, fill) and two corner cuts, with React, CLI, MCP and Iconify.
url: https://keylineicons.com
type: icon-library
formats: icon set · React package · CLI · MCP server · Iconify
topics: [icons]
verdict: very-useful
agent: [cli, mcp]
pricing: free
licence: MIT, stated on the site and in the repository LICENSE; free for commercial and client work with no per-seat terms.
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [iconoir, lucide, heroicons]
---
[← Atlas](../site/home.md) · Topics: [icons](../topics/icons.md)

# Keyline Icons

## What it is

Keyline Icons is a free icon set drawn on a single 24×24 grid, built for shadcn/ui projects. At review it holds 1,940 icons at review, each in four styles (stroke, two-tone, duotone, fill) and two corner treatments (rounded, sharp), for 15,520 files in all. The site also ships a Figma file, a plugin, and a live search shared by the CLI and the MCP server. Download counts at review: about 65,861 npm downloads on the org, 9,403 in the last week.

## When to open it

- When you need an MIT icon set with more than one visual weight, so icons can match solid or outlined surfaces.
- When you want to swap corner treatment without moving anything in the layout: rounded and sharp share grid, name and box.
- When a project already uses shadcn/ui and you want icons that sit naturally beside its components.

## Most useful

- Four styles from one drawing: stroke is the base, two-tone adds a flat plate at reduced opacity, duotone drops the outline for a grey body with black detail, fill is solid with the detail knocked out.
- Corner ladder: every rounded glyph takes its radius off the same ladder and every stroke ends round, which keeps glyphs from reading as brittle at small sizes.
- One icon, no install: the browser copies plain SVG or JSX at the size and stroke width you set.
- Install page covers the React package, the CLI and Iconify, where the set appears as `keyline-icons`.

## Using it with agents

- CLI: `npx @keyline-icons/cli add bell` copies one drawing into the project with nothing added to the lockfile. The full set is `@keyline-icons/react`, one generated component per icon.
- MCP: an MCP server searches the set with the same ranking as the CLI and the Figma plugin (exact name, then prefix, then word, then curated terms).
- GitHub repository `keyline-icons/keyline-icons` holds the raw Figma export and the normalised SVGs every package is built from. There is no llms.txt at review (the URL returns 404).

## Watch out for

- Iconify carries Solid, Angular and plain variants alongside the site's four styles, so the two catalogues are not identical at review.
- npm download counts drift; treat them as at review figures.
- The MIT grant governs what ships, not the site's summary of it. The LICENSE file in the repository is the text that applies.

## Reusable ideas

- Derive every style from one drawing on one grid, and keep name, box and metrics identical across styles.
- Rank icon search by exact name, prefix, word, then curated synonyms, and share that ranking across browser, CLI, MCP and plugin.
- Let one icon be usable with zero install (copy as SVG) and the full set be one package, so small and large projects both have a path.

## Related

[Iconoir](iconoir.md), [Lucide](lucide.md), [Heroicons](heroicons.md)
