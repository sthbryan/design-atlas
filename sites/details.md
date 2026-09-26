---
title: Details
description: About 3,155 hand-tagged captures of website heroes, loaders, transitions and scroll effects, plus a paid code Vault and MCP.
url: https://www.details.so
type: gallery
formats: inspiration gallery · code vault · MCP server
topics: [inspiration, motion, landing-pages, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt]
pricing: freemium
licence: "Free Starter tier; Pro $9/mo (annual) or $12/mo (quarterly); Max $19/mo or $25/mo; Team $22 or $28 per seat per month; Lifetime $490 one-time. Proprietary: Vault code may be used in your own and client projects on a paid plan, but not redistributed or used to train models. Screenshots belong to the featured sites"
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [60fps, supahero, footer-design, scrolltide, landing-love]
---
[← Atlas](../README.md) · Topics: [inspiration](../topics/inspiration.md), [motion](../topics/motion.md), [landing-pages](../topics/landing-pages.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Details

## What it is

Details is a hand-tagged library of parts of real production websites, operated from Switzerland. It has two sections. Inspo held about 3,155 captures at review time: heroes, footers, navigation, preloaders, page transitions, scroll effects and the smaller interactions between them. The Vault held 53 hand-built, copy-ready implementations such as page transitions, text reveals, buttons and blocks, 15 of them free with an account. The site runs on Astro and says new captures arrive weekly.

## When to open it

When you are designing a marketing or portfolio site and want to see how strong studios handle one specific moment: the loader, the way the hero hands off to the next section, a pinned-scroll story, a cursor effect, a footer. It is also a good fit when you want working code for a transition rather than just a reference video.

## Most useful

- **Five filter families**: elements (button, card, carousel, modal…), sections (hero, features, pricing, 404, footer…), interactions (preloader, page transition, pinned scroll, cursor, parallax…), industries and styles, each with counts
- **Interaction categories are deep**: scroll animations, pinned scroll, preloaders and page transitions each have well over 100 entries
- **Smart search** in plain language, plus saves and boards (limited on the free tier)
- **Vault** resources with a live preview, code, implementation docs and a build prompt

## Using it with agents

Details is built for agents. Its `llms.txt` lists every category, and each public page has a Markdown twin at the same path plus `.md`. Those twins only carry metadata, tags and media URLs. The remote MCP server at `https://api.details.so/mcp` uses OAuth and needs a paid plan. Pro gets search and full detail for Inspo entries: ordered video frames, the source URL, verified code excerpts where available and an implementation brief. Max, Team and Lifetime also get Vault search and each resource's implementation prompt. Setup steps are published for Claude Code, Cursor, Codex and v0, and calls are metered with monthly credits (300 on Pro, 1,000 on higher plans).

## Watch out for

- The free tier only shows recent drops and previews; the full library and the MCP are paid
- The terms say all purchases are non-refundable where the law allows
- The terms forbid scraping, mass downloading and using the service to build or train a competing dataset or model
- Inspo captures are other companies' sites: rebuild the motion idea, not their brand, copy or imagery

## Reusable ideas

- Tag each reference by element, section, interaction, industry and style so it can be found from any angle
- Treat the loader and page transition as one continuous sequence rather than two separate effects
- Give agents a picked reference's ordered frames plus a short brief, not just a link, before asking them to rebuild it
- Publish a Markdown twin of every public page so agents can browse without scraping HTML

## Related

[60fps](60fps.md), [Supahero](supahero.md), [Footer Design](footer-design.md), [Scrolltide](scrolltide.md), [Landing Love](landing-love.md)
