---
title: Rueya Supply
description: Pre-launch wallpaper and graphics shop, at review a one-screen waitlist hero over a canvas glass gradient plus finished legal pages.
url: https://www.rueya.supply
type: asset-library
formats: digital asset shop · waitlist landing page · Supabase-backed accounts, orders and file storage · admin workspace
topics: [assets, landing-pages]
verdict: niche
agent: []
pricing: paid
licence: The terms say a purchase gives a non-exclusive, non-transferable licence for personal use and your own business work, that ownership of the original files stays with Rueya or its licensors, and that you may not resell, redistribute, sublicense or publicly share the originals, strip ownership notices or build a directly competing product. Refunds are reviewed within three business days, and a change-of-mind refund is offered inside 14 days only if the product was not accessed or downloaded. Nothing is stated about reusing the site's own design
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [backgrounds-supply, curations-supply, fffuel, gradient-buttons]
---
[← Atlas](../README.md) · Topics: [assets](../topics/assets.md), [landing-pages](../topics/landing-pages.md)

# Rueya Supply

## What it is

Rueya Supply is a shop for digital wallpapers, graphics and tools, built with Nuxt on Vercel. At review it was pre-launch: the home page was a single screen with the headline "Dreams built with logic" and one email field, and every other storefront route redirected there. The shop, story, account and checkout URLs returned HTTP 302 to the home page, and the sitemap still listed 12 URLs including three admin paths. The two legal pages were already written and dated 21 September 2026. The privacy page names the stack behind it: Supabase for accounts, order data and file storage, and Resend for email.

## When to open it

Open it when you need a coming-soon or waitlist page that has to look finished before there is anything to sell: one screen, one input and a background carrying the whole identity. It is also a useful template if you are about to sell digital files, because the terms page is a short, complete example of how to write a download licence, a refund window and EU consumer rights.

## Most useful

- **The waitlist hero**: a layered radial and linear gradient painted over a dark base, with a canvas layer behind it, a single `email` field and a submit button
- **The terms page**, readable in one screen, covering download delivery, a non-transferable licence, refunds, and the note that EU, EEA and UK consumer rights still apply
- **The privacy page as an architecture sketch**: it names Supabase and Resend, says how long account data, order records, support mail and newsletter subscriptions are kept, and states that data is never sold
- **A designed button, not a default one**: token-driven colours and radius, a 44px minimum height, a 0.98 active scale, and a custom easing curve applied only when the visitor has not asked for reduced motion
- **The admin workspace shape**: Overview, Products and Newsletter screens, showing the store before it opens

## Using it with agents

Nothing is published for agents: `/llms.txt` returned 404, and there is no API, MCP server or schema. `robots.txt` is Nuxt's default, allows everything and points at `sitemap.xml`, which is short enough to diff by hand. The catch for an agent is the redirects, because crawling from internal links only ever lands on the waitlist page. Enumerate from the sitemap instead, and read the product licences from the terms page, which is the only page that states them.

## Watch out for

- Almost every route resolves to the same screen. The storefront, story, account and checkout URLs answer 302 and land on the home page, so a link audit or a crawler sees one page
- The public sitemap advertises `/admin`, `/admin/newsletter` and `/admin/products`, and those paths returned 200 with the admin interface, its headings and its counters rendered to anyone. The data behind them loads client-side, but leaking the workspace into a sitemap is a mistake worth not copying
- The catalogue read as zero products, so the mentions of bundles and presets are intentions, not inventory
- The only content on the site at review was a headline, one form and two legal pages, so this is a design and paperwork reference rather than a source of assets
- The licence is per purchase and not transferable, which matters if a client is the one who will use the file

## Reusable ideas

- Publish the legal pages before the catalogue, so a waitlist shop already reads as a real business
- Say the refund rule in one sentence with its condition attached, for example inside 14 days and only if the file was not downloaded
- Keep a coming-soon site to one screen and let one background element do the branding, instead of stacking placeholder sections
- Name your processors and your retention periods in the privacy page, which answers most questions without a support email
- Build the store's own admin screens early, so the internal shape is settled before the public launch
- Give buttons real tokens (colour, radius, height, easing) and honour `prefers-reduced-motion` in the interaction, not just in the animation

## Related

[Backgrounds Supply](backgrounds-supply.md), [Curations Supply](curations-supply.md), [Fffuel](fffuel.md), [Gradient Buttons](gradient-buttons.md)
