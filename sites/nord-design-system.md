---
title: Nord Design System
description: Nordhealth's health-care design system, with 65 Web Components documented as contracts, status badges and installable agent skills.
url: https://nordhealth.design
type: design-system
formats: design system · Web Components · CSS framework · Figma toolkit · raw Markdown docs · llms.txt · agent skills
topics: [components, documentation, agent-skills]
verdict: very-useful
agent: [llms-txt, skill]
pricing: free
licence: The npm packages ship a licence that limits use to work done for and on behalf of Nordhealth, so the tokens, components and fonts are readable but not reusable elsewhere. The documentation pages state no separate licence at review
licence_class: source-available
reviewed: 2026-11-10
status: active
related: [pajamas, primer, carbon-design-system]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [documentation](../topics/documentation.md), [agent-skills](../topics/agent-skills.md)


# Nord Design System

## What it is

The design system behind Nordhealth's clinical software, published as documentation and as installable Web Components. The structure is the notable part: a collapsible left rail with three groups — Docs, Design, Core — where Docs separates developer material (Web Components, Webfonts, CDN, Localization, a CSS framework marked Legacy, an ESLint plugin, and a "Working with AI" pair of pages for `llms.txt` and agent skills) from design foundations (Accessibility checklist, Color System, Color Utilities, Principles, Figma Toolkit, Grid, Iconography, Naming, Nordhealth Brand, Typography).

What makes it worth reading is the writing style of the component docs. They are contracts rather than specimens. Pagination states that it owns no page state, renders no controls and emits no events, then lists the primitives to compose and the `paginate()` helper that does the arithmetic. Scroll Area exposes the distance from each edge as CSS custom properties so you can drive an edge-fade mask. Truncate's description includes what happens on overflow: a tooltip with the full text.

## When to open it

Open it when you are writing component docs and want a reference for explaining *behaviour and ownership* rather than showing variants, or when a system has to work in a regulated domain where accessibility is checked rather than claimed. Also useful when you need a pattern for separating a design system from a brand section without splitting them into different sites.

## Most useful

- **Status badges on every entry** — `New` on recent components, `Legacy` on the CSS framework — so a reader knows what is growing and what is being retired.
- **Composition-first components**: Field and Fieldset are separate from the inputs that go inside them, and Pagination ships the layout primitives and the maths but not the state.
- **An accessibility checklist as its own foundation page**, loaded from the same navigation as colour and typography.
- **Agent-facing docs as a first-class section**: a `llms.txt` page, raw Markdown mirrors of every doc, and a skills page that lists the agents the skills install into.
- **Keyboard hints rendered with the system's own kbd component** in the nav tooltips — the docs use the components they document.

## Using it with agents

Strong at review: `llms.txt` lists every document with raw Markdown URLs (`/raw/design/foundations/...`), and there is a dedicated skills page for installing the system's guidance into coding agents. Machine-readable copies plus a written component contract is a better combination than either alone.

## Watch out for

- **The licence blocks reuse.** The npm package licence grants use only for performing duties for Nordhealth and forbids other use, so the tokens and components are readable, not shippable. Study the documentation; do not copy the code, the fonts or the token names into another product.
- The CSS framework is marked Legacy, so older tutorials and articles about it describe a path the system is leaving.
- It is a health-care product system: the density, the restrained palette and the emphasis on error states suit clinical software better than a marketing site.
- Some component pages are marked `New` and their APIs can still move.

## Reusable ideas

- Document components by what they own and what they deliberately do not.
- Badge the maturity of every page instead of keeping a separate roadmap.
- Split developer and design navigation into parallel trees, and let components be a third.
- Publish raw Markdown twins of every doc, so an agent reads the same text a person does.
- Use the system's own components inside its documentation.

## Related

[Pajamas Design System](pajamas.md), [Primer](primer.md), [Carbon Design System](carbon-design-system.md)
