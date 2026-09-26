---
title: Landingfolio
description: Landing page and section gallery with an MCP server that feeds real section screenshots to coding agents, plus paid Tailwind, Webflow and Figma components.
url: https://www.landingfolio.com
type: gallery
formats: inspiration gallery · section examples · component library (Tailwind, Webflow, Figma) · MCP server
topics: [landing-pages, inspiration, components, agents-and-prompts]
verdict: very-useful
agent: [mcp]
pricing: freemium
licence: The gallery is free to browse. The MCP needs a free token (100 requests a day at review). The all-access pass costs $1.99 a week or $59 once, and allows unlimited commercial end projects but no resale or redistribution of the items. Gallery screenshots are third-party sites
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [land-book, lapa-ninja, saaspo, shadcnblocks, mobbin]
---
[← Atlas](../README.md) · Topics: [landing-pages](../topics/landing-pages.md), [inspiration](../topics/inspiration.md), [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Landingfolio

## What it is

Landingfolio is a landing page inspiration site operated, according to its terms, by Postcrafts. It combines three things: a gallery of full landing pages tagged by industry and colour, a much larger set of section examples cut from real sites, and a paid component library with copy-paste blocks for Tailwind, Webflow and Figma. It also lists third-party templates, runs a mockup generator and a free logo pack, and sells courses on landing pages and SEO.

## When to open it

When you want your coding agent to look at real hero, pricing or testimonial sections while it builds, instead of guessing. It is also useful for a quick look at how many real sites handle one section, such as a logo cloud or a pricing table.

## Most useful

- **MCP server**: your agent can fetch section screenshots from the public library, with their category and a link to the source page. The site cites 4,600+ components
- **Section examples** across about 40 types, led by feature (1,005), hero (466), footer (396) and header (390) at review, plus rarer ones like before/after, competitors and cookie banners
- **Landing page gallery** filtered by 30+ industries (SaaS 341 at review), device and colour
- **Component library**: 800+ blocks for Tailwind, Webflow and Figma, grouped into global, marketing and app sections
- **Premium single-page templates** for Tailwind and Webflow, included with the pass

## Using it with agents

Create a free account, copy the token from the dashboard, and add the remote MCP endpoint to Claude Code, Cursor, Codex, Windsurf or VS Code with one config line. The free tier allows 100 requests a day with a burst cap of 10 a minute; the paid pass raises this to 1,000 a day. The site says it logs tool calls per account but never receives your code or prompts. The screenshots are for reference, so ask the agent to take structure and hierarchy from them and build its own layout.

## Watch out for

- The MCP requires an account and a bearer token, so an agent can't use it anonymously
- Gallery and MCP screenshots show third-party sites; the component licence covers only Landingfolio's own items
- The licence forbids reselling items or building templates from them, even modified
- Ads, affiliate links and course promotions (including a pre-order course of agent skills) run through the site

## Reusable ideas

- Give agents visual references through a tool, with the section category and source link attached, instead of pasting screenshots by hand
- Cut full pages into section examples; there are far more sections than whole pages to learn from
- Offer a small free request quota so people can try an agent integration before paying

## Related

[Landbook](land-book.md), [Lapa Ninja](lapa-ninja.md), [Saaspo](saaspo.md), [shadcnblocks](shadcnblocks.md), [Mobbin](mobbin.md)
