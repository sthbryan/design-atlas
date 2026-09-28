---
title: Designer Skills
description: 111 small design-practice skills in nine plugins, with a router that picks one entry point.
url: https://github.com/Owl-Listener/designer-skills
type: agent-skill-collection
formats: agent skill collection · Claude Code plugin marketplace · Gemini CLI extensions
topics: [agent-skills, ux-patterns, typography-and-styles, documentation]
verdict: useful
agent: [skill]
pricing: free
licence: free. MIT, © 2026 MC Dean (about 2.8k stars at review; single skills show about 1.4k–2.7k installs each on skills.sh). Last push 2026-09-05.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [ui-skills, laws-of-ux, interface-design, design-system-checklist, impeccable]
---
[← Atlas](../site/home.md) · Topics: [agent-skills](../topics/agent-skills.md), [ux-patterns](../topics/ux-patterns.md), [typography-and-styles](../topics/typography-and-styles.md), [documentation](../topics/documentation.md)

# Designer Skills

## What it is

Designer Skills ("The Designer Skills Pack") is MC Dean's library of design-practice knowledge written for agents. This repo holds 111 skills and 34 commands in nine plugins. Its marketplace also pulls in four sister collections in separate repos (AI product design, UX programme management, design leadership, inclusive design), for 273 skills in all. The skills are short, about 2.7 KB on average and 7 KB at most. Each one is a role, what it produces, a few concrete values and best practices. Skills are the knowledge, and commands are the workflows that chain them: `/design-research:discover`, for example, runs personas, an empathy map and a journey map. It covers the whole design process, not only visual UI.

## When to open it

- When you need a design deliverable, not a screen: a persona, an interview script, a component spec, a handoff document or a heuristic evaluation.
- When you want one small, focused skill (type scale, dark mode, loading states) instead of one large design prompt.
- As a model for writing and linting a big skill library that doesn't collide with itself.

## Most useful

The 111 skills, grouped by theme:

- **Research and strategy (26)**: personas, jobs-to-be-done, journey and empathy maps, interview scripts, surveys, card sorts, behavioural analytics, qual-quant triangulation, competitive analysis, IA, service blueprints, north-star vision and metrics.
- **Visual and UI craft (26)**: type scale, colour system, dark mode, spacing, layout grid, readable measure, visual hierarchy, data viz, illustration, platform conventions, six Gestalt laws, and seven `critique-*` skills (typography, colour, composition, density, affordance, brand, hierarchy).
- **Interaction and UX laws (22)**: forms, onboarding, navigation, search, errors, loading states, gestures, micro-interaction specs, state machines, conversational UX, and short skills for Fitts, Hick, Miller, Jakob, Tesler, Doherty, Zeigarnik, peak-end and serial position.
- **Systems (11)**: tokens, component specs, theming, motion, icons, naming, governance, localisation and accessibility audits.
- **Prototyping and testing (10)**: prototype strategy, wireframe specs, user flows, click tests, A/B tests, parallel concepts and concept selection.
- **Ops and communication (16)**: critique, design QA, handoff specs, sprints, design debt, impact reports, rationale, case studies, decks, UX writing and negotiation.
- **Router**: `/designer-toolkit:start-here` names your stage (understand, frame, explore, make, validate, ship) and gives one command plus the two that follow.

## Using it with agents

In Claude Code, run `/plugin marketplace add Owl-Listener/designer-skills`, then install plugins by name, for example `/plugin install ui-design@designer-skills`. Single skills also install through skills.sh (`npx skills add owl-listener/designer-skills --skill typography-scale`). For Gemini CLI, copy `.gemini/extensions/` into your project. Skills load when a task matches their description, or when you name them in the prompt. Commands produce structured documents (specs, plans, fix lists) rather than code.

## Watch out for

- The skills are thin. `typography-scale`, for example, lists a size ladder (12, 14, 16, 20, 24, 32, 40, 48–64 px), line heights of 1.2, 1.5 and 1.75, and tracking values, but has no anti-slop checks and no way to verify output.
- The README has count errors: it says "107 skills" in one place and 111 elsewhere.
- Only two skills (`behavioural-analytics`, `qual-quant-triangulation`) ship `EVALS.md` files.
- Its generic values can clash with stronger visual skills (Impeccable, Hallmark) if you install both. Pick one owner for type and colour rules.
- No network calls, telemetry or scripts run at use time. The Python scripts are CI linters only.
- New skills need an open issue first, and PRs without one are closed unread.

## Reusable ideas

- Write each description in three parts: what it produces, when to use it, and which nearby skill to use instead.
- Keep a "frequently confused" list of skill pairs that could fire in each other's place.
- Lint front matter in CI: the name matches the folder, the description has a "Use when" sentence, and every skill it references exists.
- Make the router return exactly one entry point, never a menu.

## Related

[UI Skills](ui-skills.md), [Laws of UX](laws-of-ux.md), [Interface Design](interface-design.md), [Design System Checklist](design-system-checklist.md), [Impeccable](impeccable.md)
