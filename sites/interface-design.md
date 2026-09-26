---
title: Interface Design
description: Craft skill for dashboards and SaaS UI that saves design decisions to system.md across sessions.
url: https://interface-design.dev
type: agent-skill
formats: agent skill · Claude Code plugin with two review commands
topics: [agent-skills, components, typography-and-styles, ux-patterns]
verdict: very-useful
agent: [skill]
pricing: free
licence: free. MIT, © 2026 Damola Akinleye (GitHub `Dammyjay93/interface-design`, about 5.7k stars and about 27.6k skills.sh installs at review). Last change 2026-06-20.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [impeccable, hallmark, ui-skills, design-lab, designer-skills]
---
[← Atlas](../README.md) · Topics: [agent-skills](../topics/agent-skills.md), [components](../topics/components.md), [typography-and-styles](../topics/typography-and-styles.md), [ux-patterns](../topics/ux-patterns.md)

# Interface Design

## What it is

Interface Design is a design skill for product UI: dashboards, admin panels, SaaS apps, settings pages and data tools. It says outright that it is not for landing pages or marketing sites. The repo was renamed from `claude-design-skill`. It ships one `SKILL.md` (about 30 KB), two Claude Code commands (`design-review` and `design-deslop`), two sample system files and a website with before-and-after examples. Its main idea is memory. Once you approve a direction, the agent writes it to `.interface-design/system.md` (depth strategy, spacing base, type scale, component sizes) and reads that file again in later sessions, so button heights and spacing stop changing from one session to the next.

## When to open it

- When an agent builds several screens of one app over many sessions and the values keep shifting.
- When you need craft rules for dense product UI, which most anti-slop skills leave out because they focus on landing pages.
- When you want a strict design review of a branch with a clear approve-or-block result.

## Most useful

- **Domain exploration before any direction**: at least five concepts from the product's world, five colours found in that world, one signature element, and three defaults to reject.
- **Per-component checkpoint**: before writing UI code the agent states intent, focal element, palette, depth, surfaces, typography and spacing, with a reason for each.
- **Concrete values**: a type ratio of about 1.2 to 1.333 from a 14–16 px body; surface steps a few lightness points apart; dark-mode borders at `rgba(255,255,255,0.06–0.12)`; roughly 60/30/10 colour with one accent; one depth strategy per product.
- **Motion rules**: under 300 ms, ease-out `cubic-bezier(0.23, 1, 0.32, 1)`, `scale(0.97)` press feedback, no animation on actions used 100+ times a day.
- **Four checks before showing work**: swap, squint, signature and token tests.
- **Build order for controls**: native HTML first, then a headless primitive (Radix, React Aria and similar), and hand-rolled controls only as a last resort.

## Using it with agents

Install with `npx skills add https://github.com/dammyjay93/interface-design --skill interface-design` (add `--agent claude-code -g` or `--agent codex -g`), or through the Claude Code marketplace (`/plugin marketplace add Dammyjay93/interface-design`). It triggers on product-UI requests or `/interface-design`. The plugin route adds `/interface-design:design-review` (a five-step, lens-by-lens review with severity and an approval bar) and `/interface-design:design-deslop` (a fast pass over the diff). When the host has an inline render tool, the skill shows palettes and components as live specimens.

## Watch out for

- The two commands only come with the plugin install. With `npx skills` you have to ask for a review or deslop pass in plain language.
- No network calls or telemetry. The optional image-generation pass depends on whatever image tool your agent already has.
- Its motion values match Emil Kowalski's, but they may disagree with other motion skills you have installed.
- It mixes borders-only depth with a separate "shadows over borders" polish rule. Decide which one your product follows and record it in `system.md`.
- It is written with Linear, Vercel and Stripe as the benchmark, so it pulls towards a cool, dense SaaS look unless the intent you state pushes it elsewhere.

## Reusable ideas

- Save approved design decisions to a project file and reload it every session instead of guessing again.
- Make the agent name the defaults it is avoiding before it proposes a direction.
- Use a "swap test": if replacing your font or layout with the usual one changes nothing, you defaulted.
- Record a component in the system file only after it is reused, with its exact measurements.

## Related

[Impeccable](impeccable.md), [Hallmark](hallmark.md), [UI Skills](ui-skills.md), [Design Lab](design-lab.md), [Designer Skills](designer-skills.md)
