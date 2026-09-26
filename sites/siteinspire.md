---
title: Siteinspire
description: 10,000+ hand-picked, type-led sites since 2008, tagged by style, type and subject, with a free public read-only MCP server.
url: https://www.siteinspire.com
type: gallery
formats: curated web design gallery · public MCP server · REST and tRPC read API · llms.txt
topics: [inspiration, typography-and-styles, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt, api]
pricing: free
licence: Free to browse; pricing and submission terms could not be read at review. According to its `llms.txt`, screenshots and descriptions are © Siteinspire, and the index (titles, URLs, categories) may be used for non-commercial research and AI training with attribution
licence_class: proprietary-free
reviewed: 2026-09-25
status: active
related: [minimal-gallery, typeface-fyi, curated-design, awwwards, a1-gallery]
---
[← Atlas](../README.md) · Topics: [inspiration](../topics/inspiration.md), [typography-and-styles](../topics/typography-and-styles.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Siteinspire

## What it is

Siteinspire is a hand-curated gallery of web design that has been running since 2008. Its `llms.txt` says it has published more than 10,000 sites. Interviews and his profile on the site name designer Daniel Howells as its curator. Every entry has a screenshot, a link to the live site, credits to the studios and people who made it, and tags from a taxonomy with four contexts: style, type, subject and platform. At review the MCP server reported 123 categories. The biggest were Agencies & Consultancies (2,400 sites), Typographic (2,104), Design & Art Direction (1,943) and Portfolio (1,437).

## When to open it

Open it when you want quiet, editorial, type-led references: studio sites, portfolios, cultural institutions, small shops. The selection leans towards restraint and good typography over spectacle. It is also useful for finding studios, because profiles list their featured work, expertise and location.

## Most useful

- **Style tags** such as Typographic, Minimal, Grid Layout, Unusual Layout, Black & White and Big Type, which can be crossed with a type or subject
- **Category intersections**: two or three categories combined, for example minimal + portfolio, limited to the last 24 months unless you ask for the archive
- **Designer and studio profiles** with expertise tags and locations
- **Platform tags** for Webflow, Cargo, ReadyMag and Shopify, though few sites carry them (7 to 32 each)
- **Popular and recent feeds** for a quick look at what is being saved now

## Using it with agents

Siteinspire has one of the more complete agent setups among classic galleries. A public, read-only MCP server runs at `https://www.siteinspire.com/api/mcp` (Streamable HTTP, no auth), with a server card at `/.well-known/mcp.json`. At review it listed eight tools: `search_sites`, `list_websites`, `explore_websites`, `get_website`, `list_profiles`, `get_profile`, `all_categories` and `popular_websites`. Results include the Siteinspire page, the live `websiteUrl`, a screenshot URL and credits. The `llms.txt` and `llms-full.txt` also document a REST API and public tRPC procedures. For exact browsing, call `all_categories` first, then `list_websites` or `explore_websites`.

## Watch out for

- The HTML pages sit behind a Vercel bot check that returned HTTP 429 to scripted fetches at review; only the MCP endpoint answered reliably
- Free-text `search_sites` came back empty for some style words ("brutalist") but worked for others ("portfolio"), so browsing by category is safer
- The server card lists seven tools while the live server exposes eight
- `robots.txt` blocks training crawlers such as GPTBot, ClaudeBot and CCBot, but allows user-triggered agents
- The screenshots are Siteinspire's copyright, and the reuse note covers only the index, for non-commercial use

## Reusable ideas

- Tag every reference on separate axes (style, type, subject, platform) so they can be combined
- Default discovery to recent work and make the archive an explicit choice
- Return the gallery link and the live site as separate fields so agents cite both correctly
- State a clear reuse rule for machine consumers in the `llms.txt`

## Related

[Minimal Gallery](minimal-gallery.md), [Typeface.fyi](typeface-fyi.md), [Curated](curated-design.md), [Awwwards](awwwards.md), [A1](a1-gallery.md)
