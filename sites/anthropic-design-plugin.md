---
title: Anthropic Design Plugin
description: "Anthropic's Apache-2.0 designer plugin: structured critique, UX copy, WCAG review and handoff templates."
url: https://github.com/anthropics/knowledge-work-plugins/tree/main/design
type: agent-skill-collection
formats: agent skill collection · Claude Code and Cowork plugin
topics: [agents-and-prompts, ux-patterns, documentation]
verdict: useful
agent: [skill]
pricing: free
licence: free. Apache-2.0 (repo-root `LICENSE`; `anthropics/knowledge-work-plugins` had about 25.6k stars at review). The design plugin is version 1.2.0; its folder last changed 2026-09-21.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [wondelai-skills, accesslint-skills, addy-osmani-web-quality-skills, design-system-checklist, laws-of-ux, impeccable]
---
[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [ux-patterns](../topics/ux-patterns.md), [documentation](../topics/documentation.md)

# Anthropic Design Plugin

## What it is

The design plugin is one of about 17 role plugins in Anthropic's knowledge-work repo, written mainly for Cowork (Anthropic's desktop agent app) and also usable in Claude Code. It holds seven short skills of 40 to 190 lines each: `design-critique`, `ux-copy`, `accessibility-review`, `design-system` (audit, document or extend), `design-handoff` (developer specs), `research-synthesis` and `user-research`. Unlike most design skills in the atlas, these are aimed at designers working from a Figma link, a screenshot or a description, not at code. Each skill is mostly a fixed markdown report template. A bundled `.mcp.json` sets up connectors for Figma, Slack, Linear, Asana, Atlassian, Notion and Intercom. The skills refer to tools by category (`~~design tool`, `~~project tracker`), so any MCP server of that kind works. On skills.sh, `design-critique` had about 4.8k installs and the others 3.2k to 4.0k.

## When to open it

- For structured feedback on a mockup or screen at any stage, from early exploration to final polish.
- When writing or reviewing microcopy: buttons, error messages, empty states, confirmation dialogs.
- When a design is ready for engineering and needs a spec of tokens, states, breakpoints and edge cases.

## Most useful

- **`design-critique`**: five passes (a two-second first impression, usability, visual hierarchy, consistency, accessibility), then a report with a severity table, what works well, and three ranked recommendations. It asks for context and stage first.
- **`ux-copy`**: CTAs that start with a verb and name the result; errors built as what happened, why, and how to fix it; empty states as what this is, why it is empty, and how to start; confirmations that name the action ("Delete 3 files?") with matching button labels. It gives three alternatives with tone notes and localisation notes.
- **`accessibility-review`**: a WCAG 2.1 AA quick reference keyed by criterion number, and tables for contrast (foreground, background, ratio, pass), keyboard behaviour per element, and what a screen reader announces.
- **`design-system` and `design-handoff`**: audits for naming, token coverage and component completeness; handoff specs that list layout, props, interaction states, responsive behaviour and animation.

## Using it with agents

Run `claude plugin marketplace add anthropics/knowledge-work-plugins`, then `claude plugin install design@knowledge-work-plugins`. The skills trigger on phrases such as "review this design", "what should this button say?" or "check a11y", or by name (`/design-critique <Figma URL>`). They produce markdown reports in fixed templates. They work without any connector; with Figma connected, the agent reads layers and tokens directly and can compare them with your design system.

## Watch out for

- Installing the plugin adds its remote MCP servers (Slack, Figma, Linear, Asana, Atlassian, Notion, Intercom). Each one signs in and sends data to its own service. Remove any you don't use.
- The README is out of date: it lists slash commands (`/critique`, `/handoff`) and skill names (`ux-writing`, `design-system-management`) that no longer exist since a March 2026 move from commands to skills.
- `accessibility-review` targets WCAG 2.1, not 2.2. It puts 44×44 px targets (2.5.5, which is AAA) under AA, where WCAG 2.2's AA minimum is 24×24 (2.5.8). It also says automated scans catch "~30%" of issues, while AccessLint cites about 57%.
- It does not check anything itself. There are no scripts, rendered checks or re-runs, so findings are the model's judgment of a screenshot or file. Use a browser-based skill for verified results.
- The copy examples use sentence case, which conflicts with Vercel's guideline of Title Case for buttons and headings.

## Reusable ideas

- Start every review by asking for the design, its context and its stage, and adjust how deep the feedback goes to the stage.
- Refer to tools by category placeholder so one skill works with Figma, Sketch or Framer.
- End with "what works well" and three ranked recommendations, not an unranked list.
- Require several copy options, each with its tone and the situation it suits, so the choice stays with a person.

## Related

[Wondel.ai Skills](wondelai-skills.md), [AccessLint Skills](accesslint-skills.md), [Web Quality Skills](addy-osmani-web-quality-skills.md), [Design System Checklist](design-system-checklist.md), [Laws of UX](laws-of-ux.md), [Impeccable](impeccable.md)
