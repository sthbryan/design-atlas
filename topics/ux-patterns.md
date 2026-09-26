---
title: UX patterns
description: principles, guidelines, checklists and pattern libraries for how interfaces should behave.
order: 7
---
[← Atlas](../README.md)

# UX patterns

Principles, guidelines, checklists and pattern libraries for how interfaces should behave: component states, accessibility, interaction details and evidence for design decisions.

## Start here

- [Laws of UX](../sites/laws-of-ux.md) — 30 named psychology principles with takeaways and origins, served as `llms.txt` and markdown for agents.
- [Inclusive Components](../sites/inclusive-components.md) — Heydon Pickering's in-depth posts on building common components accessibly, each ending in a checklist.
- [UI Playbook](../sites/ui-playbook.md) — nine component "plays" listing the states, traps and ARIA rules each one needs.
- [Detail (detail.design)](../sites/detail-design.md) — about 130 curated interface details across interaction, copy, accessibility and motion, with an agent skill for polish passes.
- [User Interface Wiki](../sites/user-interface-wiki.md) — demo-rich articles on motion, sound and type, packaged as a 152-rule agent skill with citable rule IDs.

## All sources

<!-- atlas:sources:start -->
- [AccessLint Skills](../sites/accesslint-skills.md) — Five WCAG-EM accessibility skills (scan, inspect, audit, fix, diff) that grade every finding by evidence.
- [Anthropic Design Plugin](../sites/anthropic-design-plugin.md) — Anthropic's Apache-2.0 designer plugin: structured critique, UX copy, WCAG review and handoff templates.
- [antislop-ui](../sites/antislop-ui.md) — Purpose-gated UI rules, honesty gates and an evidence-backed Delivery Gate, including dashboard tells.
- [Design Lab](../sites/design-lab.md) — Interviews you, mounts five code variants on a temporary route, then writes an implementation plan.
- [Design System Checklist](../sites/design-system-checklist.md) — 230 items across language, foundations, 29 components and maintenance, with shareable progress links.
- [Designer Skills](../sites/designer-skills.md) — 111 small design-practice skills in nine plugins, with a router that picks one entry point.
- [Detail (detail.design)](../sites/detail-design.md) — About 130 curated interface details (interaction, copy, accessibility, motion) with an installable agent skill for polish.
- [Devouring Details](../sites/devouring-details.md) — Rauno Freiberg's paid interactive manual on interaction craft, with 23 chapters and downloadable React prototypes.
- [editorcn](../sites/editorcn.md) — Tiptap toolbar and Notion-style block editors plus a read-only renderer, styled for shadcn apps.
- [Emil Kowalski's skills](../sites/emil-kowalski-skills.md) — Emil Kowalski's 13 motion-first skills: when to animate, exact curves and durations, Apple-style springs, animation audits.
- [Good UI](../sites/good-ui.md) — 141 conversion patterns backed by 642 shared A/B tests; the effect sizes are paywalled.
- [ibelick UI Skills](../sites/ibelick-ui-skills.md) — Seven short MIT skills: baseline-ui rules, motion-performance and accessibility fixes, and an evidence-gated improve-ui auditor.
- [Impeccable](../sites/impeccable.md) — Apache-2.0 design skill with 24 commands, a deterministic slop detector for CI, and PRODUCT.md/DESIGN.md context.
- [Inclusive Components](../sites/inclusive-components.md) — Heydon Pickering's 11 in-depth posts on making common components accessible, each ending in a checklist.
- [Interface Design](../sites/interface-design.md) — Craft skill for dashboards and SaaS UI that saves design decisions to system.md across sessions.
- [interior.dev](../sites/interior-dev.md) — 54 carefully finished React micro-interactions with headless hooks, shadcn registry and llms-full.txt.
- [Jakub Krehel's skills](../sites/jakub-krehel-skills.md) — Eleven modular skills that review with evidence and polish UI, typography, colour, layout, accessibility and copy.
- [Laws of UX](../sites/laws-of-ux.md) — 30 psychology principles with takeaways and origins, served as llms.txt and markdown; CC BY-NC-ND.
- [mblode Agent Skills](../sites/mblode-agent-skills.md) — Design audits with a ship verdict, Playwright probes, a 78-rule typography check, and motion curves fitted from recordings.
- [StyleSeed](../sites/styleseed.md) — 23-skill engine that locks decisions in STYLESEED.md, builds OKLCH palettes from one colour, and scores UI to 80 or above.
- [Superfuture Design Review](../sites/superfuture-design-review.md) — Ten-area design critique ranked by severity with exact fixes; it sends a hidden usage ping.
- [The Shape of AI](../sites/shape-of-ai.md) — Emily Campbell's 57 AI UX patterns in six groups, each with trade-offs and real product examples; CC BY-NC-SA.
- [UI Playbook](../sites/ui-playbook.md) — Rauno Freiberg's nine component "plays" listing the states, traps and ARIA rules each one needs.
- [UI Skills](../sites/ui-skills.md) — 306 design-engineering skills from 84 authors, with a routing skill, CLI, MCP and 18 real company DESIGN.md files.
- [UI Taste by Uizze](../sites/ui-taste.md) — Short product-first playbooks for web and iOS UI, with an optional paid MCP of real screens.
- [UI UX Pro Max](../sites/ui-ux-pro-max.md) — Searchable local database of styles, palettes and font pairs, queried by a script; writes MASTER.md plus page overrides.
- [User Interface Wiki](../sites/user-interface-wiki.md) — Raphael Salaja's nine demo-rich articles on motion, sound and type, installable as a 152-rule agent skill.
- [Vercel Web Design Guidelines](../sites/vercel-web-design-guidelines.md) — Tiny review skill that fetches Vercel's live Web Interface Guidelines each run and reports terse file:line findings.
- [Web Quality Skills](../sites/addy-osmani-web-quality-skills.md) — Addy Osmani's six measurement-first skills: audit with Lighthouse and DevTools, fix, then re-run the same WCAG 2.2 audit.
- [Wondel.ai Skills](../sites/wondelai-skills.md) — Refactoring UI, Nielsen/Krug heuristics and web typography turned into scored audit skills.
<!-- atlas:sources:end -->

## Patterns worth reusing

- Document every component under the same headings (purpose, states, responsive, implementation traps, accessibility) so missing pieces are easy to spot (UI Playbook).
- Treat loading as a state that must not change a component's size, and lock a button's width before its label changes (UI Playbook, interior.dev).
- Start from the obvious, broken version of a component, show how it fails for keyboard, screen-reader and zoom users, and fix it step by step; prefer native elements and add ARIA only when it changes what is announced (Inclusive Components).
- Keep a toggle's label fixed and let only its state change (Inclusive Components).
- Put accessibility items inside each component's checklist rather than in a separate section, and give every item a stable ID (Design System Checklist).
- Give each rule a short prefixed ID and a priority so reviews can cite it and automated passes fix timing and physics before cosmetics (User Interface Wiki); give recurring problems short names people and agents can share (Impeccable).
- Pair every rule with a wrong and a right example, and put a live demo next to any claim about motion (User Interface Wiki).
- Tie design decisions to a named, sourced principle (Laws of UX) or to a pattern's test record (Good UI), so reviews argue about evidence rather than taste.
- Split auditing from implementing: one pass writes a self-contained plan, another applies it (UI Skills).
- Guard destructive actions with hold-to-confirm instead of a modal, and delay only the first tooltip in a group (interior.dev).
- Remove motion from high-frequency interactions, and infer intent from pointer direction and speed before reacting (Devouring Details).
- Use the wording the host platform uses for common actions, and test layouts against long translated strings (Detail).

## Pitfalls

- Several classics are dated: Inclusive Components was last updated in 2018 with WCAG 2.0 references, and UI Playbook's examples use React 16 and Reach UI. Take the reasoning and checklists, and check the current WAI-ARIA Authoring Practices.
- Text licences limit reuse: Laws of UX is CC BY-NC-ND, The Shape of AI is CC BY-NC-SA, Good UI licenses its data per user, and Inclusive Components and Design System Checklist state no licence. Write your own takeaways instead of copying.
- Principles are not patterns: Laws of UX says why, not what to build, and some entries are loose heuristics rather than tested findings.
- Rule sets are opinionated and assume a stack: User Interface Wiki is built around React and Motion, `baseline-ui` assumes Tailwind and Base UI or Radix, and Impeccable's findings are prompts to look again, not verdicts. Record deliberate exceptions.
- Coverage is narrow: nine plays, 11 components, 29 basic components, with no data tables, comboboxes or date pickers in several of them.
- The deepest material is often paid or video-only: Devouring Details sits behind a login, Good UI's effect sizes need a plan, and most Detail entries are a recording and one sentence, with no code.

## Related topics

- [Components](components.md)
- [Documentation](documentation.md)
- [Motion](motion.md)
- [AI interfaces](ai-interfaces.md)
- [CTA](cta.md)
- [Agents and prompts](agents-and-prompts.md)
