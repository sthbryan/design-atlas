---
title: DesignMD.cc
description: Free URL-to-DESIGN.md generator measuring live CSS, with an MIT CLI and a benchmark library.
url: https://designmd.cc
type: tool
formats: DESIGN.md generator (URL → file) · benchmark library · CLI
topics: [design-md, typography-and-styles, agents-and-prompts]
verdict: very-useful
agent: [cli, api]
pricing: free
licence: free, with no account. The quota is five generations per day per IP (the homepage also mentions "10 free analyses per day", but the FAQ and CLI both say five). Token-only JSON extraction doesn't count against it. The CLI (`@designmdcc/cli`) and the GitHub repo `adityarajdigital/designmd` (69 stars) are MIT. The site's terms keep the service and its content proprietary. No licence is stated for generated DESIGN.md files, and the FAQ asks you not to copy logos, trademarks or brand imagery and to respect each source site's terms.
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [hyperbrowser-design-md, design-md-chrome, designmd, refero-styles, open-design, getdesign-md]
---
[← Atlas](../site/home.md) · Topics: [design-md](../topics/design-md.md), [typography-and-styles](../topics/typography-and-styles.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# DesignMD.cc

## What it is

A side project by Aditya Raj that measures a live website and writes a DESIGN.md from what it finds. It opens the URL in a headless browser and reads computed styles, the CSS cascade, CSS variables, `@media` breakpoints, hover and focus states and contrast pairs, rather than working from a screenshot. An LLM then writes the measurements up as a spec. The site says 6,582 files have been generated, with a median time of about 65 seconds.

## When to open it

- When you want a detailed DESIGN.md for a specific production site in about a minute, free and without signing up.
- When you need the raw tokens as JSON (colors, type, breakpoints) to diff or audit rather than a narrative file.
- When you want a pre-generated example to compare against before writing your own DESIGN.md.

## Most useful

- A benchmark library of pre-measured sites (61 in the sitemap, across categories such as AI, developer tools, fintech and hosting), each with a palette, type sample, downloadable `.md`, copyable markdown, raw extraction and a token-rendered live preview.
- The output uses the same nine-part layout seen in OpenDesign's bundled files: Visual Theme & Atmosphere, Color Palette & Roles, Typography Rules (a table of role, size, weight, line height and tracking), Component Stylings, Layout Principles, Depth & Elevation, Do's and Don'ts, Responsive Behavior (measured breakpoints) and an Agent Prompt Guide.
- The generator page adds a Markdown / Tokens JSON / Live Preview toggle.

## Using it with agents

- `npx @designmdcc/cli stripe.com > DESIGN.md` streams the file to stdout. Also `dmd <url> --json` (tokens only, no LLM call), `--out`, `--force` to skip the cache and `--quiet`. Node 18+, no key. The CLI is a thin client for the site's API, so it shares the same daily limit.
- The CLI page gives ready-made rule snippets for Cursor (`.cursor/rules`), Claude Code (`CLAUDE.md`), Windsurf and Copilot (`.github/copilot-instructions.md`) that tell the agent to treat DESIGN.md as the source of brand values.
- There's no MCP server.

## Watch out for

- MIT covers the CLI and repo docs, not the generated specs. Those describe other companies' brands, so use them as a structural reference rather than something to republish.
- The narrative parts are written by an LLM, so some values are marked as inferred (for example a hover shade "inferred from screenshot"). Check them against the live site.
- Unlike [DESIGN.md](designmd.md) and [Refero Styles](refero-styles.md), which are curated libraries, this is mainly a generator: the benchmark list is small and made up of well-known SaaS brands.
- The quota numbers on the homepage don't match each other, so expect five a day.

## Reusable ideas

- Measure first and write later: pull tokens from computed styles and live media queries, then have an LLM describe them, instead of guessing from pixels.
- Offer a tokens-only mode that skips the LLM, for audits and CI diffs.
- Ship ready-to-paste rules-file snippets for each agent next to the spec, so every tool is told to treat DESIGN.md as ground truth.

## Related

[Hyperbrowser DESIGNMD](hyperbrowser-design-md.md), [TypeUI DESIGN.md Extractor](design-md-chrome.md), [DESIGN.md](designmd.md), [Refero Styles](refero-styles.md), [OpenDesign](open-design.md), [getdesign.md](getdesign-md.md)
