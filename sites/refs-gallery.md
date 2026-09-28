---
title: Refs.Gallery
description: Dark 16:9 screenshot grid of 2,163 sites set entirely in a system stack, with display type tracked in at minus 0.06em.
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
[← Atlas](../site/home.md) · Topics: [inspiration](../topics/inspiration.md), [typography-and-styles](../topics/typography-and-styles.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Refs.Gallery

## What it is

Refs.Gallery is a curated gallery of live websites that makes its argument with restraint: a dark page, a 16:9 grid of screenshots, and no webfont at all. At review the page measured rgb(10, 10, 10) behind rgb(250, 250, 250) text, an off-black and off-white pair rather than the usual pure values, and every element on the page resolved to one system stack. The type does the work instead. The hero is 56px at weight 600 on a 53.2px line, a 0.95 ratio, with letter-spacing of minus 3.36px, about minus 0.06em, which is tighter than the minus 0.02em most display styles stop at. The site counted 2,163 projects, and the sitemap listed 2,161 project pages, 119 category pages and 30 collections.

## When to open it

Open it to study a gallery layout that stays legible with almost no design furniture, and to copy the two rules that carry it: a two-tone dark palette and display tracking set well below the default. It is also the gallery to open when the constraint is the build, because entries are tagged by framework, CMS, animation library, host and platform, not only by look. Margins is worth reading when you want someone to have compared a category already.

## Most useful

- **Tracking as the display style**: minus 3.36px at 56px on the hero, with the ordinary ranks kept neutral, so hierarchy comes from scale and spacing rather than from weight or colour
- **A four-step scale and nothing else**: 56px hero, 16px base on a 24px line, 14px at weight 500 for card titles on 20px, and 12px for the counts. There is no intermediate heading size to fall back on
- **A 16:9 grid**: 334 by 188 cards, image-led, served through the framework's image pipeline so each thumbnail is resized and re-encoded
- **A dark palette worth copying**: rgb(10, 10, 10) and rgb(250, 250, 250), which avoids the halation a pure white on pure black produces
- **Editor's Choice** as a 248-entry tag inside the same taxonomy, not a separate page, so it composes with every other filter
- **A 14-group tag taxonomy** across Type, Style, Industry, Framework, CMS, Styling, Animation, Library, Font, Hosting, Platform, Tech, Tool and Template
- **30 collections with counts**, such as Award-Winning (739), Corporate (1,218) and Experimental & Avant-Garde (148)
- **Margins articles** with an author line and date, plus feeds at `/margins/feed.xml` and `/feed.xml`

## Using it with agents

The site publishes `/llm.txt`, declared in `robots.txt` through an `LLM-Txt` line, listing its sections, category groups and stack. There is no MCP server and no public API. For design work the useful part is that every measured value above is readable from a browser session, so an agent can quote the grid ratio, the tracking and the palette rather than describing the mood. Crawling is allowed apart from `/admin/`, `/api/`, `/playground` and `/studio`, and the sitemap gives 2,337 URLs, enough for a weekly diff of project and category URLs. One catch: the pages sit behind a Vercel bot checkpoint that answered HTTP 429 to plain scripted fetches at review, so a real browser session or a paced crawl is needed.

## Watch out for

- The bot checkpoint rejects ordinary scripted requests, which makes this the hardest of the curated galleries to read from a script; the same page loaded fine in a browser
- The type scale is unforgiving. With only four sizes, a new heading level forces a decision rather than a default
- Minus 0.06em suits a system sans at display size. Moving the same value onto a serif or onto small text makes words collide
- The stack tags are uneven: Animation, Type and Style are dense while Hosting counts 5, 4 and 1, so a filter can return a handful of results
- The footer shows a "Legals" label with no link target, and `/legals`, `/legal`, `/terms` and `/privacy` all returned 404 at review
- Sponsor slots sit in the grid, labelled "Sponsor" or "Place your ad here", and nothing about the site's own screenshots may be reused
- `/llm.txt` is singular; a probe for the usual `/llms.txt` returns 404
- Counts move weekly, so re-check before quoting one

## Reusable ideas

- Dark on rgb(10, 10, 10) with rgb(250, 250, 250) text, so long scrolls of screenshots do not glare
- Cut display letter-spacing to around minus 0.05em or minus 0.06em, and keep the body ranks neutral, to get a contemporary hero out of a system font
- Fix cards at 16:9, let the screenshot fill them and put the title, meta and tags beneath, so a grid of wildly different sites still lines up
- Re-encode thumbnails at the display size instead of shipping full-page captures
- Keep an "Editor's Choice" tag inside the taxonomy, so it can be combined with any other filter
- Keep a four-step scale and refuse to add a fifth, which is what stops a gallery page drifting toward a template

## Related

[Siteinspire](siteinspire.md), [Best Website Gallery](best-website-gallery.md), [Minimal Gallery](minimal-gallery.md), [Awwwards](awwwards.md), [A1](a1-gallery.md)
