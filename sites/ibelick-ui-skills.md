---
title: ibelick UI Skills
description: "Seven short MIT skills: baseline-ui rules, motion-performance and accessibility fixes, and an evidence-gated improve-ui auditor."
url: https://github.com/ibelick/ui-skills
type: agent-skill-collection
formats: agent skill collection · CLI · MCP
topics: [agent-skills, ux-patterns, motion, design-md]
verdict: very-useful
agent: [mcp, cli, skill]
pricing: free
licence: free. MIT (repo-root `LICENSE`; about 9.1k stars at review, last push 2026-09-22). The `ui-skills` npm CLI (0.2.4) is MIT too.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [ui-skills, motion-primitives, prompt-kit, vercel-web-design-guidelines, impeccable, designmd]
---
[← Atlas](../README.md) · Topics: [agent-skills](../topics/agent-skills.md), [ux-patterns](../topics/ux-patterns.md), [motion](../topics/motion.md), [design-md](../topics/design-md.md)

# ibelick UI Skills

## What it is

These are the seven skills ibelick (Motion Primitives, prompt-kit) writes himself, kept in the same repo as the ui-skills.com directory site. They are short and each has one job. `baseline-ui` (85 lines) is a clean-up pass. The three `fixing-*` skills cover accessibility, metadata and motion performance, with rules ranked by priority. `improve-ui` (added July 2026) is a read-only auditor that writes plans for another agent. `create-design-md` (added July 2026) writes a DESIGN.md from a repo or a rendered URL. `ui-skills-root` is a router that picks at most three skills for a task. skills.sh counted about 23.4k installs for `fixing-motion-performance`, 20.9k for `baseline-ui`, 19.1k for `fixing-accessibility`, 15.9k for `fixing-metadata`, 5.5k for `improve-ui`, 5.3k for the router and 3.0k for `create-design-md`.

## When to open it

- When agent-written UI needs a quick "deslop" pass with rules a reviewer can tick off.
- When animations stutter and you want the cause named (layout thrash, scroll listeners, large blurs) without switching animation library.
- When you want an audit of a real product that respects its existing design system instead of imposing a new one.

## Most useful

- **`baseline-ui`**: MUST, SHOULD and NEVER lines. No animation unless asked, only `transform` and `opacity`, interaction feedback no longer than 200 ms, `h-dvh` not `h-screen`, `text-balance` on headings and `text-pretty` on body, `tabular-nums` for data, a fixed `z-index` scale, no gradients or glow as a main affordance, one accent colour per view, and every empty state gets one clear next action.
- **`fixing-motion-performance`**: nine rule groups from "never" patterns to tool boundaries. Never read and write layout in the same frame, never drive motion from scroll events, use scroll or view timelines instead, keep animated blur at 8 px or less, use `will-change` only while animating, and use view transitions only for navigation.
- **`improve-ui`**: traces one surface from its route through components and tokens, and keeps a finding only when three proofs exist: a written design rule, evidence that the rule reaches that surface, and a single correction. It reports at most three findings, then writes a self-contained plan to `design-plans/` for the ones you pick.
- **`create-design-md`**: a repo mode that can record token names and ownership, and a URL mode that reports only computed values it observed at desktop and mobile widths.

## Using it with agents

Install one skill with `npx skills add https://github.com/ibelick/ui-skills --skill baseline-ui`, or print one with `npx ui-skills get baseline-ui`. `baseline-ui` and the `fixing-*` skills work two ways. `/baseline-ui` applies the rules for the rest of the session. `/baseline-ui <file>` reviews the file and returns each violation as the quoted snippet, one sentence on why it matters, and a code fix. `improve-ui` triggers on requests to review, refine or clean up an interface, and ships an `agents/openai.yaml` so Codex can invoke it without being asked. The router is shown by `npx ui-skills start`, and the same catalogue is on the site's MCP (`list_skills`, `get_skill`).

## Watch out for

- `baseline-ui` is tied to a stack: Tailwind defaults, `motion/react`, `tw-animate-css`, a `cn` helper, and Base UI, React Aria or Radix primitives. Rewrite the Stack section for anything else.
- Its bans can clash with other skills. "No animation unless asked" and "never change letter-spacing" pull against expressive skills such as Hallmark, and against type skills that tighten display tracking.
- `improve-ui` never edits product source and drops accessibility findings unless you ask for them. That is by design; pair it with an accessibility skill.
- The router and `ui-skills get` fetch skill text from ui-skills.com at run time (`UI_SKILLS_SITE_URL` overrides the host). The skill files themselves make no network calls.
- Some files carry `license` and version fields in their front matter and others don't. The repo-root MIT licence covers all of them.

## Reusable ideas

- Give each audit skill two modes: rules that stay in force for the session, and a one-shot review of a named file.
- Require three proofs (rule, runtime path, one correction) before anything counts as a finding, and let "no supported findings" be a valid result.
- Rank rule groups by impact so an agent fixes the critical ones first.
- Add a "tool boundaries" rule: work inside the existing library and never migrate part of a component.

## Related

[UI Skills](ui-skills.md), [Motion Primitives](motion-primitives.md), [Prompt Kit](prompt-kit.md), [Vercel Web Design Guidelines](vercel-web-design-guidelines.md), [Impeccable](impeccable.md), [DESIGN.md](designmd.md)
