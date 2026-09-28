---
title: design.dev
description: Free generators for DESIGN.md, AGENTS.md, CLAUDE.md and more, plus component prompts and style packs; strict terms.
url: https://design.dev
type: tool
formats: generators · prompt library · style packs · CSS tools
topics: [agents-and-prompts, design-md, components]
verdict: useful
agent: [llms-txt, prompts, skill]
pricing: free
licence: free, no account needed for the tools. No licence is stated for the prompts, style packs or generated files. The Terms (updated 24 March 2026) forbid copying, redistributing or publishing any portion of the site. The site is funded by sponsors and affiliate links, which the Terms say are not always labelled. Newsletter takeovers start at $300 per send.
licence_class: proprietary-free
reviewed: 2026-09-25
status: active
related: [typeui, designmd-cc, designmd-supply, vibeprompts, shadcn-ui]
---
[← Atlas](../site/home.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [design-md](../topics/design-md.md), [components](../topics/components.md)

# design.dev

## What it is

design.dev is a resource site for front-end developers who work with coding agents. The owner is not named on the site. It has four parts: generators for agent config files, a copy-paste prompt library, "style packs", and more than 30 browser-based CSS tools and reference guides. There are generators for DESIGN.md, design tokens, `CLAUDE.md`, Claude Code hooks and permissions, `AGENTS.md`, `SKILL.md`, Cursor `.mdc` rules, Copilot instructions, `GEMINI.md`, Cline and Devin rules, `tasks.md`, subagents, MCP configs and `llms.txt`. It also has a decoder that turns a shadcn preset code into CSS and a DESIGN.md. The weekly newsletter claims 9,000+ readers and gives away a 300-icon pack.

## When to open it

- When you need a correctly shaped config file for an agent you don't use every day, and want a form instead of reading its docs.
- When you want to write or check a DESIGN.md in a visual editor with live preview and linting.
- When you want a detailed spec prompt for a common widget (command palette, date picker, OTP input) to paste into an agent.

## Most useful

- **DESIGN.md generator**: build tokens and prose sections, preview them, lint against eight rules that mirror Google's `@google/design.md` linter, and export markdown, CSS variables, Tailwind v4 or DTCG JSON.
- **Prompt library**: 12 long component prompts (data table, multi-step form, rich-text editor, toast stack and more). Each gives exact values, keyboard behaviour and a live preview, and targets vanilla HTML, CSS and JS with no dependencies.
- **Style packs**: three constraint sets (Swiss Editorial, Brutalist Terminal, Warm Print Magazine), each shipped as a `SKILL.md`, a Cursor rule, a `DESIGN.md` or a prompt overlay.
- **Checks for agent output**: a contrast checker (WCAG 2.2 and APCA), browser feature detection and an image optimiser.

## Using it with agents

The `llms.txt` is a complete, well-described index of every tool, guide, prompt and style pack. Style-pack files have predictable URLs (`/ai/prompts/style-packs/<slug>/SKILL.md`, `DESIGN.md` and `<slug>.mdc`), so an agent can fetch one directly. The site sits behind Cloudflare: those files loaded with a browser user agent but returned 403 to a bare `curl`. There is no MCP server, CLI or API. The generators produce files you copy into the repo yourself.

## Watch out for

- The Terms are restrictive and say nothing about prompt or pack output. Use the files as a starting point in your own project, and don't republish them.
- Sponsored banners sit inside tool pages and look like part of the tool.
- Only three style packs exist so far, and the component prompts assume vanilla JS unless you tell the agent otherwise.
- Much of the site (TypeScript, Git and JS guides) is general web-dev content rather than design.

## Reusable ideas

- Treat a style as a set of hard constraints plus a drift test: describe what the page should still read as, and what it must not turn into.
- Ship one style in several formats (skill, editor rule, DESIGN.md) from a single source so every agent gets the same rules.
- Reference `DESIGN.md` from `AGENTS.md` so any agent that reads the project file finds the design system.
- Put exact numbers (radii, shadows, timings) and keyboard behaviour in component prompts instead of adjectives.

## Related

[TypeUI](typeui.md), [DesignMD.cc](designmd-cc.md), [designmd.supply](designmd-supply.md), [VibePrompts](vibeprompts.md), [shadcn/ui](shadcn-ui.md)
