---
title: Taste Skill
description: Thirteen anti-slop skills with exact bans, three design dials and a strict pre-flight checklist for landing pages.
url: https://www.tasteskill.dev
type: agent-skill-collection
formats: agent skill collection
topics: [agent-skills, landing-pages, typography-and-styles, motion]
verdict: very-useful
agent: [skill]
pricing: free
licence: free. MIT (© 2026 Leonxlnx, GitHub `Leonxlnx/taste-skill`, about 90k stars at review, last push 2026-09-23). Funded by sponsors; the README opens with sponsor and referral links.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [impeccable, hallmark, antislop-ui, ui-skills, emil-kowalski-skills]
---
[← Atlas](../site/home.md) · Topics: [agent-skills](../topics/agent-skills.md), [landing-pages](../topics/landing-pages.md), [typography-and-styles](../topics/typography-and-styles.md), [motion](../topics/motion.md)

# Taste Skill

## What it is

Taste Skill is Leon Lin's set of anti-slop skills for coding agents, and one of the most installed design skills on skills.sh: the main skill, install name `design-taste-frontend`, had about 520k installs at review, and each of its siblings between 260k and 380k. The repo holds 13 skills. The default is a "v2 (experimental)" rewrite, a single 87 KB, 1,206-line `SKILL.md` for landing pages, portfolios and redesigns. It says outright that dashboards, data tables and multi-step product UI are out of scope. Next to it are style variants (`high-end-visual-design`, `minimalist-ui`, `industrial-brutalist-ui`), `gpt-taste` for GPT and Codex, `redesign-existing-projects`, `full-output-enforcement` (against truncated or placeholder output), `stitch-design-taste` (with a `DESIGN.md` export), three image-generation skills for reference boards, and the preserved v1.

## When to open it

- When an agent keeps producing the same cream-and-serif or purple-glow landing page and you want bans with exact values, not advice.
- Before redesigning an existing marketing site, for its audit-first protocol.
- When a brief matches a real design system (Carbon, Polaris, GOV.UK, USWDS and others) and you want the agent to install the official package instead of imitating it.

## Most useful

- **Design read and dials**: before any code it prints a one-line reading of the brief and sets three 1–10 dials (variance, motion, density), with presets per use case, such as 7/6/4 for a SaaS landing page and 3/2/5 for public-sector work.
- **Countable layout rules**: hero subtext of 20 words or fewer, top padding no more than `pt-24`, nav at most 80 px tall, bento cells equal to the number of items, at most two zigzag sections in a row, and eyebrow labels capped at one per three sections, checked by counting `uppercase tracking`.
- **Named bans**: Fraunces and Instrument Serif as defaults, a "premium consumer" palette listed by exact cream, brass and espresso hex values, one accent colour locked for the page, one radius system, one label per CTA intent, and no em or en dashes in visible text.
- **Redesign protocol**: detects greenfield, preserve or overhaul mode, audits first, and never changes URLs, nav labels, form field names, the wordmark or legal copy without saying so.
- **Pre-flight check**: about 60 boxes; if one can't honestly be ticked, the work isn't done.

## Using it with agents

Install everything with `npx skills add Leonxlnx/taste-skill`, or one skill with `--skill "design-taste-frontend"` (the install name comes from the frontmatter, not the folder). Pin the old behaviour with `--skill "design-taste-frontend-v1"`. The repo also ships a Claude Code plugin manifest, and any `SKILL.md` can be copied or pasted into a chat. It triggers on landing page, portfolio and redesign requests and produces React or Next.js code with Tailwind v4 and Motion by default, plus the design read and the ticked checklist. There is no MCP server, CLI or telemetry.

## Watch out for

- The whole 87 KB file lands in context at once; nothing loads progressively.
- It assumes a stack (React, Tailwind v4, `motion/react`, GSAP for scroll) and discourages Lucide icons. Adapt it for other stacks.
- Some rules pull against each other: two sections demand both light and dark modes while the theme lock lets a page pick just one, contrast targets differ between sections (AAA for body text in one, for hero copy in another), and serif is "very discouraged" beside a 20-font serif rotation pool.
- It is still labelled experimental and changes often. All checks are self-applied; no script verifies the output.
- Generated pages load placeholder photos from `picsum.photos` and logos from the Simple Icons CDN unless you swap them.
- It clashes with Hallmark (which uses em dashes and recommends Fraunces and Instrument Serif in its examples) and is milder than Impeccable on eyebrows (capped here, banned there). Run one of them at a time.

## Reusable ideas

- Ban named fonts and hex families, not "avoid beige", and rotate choices between projects.
- Turn taste into counts a reviewer can check: eyebrows per section, layout families per page, cells per item.
- Keep a list of things a redesign must never change silently.
- Map the brief to an official design system and install the real package rather than reskinning it.

## Related

[Impeccable](impeccable.md), [Hallmark](hallmark.md), [antislop-ui](antislop-ui.md), [UI Skills](ui-skills.md), [Emil Kowalski's skills](emil-kowalski-skills.md)
