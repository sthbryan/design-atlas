---
title: A1
description: 1,000+ curated sites split into sections and interior pages with measured design tokens, fonts and a 17-tool MCP server.
url: https://www.a1.gallery
type: gallery
formats: curated website gallery · section and page library · font index · MCP server · llms.txt · Chrome extension
topics: [inspiration, landing-pages, typography-and-styles, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt]
pricing: freemium
licence: Freemium. Browsing is free. A free account adds 30 saves and 50 MCP requests a day. Pro is $10 a month or $84 a year and adds unlimited saves, 2,000 MCP requests a day, queue-skipping submissions and analytics. Free submissions take about 3 to 4 weeks, or $49 buys a 24-hour review. The terms forbid reproducing or redistributing A1 content without permission, and screenshots stay with their owners. The pricing FAQ allows moodboards and client decks
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [curated-design, sections-wtf, typeface-fyi, mobbin, one-page-love]
---
[← Atlas](../README.md) · Topics: [inspiration](../topics/inspiration.md), [landing-pages](../topics/landing-pages.md), [typography-and-styles](../topics/typography-and-styles.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# A1

## What it is

A1 is a hand-picked gallery of live websites and templates, built and run by Copenhagen-based designer Bryn Taylor. The site says it holds over 1,000 sites and adds new ones almost daily. Unlike most galleries, it breaks each site into parts: a full-length capture of the home page, interior pages (pricing, about, careers, changelog, docs), and individual sections. Each section comes with its measured palette, type stack and spacing. It also indexes fonts and font pairings, OG images and creator profiles.

## When to open it

Open it when you need real numbers, not just a look: what type scale agency heroes use, how much padding a pricing section has, which fonts go with Inter. It is also useful for the pages galleries usually skip, such as careers, changelog and docs pages from companies with strong web design.

## Most useful

- **Type, category, style and tech filters**: Landing (716), Agency (231), Portfolio (196), with Design, AI and Software as the largest categories, and Framer, Webflow, Next.js and Astro among the technologies
- **Sections** grouped by the job they do (hero, pricing, FAQ, testimonials, footer), each with its extracted text and design tokens
- **Interior pages** captured whole, grouped by page type
- **Fonts and font pairings** backed by counts of the gallery sites that use them
- **Collections** that cross two facets, such as Animated + Landing (278 sites) or Next.js + Landing (220)

## Using it with agents

A1 runs an MCP server at `https://www.a1.gallery/api/mcp` (Streamable HTTP). It signs in with OAuth against a free account. `mcp.md` gives setup steps for Claude Code, Claude, Cursor, Codex, Windsurf, VS Code and Zed. There are 17 tools, covering search and browse, site, section and page detail, similar sites, fonts, font pairings and creators. Two of them, `analyze_design_tokens` and `analyze_section_content`, aggregate measured values or copy patterns across many sections and report them as quartiles or shares. The `llms.txt` asks agents to cite the canonical A1 URL.

## Watch out for

- The free MCP allowance of 50 requests a day runs out quickly with aggregate queries
- The grid includes sponsored cards (Framer, template shops) and paid submissions, which A1 says are reviewed separately from the editorial gallery
- The terms and the pricing FAQ read differently on reuse: the terms forbid redistribution, while the FAQ welcomes screenshots in client decks
- Design tokens are measured from rendered pages, so treat them as close estimates, not the source CSS

## Reusable ideas

- Store measured tokens (palette roles, type sizes, spacing, radius) with every captured section, not just the image
- Report design values across a set as quartiles, so "typical" has a range
- Capture interior pages by type so teams can study pricing or careers pages across companies
- Link fonts to the real sites that use them, and pairings to sites that combine them

## Related

[Curated](curated-design.md), [Sections.wtf](sections-wtf.md), [Typeface.fyi](typeface-fyi.md), [Mobbin](mobbin.md), [One Page Love](one-page-love.md)
