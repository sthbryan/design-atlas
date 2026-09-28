---
title: A1
description: A curated gallery of live websites, full pages and individual sections, with visual filters and measured design details.
url: https://www.a1.gallery
type: gallery
formats: curated website gallery · section and page library · font index · MCP server · Chrome extension
topics: [inspiration, landing-pages, typography-and-styles, agents-and-prompts]
verdict: very-useful
agent: [mcp]
pricing: freemium
licence: Browsing is free. MCP use needs a free account (50 requests/day); Pro is $10 monthly or $84 yearly and raises the limit to 2,000/day. Terms permit using references in your work but forbid copying or redistributing A1 data, screenshots, measured palettes or section content; AI training, mirroring and re-hosting are also prohibited.
licence_class: proprietary-paid
reviewed: 2026-09-26
status: active
related: [curated-design, sections-wtf, typeface-fyi, mobbin, one-page-love]
---
[← Atlas](../site/home.md) · Topics: [inspiration](../topics/inspiration.md), [landing-pages](../topics/landing-pages.md), [typography-and-styles](../topics/typography-and-styles.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# A1

## What it is

A1 is a curated gallery of live websites, with separate records for captured interior pages and sections. A website record shows a screenshot, tags for style/type/category/technology, colour and fonts, and a link to the source site. Individual section records add their own screenshot and measured design values. At review, the MCP page reported 1,205 sites, 3,238 sections and 3,037 full-page captures; those counts change over time.

## When to open it

Open it when you need to compare real examples by more than a loose style label: filter by site type, visual style, technology, font or colour, then inspect the actual page. Use Sections when the design question is about one specific pattern, such as a hero, pricing block, FAQ or footer. Use Pages when you want to compare an entire pricing, careers, docs or other interior page across sites.

## Most useful

- Start with the [landing-page index](https://www.a1.gallery/type/landing), then narrow through style, category and colour filters. The visible style facets include Big type, Typographic, Minimal, Dark, Serif, Video and others; a dedicated Brutalist filter was not present in the facets surfaced during review. For brutalism specifically, use a source with a direct style collection and use A1 for adjacent traits such as oversized type or dark palettes.
- Open a concrete record such as [Control](https://www.a1.gallery/website/control-2026). It labels the page as Landing, Big type and Typographic, lists its colours and fonts, and links to related examples. Use the screenshot to spot the composition, then open the live site and check how the type and layout behave as you scroll.
- The [Sections index](https://www.a1.gallery/sections) groups patterns by function and links each section to its source website. This helps compare, for example, several hero layouts without searching whole sites manually.
- On a website detail page, follow a font or collection tag to find more sites with that trait. For instance, [Atlas by WorkOS](https://www.a1.gallery/website/atlas-by-workos) combines big type, typographic treatment, 3D imagery and a restrained white/black/purple palette; its record also links to captured interior pages.
- Use the browser or MCP to make a small shortlist, not to treat the gallery's labels as the design conclusion. Write down what transfers—grid, type scale, spacing, colour roles, section rhythm or motion—and separate that from the source site's copy and subject.

## Using it with agents

A1 documents a Streamable HTTP MCP server at `https://www.a1.gallery/api/mcp`. It requires a free account and currently documents 17 tools, including `search_websites`, `browse_websites`, `get_website`, `search_sections`, `search_pages`, `get_website_sections`, `get_website_pages` and `get_design_filters`. Search by a style plus a page type, retrieve a few records with screenshots and measured values, then open the original sites in the browser to inspect their current layout and behavior. The `llms.txt` file listed in the previous entry could not be verified through the available live readers, so use the MCP documentation as the confirmed agent route.

## Watch out for

- A free account gets 50 MCP requests a day; Pro is $10 per month or $84 per year and provides 2,000 requests a day. Full-page screenshots are a Pro feature, while the gallery itself is free to browse.
- A1 permits reference use in personal and client work, but its terms prohibit bulk downloads, copying its dataset into another product, AI training, mirroring and re-hosting. The featured websites and their screenshots belong to their creators; use the captures to study design, not as assets to ship.
- Measured values are estimates from rendered pages, not the source CSS. Verify any important size, typeface or spacing against the live site and adapt it to your own layout.
- Sponsored cards and paid submissions may appear alongside the editorial gallery; check the record and its tags before treating placement as an editorial recommendation.

## Reusable ideas

- Connect each individual section to its full source page and keep the capture, visual tags and measured values together.
- Let a designer move between levels: browse a style or site type, inspect a full site, open its interior pages, then compare one component across multiple examples.
- Report measured design values as estimates and link back to live references so people can verify them before implementation.

## Related

[Curated](curated-design.md), [Sections.wtf](sections-wtf.md), [Typeface.fyi](typeface-fyi.md), [Mobbin](mobbin.md), [One Page Love](one-page-love.md)
