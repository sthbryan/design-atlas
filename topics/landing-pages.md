---
title: Landing pages
description: galleries, section libraries, templates and skills for marketing and launch pages.
order: 2
---
[← Atlas](../README.md)

# Landing pages

Galleries, section libraries, templates and agent skills for marketing and launch pages, from the hero down to the footer.

## Start here

- [Sections.wtf](../sites/sections-wtf.md) — about 280 single landing-page sections recorded as video and filtered across 22 section types, for comparing one block at a time.
- [Curated](../sites/curated-design.md) — about 2,240 live sites filed by industry and by style, plus a 2,267-entry section library (mostly Pro).
- [Details](../sites/details.md) — about 3,155 hand-tagged captures of heroes, loaders, page transitions and scroll effects, with a paid code Vault and MCP.
- [Hallmark](../sites/hallmark.md) — an MIT agent skill that picks the page's structure before its styling, then runs 57 slop-test gates.
- [Good UI](../sites/good-ui.md) — 141 conversion patterns backed by 642 shared A/B tests, for choosing what to change with some evidence behind it.

## All sources

<!-- atlas:sources:start -->
- [Aceternity UI](../sites/aceternity-ui.md) — 200+ React and Tailwind landing-page components and blocks (heroes, bento grids, shaders); the elaborate blocks are paid.
- [Anthropic Skills](../sites/anthropic-skills.md) — Anthropic's frontend-design anti-default skill plus canvas-design, theme-factory and brand-guidelines, all Apache-2.0.
- [antislop-ui](../sites/antislop-ui.md) — Purpose-gated UI rules, honesty gates and an evidence-backed Delivery Gate, including dashboard tells.
- [Curated](../sites/curated-design.md) — About 2,240 live sites by industry and style, plus a 2,267-entry section library (mostly Pro).
- [Details](../sites/details.md) — About 3,155 hand-tagged captures of website heroes, loaders, transitions and scroll effects, plus a paid code Vault and MCP.
- [GetLayers](../sites/getlayers.md) — Paid library of WebGL scenes, gradients and cinematic templates, each copied as one prompt; MCP needs the top tier.
- [Good UI](../sites/good-ui.md) — 141 conversion patterns backed by 642 shared A/B tests; the effect sizes are paywalled.
- [Hallmark](../sites/hallmark.md) — MIT anti-slop skill from Together AI: picks the page structure first, then runs 57 slop-test gates.
- [Kibo UI](../sites/kibo-ui.md) — Free MIT shadcn companion with 41 functional components (Gantt, Kanban, editor), 28 marketing blocks and an MCP server.
- [Kombai](../sites/kombai.md) — Credit-based frontend coding agent with an MCP server, plus a free 20,000-design gallery that copies designs as prompts.
- [Landing Love](../sites/landing-love.md) — 2,156 landing pages recorded as full-page scrolling videos, with GSAP, WebGL and Three.js collections.
- [Neuform](../sites/neuform.md) — Remixable AI-generated landing pages with per-template design breakdowns and 71 copyable prompt skills.
- [Scrolltide](../sites/scrolltide.md) — Paid cinematic scroll-driven templates and sections for landing pages, each paired with an agent prompt.
- [Sections.wtf](../sites/sections-wtf.md) — About 280 single landing-page sections recorded as video, filterable across 22 section types.
- [SEESAW](../sites/seesaw.md) — About 860 hand-picked live sites, each tagged with its typefaces, plus a 630-font index.
- [Supahero](../sites/supahero.md) — About 570 real website hero sections on one page, searchable by name but with no filters.
- [Taste Skill](../sites/taste-skill.md) — Thirteen anti-slop skills with exact bans, three design dials and a strict pre-flight checklist for landing pages.
- [Tremor](../sites/tremor.md) — Copy-paste React and Tailwind dashboard components, spark charts and 300+ free blocks, now owned by Vercel.
- [VibeUI](../sites/vibeui.md) — 92 copyable layout-only prompts in 15 section types, each paired with a style screenshot.
<!-- atlas:sources:end -->

## Patterns worth reusing

- Compare like with like: file references by section type so every example answers the same question (Sections.wtf, Supahero, Curated's section library).
- Search on two independent axes, what the site is for and how it looks, to find "dark fintech" or "pastel portfolio" without a tag cloud (Curated).
- Judge motion-heavy pages from full recordings, since the loader and scroll choreography are often the point, and tag references by build technology as well as industry (Landing Love, Details).
- Treat the loader and the page transition as one continuous sequence rather than two effects (Details).
- Decide the section structure before the styling, and don't reuse the same hero, three features and CTA rhythm on every page (Hallmark).
- Replace a missing number with a labelled placeholder instead of letting the model invent a statistic or testimonial (Hallmark).
- Write proposed changes as "try X instead of Y", and check a pattern's track record, losses included, before testing it (Good UI).
- Give the agent structure and style as separate inputs, a layout prompt plus a reference screenshot (VibeUI), and describe references in layout terms: grid, CTA position, copy density and what moves when (Sections.wtf, SEESAW).
- Keep marketing blocks on the same tokens as the product UI so the brand carries through from app to site (Kibo UI).
- Spend a heavy visual moment, such as a 3D hero or fluid field, on one place and give it a static fallback (GetLayers).

## Pitfalls

- References are other companies' pages: rebuild the structure and motion, never their brand, copy or imagery. Several terms also forbid scraping or bulk copying (Details, Curated, Good UI, GetLayers).
- The most useful parts are often paywalled: Curated's section library, Details' full library and MCP, Good UI's effect sizes, and GetLayers' 3D scenes and MCP.
- Sponsor cards, ads and affiliate links sit inside the grids (Landing Love, Curated, Sections.wtf); separate editorial picks from paid ones.
- A winning test on another site is not a promise for yours, and Good UI's tests lean heavily toward ecommerce, lead generation and SaaS funnels.
- Motion galleries skew toward portfolio and studio sites, which don't reflect typical product-marketing constraints (Landing Love).
- Prompt-based templates depend on the model: the rebuild differs from the preview (Scrolltide, GetLayers), and short layout prompts leave states, accessibility and responsiveness to the model (VibeUI).
- Few galleries expose anything to agents: Details has a paid MCP, Kombai and Landing Love publish `llms.txt`, and the rest mean describing references by hand.
- Hallmark deliberately avoids repeating its last three macrostructures; for several pages of one product, tell it to keep a single structure and theme.

## Related topics

- [Inspiration](inspiration.md)
- [CTA](cta.md)
- [Footers](footers.md)
- [Navigation](navigation.md)
- [Motion](motion.md)
- [3D and shaders](3d-and-shaders.md)
