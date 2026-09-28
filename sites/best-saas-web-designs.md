---
title: Best SaaS Web Designs
description: Free, no-login catalogue of about 390 SaaS sites, each with desktop, mobile and OG captures, per-section crops, detected stack and a colour palette.
url: https://bestsaaswebdesigns.com
type: gallery
formats: inspiration gallery (screenshots, section crops) · llms.txt · Markdown twin
topics: [landing-pages, inspiration]
verdict: useful
agent: [llms-txt]
pricing: free
licence: Free with no login, with a sponsor slot in the grid. The terms say screenshots and brands belong to their owners, the site owns its own layout, code and text, and scraping or reselling its content is not allowed
licence_class: proprietary-free
reviewed: 2026-09-25
status: active
related: [saaspo, saas-landing-page, supahero, saasframe, footer-design]
---
[← Atlas](../site/home.md) · Topics: [landing-pages](../topics/landing-pages.md), [inspiration](../topics/inspiration.md)

# Best SaaS Web Designs

## What it is

Best SaaS Web Designs is a catalogue of SaaS company websites where each entry is split into parts. You get full-page desktop and mobile captures, the social preview image, and separate crops of the hero, features, pricing, testimonials, FAQ, logo cloud, footer and other sections. Each entry also lists the detected tech stack and a five-colour palette. Its Markdown snapshot counted 393 published sites in 15 categories on 2026-09-17. The site says entries are picked from Product Hunt, the YC directory and similar sources. The operator is not named beyond the brand.

## When to open it

When you are working on one section and want many real versions side by side, such as footers or logo clouds, or when you need to check how a SaaS page reflows on mobile.

## Most useful

- **15 section hubs**, each with a short editorial intro, notes on what to look for and a FAQ
- **Mobile and OG views** for every entry, next to the desktop capture
- **17 stack hubs** (Next.js, Framer, Webflow, Astro, Svelte, Remix and more) and four style hubs (dark, light, colourful, minimal)
- **Palette extraction** on each site page, handy for picking up a colour direction quickly
- **Saved sites** stored in your browser, so no account is needed

## Using it with agents

It has a `llms.txt`, an `llms-full.txt` and an `index.md` twin that explain the URL scheme (`/site/`, `/sections/`, `/category/`, `/style/`, `/stack/`) and give category counts. The robots file allows all crawlers except the admin and API paths. With those files an agent can find the right hub and list example sites; the images themselves still need a person or a vision model to review.

## Watch out for

- The comparison pages against Saaspo, Supahero and others are written by this site and quote its own older counts (350+ sites, 10 posts)
- Stack, palette and category data is detected automatically and the terms don't guarantee it is accurate
- The calculators (LTV, ROI) and blog are traffic content with little to do with design
- The catalogue is smaller than older SaaS galleries

## Reusable ideas

- Store each reference as a kit: full page, mobile, OG image and section crops together
- Give every section hub a short "what to look for" note so it teaches, not just lists
- Publish a dated Markdown snapshot of your catalogue counts for agents and crawlers

## Related

[Saaspo](saaspo.md), [SaaS Landing Page](saas-landing-page.md), [Supahero](supahero.md), [SaaSFrame](saasframe.md), [Footer Design](footer-design.md)
