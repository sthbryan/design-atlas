---
title: Ikonik
description: 50,000+ icons gathered from 44 open-source packs, with a built-in SVG editor and copy as SVG or JSX; each pack keeps its own free licence.
url: https://ikonik.modulify.ai
type: icon-library
formats: icon browser · per-pack browsing · SVG editor with size, stroke and colour · copy SVG or React JSX · Figma plugin
topics: [icons, assets]
verdict: useful
agent: []
pricing: free
licence: Free at review, with no account. Every pack is presented as free for personal and commercial work, but each icon keeps its source project's licence, and those differ per pack, so the pack page is what to read before shipping
licence_class: mixed
reviewed: 2026-11-02
status: active
related: [iconify, free-icon-resources, lucide, icons0]
---
[← Atlas](../site/home.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md)


# Ikonik

## What it is

Ikonik collects open-source icons into one searchable browser: at review its packs page counted 50,218 icons drawn from 44 open-source projects, and it says every pack is free for personal and commercial work. It is built by Modulify and offered alongside that builder, as a Figma plugin and as a Webflow app. Each icon opens with controls for size, stroke width and colour, then copies as SVG or React JSX — a smaller, more direct tool than a full icon framework.

## When to open it

Open it when you want one specific glyph from a known open set and you would rather adjust it in the browser than in a design file. The size, stroke and colour sliders are the reason to be here: they turn a static file into something you can match to a project's icon grid before exporting.

## Most useful

- **Per-pack browsing**: the packs index lists each source project with its icon count and style split — Iconsvg, for example, is 269 icons, 216 outline and 55 filled at review — so you can stay inside one visual family.
- **Outline beside filled**: most entries appear in both, which makes mixing weights across a UI less likely.
- **Inline editing**: size, stroke and colour before copy, so the pasted SVG or JSX already fits.
- **Copy as SVG or JSX**, which covers both design handoff and a React codebase.
- **Free plugins** for Figma and Webflow, useful when the work happens in a canvas rather than in code.

## Using it with agents

No `llms.txt`, MCP server, API or CLI was found at review. Icon detail pages are static enough to read, and each one states which packs hold that icon and that it is free for commercial use, so an agent can fetch a page and confirm a glyph exists. It cannot export from the editor without a browser, and there is no bulk download route.

## Watch out for

- "Open source" here means aggregated: the licences belong to the source packs and vary. Read the pack page rather than the banner.
- Much of the collection overlaps the sets Iconify aggregates, so check both before adding a second icon dependency to a project.
- Icon names and categories are the aggregator's own and may not match the source project's naming.
- No versioning, changelog or package is published, so icons can change between visits with nothing to pin.
- The brand is the builder's marketing surface; treat the product cross-links as promotion.

## Reusable ideas

- Aggregate by pack and show the style split per pack, so a visitor can pick one family instead of mixing.
- Put size, stroke and colour controls directly above the copy button.
- Copy both SVG and framework-ready JSX from the same screen.
- Be explicit that each source keeps its own licence, instead of flattening everything into one badge.

## Related

[Iconify](iconify.md), [Free Icon Resources](free-icon-resources.md), [Lucide](lucide.md), [icons0](icons0.md)
