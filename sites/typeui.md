---
title: TypeUI
description: Style-named design skills (SKILL.md + DESIGN.md) via an MIT CLI/registry and a paid hosted MCP.
url: https://www.typeui.sh
type: style-library
formats: style library of design skills · MCP · CLI · prompt library
topics: [design-md, agents-and-prompts, typography-and-styles]
verdict: useful
agent: [mcp, cli, skill]
pricing: freemium
licence: "the CLI and the public GitHub registry (`bergside/awesome-design-skills`, 67 skills) are MIT. The website's own resources fall under a TypeUI EULA: Creative $30/month, Insights (beta) $30/month, All-access $50/month, with yearly billing and an AppSumo lifetime deal also offered."
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [designmd, getdesign-md, design-md-chrome, vibeprompts, refero-styles]
---
[← Atlas](../README.md) · Topics: [design-md](../topics/design-md.md), [agents-and-prompts](../topics/agents-and-prompts.md), [typography-and-styles](../topics/typography-and-styles.md)

# TypeUI

## What it is

TypeUI is a platform from Bergside, the team behind Flowbite. It ships "design skills": each one is a visual direction written as a `SKILL.md` plus a `DESIGN.md`. The skills are named after styles, not brands (glassmorphism, neobrutalism, paper, editorial, claymorphism...). According to the site there are 94 design skills and 449 UI prompts. The paid tiers add UI animations, UI sound effects, brand kits, UI/UX audits and a separate analytics product.

## When to open it

- When you want a generic look (say "brutalist" or "soft neumorphic") rather than a copy of a real company's style.
- When you want the agent to follow strict rules (component states, accessibility, quality gates) and not just a palette.
- When you want to create your own DESIGN.md through a guided CLI instead of writing one by hand.

## Most useful

- The open registry: 67 style folders on GitHub, each with a `SKILL.md` for agents and a shorter `DESIGN.md` for people.
- The `DESIGN.md` format: YAML front matter (`name`, `colors`, `typography`, `rounded`, `spacing`) followed by Overview, Style Foundations, and Colors.
- The `SKILL.md` format: Mission, Brand, Style Foundations, Accessibility, Writing Tone, Do and Don't rules, Expected Behavior, Required Output Structure, Component Rule Expectations, and Quality Gates.
- Skill pages list the component families covered, the required states for each, and a WCAG 2.2 AA target.
- A separate `typeui-fundamentals` skill covers general UI/UX rules.

## Using it with agents

- CLI: `npx typeui.sh pull <slug>` fetches a registry skill (add `--format design` for DESIGN.md, which is written to the project root). `list` browses the registry. `generate` and `update` build a file from interactive questions. `randomize` creates a random starter system.
- MCP: a hosted server at `https://mcp.typeui.sh/mcp` with OAuth sign-in. It serves skills, prompts and layout variations. You can publish your own workspace design system (from a theme, a markdown ZIP, or a Figma import in beta) as several markdown files that the MCP then serves.
- There are setup guides for Codex, Claude, Cursor and about twenty other tools. Related extractors from the same team: [TypeUI DESIGN.md Extractor](design-md-chrome.md), plus Figma and Penpot plugins.

## Watch out for

- There are two licences. Registry files on GitHub are MIT. Anything copied, downloaded or reached over MCP from the website falls under the EULA. The EULA allows personal, client and commercial projects, and you keep the output after cancelling. It forbids redistributing the files or collections, or using them to build a competing registry or dataset. Account-gated resources may only be used while a paid plan is active.
- The registry `DESIGN.md` files are short and templated (about 55 lines). The detailed rules are in `SKILL.md`, so give the agent both files.
- Everything is style-based, so no file captures a real brand. If you need a brand reference, look at Refero Styles or getdesign.md.
- The site sits behind a bot checkpoint, so plain `curl` gets an HTTP 429. Use the GitHub registry for scripted access.

## Reusable ideas

- Split the design spec in two: a strict agent-facing `SKILL.md` (rules, states, quality gates) and a human-facing `DESIGN.md` (intent, rationale).
- Add "quality gates" (acceptance checks a reviewer can test) to your own DESIGN.md, not just tokens.
- Name styles by aesthetic rather than by brand, so they can be reused without trademark worries.
- Recommend one active design system per project so the agent doesn't get conflicting instructions.

## Related

[DESIGN.md](designmd.md), [getdesign.md](getdesign-md.md), [TypeUI DESIGN.md Extractor](design-md-chrome.md), [VibePrompts](vibeprompts.md), [Refero Styles](refero-styles.md)
