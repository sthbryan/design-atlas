---
title: UI UX Pro Max
description: Searchable local database of styles, palettes and font pairs, queried by a script; writes MASTER.md plus page overrides.
url: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
type: agent-skill
formats: agent skill collection · local search database · CLI installer
topics: [agent-skills, design-md, typography-and-styles, ux-patterns]
verdict: very-useful
agent: [cli, skill]
pricing: freemium
licence: free. MIT (repo `LICENSE`). About 130.7k GitHub stars at review; skills.sh counts 371k installs of the main skill and 748k across the repo. A paid "Premium" tier is sold at uupm.cc. One bundled sibling skill (`ui-styling`) ships an Apache-2.0 `LICENSE.txt` and a folder of OFL fonts.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [impeccable, hallmark, ui-skills, typeui, anthropic-skills]
---
[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [design-md](../topics/design-md.md), [typography-and-styles](../topics/typography-and-styles.md), [ux-patterns](../topics/ux-patterns.md)

# UI UX Pro Max

## What it is

UI UX Pro Max, by NextLevelBuilder, is a design skill built around data rather than prose. The `ui-ux-pro-max` skill carries a set of CSV tables and a Python search script. The tables hold 79 UI styles (50 active), 192 product types each paired with a palette and a reasoning rule, 74 font pairings, 119 UX guidelines, 25 chart types, icon and GSAP presets, and guidance for 22 stacks from React and SwiftUI to WPF and Three.js. The agent does not read all of this. It runs `search.py` with a short query, and a BM25 ranker returns the few matching rows. The repo also ships six sibling skills written by ClaudeKit (`design`, `design-system`, `brand`, `banner-design`, `slides`, `ui-styling`), and every install path brings them along. The main skill folder is about 3.5 MB, almost all of it data.

## When to open it

- When you want an agent to pick a style, palette and font pairing for a product type (spa, fintech, developer tool) from a fixed catalogue instead of inventing one.
- When you need stack-specific UI guidance for less common targets such as Flutter, Jetpack Compose, WinUI or Avalonia.
- When you want a persisted design-system file that later sessions can read before building each page.

## Most useful

- **`--design-system` mode**: one query runs five searches (product, style, colour, landing pattern, type) and applies the matching reasoning rule. It returns a section pattern, a style, five named hex colours, a font pair, key effects, anti-patterns for that industry and a pre-delivery checklist.
- **Master and overrides**: `--persist` writes `design-system/<project>/MASTER.md` plus optional `pages/<page>.md` files whose rules override the master. It refuses to overwrite an existing master unless `--force` is passed.
- **Three dials**: `--variance`, `--motion` and `--density` (1–10) bias the style, attach a GSAP snippet, and swap the spacing scale (24–96 px spacious, 8–32 px dense).
- **Priority table**: ten rule groups in a fixed order, starting with accessibility (4.5:1 contrast, visible focus) and touch (44×44 px targets, 8 px gaps), down to charts.
- **Query contract**: one intent and 2–5 terms per search, check the result, retry once, and say so plainly when nothing matched rather than inventing data.

## Using it with agents

In Claude Code, run `/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill`, then `/plugin install ui-ux-pro-max@ui-ux-pro-max-skill`. Other options are `npx skills add nextlevelbuilder/ui-ux-pro-max-skill`, or the `uipro` CLI (npm `ui-ux-pro-max-cli`, then `uipro init --ai claude`), which knows about 20 agents. The skill triggers on almost any request that changes how an interface looks, moves or behaves. It needs Python 3 and nothing else. The output is terminal text by default, or markdown and JSON with `-f markdown` and `--json`. MASTER.md is its own layout (global rules, a colour-token table with `--color-*` names, a `--space-*` scale, component specs, style, motion, anti-patterns and a checklist), not the Google DESIGN.md format.

## Watch out for

- The search scripts use only the standard library and make no network calls. But `uipro init` first tries to download the latest GitHub release (use `--offline` to skip that), and the sibling `design` skill calls image APIs (Gemini, Atlas Cloud or MuAPI) for logos and mockups with your own keys. `design-system` can fetch stock photos from Pexels or Unsplash.
- You get seven skills, not one. The ClaudeKit siblings overlap with the main skill and with [Impeccable](impeccable.md) or [Hallmark](hallmark.md), so disable the ones you don't want.
- `ui-styling` says MIT in its front matter but ships an Apache-2.0 licence file and the same 54 fonts as Anthropic's `canvas-design`.
- A catalogue picks from what is already common: glassmorphism, bento grids and stock palettes come out on top. The anti-generic skills in this atlas argue against exactly those defaults.
- Version numbers drift: the plugin manifest says 2.13.0 while the latest release is v2.15.0.

## Reusable ideas

- Keep large reference data in files an agent queries, not in the prompt, and return only the top matches.
- Tie each product type to a reasoning rule that bundles style, palette, type and industry-specific anti-patterns.
- Persist one master design file plus per-page overrides, and never overwrite the master without permission.
- Require the agent to say when a search found nothing, instead of passing defaults off as data.

## Related

[Impeccable](impeccable.md), [Hallmark](hallmark.md), [UI Skills](ui-skills.md), [TypeUI](typeui.md), [Anthropic Skills](anthropic-skills.md)
