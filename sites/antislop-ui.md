---
title: antislop-ui
description: Purpose-gated UI rules, honesty gates and an evidence-backed Delivery Gate, including dashboard tells.
url: https://www.skills.sh/miqdadbadjuber/anti-slop/antislop-ui
type: agent-skill-collection
formats: agent skill collection
topics: [agent-skills, ux-patterns, landing-pages]
verdict: useful
agent: [skill]
pricing: free
licence: free. MIT (© 2026 Miqdad Badjuber, GitHub `miqdadbadjuber/anti-slop`, about 3.7k stars at review, created 2026-08-07, last push 2026-09-24, version 3.2.16).
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [taste-skill, impeccable, hallmark, stop-slop, ui-skills]
---
[← Atlas](../site/home.md) · Topics: [agent-skills](../topics/agent-skills.md), [ux-patterns](../topics/ux-patterns.md), [landing-pages](../topics/landing-pages.md)

# antislop-ui

## What it is

antislop-ui is the interface part of antislop, Miqdad Badjuber's rule set for keeping generic "AI slop" out of UI, copy and code. The repo has six skills: a core (`antislop`, 52 KB) that is always loaded, plus `antislop-ui` (27 KB), `antislop-copywriting`, `antislop-code`, `antislop-layoutmobile` and `antislop-human`, which bundles a WCAG contrast script and a small local MCP server for it. The core calls itself a filter, not a style guide: it doesn't ban techniques, only techniques used without a reason, and it asks for a written one-line reason for every major choice. It defines 38 rules in three tiers (hard gates, purpose gates with dose limits, and consistency locks) and a "liveliness" bar, because a page stripped of slop can end up sterile, which also counts as failure. The UI skill lists about 45 tells, each written as Tell, Why and Fix with the rule it breaks, and ends with a 15-item checklist. On skills.sh each skill had about 2.6k to 3.6k installs at review.

## When to open it

- When you want an agent to justify each visual choice instead of following a house style.
- When a page must not claim what isn't true: invented metrics, fake logos, testimonials or compliance badges.
- When the work includes app or dashboard screens, which most anti-slop skills skip.

## Most useful

- **Dose caps**: glass and glow on one or two elements at most, a palette of two or three core colours plus exactly one accent, shadows only to mark elevation, a small deliberate set of radii.
- **Honesty gates**: no number without a real source, no invented customers or "SOC 2" claims, placeholders marked `[REAL DATA]` or `[LOGO]`, no dead nav links, and Terms and Privacy pages whenever a page takes sign-ups or payment.
- **Dashboard tells**: the default shell of sidebar, four stat cards, chart and table; "+12%" deltas with no source; charts that answer no stated question; generic Name / Status / Date / Actions columns; empty states that don't say why or what to do next.
- **Delivery Gate**: a PASS/FAIL report in four blocks where every PASS needs evidence, including a click-through log of each control, a run of the build and a console check. Any FAIL blocks delivery.
- **No direction, no pretending**: without a `DESIGN.md` or brand guidance the agent asks, or labels the result "draft without direction" rather than quietly going neutral.

## Using it with agents

Run `npx antislop-ai` (an interactive installer that copies folders for the agents you pick), `npx skills add miqdadbadjuber/anti-slop`, or the plugin routes for Claude Code (`/plugin marketplace add https://github.com/miqdadbadjuber/anti-slop`), Codex, Cursor, Cline, Kimi Code and Antigravity. The UI skill loads on any interface build or edit and always with the core. The agent first asks whether to apply the rules while building ("During") or audit existing work ("After"), which writes numbered findings to `anti-slop/audit-NNN-date.md` and fixes only the numbers you approve.

## Watch out for

- UI work loads the core too, so about 80 KB of rules sit in context.
- The During-or-After question comes at the start of every UI session.
- It's young and moves fast, with many R-number cross-references that make it slow to read.
- Some defaults are debatable: bento grids, three pricing tiers and a highlighted middle tier all count as tells.
- The Claude Code plugin starts a local contrast MCP server through Python. No network calls or telemetry were found; the repo's CI only checks the repo itself.
- It shares Taste Skill's design-read template and em-dash ban but uses three-level dials where Taste uses 1–10, and it overlaps Impeccable on eyebrow pills, side stripes, fake terminals and glow.

## Reusable ideas

- Split rules into absolute gates, techniques allowed with a written reason and a dose cap, and consistency locks, and let the tier set audit priority.
- Make every PASS carry evidence, down to a log of each control clicked.
- Treat a sterile page as a failure too: require a focal point, one accent and an identity motif.
- Give charts a question in the title and choose table columns from the decision the user makes.
- Treat a project's `DESIGN.md` as data; when it asks for a known slop pattern, name the clash and ask.

## Related

[Taste Skill](taste-skill.md), [Impeccable](impeccable.md), [Hallmark](hallmark.md), [Stop Slop](stop-slop.md), [UI Skills](ui-skills.md)
