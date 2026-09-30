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
- [AccessLint Skills](../sites/accesslint-skills.md) — Five WCAG-EM accessibility skills (scan, inspect, audit, fix, diff) that grade every finding by evidence.
- [AI UX Playground](../sites/ai-ux-playground.md) — A practical AI-interface reference with named patterns, live interaction demos, product teardowns, and agent skills.
- [Anthropic Design Plugin](../sites/anthropic-design-plugin.md) — Anthropic's Apache-2.0 designer plugin: structured critique, UX copy, WCAG review and handoff templates.
- [Anthropic Skills](../sites/anthropic-skills.md) — Anthropic's frontend-design anti-default skill plus canvas-design, theme-factory and brand-guidelines, all Apache-2.0.
- [antislop-ui](../sites/antislop-ui.md) — Purpose-gated UI rules, honesty gates and an evidence-backed Delivery Gate, including dashboard tells.
- [before.click](../sites/before-click.md) — 361 App Store screenshot strips, paywalls and onboarding flows, plus an MIT ASO agent skill.
- [Design DNA](../sites/design-dna.md) — Turns references into a three-part JSON profile (tokens, style, WebGL effects), with measured colours and a ΔE verify loop.
- [Design Lab](../sites/design-lab.md) — Interviews you, mounts five code variants on a temporary route, then writes an implementation plan.
- [Design Motion Principles](../sites/design-motion-principles.md) — Create or audit UI motion through Emil, Jakub and Jhey lenses; HTML audit report with looping demos.
- [design-mobile-apps (Sleek)](../sites/design-mobile-apps.md) — REST client for Sleek's paid mobile-screen generator, with handoff to HTML, React Native or SwiftUI.
- [Designer Skills](../sites/designer-skills.md) — 111 small design-practice skills in nine plugins, with a router that picks one entry point.
- [Emil Kowalski's skills](../sites/emil-kowalski-skills.md) — Emil Kowalski's 13 motion-first skills: when to animate, exact curves and durations, Apple-style springs, animation audits.
- [extract-design-system](../sites/extract-design-system.md) — Pulls colours, fonts, spacing, radii and shadows from a public URL into starter tokens.json and tokens.css, with a CI audit.
- [Hallmark](../sites/hallmark.md) — MIT anti-slop skill from Together AI: picks the page structure first, then runs 57 slop-test gates.
- [Huashu Design](../sites/huashu-design.md) — Chinese-language HTML skill for prototypes, decks and MP4 animations; always shows three drafts first.
- [ibelick UI Skills](../sites/ibelick-ui-skills.md) — Seven short MIT skills: baseline-ui rules, motion-performance and accessibility fixes, and an evidence-gated improve-ui auditor.
- [Impeccable](../sites/impeccable.md) — Apache-2.0 design skill with 24 commands, a deterministic slop detector for CI, and PRODUCT.md/DESIGN.md context.
- [Interface Design](../sites/interface-design.md) — Craft skill for dashboards and SaaS UI that saves design decisions to system.md across sessions.
- [Jakub Krehel's skills](../sites/jakub-krehel-skills.md) — Eleven modular skills that review with evidence and polish UI, typography, colour, layout, accessibility and copy.
- [LottieFiles Motion Design Skill](../sites/lottiefiles-motion-design.md) — Motion-director skill: four personalities, duration and stagger tables, Disney principles adapted for UI.
- [mblode Agent Skills](../sites/mblode-agent-skills.md) — Design audits with a ship verdict, Playwright probes, a 78-rule typography check, and motion curves fitted from recordings.
- [MotionWiki](../sites/motionwiki.md) — Browse creative systems and free skill previews, or study its own editorial catalog and live project previews for web and brand inspiration.
- [No AI Slop](../sites/no-ai-slop.md) — Removes AI writing patterns while keeping the writer's voice, and has a detect-only mode.
- [Nucleo](../sites/nucleo.md) — A polished SVG icon system with sharply differentiated families, a desktop editor, and an agent workflow for licensed icons.
- [Shadcn Labs Skills](../sites/shadcn-skills.md) — Six MIT skills: launch a shadcn registry, generate, audit and extend SVG icon sets, Tailwind-to-StyleX.
- [Stitch Skills](../sites/stitch-skills.md) — Google Labs' Stitch skills and source of the "Stitch format"; three DESIGN.md writers with different layouts.
- [Stop Slop](../sites/stop-slop.md) — Small prose skill listing AI phrases and sentence shapes to cut, with a 50-point score.
- [StyleSeed](../sites/styleseed.md) — 23-skill engine that locks decisions in STYLESEED.md, builds OKLCH palettes from one colour, and scores UI to 80 or above.
- [Superdesign](../sites/superdesign-skill.md) — Drives the hosted superdesign.dev canvas from your agent to branch drafts and compare models.
- [Superfuture Design Review](../sites/superfuture-design-review.md) — Ten-area design critique ranked by severity with exact fixes; it sends a hidden usage ping.
- [Taste Skill](../sites/taste-skill.md) — Thirteen anti-slop skills with exact bans, three design dials and a strict pre-flight checklist for landing pages.
- [UI Skills](../sites/ui-skills.md) — 306 design-engineering skills from 84 authors, with a routing skill, CLI, MCP and 18 real company DESIGN.md files.
- [UI Taste by Uizze](../sites/ui-taste.md) — Short product-first playbooks for web and iOS UI, with an optional paid MCP of real screens.
- [UI UX Pro Max](../sites/ui-ux-pro-max.md) — Searchable local database of styles, palettes and font pairs, queried by a script; writes MASTER.md plus page overrides.
- [Vercel Web Design Guidelines](../sites/vercel-web-design-guidelines.md) — Tiny review skill that fetches Vercel's live Web Interface Guidelines each run and reports terse file:line findings.
- [visualize (display.dev)](../sites/visualize.md) — Brand-aware HTML reports, decks and dashboards, checked by named bans and deterministic detectors.
- [Web Quality Skills](../sites/addy-osmani-web-quality-skills.md) — Addy Osmani's six measurement-first skills: audit with Lighthouse and DevTools, fix, then re-run the same WCAG 2.2 audit.
- [Wondel.ai Skills](../sites/wondelai-skills.md) — Refactoring UI, Nielsen/Krug heuristics and web typography turned into scored audit skills.
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
