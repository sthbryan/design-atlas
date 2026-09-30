---
title: Documentation
description: how sites document components and style, for humans and agents.
order: 10
---
[← Atlas](../README.md)

# Documentation

How sites document components, design systems and style — for human readers and increasingly for coding agents.

## Start here

- [The Component Gallery](../sites/component-gallery.md) — aggregates how 95 different design systems document the same components.
- [shadcn/ui](../sites/shadcn-ui.md) — `llms.txt` and an MCP registry published alongside human-facing docs.
- [DESIGN.md](../sites/designmd.md) — a whole design system distributed as a single markdown file.
- [Refero Styles](../sites/refero-styles.md) — real brand styles extracted into AI-readable `DESIGN.md` files.
- [Carbon Design System](../sites/carbon-design-system.md) — a large system documented well for both audiences: tabbed component pages for people and a clean `llms.txt` index for agents.

## All sources

<!-- atlas:sources:start -->
- [Adobe Spectrum](../sites/adobe-spectrum.md) — Adobe's Spectrum design system pairs visual foundations, components and patterns with separate open-source implementations.
- [Ahmad Shadeed](../sites/ishadeed.md) — Hands-on CSS layout articles and an interactive lab for inspecting modern selectors, grids and container queries.
- [Angular Native](../sites/angular-native.md) — Alpha MIT framework for building native iOS and Android apps with Angular, Expo and React Native's rendering layer.
- [Anime.js](../sites/animejs.md) — JavaScript animation engine with fine-grained control over complex sequences and SVG effects, and a clear, well-documented API.
- [Anthropic Design Plugin](../sites/anthropic-design-plugin.md) — Anthropic's Apache-2.0 designer plugin: structured critique, UX copy, WCAG review and handoff templates.
- [Astryx](../sites/astryx.md) — Meta's React design system with rich form controls, strong accessibility hooks and a plugin-based table.
- [Base UI](../sites/base-ui.md) — Unstyled, accessible React primitives from the Radix, Floating UI and MUI teams, now shadcn's default.
- [Carbon Design System](../sites/carbon-design-system.md) — IBM's Apache-2.0 system: about 50 components, 2,775 icons and 1,576 pictograms, llms.txt, and an IBMid-gated MCP.
- [Design System Checklist](../sites/design-system-checklist.md) — 230 items across language, foundations, 29 components and maintenance, with shareable progress links.
- [DESIGN.md](../sites/designmd.md) — Community library of whole design systems as single markdown files, with light/dark previews, an MCP server and a CLI.
- [Design.md Store](../sites/designmd-store.md) — 51 free brand-inspired DESIGN.md packs plus clear docs on the Google DESIGN.md format; strict reuse terms.
- [Designer Skills](../sites/designer-skills.md) — 111 small design-practice skills in nine plugins, with a router that picks one entry point.
- [Devouring Details](../sites/devouring-details.md) — Rauno Freiberg's paid interactive manual on interaction craft, with 23 chapters and downloadable React prototypes.
- [DialKit](../sites/dialkit.md) — MIT live control panel for tuning springs, easing, layout and timelines in React, Vue, Svelte, Solid and plain JS.
- [Every Layout](../sites/every-layout.md) — Intrinsic CSS layout primitives with free visual examples, interactive demos and configurable generators.
- [GPUI Kit](../sites/gpui-kit.md) — A Rust desktop UI framework showcase with component examples, theme controls, docking, data tables and application stories.
- [IBM Design Language color](../sites/ibm-design-language-color.md) — IBM's color reference shows palette families, accepted gradients, UI themes, accessibility rules and examples in use.
- [Inclusive Components](../sites/inclusive-components.md) — Heydon Pickering's 11 in-depth posts on making common components accessible, each ending in a checklist.
- [Josh W. Comeau](../sites/josh-w-comeau.md) — Interactive CSS guides where you can resize layouts, change rules and inspect the resulting interface.
- [Laws of UX](../sites/laws-of-ux.md) — 30 psychology principles with takeaways and origins, served as llms.txt and markdown; CC BY-NC-ND.
- [Modern CSS Solutions](../sites/modern-css.md) — Practical CSS references with rendered examples for responsive layouts, components, typography and interaction states.
- [Morphrig](../sites/morphrig.md) — Interactive manual on how SVG icon morphing works, with measured browser findings and llms-full.txt.
- [No AI Slop](../sites/no-ai-slop.md) — Removes AI writing patterns while keeping the writer's voice, and has a detect-only mode.
- [Open UI](../sites/open-ui.md) — Cross-system component research that maps names, visual states and behavior differences for common web controls.
- [Radix](../sites/radix.md) — WorkOS-maintained primitives, Themes, 15px icons and the 12-step Radix Colors system.
- [Refero Styles](../sites/refero-styles.md) — 2,000+ real brand styles extracted into agent-readable DESIGN.md files, searchable by mood, with an MCP connection.
- [Shadcn Labs](../sites/shadcn-labs.md) — Index of the independent Shadcn Labs registries: termcn, pdfcn, emailcn, ogimagecn, shadercn and more.
- [shadcn/ui](../sites/shadcn-ui.md) — Accessible React components copied into your repo and edited freely, with llms.txt, a CLI and an MCP registry.
- [shieldcn](../sites/shieldcn.md) — shadcn-styled README badges, charts and headers from 45+ providers, with a README builder and agent skill.
- [startercn](../sites/startercn.md) — MIT Next.js template for publishing your own shadcn registry, with Fumadocs docs, llms.txt and skill discovery.
- [Stop Slop](../sites/stop-slop.md) — Small prose skill listing AI phrases and sentence shapes to cut, with a 50-point score.
- [The Book of Shaders](../sites/book-of-shaders.md) — Classic step-by-step guide to fragment shaders with editable live examples; learning only, all rights reserved.
- [The Component Gallery](../sites/component-gallery.md) — Reference that compares how 95 design systems name, structure and document the same 60 components.
- [UI Playbook (stale)](../sites/ui-playbook.md) — Rauno Freiberg's nine component "plays" listing the states, traps and ARIA rules each one needs.
- [UIAble](../sites/uiable.md) — 790+ components, 390+ blocks and templates built on shadcn/ui and Base UI, with command-palette-searchable docs.
- [visualize (display.dev)](../sites/visualize.md) — Brand-aware HTML reports, decks and dashboards, checked by named bans and deterministic detectors.
<!-- atlas:sources:end -->

## Patterns worth reusing

- Publish an `llms.txt` or markdown index alongside human docs so agents can parse the catalog directly, without scraping HTML.
- Distribute an entire design system as one markdown file an agent can treat as source of truth for style.
- Tag each documented entry with badges (accessibility, code examples, unmaintained) for an at-a-glance trust signal.
- Link out to the original system's documentation instead of duplicating anatomy and guidance content.
- Serve component docs at predictable URLs (e.g. `/r/<name>.md`) so an agent can fetch exactly the page it needs.
- Offer a Human/Agent toggle on the docs: the agent view states purpose, workflow and install snippets in plain Markdown, with ready prompts next to it (DialKit).
- Document a spec format with best-practice pages on writing for AI, semantic token naming and versioning, not just a field reference (Design.md Store).
- Serve markdown from the same URLs through content negotiation (`Accept: text/markdown`) instead of keeping a separate agent docs site, and say in `llms.txt` when the resource fits and when it doesn't (Laws of UX).
- Document every component under the same headings so a missing state or accessibility note stands out (UI Playbook, Carbon Design System).
- Put a live, editable example or a scrubbable figure next to each concept, and publish the measurements behind any claim (The Book of Shaders, Morphrig).
- End each component page with a short checklist a reviewer can tick off (Inclusive Components).
- Export README images as light and dark `<picture>` pairs so they follow the reader's theme (shieldcn).

## Pitfalls

- Aggregators are only a gateway: detailed anatomy and guidance still live on the original system's site, not inline.
- Community-submitted documentation varies in freshness; some catalogued systems are explicitly flagged "unmaintained."
- No licence is stated for many community-submitted design systems — verify before using one on a commercial project.
- Terms can forbid automated retrieval even when robots.txt allows AI crawlers; read both before pointing an agent at a docs site (Design.md Store).
- Free to read is not free to reuse: The Book of Shaders reserves all rights, Laws of UX forbids derivatives and commercial use, and Morphrig states no licence at all.
- Good docs date too: UI Playbook was last pushed in January 2023 and Inclusive Components in 2018, so check examples against current standards.
- Some docs only render in the browser; point agents at the repo sources instead (Design System Checklist's `src/translations/en/*.js`, UI Playbook's MDX files).

## Related topics

- [Components](components.md)
- [Agents and prompts](agents-and-prompts.md)
- [Typography and styles](typography-and-styles.md)
- [DESIGN.md files](design-md.md)
- [UX patterns](ux-patterns.md)
