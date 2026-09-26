---
title: One Page Love
description: 9,000+ single-page sites and cropped sections since 2008, searchable through a free, keyless MCP that returns hero copy.
url: https://onepagelove.com
type: gallery
formats: one-page website gallery · section archive · template directory · public MCP server · llms.txt
topics: [inspiration, landing-pages, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt]
pricing: free
licence: Free to browse, and the MCP server is free with no key during its private beta. Money comes from marked sponsor placements and a template catalogue that is mostly premium (189 of 295 at review). The legal notice says screenshots and descriptions belong to the owners of the sites shown and are published for review and reference
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [minimal-gallery, landing-love, sections-wtf, supahero, a1-gallery]
---
[← Atlas](../README.md) · Topics: [inspiration](../topics/inspiration.md), [landing-pages](../topics/landing-pages.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# One Page Love

## What it is

One Page Love is a gallery of single-page websites and landing pages. Rob Hope launched it in March 2008. In July 2026 it was acquired by Some Studio UG in Berlin, led by Piet Terheyden, who also runs Minimalissimo and Minimal Gallery. At review the navigation counted 9,167 curated entries. Each has a full-length screenshot, a short written review and tags for genre, style, platform, tech, typeface and colour. The site only accepts pages with no main-navigation links to other pages, and rejects mockups and lightly edited templates.

## When to open it

Open it when you are building a launch page, waitlist, event page, personal page or portfolio that has to work as a single scroll. The section archive helps when you already know the page's outline and want to see how others handle one block, such as pricing, FAQ, testimonials or a lead-capture hero.

## Most useful

- **Genre and style filters**: Portfolio (3,778), Landing Page (2,011), Digital Product (1,524) and Launching Soon (936), plus styles such as Illustrative, Scroll Effects, Minimal and Brutalism
- **Sections archive**: cropped examples by block type, each linking back to its full review. Social proof, lead capture, testimonials, FAQ and pricing have the most
- **Tech and platform tags**: Tailwind CSS (365), GSAP (134), Next.js, Three.js and shadcn/ui, and builders from WordPress and Webflow to Framer and Carrd
- **Typefaces archive** showing which fonts turn up across the gallery
- **Templates** split into free and premium, by builder and by category

## Using it with agents

A free MCP server runs at `https://api.onepagelove.com/mcp` (Streamable HTTP, no auth, rate-limited by IP). It has two tools. `search_inspiration` filters full pages by query, colour, genre, platform, style, tech and typeface, and returns the screenshot plus hero copy (headline, eyebrow, CTA labels) read from the page by a vision model. `search_sections` needs a section type and returns cropped examples. Its instructions tell agents to raise `limit` rather than repeat a call. The `llms.txt` maps the whole taxonomy. The MCP page says only the query, result count and IP address are logged.

## Watch out for

- The `llms.txt` and `robots.txt` promise an API with a free key "in seconds", but the API page was a private-beta waitlist at review
- The MCP server still describes the gallery as curated by Rob Hope, although the site says the new owner curates it
- Sponsor cards sit in the main grid (third position) and in the sections archive. They are labelled, but look like entries
- Hero copy is machine-read from screenshots, so check it before quoting it

## Reusable ideas

- Enforce one clear inclusion rule (a true single page) and publish examples of what is accepted and what is not
- Crop sections out of full-page captures and link each crop back to its source page
- Return a page's real headline and CTA text with its screenshot so an agent can study copy and layout together
- Keep sponsors in the same card format, clearly labelled, instead of third-party ad scripts

## Related

[Minimal Gallery](minimal-gallery.md), [Landing Love](landing-love.md), [Sections.wtf](sections-wtf.md), [Supahero](supahero.md), [A1](a1-gallery.md)
