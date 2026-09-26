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

- [Aceternity UI](../sites/aceternity-ui.md) — 200+ React and Tailwind landing-page components and blocks (heroes, bento grids, logo clouds, pricing, shaders); the elaborate blocks are paid.
- [Curated](../sites/curated-design.md) — two independent axes, industry and visual style, over live sites, and a section library of heroes, pricing tables, footers and FAQs.
- [Details](../sites/details.md) — deep categories for preloaders, page transitions and pinned scroll, filterable by element, section, interaction, industry and style; the full library and MCP are paid.
- [GetLayers](../sites/getlayers.md) — paid WebGL scenes, animated backgrounds and cinematic page templates for a page's signature moment, each copied as one prompt.
- [Good UI](../sites/good-ui.md) — patterns such as a sticky CTA or fewer form fields, with every test's statistical power shown and losing results published; win rates are members-only.
- [Hallmark](../sites/hallmark.md) — 21 macrostructures, 21 themes and archetype files for heroes, navigation, footers and testimonials, plus `audit`, `redesign` and `study` verbs.
- [Kibo UI](../sites/kibo-ui.md) — 28 free MIT blocks, including hero, feature, pricing, FAQ, CTA, testimonial and footer sections, themed with the same CSS variables as its app components.
- [Kombai](../sites/kombai.md) — a free gallery of about 20,000 designs, heroes and pricing pages among them, each with palette, type scale and a copyable prompt for any agent.
- [Landing Love](../sites/landing-love.md) — 2,156 landing pages recorded as full scrolling videos, with GSAP, WebGL, Three.js and horizontal-scroll collections.
- [Neuform](../sites/neuform.md) — remixable AI-generated landing pages, mostly dark and WebGL-heavy, each with a design breakdown; generating needs a paid plan.
- [Scrolltide](../sites/scrolltide.md) — paid cinematic scroll-driven templates for landing pages, heroes and portfolios, plus pricing, footer and CTA sections, each with an agent prompt.
- [Sections.wtf](../sites/sections-wtf.md) — one hero, pricing table or footer at a time, including rarer blocks such as roadmaps, team pages and comparison tables, with more shots from the same site.
- [SEESAW](../sites/seesaw.md) — about 860 hand-picked live sites, mostly startup, AI and developer-tool marketing, each tagged with the typefaces it uses.
- [Supahero](../sites/supahero.md) — about 570 hero sections on one long page, for judging headline length, CTA count and what sits above the fold.
- [VibeUI](../sites/vibeui.md) — 92 free layout prompts across 15 section types, including eight hero variants, pricing tables, CTA banners and footers, to pair with a style screenshot.

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
