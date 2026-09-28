---
title: Venust Backgrounds
description: CC0 AI hero backgrounds sorted by page slot, each with its prompt; llms.txt and Markdown for agents.
url: https://backgrounds.venust.ai
type: asset-library
formats: asset library · AI prompts · hero builder
topics: [assets, agents-and-prompts, landing-pages]
verdict: very-useful
agent: [llms-txt, prompts]
pricing: free
licence: Free, no account / images and saved prompts under CC0 1.0 (site code, fonts and brand marks excluded)
licence_class: public-domain
reviewed: 2026-09-25
status: active
related: [backgrounds-supply, supahero, kage, fffuel]
---
[← Atlas](../site/home.md) · Topics: [assets](../topics/assets.md), [agents-and-prompts](../topics/agents-and-prompts.md), [landing-pages](../topics/landing-pages.md)

# Venust Backgrounds

## What it is

Backgrounds by VenustAI is a free library of AI-generated website backgrounds published by VenustAI, a creative technology agency based in Toronto that sells custom imagery and websites. The homepage counts more than 500 backgrounds, 50 themes and 600 original prompts, with new images added weekly. Each theme (Coral Bloom, Paper-cut Alpine, Midnight Iris, City After Rain and so on) groups images by intended use and real dimensions: widescreen heroes, landscape sections, portrait mobile heroes and square cards. Every asset page gives PNG and WebP downloads, native pixel size, where the empty space for copy sits, and the prompt that produced it. The site also has 25 hero mockups for fictional brands and a Hero Builder.

## When to open it

Open it when a landing page needs a coherent set of hero and section images in one visual direction, under a licence that lets you ship them anywhere. The saved prompts are also useful when you want to produce your own variations in the same style with an image model.

## Most useful

- **Themes as sets**: one theme gives matching images for the hero, alternate heroes with copy left or right, closing banners, cards and mobile, so a whole page stays consistent
- **Original prompts**: shown on each asset page and downloadable as `.txt`, with a note when a variation used the theme's main image as reference
- **Copy-space notes**: each asset says where the calm area for text is, such as a darker upper-left pocket
- **Hero Builder**: arrange your own title, subtitle, badge, buttons and type over an image, preview desktop, tablet and mobile, then copy a design prompt for a coding assistant
- **No gate**: downloads need no account, email or payment

## Using it with agents

This is one of the more agent-friendly asset sites. It publishes an `llms.txt` that explains when to use each section and warns agents not to invent filenames or call endpoints that don't exist. Any page returns Markdown when requested with `Accept: text/markdown`, and a sitemap lists every page and image. There is no MCP server or write API. A good flow is to have the agent read a theme page as Markdown, pick an image by orientation and copy space, download the WebP, and build the hero around it. The Hero Builder prompt can go straight to Claude Code or Cursor.

## Watch out for

- Resolutions vary and are often below 4K (for example 1672 × 941 or 1916 × 821), even though the prompts ask for native 4K
- The images are AI-generated, and CC0 gives no rights that belong to others: check anything that looks like a real place, brand or logo
- The Our Choice theme shows the actual VenustAI brand mark, which is excluded from the CC0 dedication
- Seven early studies have no saved prompt, and regenerating a prompt won't reproduce the same image
- Hero mockups are static inspiration images, not working components, and video backgrounds are still marked as coming soon

## Reusable ideas

- Ship each image with its prompt, dimensions and copy-space note, so people and agents can choose without opening it
- Group assets by the slot they fill on a page (hero, divider, card, mobile), not only by mood
- Serve Markdown to agents through content negotiation on the same URLs
- End a visual builder with a prompt for a coding agent instead of exported code

## Related

[Backgrounds Supply](backgrounds-supply.md), [Supahero](supahero.md), [Kage](kage.md), [Fffuel](fffuel.md)
