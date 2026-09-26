---
title: Refs.Gallery
description: Hand-picked gallery of 2,163 award-level sites with a deep tag taxonomy (framework, CMS, animation, hosting) and weekly updates.
url: https://refs.gallery
type: gallery
formats: curated website gallery · tag and stack filters · collections · editorial articles (Margins) · weekly newsletter · sponsorship slots · llm.txt
topics: [inspiration, typography-and-styles, agents-and-prompts]
verdict: useful
agent: [llms-txt]
pricing: free
licence: Free to browse, with no user account or paid tier found. Money comes from sponsorship packages (a gallery slot, a newsletter block and a pinned placement). The footer carries a "fair use" notice and the featured sites stay their owners' work; nothing is stated about reusing the screenshots or the metadata. Submission is by email only, and no terms page was reachable at review
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [siteinspire, best-website-gallery, minimal-gallery, awwwards, a1-gallery]
---
[← Atlas](../README.md) · Topics: [inspiration](../topics/inspiration.md), [typography-and-styles](../topics/typography-and-styles.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Refs.Gallery

## What it is

Refs.Gallery is a hand-picked gallery of live websites, built with Next.js. At review the site counted 2,163 projects, the sitemap listed 2,161 project pages, 119 category pages and 30 collections, and the about page gave the cadence as weekly. Each entry is reviewed by hand against four stated criteria: concept freshness, detail finesse, technical execution and editorial value. Alongside the gallery sit Margins, an editorial section of essays and list-based guides, a weekly newsletter, a shuffle view and a sponsorship page.

## When to open it

Open it when the constraint is the build rather than the look: it is one of the few galleries that tags entries by framework, CMS, animation library, host and platform, so you can look at, say, sites shipping GSAP, Sanity or Cloudflare. It is also good for calibration before a redesign, and Margins is worth reading when you want someone to have already compared a category and written down what the strong sites share.

## Most useful

- **A 14-group tag taxonomy**, with entries under more than one group: Type (Portfolio 759, Agency 685, Studio 662, Product 357, Editor's Choice 248, Landing Page 186, Startup 179, SaaS 159, Corporate 151, E-commerce 111, App 98), Style (Modern 1,084, Clean 885, Branding 702, Interactive 673, Storytelling 509, Typography 434, Minimal 404, Dark UI 45, Brutalist 8), Industry, Framework (Next.js 53, Vue 1), CMS (Contentful, Headless WordPress, Sanity, Shopify, Strapi, Payload), Styling (Tailwind CSS 32), Animation (Motion 492, Animation 386, GSAP 31, Three.js 21, Framer Motion 17, Rive 1), Library (React 64), Font, Hosting (Vercel, Cloudflare, Netlify), Platform (Web 1,022, Mobile 56), Tech (WebGL 56, Web3 36, Data Viz 28), Tool and Template
- **Editor's Choice**, a 248-entry shortlist inside the same filter system
- **30 collections** with counts, such as Award-Winning (739), Corporate (1,218), Storytelling (592) and Experimental & Avant-Garde (148)
- **Project pages** with the publish date, tags, a live-site link and a written note split into "Visual Language & Motion", "UX & Performance" and "Takeaway"
- **Margins articles**, each with an author line and date, plus its own RSS feed at `/margins/feed.xml`; the site-wide feed sits at `/feed.xml`
- **Shuffle**, which returns a random set instead of the newest, useful when you have no brief yet

## Using it with agents

The site publishes `/llm.txt`, declared in `robots.txt` through an `LLM-Txt` line, which lists the sections, the category groups and the stack. There is no MCP server and no public API (`/api/` is disallowed to crawlers). The practical route is `robots.txt` plus `sitemap.xml`: crawling is allowed apart from `/admin/`, `/api/`, `/playground` and `/studio`, and the sitemap gives 2,337 URLs, so a job can diff project and category URLs week by week. One catch: the pages sit behind a Vercel bot checkpoint that answered HTTP 429 to plain scripted fetches at review, so an agent needs a real browser session or a delayed crawl rather than a bare `curl`.

## Watch out for

- The bot checkpoint rejects ordinary scripted requests, which makes this the hardest of the curated galleries to read from a script; the same page loaded fine in a browser
- The footer shows a "Legals" label, but it had no link target and `/legals`, `/legal`, `/terms` and `/privacy` all returned 404 at review, so nothing states the reuse terms
- Sponsor slots sit in the grid, labelled "Sponsor" or "Place your ad here", and the sponsorship page prices nothing publicly, quoting packages by email instead
- The stack tags are uneven. Animation, Type and Style are dense, while the technology groups are thin (Hosting counts 5, 4 and 1), so a filter can return a handful of results
- `/llm.txt` is singular. A probe for the usual `/llms.txt` returns 404
- Everything about the site, including the counts, moves weekly, so re-check the taxonomy before quoting a number

## Reusable ideas

- Tag references by the stack that shipped them, not only by looks, so a designer can search the way they will actually build
- Attach three short written judgements to each reference, covering visual language, UX and one takeaway, instead of a screenshot alone
- Keep an "Editor's Choice" tag inside the same taxonomy rather than a separate page, so it composes with every other filter
- Declare the agent guide as `LLM-Txt` in `robots.txt`, since agents that look for the singular name will otherwise miss it
- Offer a shuffle for the moments when the brief does not exist yet

## Related

[Siteinspire](siteinspire.md), [Best Website Gallery](best-website-gallery.md), [Minimal Gallery](minimal-gallery.md), [Awwwards](awwwards.md), [A1](a1-gallery.md)
