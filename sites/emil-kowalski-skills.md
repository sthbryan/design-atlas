---
title: Emil Kowalski's skills
description: "Emil Kowalski's 13 motion-first skills: when to animate, exact curves and durations, Apple-style springs, animation audits."
url: https://github.com/emilkowalski/skills
type: agent-skill-collection
formats: agent skill collection
topics: [agent-skills, motion, ux-patterns]
verdict: very-useful
agent: [skill]
pricing: free
licence: free. MIT (© 2026 Emil Kowalski, repo-root `LICENSE`; about 41k stars at review, last skill change 2026-09-15). The author's site also promotes a paid course, aiforui.dev, which you don't need to use the skills.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [jakub-krehel-skills, ui-skills, impeccable, easing-wizard, transitions-dev]
---
[← Atlas](../README.md) · Topics: [agent-skills](../topics/agent-skills.md), [motion](../topics/motion.md), [ux-patterns](../topics/ux-patterns.md)

# Emil Kowalski's skills

## What it is

A set of 13 agent skills from Emil Kowalski, the design engineer behind Sonner and Vaul, based on his work at Vercel and Linear. Most of them deal with motion. The main one, `emil-design-eng`, is a single 674-line file: a short philosophy of taste, a four-question framework for deciding on an animation (should it animate, why, which easing, how fast), component and gesture rules, and a closing checklist. The other twelve are `animate` (builds a new animation step by step), `review-animations` (a strict review that ends in a verdict), `improve-animations` (a read-only codebase audit that writes plans), `find-animation-opportunities` (suggests where motion would help and where it shouldn't go), `animation-vocabulary` (gives the proper name for a vaguely described effect), `apple-design` (Apple's WWDC ideas on fluid motion, materials and type, adapted for the web), `mobile-native` (fixes that make a web app feel installed on a phone), `prototype` (several variants behind a live picker), `pick-ui-library` (the libraries he trusts, task by task), `animate-expo` (React Native and Expo), `ask-sonner` (a guide to his toast library) and `write-swift` (modern Swift, not design).

## When to open it

- When an agent's animations feel wrong (ease-in entrances, slow dropdowns, things growing from nothing) and you want exact replacement values.
- Before you add motion to app UI, to decide whether an element should move at all given how often people see it.
- When you build gesture-driven UI such as sheets, drawers or drag-to-dismiss, or when a web app has to feel native on a phone.

## Most useful

- **Frequency gate** (in `emil-design-eng` and `animate`): anything used 100+ times a day, such as a command palette, gets no animation. The delight budget goes to rare moments like onboarding. Actions started from the keyboard never animate.
- **Easing and duration bands**: ease-out for entering and leaving, ease-in-out for moving on screen, never ease-in for UI. Named curves include `cubic-bezier(0.23, 1, 0.32, 1)`. Presses take about 100–160 ms and most UI motion stays under 300 ms.
- **Component details**: press at `scale(0.97)`; enter from 0.9–0.95 plus opacity, never `scale(0)`; popovers grow from their trigger while modals stay centred; once one tooltip is open, the next ones appear instantly; reduced motion means gentler motion, not none.
- **`apple-design`**: spring presets given as damping and response, velocity handoff on release, momentum projection, rubber-banding at edges, translucent materials, and tracking and leading that change with size. It ends with a need → technique → value table.
- **`improve-animations`**: recon, then a `quick`, `standard` or `deep` audit, then numbered plans in `plans/` that another agent or a cheaper model can carry out. `execute <plan>` hands one to a subagent in a separate worktree and reviews its diff.

## Using it with agents

Run `npx skills@latest add emilkowalski/skills` to install all of them, or add `--skill <name>` for one. On skills.sh the pack showed about 1.6M installs at review, with `emil-design-eng` alone near 299k. Every skill also has a page and its own `llms.txt` on ui-skills.com. `pick-ui-library`, `prototype` and `review-animations` only run when you call them by name. The others can load from their description. There is no MCP server or plugin manifest. Each skill is a plain `SKILL.md`, a few with extra files (`RECIPES.md`, `STANDARDS.md`, audit and plan templates), so copying a folder into your skills directory also works.

## Watch out for

- `emil-design-eng`'s description is a philosophy statement with no trigger phrases, so it may not load on its own. Invoke it by name.
- Every skill starts with a fixed one-line greeting when called without a question, then waits.
- The main skill is nearly all motion despite its name. Layout and colour get little attention; only `apple-design` goes deep on type.
- Parts assume Motion and Base UI (`useSpring`, `--transform-origin`). The main skill says UI motion should stay under 300 ms, yet some of its own examples run at 400 ms.
- Used together with Jakub Krehel's suite, the values clash: press scale is 0.97 (range 0.95–0.98) here and exactly 0.96 in `better-ui`, and springs here may bounce while `better-ui` keeps bounce at 0. A dashboard built with both shipped both press scales. Pick one and write it into your project rules.
- The author's page at emilkowal.ski/skill lags the repo. It shows a singular `emilkowalski/skill` install command and lists 9 of the 13 skills. Follow the README instead.
- `write-swift` and `ask-sonner` are not general UI guidance; leave them out if that's all you want.

## Reusable ideas

- Decide whether to animate from how often the user sees the element, before choosing any curve.
- Move slowly where the user is deciding and quickly where the system is answering; make exits faster than entrances.
- Give every review the same Before / After / Why table.
- Keep auditing apart from implementing: a read-only pass writes self-contained plans that any agent can run.
- Teach the agent precise names for effects ("rubber-banding", "pop in"); a named effect gets better motion than a description.

## Related

[Jakub Krehel's skills](jakub-krehel-skills.md), [UI Skills](ui-skills.md), [Impeccable](impeccable.md), [Easing Wizard](easing-wizard.md), [Transitions.dev](transitions-dev.md)
