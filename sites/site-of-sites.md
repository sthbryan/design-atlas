---
title: Site of Sites
description: Curated gallery of about 600 live websites tagged by industry, style and platform, plus collections, an agency directory and a Wix MCP.
url: https://www.siteofsites.co
type: gallery
formats: curated website gallery · collections · agency directory · design glossary · events calendar · Wix MCP server · llms.txt
topics: [inspiration, typography-and-styles, agents-and-prompts]
verdict: useful
agent: [mcp, llms-txt]
pricing: free
licence: Free to browse and free to submit. The terms are Wix.com Ltd's boilerplate (the site runs on Wix) and say submissions are free, that the editors may accept, decline or remove a site at their discretion, and that submitting authorises them to show screenshots and screen recordings of your site here and on their social accounts. Nothing is stated about reusing the screenshots or the collection
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [best-website-gallery, minimal-gallery, awwwards, siteinspire, a1-gallery]
---
[← Atlas](../README.md) · Topics: [inspiration](../topics/inspiration.md), [typography-and-styles](../topics/typography-and-styles.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Site of Sites

## What it is

Site of Sites is a curated gallery of live websites, run by a small team that signs its about page "we, as designers". At review the index counted 596 entries and the websites sitemap listed 595 URLs, updated within the previous two days. Around the gallery sit five smaller sections: 30 collections, a directory of 123 agencies, a 20-term design glossary, a 48-entry events calendar and a 12-post blog. The site is built on Wix.

## When to open it

Open it when you want recent work rather than an award archive, and when the brief is already narrowed to a platform, a sector or a look. The filters cross four axes, so you can ask for something like a dark, big-type ecommerce site built in Shopify, or an experimental portfolio built in custom code. The platform filter is the useful part for a build: it tells you the reference was made in Webflow, Framer, Readymag, Cargo, WordPress, Shopify or hand-written code.

## Most useful

- **Style tags** taken from a controlled list on the submit form: Minimal, Big Type, Retro, Dark, Illustrative, Grid, Monochrome, Hand-drawn, Text-effects, Custom cursor, Animated gallery, Mode switching, 3D elements, Scrollitelling, Hover animation, Shaped masks, Menu bar and Creative coding
- **Industries** (15 at review, from Design and Creative Arts to Fashion & Beauty, Restaurants & Food and Travel & Tourism), plus **types** such as Creative Tool, Portfolio, Ecommerce, Landing Page, Interactive, Concept Website, Personal / Blog and Company / Brand website
- **Platform tags** on nearly every entry, which the big award galleries do not offer as a filter
- **Item pages** with the screenshot, its tags, platform, month and year, a live-site link and separate design and code credits
- **Collections** that group entries by a theme, and an events calendar that lists design weeks and conferences

## Using it with agents

The site publishes `llms.txt` and runs a Wix site MCP at `https://www.siteofsites.co/_api/mcp`. The `llms.txt` lists tools for business details, site search and the installed Wix APIs; the live server answered a `tools/list` call at review and returned Wix's wider toolset, including documentation helpers. Treat it as a way to search a Wix site, not as a design API: there is no endpoint that returns an entry's tags, platform or screenshot URL. The more reliable agent route is `robots.txt`, which allows crawling, plus the sitemap index, whose per-section sitemaps (websites, collections, agencies, glossary, events) all carry `lastmod`, so a scheduled job can follow new entries by diffing one small file.

## Watch out for

- The MCP is Wix's generic site assistant. Its tools are oriented to reading and changing the Wix site, and its own instructions are addressed to an agent managing that site, so do not let it operate here just to look up references
- Screenshots come from the submitter, and the terms only cover the site's right to display them. No reuse licence is stated for the images or for the collection data
- The protocol description in `llms.txt` and the tool list the server actually exposes do not match
- Update rhythm differs by section: at review websites and collections had changed within days, while the glossary had not changed since December 2025 and the events page since February 2026
- The footer still reads 2025, and the glossary, blog and events sit outside the core gallery, so the 596-entry gallery is the part worth returning for
- Submitting requires a screenshot set and design and code credits, and a re-submission if the site changes, so treat an entry as a snapshot from its month

## Reusable ideas

- Tag every reference on four axes (industry, type, style, platform) and make the platform a filter, since that is the axis people choose a reference by when they are about to build
- Ask submitters for design and code credits separately, so a reference can be followed to the right person
- Group entries into small named collections instead of one endless feed, which gives a gallery a reason to be browsed rather than searched
- Publish one sitemap per content type with real `lastmod` dates, so an agent can watch for new items without crawling the whole site
- Keep a glossary beside the gallery: the same words that tag entries then have definitions to point at

## Related

[Best Website Gallery](best-website-gallery.md), [Minimal Gallery](minimal-gallery.md), [Awwwards](awwwards.md), [Siteinspire](siteinspire.md), [A1](a1-gallery.md)
