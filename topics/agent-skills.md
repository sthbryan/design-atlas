---
title: Agent skills
description: installable skills and skill collections that give coding agents design, motion, accessibility and writing rules.
order: 20
---
[← Atlas](../README.md)

# Agent skills

Skills are instruction files (a `SKILL.md`, often with references and scripts) that a coding agent loads when a task matches. They change how the agent builds, reviews and writes, rather than giving it a catalogue to fetch from. This hub covers single skills, skill collections and skill directories. Sites that expose an MCP server, an `llms.txt` or copyable prompts live under [Agents and prompts](agents-and-prompts.md).

## Start here

- [Impeccable](../sites/impeccable.md) — the broadest design skill here, with build and audit commands, a deterministic anti-pattern detector and `PRODUCT.md`/`DESIGN.md` context files.
- [Emil Kowalski's skills](../sites/emil-kowalski-skills.md) — motion rules with exact curves, durations and a frequency gate; a good choice for the one skill that owns motion values.
- [Web Quality Skills](../sites/addy-osmani-web-quality-skills.md) — the clearest example of measure, fix and re-measure: audits run Lighthouse and DevTools, then repeat the same check after the fix.
- [Vercel Web Design Guidelines](../sites/vercel-web-design-guidelines.md) — a small review skill that returns terse `file:line` findings and nothing else, easy to add to any project.
- [UI Skills](../sites/ui-skills.md) — where to find more: a skills directory with a CLI, an MCP server and a router skill that points the agent at one entry point.

## All sources

<!-- atlas:sources:start -->
<!-- atlas:sources:end -->

## Patterns worth reusing

- Put trigger phrases in the description, and keep heavy or review-only skills behind an explicit call so they don't load by accident (Emil Kowalski's skills, Jakub Krehel's skills).
- Measure, fix, then run the same check again, instead of trusting the model's reading of a screenshot (Web Quality Skills, AccessLint Skills).
- Report in a fixed, terse format that a person, another agent or CI can act on: `file:line` findings, severity tiers, a ship verdict (Vercel Web Design Guidelines, mblode Agent Skills).
- Keep audits apart from edits: read-only reviews write numbered findings or plans, and fixes happen only for the items you approve (Emil Kowalski's skills, antislop-ui, ibelick UI Skills).
- Save design decisions to a file the next session reads, so the agent doesn't re-decide them (Interface Design, StyleSeed, UI UX Pro Max).
- Put a router in front of many narrow skills so the agent loads one entry point instead of all of them (Designer Skills, UI Skills, StyleSeed).
- Ship evals with the skill so rule changes can be regression-tested (mblode Agent Skills).
- Give values, not adjectives: exact curves, durations, scales and bans that an agent can apply and a reviewer can check (Emil Kowalski's skills, Taste Skill).
- Stop for confirmation before costly or invasive steps (Design Motion Principles waits for you to confirm its lens weights; extract-design-system asks before wiring tokens into the app).

## Pitfalls

- Unpinned installs: some skills download the newest package on every call (AccessLint Skills and Superdesign run their CLIs at `@latest`), and Vercel Web Design Guidelines fetches its rules from GitHub on each run. Pin versions or vendor a copy when reviews must be repeatable.
- Telemetry and network calls hide in skill text. Superfuture Design Review sends a background usage ping and tells the agent not to mention it, visualize's publish fallback adds an attribution header it tells the agent not to mention, Huashu Design runs a silent version check, and Impeccable's daily update check can be turned off with an environment variable. Read `SKILL.md` before the first run.
- Some skills send your code or designs to a service: Superdesign uploads source files and config to superdesign.dev, Stitch Skills upload to Google's Stitch API, and Superfuture's Pro tier posts the reviewed code to the author's server.
- Licence-file gaps: AccessLint Skills, Design Lab, Superfuture Design Review and Vercel's skills repo state MIT in a README or manifest but ship no licence file, and the UI Taste listing states no licence at all. Treat reuse of their text as unclear until a file exists.
- Rules conflict between skills. Press scale is 0.97 in Emil Kowalski's skills and exactly 0.96 in Jakub Krehel's, and a dashboard built with both shipped both values. LottieFiles uses ease-in for exits, which Emil and mblode advise against, and per-item staggers range from 30–50 ms (mblode) to about 100 ms (Jakub).
- Give each rule one owner. Pick one skill for motion values, one for type and colour, and one scoring gate per project, then write the chosen values into your project rules. mblode's author left Emil's and Jakub's skills out of his set because their triggers collide with his.
- Writing skills disagree too: Stop Slop cuts all adverbs and em dashes while No AI Slop keeps some, and Anthropic Design Plugin writes sentence-case buttons where Vercel asks for Title Case.
- Accessibility numbers drift from WCAG: Anthropic Design Plugin files 44×44 px targets under AA (WCAG 2.2's AA minimum is 24×24), and Web Quality Skills and Wondel.ai Skills count 18 px as large text where WCAG means 18 pt.
- Big rule files cost context: Taste Skill and antislop-ui load their whole rule sets at once, so stacking several large collections crowds out the task.
- Install counts can mislead: design-mobile-apps showed far more skills.sh installs than its GitHub stars suggest; install from the official source repo.

## Related topics

- [Agents and prompts](agents-and-prompts.md)
- [UX patterns](ux-patterns.md)
- [Motion](motion.md)
- [DESIGN.md files](design-md.md)
- [Typography and styles](typography-and-styles.md)
- [Documentation](documentation.md)
