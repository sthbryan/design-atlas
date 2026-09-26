---
title: UI Skills
description: 306 design-engineering skills from 84 authors, with a routing skill, CLI, MCP and 18 real company DESIGN.md files.
url: https://www.ui-skills.com
type: directory
formats: skills directory · CLI · MCP
topics: [agents-and-prompts, design-md, motion, ux-patterns]
verdict: very-useful
agent: [mcp, llms-txt, cli, skill]
pricing: free
licence: free, no account. The site's own skills (GitHub `ibelick/ui-skills`, about 9.1k stars) and the `ui-skills` CLI are MIT. Every other listed skill keeps its author's licence, so check each source repo. No terms page is published.
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [impeccable, hallmark, typeui, motion-primitives, designmd]
---
[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [design-md](../topics/design-md.md), [motion](../topics/motion.md), [ux-patterns](../topics/ux-patterns.md)

# UI Skills

## What it is

UI Skills is a curated directory of agent skills for design engineering, made by ibelick, the developer behind Motion Primitives and prompt-kit. Its registry listed 306 skills from 84 sources at review. Seven are ibelick's own. The rest point to other authors' repos, such as Anthropic's `frontend-design`, Impeccable, Emil Kowalski, Jakub Krehel, Meng To, Anthony Fu, GSAP, Figma and the Vue team. Skills are grouped by topic (accessibility, motion, systems, visual, interaction, performance) and by collection (landing pages, forms, buttons, mobile apps and more). The site also has a curated set of 18 public DESIGN.md files published by real companies and projects (Vercel, Atlassian, Mintlify, Clerk, Ant Design, Nuxt and the French government's DSFR among them), a short "Learn" playbook of CSS details, and a jobs board.

## When to open it

- When you want the right skill for one job (motion audit, accessibility fix, metadata, DESIGN.md) instead of one giant design prompt.
- When you want to compare design skills from different authors side by side before installing one.
- When you want real, company-published DESIGN.md files rather than files reverse-engineered from a brand.

## Most useful

- **`ui-skills-root`**: a routing skill that sends the agent to the smallest useful set of skills for the task.
- **`baseline-ui`**: a fast clean-up pass written as MUST, SHOULD and NEVER rules (animate only `transform` and `opacity`, keep interaction feedback under 200 ms, `h-dvh` instead of `h-screen`, `text-balance` on headings, `tabular-nums` for data).
- **`improve-ui`**: audits a surface against its own design evidence and writes implementation plans for another agent, without touching source.
- **`create-design-md`** and the three `fixing-*` skills (accessibility, metadata, motion performance).
- Well-known third-party entries such as `improve-animations` (Emil Kowalski) and `12-principles-of-animation` (Raphael Salaja).

## Using it with agents

- CLI: `npx ui-skills start` prints the routing skill, `list --category motion` filters, and `get baseline-ui` prints one skill's markdown.
- MCP: the endpoint is `https://www.ui-skills.com/mcp`, with two tools, `list_skills` and `get_skill`.
- Each skill page gives an install command such as `npx skills add https://github.com/ibelick/ui-skills --skill baseline-ui`.
- The site publishes an `llms.txt`, a per-skill `llms.txt`, and `registry.txt` and `registry.json` files that point to each raw `SKILL.md` on GitHub.

## Watch out for

- It is an aggregator: quality and upkeep vary by author, some entries are only "compatibility listings", and a few aren't about UI at all (prose humanisers, Vue debugging).
- `baseline-ui` assumes a stack (Tailwind, `motion/react`, Base UI or Radix). Adapt it before using it elsewhere.
- Several "improve" skills are read-only planners by design. They write plans and leave the edits to you or another agent.
- Skills are instructions your agent will follow, pulled from third-party repos. Read one before installing it.

## Reusable ideas

- Put a small router skill in front of many narrow skills, so the agent loads only what the task needs.
- Write UI rules as MUST, SHOULD and NEVER lines that a reviewer can check one by one.
- Split auditing from implementing: one pass writes self-contained plans, another executes them.
- Give every catalogue entry its own `llms.txt` so an agent can fetch exactly one item.

## Related

[Impeccable](impeccable.md), [Hallmark](hallmark.md), [TypeUI](typeui.md), [Motion Primitives](motion-primitives.md), [DESIGN.md](designmd.md)
