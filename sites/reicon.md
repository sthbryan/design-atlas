---
title: Reicon
description: 2,630 MIT UI icons in Outline and Filled, with framework packages, llms files and an MCP server.
url: https://reicon.dev
type: icon-library
formats: icon library · MCP server
topics: [icons, assets, agents-and-prompts]
verdict: useful
agent: [mcp, llms-txt, cli]
pricing: free
licence: Free. MIT, and the site says no attribution is needed. The README also credits base elements from Solar Icons (CC BY 4.0, by 480 Design) and from Zappicon, a commercial set
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [rune-icons, mx-icons, iconoir, icons0]
---
[← Atlas](../README.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Reicon

## What it is

Reicon is a UI icon library by Dev Chauhan, on GitHub as `dqev/reicon` (about 1,600 stars, started May 2026). The site claims 2,700+ designs. The machine-readable name list counts 2,630 at review, each in an Outline (1.5px stroke) and a Filled weight on a 24×24 grid, sorted into 39 categories. Packages have no runtime dependencies: `reicon-react` is the most used, at about 64,000 downloads a month at review, followed by Vue 3, Svelte, React Native, Flutter and a vanilla `reicon` build. Many icons have a secondary accent colour.

## When to open it

Open it when you need a large, neutral UI set with a matching filled weight for active states, like selected tabs or toggled buttons, and want the same names across React, Vue, Svelte and mobile. It is an alternative to Lucide or Phosphor if you like softer, Solar-style shapes.

## Most useful

- **`weight` prop**: switch Outline and Filled on the same component; `secondaryColor` tints the accent parts
- **Web component**: one script tag, then `<re-icon icon="home">`, with rotate, flip, spin, gradient, lazy loading and ARIA options
- **Per-icon imports**: `reicon-react/icons/Home` for the smallest bundles
- **Editors**: VS Code extension with live preview and code insertion, and a Figma plugin with drag-and-drop
- **SSR output**: the vanilla build's `toSvg()` returns a string for server-rendered pages

## Using it with agents

Reicon is well set up for agents. `llms.txt` covers install and props for every package, `llms-full.txt` adds types and FAQs, and `llms-icons.txt` lists every icon by category with its kebab-case to PascalCase mapping. The MCP server (`npx reicon-mcp`) has four tools: `search_icons`, `view_icon`, `apply_icon` (returns import and snippet for React, Vue, Svelte, HTML or SVG) and `list_categories`. The same package works as a CLI, for example `npx reicon-mcp search "cart"`.

## Watch out for

- The "no attribution" MIT label sits awkwardly with the credited sources: Solar Icons' CC BY 4.0 requires attribution, and Zappicon's licence limits redistribution in sold products. If this matters to you, keep a credit line for Solar and check with the author
- The headline count is rounded up: 2,630 unique designs (5,260 counting both weights) at review, not 2,700+
- There are only two weights; there is no duotone or thin style
- A Windows utility called ReIcon by Sordum is unrelated; search results mix them up

## Reusable ideas

- Publish a separate llms file that maps every icon name to its component name so agents don't guess
- Give each icon a `weight` prop instead of separate components per style
- Offer a web component with all data inlined for pages without a build step
- Credit contributors per icon in the data file and show it on the site

## Related

[Rune Icons](rune-icons.md), [MX Icons](mx-icons.md), [Iconoir](iconoir.md), [icons0](icons0.md)
