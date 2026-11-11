---
title: Mozaika
description: 588 real products decoded into measured design systems, screens and sections, queryable over MCP with DESIGN.md and token export.
url: https://mozaika.design
type: style-library
formats: MCP-native reference library · DESIGN.md, Tailwind, CSS variables and W3C tokens · screens and sliced sections · agent skill
topics: [design-md, documentation, agents-and-prompts, inspiration]
verdict: useful
agent: [mcp, llms-txt, skill]
pricing: freemium
licence: a free key allows 25 MCP calls a month; Pro is US$9 a month or US$60 a year, lifetime US$59 once at this review. The corpus is proprietary — output may be used in commercial and client work, but no right is granted to redistribute the corpus — while the separate design skill is MIT.
licence_class: proprietary-paid
reviewed: 2026-11-11
status: active
related: [refero-styles, refero, designmd-supply, curated-design]
---
[← Atlas](../site/home.md) · Topics: [design-md](../topics/design-md.md), [documentation](../topics/documentation.md), [agents-and-prompts](../topics/agents-and-prompts.md), [inspiration](../topics/inspiration.md)


# Mozaika

## What it is

Mozaika is a design reference library built for agents to query rather than for people to browse. It decodes 588 real products — Stripe, Vercel, Mercury, Raycast, Linear, Supabase, Framer, Resend among them — into measured design systems (550 at this review), 1,768 full-page screens, 3,873 sliced sections with their own specs, and ordered user flows. "Measured" is the operative word: colours, type scale, spacing and radii come from the live DOM, not from a model's memory. It also ships a 0–100 design score measured against that corpus, an icon generator driven by a brand's measured stroke and grid, and an explicit note on what the web's median values are.

## When to open it

- When you want an agent to build to real specifications from a named product instead of inventing a look.
- When you need one section's anatomy (spacing, states, motion) rather than a screenshot to eyeball.
- When you are auditing your own page and want a measured comparison against similar products.

## Most useful

- **Measured tokens, four export formats**: `get_design_system` returns DESIGN.md, Tailwind config, CSS variables or W3C tokens for the same product.
- **Sections with anatomy**: `get_component`, `get_section` and the `compare_*` tools return structure, motion and states, which is the part screenshots cannot carry.
- **Design Score**: a 0–100 audit taken from the live DOM with percentile ranking and an evidence-anchored fix list.
- **Dimensions for AI UI**: the corpus includes products known for assistant interfaces, and the icon generator works from the measured style rather than a prompt.
- **Free tier that is usable**: 25 calls a month with no card is enough to test the workflow.

## Using it with agents

This is an MCP product first. Connect with `claude mcp add --transport http mozaika https://mozaika.design/mcp --header "Authorization: Bearer <key>"`, with the key from `/connect`; calls without a valid key return 401. The `llms.txt` documents roughly nineteen tools — search and fetch screens, sections, products, design systems, recipes, flows, asset packs and scores — and the site publishes a separate MIT skill at `github.com/sezabut/mozaika-design` for skill-based agents. A shadcn-style registry endpoint takes a token.

## Watch out for

- **Licence is about output, not input**: you may ship what you generate, but you may not republish the corpus or scrape it.
- **Free tier is small**: 25 calls is a test, not a workflow; budget for Pro if an agent will use it daily.
- **Tool counts disagree across its own pages** (the skill describes ten tools, `llms.txt` about nineteen), so check what your client actually exposes.
- **Another design-system library**: if you already pay for a reference corpus, compare coverage of the specific products you copy from.
- **Measured does not mean endorsed**: a decoded spec is a description of a competitor's UI, not permission to imitate a brand.

## Reusable ideas

- Measure tokens from the live DOM and publish the measurements, with the method stated.
- Expose a reference library only through MCP, so the unit of use is a question, not a page.
- Return the same design system in four formats; agents and humans need different ones.
- Publish the web's median values so a designer can tell when a choice is unusual.

## Related

[Refero Styles](refero-styles.md), [Refero](refero.md), [designmd.supply](designmd-supply.md), [Curated](curated-design.md)
