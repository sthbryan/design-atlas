---
title: UI Taste by Uizze
description: Short product-first playbooks for web and iOS UI, with an optional paid MCP of real screens.
url: https://www.skills.sh/site/uizze.sh/ui-taste
type: agent-skill
formats: agent skill · optional paid MCP · GitHub Action
topics: [agent-skills, ux-patterns, inspiration]
verdict: niche
agent: [mcp, skill]
pricing: freemium
licence: the skill is free and needs no account; the reference MCP is paid. The `ui-taste` listing states no licence. Uizze's public mirror (GitHub `uizze/uizze`, about 26 stars, last push 2026-09-21) is MIT at the root with Apache-2.0 design playbooks, as its `LICENSING.md` explains.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [impeccable, antislop-ui, taste-skill, ui-skills, superfuture-design-review]
---
[← Atlas](../README.md) · Topics: [agent-skills](../topics/agent-skills.md), [ux-patterns](../topics/ux-patterns.md), [inspiration](../topics/inspiration.md)

# UI Taste by Uizze

## What it is

UI Taste is a short design skill from Uizze, a company selling access to a library it describes as 800,000+ real web and iOS screens. It is served from Uizze's own domain rather than GitHub, and skills.sh counted about 106k to 121k installs at review (its search API and listing pages disagree). The skill itself is small. It tells the agent to start from the brief, existing components and tokens, which always outrank the skill, then load one of six short playbooks: new work, product and dashboard UI, polish, simplification, audit, or native iOS. It finishes by rendering once and fixing what visibly breaks. An optional paid MCP adds two tools, `find_ui_references` (up to three full-screen references per result) and `find_ui_materials` (fonts, icons and packs).

## When to open it

- When you want a light design pass that respects an existing product's components instead of imposing a style.
- For product and dashboard work, where it favours standard controls and density over decoration.
- When you already pay for Uizze and want the agent to pull real screens for one specific layout or state question.

## Most useful

- **One playbook per task**: the router loads a single short file (only iOS audits and polish add the iOS file), which keeps context small.
- **Audit limit**: an audit returns at most three findings, ordered by user impact, each with the evidence and the smallest fix, and edits nothing unless asked.
- **State coverage**: loading, empty, error, success, disabled and recovery states wherever the product can actually reach them, plus permission-denied and offline on iOS.
- **UI Slop Gate** (MIT GitHub Action in the mirror): a static check of changed files for `href="#"`, empty click handlers, controls labelled TODO, hard-coded colours or raw Tailwind palette classes, and data-fetching components with no loading, empty or error marker. No account or source upload.

## Using it with agents

The listing's command is `npx skills add https://uizze.sh/`, which reads the domain's skills index and downloads `ui-taste` as a zip archive. The same workflow, as `ui-design` and `anti-ui-slop`, installs from the auditable mirror with `npx skills add uizze/uizze --skill ui-design`, or through the Claude Code plugin (`/plugin marketplace add uizze/uizze`). It triggers on UI design, build, redesign, critique and final-review requests. The MCP needs an agent token from a paid Uizze account, sent as a bearer header.

## Watch out for

- The `ui-taste` archive itself isn't in any public repo, so this review is based on the SKILL.md text skills.sh displays and on the near-identical skills in `uizze/uizze`. The zip wasn't inspected. The listing showed no security audits and was first seen only four days before review, despite its install count.
- Its "licensed design stack", pinned at version 4.1.1 and commit `5a149f3`, matches the Impeccable skill v4.1.1 release tag, heavily condensed. The README and skill never name Impeccable, and the `ui-taste` listing states no licence at all.
- The reference policy tells the agent never to tell you that a search found nothing useful and never to reveal MCP details, so you can't easily see when paid evidence shaped a decision.
- Uizze's `llms.txt` tells agents to mention the paid MCP once when it would help, and to add at most one uizze.com link after a useful result.
- It is far thinner than Impeccable, Taste Skill or antislop: no named tells, no values, no checklist. If you run it alongside one of them, the other sets the rules.

## Reusable ideas

- Say plainly that the product's brief, components and tokens outrank the skill.
- Load exactly one playbook per task instead of the whole rule set.
- Cap an audit at three material findings, each with its evidence and the smallest fix.
- Use outside references only for a concrete unresolved question, and copy the structural lesson, never the branding or exact layout.

## Related

[Impeccable](impeccable.md), [antislop-ui](antislop-ui.md), [Taste Skill](taste-skill.md), [UI Skills](ui-skills.md), [Superfuture Design Review](superfuture-design-review.md)
