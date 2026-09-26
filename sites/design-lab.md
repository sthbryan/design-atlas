---
title: Design Lab
description: Interviews you, mounts five code variants on a temporary route, then writes an implementation plan.
url: https://github.com/0xdesign/design-plugin
type: agent-skill
formats: agent skill · Claude Code plugin (`design-and-refine`)
topics: [agent-skills, ux-patterns, components]
verdict: useful
agent: [skill]
pricing: free
licence: free. The README and `plugin.json` say MIT, but the repo has no licence file (GitHub shows none). About 760 stars and about 1.8k skills.sh installs at review. Plugin 1.1.0, skill last changed 2026-01-24.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [agentation, interface-design, superdesign-skill, laws-of-ux, impeccable]
---
[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [ux-patterns](../topics/ux-patterns.md), [components](../topics/components.md)

# Design Lab

## What it is

Design Lab is the skill inside 0xdesigner's `design-and-refine` plugin for Claude Code. It runs a whole exploration loop inside your own app. First it interviews you: scope, pain points, inspiration, brand tone, the user and their jobs, and constraints. Then it writes a design brief, generates five variants of a component or page as real code in your framework, and mounts them side by side on a temporary `/__design_lab` route in your dev server. You leave feedback, it combines the parts you liked into a new variant, and at the end it deletes every temporary file. What stays is a `DESIGN_PLAN.md` for implementation and a `DESIGN_MEMORY.md` of style decisions for later sessions. Alongside the 30 KB `SKILL.md` is a 55 KB `DESIGN_PRINCIPLES.md` covering Nielsen's heuristics, forms, tables, motion, accessibility and a list of anti-patterns.

## When to open it

- When you are unsure how a component should work and want to compare real options in the running app, not static mockups.
- When you want to show stakeholders several concrete choices instead of describing them.
- When you want variants that stay inside the project's existing tokens rather than a new style.

## Most useful

- **Five fixed axes**: variant A changes the information hierarchy, B the layout model (cards, list, table, split pane), C the density, D the interaction model (modal, inline, drawer), and E pushes the brand expression.
- **Style inference, not presets**: it reads Tailwind theme keys, `:root` variables or the MUI, Chakra or Ant theme, and looks at two or three existing buttons, cards and forms before generating anything.
- **Click-to-comment overlay**: a React overlay lets you pin comments to elements in any variant. They are saved in `localStorage` and copied to the clipboard as structured feedback with element selectors, ready to paste into the terminal.
- **Cleanup rules**: cancelling at any point removes `.claude-design/` and the lab route, and a Stop and SessionEnd hook warns if anything was left behind.
- **Plan template**: files to change, steps, component API, required states, an accessibility checklist, a testing checklist and tokens.

## Using it with agents

Install with `/plugin marketplace add 0xdesign/design-plugin` and `/plugin install design-and-refine@design-plugins`, then run `/design-and-refine:start` (optionally with a target such as `ProfileCard`). The skill is also listed on skills.sh as `0xdesign/design-plugin/design-lab`. It supports Next.js, Vite, Remix, Astro and Create React App, styled with Tailwind, CSS Modules, MUI, Chakra, Ant Design, styled-components or Emotion. Keep your dev server running yourself, because the skill deliberately never starts it.

## Watch out for

- No licence file. Treat reuse of the text or the overlay code as unclear until one is added.
- It writes routes and files into your app during a session. Commit or stash your work first in case cleanup is interrupted.
- The design principles are mostly borrowed from well-known sources (Nielsen, Norman, Saffer, Stripe and Linear patterns). It has little point of view of its own on visual style.
- No network calls or telemetry in the skill or the overlay. The same marketplace also lists `design-gate`, a separate repo that was new with one star at review.
- The skill itself has not changed since January 2026. Only the marketplace file was updated later.

## Reusable ideas

- Tie each variant to one named design axis so the options really differ.
- Let reviewers comment on the element itself and hand the agent selectors, not vague descriptions.
- Make cleanup part of the contract, with a hook that catches leftovers.
- Finish exploration with a plan another agent can carry out, not with a direct edit.

## Related

[Agentation](agentation.md), [Interface Design](interface-design.md), [Superdesign](superdesign-skill.md), [Laws of UX](laws-of-ux.md), [Impeccable](impeccable.md)
