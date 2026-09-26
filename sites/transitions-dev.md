---
title: Transitions.dev
description: Curated product-UI transitions as portable CSS, with an agent skill, CLI and live Refine timeline.
url: https://transitions.dev
type: component-library
formats: component library · agent skill · CLI
topics: [motion, components, agents-and-prompts, ai-interfaces]
verdict: very-useful
agent: [skill]
pricing: freemium
licence: Free core set; Pro $9/month solo, $39/month for 5 seats, or $149/$499 lifetime. Snippets may be used in unlimited commercial projects, but the collection may not be redistributed; Refine tool MIT
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [easing-wizard, dialkit, motion-primitives, microkit]
---
[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md), [ai-interfaces](../topics/ai-interfaces.md)

# Transitions.dev

## What it is

Transitions.dev is a curated set of UI transitions for web apps by designer Jakub Antalik. Each card is a live demo with a copy button. The homepage shows about forty of them, free and Pro mixed, grouped as Essential, AI Agents, Effects and Texts. They include card resize, origin-aware dropdowns, modal and panel open/close, a forward/back page slide, icon swaps, error shakes, skeleton-to-content reveals, sliding tab pills, toasts and accordions. There is also a group of AI-interface states: thinking shimmers, a reasoning stream, streaming text and an image-generation placeholder. The public GitHub repo had about 4.4k stars when reviewed.

## When to open it

Open it when you are building product UI (menus, modals, toasts, tabs, confirmations) and want transitions that feel considered without designing each one yourself. It also suits a motion clean-up pass, when a codebase has piled up one-off durations and easings.

## Most useful

- **Portable snippets**: each copy gives plain CSS with custom properties on `:root`, classes namespaced under `t-*` and a `prefers-reduced-motion` guard, so it drops into any stack. Pro adds React and TypeScript versions
- **CLI**: `npx transitions-dev add card-resize` or `add --free` writes recipes into your project. Pro recipes need a browser sign-in first
- **Motion tokens**: the recipes share one duration and easing scale, and the tooling can map your existing values onto it
- **Refine (beta)**: `npx transitions-refine live` adds a timeline panel to your running dev app. It finds CSS and Motion (motion.dev) animations and lets you tune them live, then writes accepted values back to your source

## Using it with agents

The site is built for agents. `npx skills add Jakubantalik/transitions.dev` installs a skill for Claude Code, Cursor, Copilot, Codex and Gemini CLI. The skill carries the free recipes and adds commands: `transitions reveal` lists the catalogue, `review` and `refine` scan the project for ad-hoc motion without editing anything, and `apply` suggests the best-fit transition for the current context and installs it once you confirm. An optional `transitions-polish` skill adds rules for open/close asymmetry, hover and stagger. No MCP server or `llms.txt`.

## Watch out for

- The published counts disagree (the README lists 18 free transitions, the skill page says 27+, Pro says 36+), so check the live catalogue
- Several of the showiest demos (confetti, gooey menu, smoky delete, gradient text) are Pro only
- The terms forbid repackaging the collection as your own transitions or component kit
- Refine is beta, dev-only, and polls your agent. In editor mode it uses chat credits for as long as it runs

## Reusable ideas

- Make opening slower and more expressive than closing, and let tooltips appear after a delay and vanish at once
- Scale menus from the side they are attached to, not from their centre
- Blur briefly during text and icon swaps to hide the moment of change
- Give AI states (thinking, streaming, generating) their own motion vocabulary
- Store durations and easings as tokens and audit code for hard-coded values

## Related

[Easing Wizard](easing-wizard.md), [DialKit](dialkit.md), [Motion Primitives](motion-primitives.md), [MicroKit](microkit.md)
