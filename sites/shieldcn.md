---
title: shieldcn
description: shadcn-styled README badges, charts and headers from 45+ providers, with a README builder and agent skill.
url: https://shieldcn.dev
type: asset-library
formats: badge image service · README builder · agent skill
topics: [assets, documentation, agents-and-prompts]
verdict: useful
agent: [llms-txt, registry, skill]
pricing: free
licence: free public service; MIT (repo `jal-co/shieldcn`); can be self-hosted with Docker
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [ogimagecn, iconoir, shadcn-ui, component-gallery]
---
[← Atlas](../site/home.md) · Topics: [assets](../topics/assets.md), [documentation](../topics/documentation.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# shieldcn

## What it is

A drop-in alternative to shields.io whose SVG and PNG badges are drawn to look like shadcn/ui buttons, by Justin Levine (a product engineer at Mastra, per his GitHub profile). Badges are plain image URLs, so they work anywhere Markdown or an `img` tag does. According to the docs it pulls data from 45+ providers, including npm, GitHub, GitLab, PyPI, crates.io, Docker Hub, Discord, Bluesky, YouTube and the VS Code Marketplace. It also renders star-history charts, header banners and sponsor and contributor walls. The repository had about 900 stars at review time.

## When to open it

When a project README, docs site or npm page needs status badges that match a shadcn-styled brand instead of the classic flat shields, or when you want to lay out a whole README visually.

## Most useful

- **Badge styling**: six variants (default, secondary, outline, ghost, destructive and branded), light or dark mode, colour themes, gradients, split two-tone labels and status dots for CI.
- **Icons**: Simple Icons slugs, Lucide and React Icons by prefix, or your own SVG as a data URI.
- **Charts and headers**: star history, issues and npm downloads as SVG line charts, and banner presets (grid, dots, glow, gradient, photo).
- **README Studio**: a free browser editor with text, header, badge, chart, table and image blocks that exports GitHub Markdown, with an option to output light/dark `<picture>` pairs.
- **CLI and Action**: `npx shieldcn-cli` scans a repo and suggests badges; a GitHub Action commits star charts to the repo.

## Using it with agents

An agent skill installs with `npx skills add jal-co/shieldcn` and teaches the providers, URL patterns and options. `llms.txt` and `llms-full.txt` list every endpoint and query parameter, which is enough for an agent to write badge URLs directly. React helpers (a badge, a badge row and a preview) are served as shadcn registry items under `@shieldcn`.

## Watch out for

- The registry index `/r/registry.json` returned 404 even though single items resolve, and shadcn's public directory marked `@shieldcn` as unavailable and hidden at review time.
- The docs disagree on the number of colour themes (10 in the parameter table, 16 in the comparison list).
- Badges depend on a hosted service; for anything critical, self-host (Docker plus PostgreSQL, with optional GitHub and YouTube keys) to avoid rate limits and outages.
- Brand logos from Simple Icons remain their owners' trademarks.

## Reusable ideas

- Style README badges with the same tokens as the product UI so the repo looks like part of the brand.
- Export light and dark variants as a `<picture>` pair so images follow the reader's theme.
- Let a CLI detect the stack and propose badges instead of hand-picking URLs.
- Offer a shields-compatible JSON endpoint so existing tooling can switch over gradually.

## Related

[ogimagecn](ogimagecn.md), [Iconoir](iconoir.md), [shadcn/ui](shadcn-ui.md), [The Component Gallery](component-gallery.md)
