---
title: Best Website Gallery
description: One curator's 2,640 noteworthy sites since 2008, tagged by colour, features and shipped libraries; updated irregularly.
url: https://bestwebsite.gallery
type: gallery
formats: curated website gallery · design-engineering link log · RSS
topics: [inspiration, landing-pages]
verdict: niche
agent: []
pricing: free
licence: Free, no ads or paid tiers found. The legal notice describes a private, non-commercial project. It says rights to the sites, trademarks and content shown stay with their owners, and inclusion implies no endorsement. Owners can request removal or ask for their domain to be excluded from future captures
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [minimal-gallery, details, recent-design, awwwards, siteinspire]
---
[← Atlas](../site/home.md) · Topics: [inspiration](../topics/inspiration.md), [landing-pages](../topics/landing-pages.md)

# Best Website Gallery

## What it is

Best Website Gallery (BWG) is a one-person collection of noteworthy websites. Austrian designer and developer David Hellmann has curated it since 2008. At review the footer counted 2,640 sites. Each entry has a Site of the Day date, the country and maker, colour and feature tags, detected front-end libraries, and a set of full-page screenshots. A second section, Links, collects articles on CSS, design systems and design engineering. The site runs on Astro and StyleX over a Craft CMS back end.

## When to open it

Open it for a small, personal, low-noise alternative to the big award galleries, or when you want to see how a studio or portfolio site is built as well as how it looks. The tech tags help when you are choosing a scroll or animation library and want sites that already use it.

## Most useful

- **Tech tags** on each entry, such as GSAP, Lenis, jQuery or MomentJS, next to feature tags like Sticky Navigation, Scroll Effects and Case Studies
- **Colour tags** (for example Gray, Green) for palette-led browsing
- **Full-page screenshot sets**, up to around 20 captures per site, where the viewer loads
- **Links log**: a short, dated reading list of design-engineering articles and tools
- **Separate RSS feeds** for new sites and new links

## Using it with agents

There is no MCP, API or `llms.txt` (the path returned 404 at review). The robots file allows crawling apart from CMS internals, and the site has a sitemap and two RSS feeds. An agent can therefore follow new entries by feed and read an entry's tags from its HTML. Treat it as a human-picked shortlist: open an entry, check the live site, then brief the agent on the pattern in your own words.

## Watch out for

- Updates are irregular. The public list jumps from November 2024 to August 2026 with no new sites in between, and before that additions were sparse
- At review the tag browser, community ratings and screenshot viewer showed "could not be loaded" errors, and every score read 0.00
- There was no public submission form (`/submit` returned 404)
- Community ratings (1 to 10 for design, usability and creativity) are one per browser, not verified, and do not affect selection

## Reusable ideas

- Record the libraries a reference site actually ships, not just its visual style
- Start community scores at a neutral 5.0 so a handful of votes cannot swing a rating
- Offer site owners a way to opt their domain out of future captures, not just remove past ones
- Publish separate feeds for gallery entries and reading links so each can be followed on its own

## Related

[Minimal Gallery](minimal-gallery.md), [Details](details.md), [Recent](recent-design.md), [Awwwards](awwwards.md), [Siteinspire](siteinspire.md)
