---
title: ogimagecn
description: 22 Satori Open Graph card templates plus a free checker previewing links on seven platforms.
url: https://www.ogimagecn.com
type: component-library
formats: Open Graph image component library (shadcn registry) · preview tool
topics: [components, assets]
verdict: useful
agent: [llms-txt, registry, api, skill]
pricing: free
licence: free; MIT (repo `shadcn-labs/ogimagecn`); cards render through Satori (MPL-2.0) via Next.js `next/og`
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [posts-design, emailcn, pdfcn, shieldcn, shadcn-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [assets](../topics/assets.md)

# ogimagecn

## What it is

A shadcn-style registry of social card templates for link previews, each a single dependency-free TSX file written in the CSS subset Satori can render. It is part of the Shadcn Labs family by Aniket Pawar, which says it is not affiliated with shadcn. At review time it had 22 templates in four groups (brand, content, product and shadcn-registry showcases), a live customiser, and a free preview checker called Scan. The repository had about 230 stars.

## When to open it

When a site or blog needs dynamic Open Graph images per page and you want a well-designed starting card instead of tuning Satori layouts by trial and error, or when you want to see how a link will actually look on each platform before sharing it.

## Most useful

- **Content cards**: blog post with category and author row, poster-style editorial type, full-bleed photo with scrim, quote, profile, big-number stat and a terminal-style headline.
- **Product cards**: changelog with version pill and highlights, event with date and place, a logo tile, a product shot with price, and a faux browser showcase.
- **Registry cards**: six layouts made for announcing a shadcn registry or component collection.
- **Customiser**: edit every prop in the browser, then copy the code or download a PNG.
- **Scan**: paste a URL and it fetches the page with each crawler's user agent, then previews the card as X, Facebook, LinkedIn, Slack, Discord, Notion and Bluesky would show it.

## Using it with agents

Install with `npx shadcn@latest add @ogimagecn/<name>` (the namespace is in shadcn's public directory); the file lands in `components/og/` and you return it from a route as an `ImageResponse`. The site publishes `llms.txt`, `llms-full.txt`, Markdown copies of every page, an OpenAPI file and a short agent skill, and points to the standard shadcn MCP server.

## Watch out for

- The docs assume the Next.js App Router; other frameworks need their own Satori or `@vercel/og` setup.
- Satori supports only part of CSS, so edits that look fine in the browser preview can still break or shift in the rendered image; check the real PNG.
- Custom fonts must be loaded and passed in by you; the first font passed becomes the default.
- Scan sends requests to the URL you give it, so avoid pasting private or staging links.

## Reusable ideas

- Generate the card from the page's own title and metadata so every URL gets a unique preview.
- Check previews per platform: each one crops, truncates and ignores different tags.
- Keep text large and inside a safe area, since some apps show the image as a small thumbnail or crop it.
- Give changelog and release pages their own card style with the version number up front.

## Related

[posts.design](posts-design.md), [emailcn](emailcn.md), [pdfcn](pdfcn.md), [shieldcn](shieldcn.md), [shadcn/ui](shadcn-ui.md)
