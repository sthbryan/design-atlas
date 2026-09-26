---
title: Rueya Supply
description: Pre-launch shop whose one screen pairs 41.6px type at weight 300 on a 1.02 line height with an airy 1.75 body, over a cream-to-orange gradient.
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

Rueya Supply is a shop for digital wallpapers, graphics and tools that, at review, still had nothing to sell, so its waiting page is the whole design. It is built around one contrast: a thin, tightly tracked headline and an unusually airy paragraph. The line "Dreams built with logic" measured 41.6px at weight 300 on a 42.4px line, a 1.02 ratio, with letter-spacing of minus 2.16px, about minus 0.05em, while the paragraph under it ran at 18.4px on a 32.2px line, a 1.75 ratio, tracked in slightly at minus 0.276px. The ground is rgb(6, 9, 13) with a warm off-white of rgb(243, 242, 238) for that headline, and a muted rgb(194, 195, 188) for the paragraph, so the page is quiet even though the background is not.

## When to open it

Open it when you need a coming-soon page that looks finished before there is anything to sell, or when a hero has to be carried by a background rather than by imagery. It is a short, complete example of three things done deliberately: a gradient that does the branding, display type that is quiet rather than bold, and a single-field form that does not look like a form.

## Most useful

- **The background stack**: a radial gradient of 60% by 55% at the top left, from rgba(222, 214, 196, 0.9) to transparent at 70%, laid over a 135deg linear gradient that runs transparent to rgba(44, 71, 82, 0.85), through rgb(6, 9, 13), then rgb(208, 92, 20) at 66% and rgb(75, 22, 6) at 76%, closing on rgb(6, 9, 13). That is a four-colour palette, cream, teal, orange and near-black, carried by one element
- **A canvas behind it**, sized at 1470 by 1950 device pixels with an opacity of 1 and a negative z-index, so the static gradient has a live layer underneath rather than the other way round
- **Display type that whispers**: 41.6px at weight 300 with minus 0.05em tracking, which reads as considered rather than as a hero shouting
- **Airy body copy under tight display type**: 1.75 line height against the headline's 1.02, a pairing that is easy to copy and rare in practice
- **A light button on a dark ground**: rgb(238, 238, 234) fill with rgb(23, 24, 23) text, a 4px radius and a 44px minimum height, against a dark page
- **Interaction detail**: a 0.2s `cubic-bezier(0.22, 1, 0.36, 1)` transition across background, border, colour, shadow, transform and opacity, a 0.98 active scale, and focus rings drawn with an outline offset instead of a border change
- **A borderless-looking field**: a transparent input with a border at rgba(245, 245, 241, 0.24) and 11.2px by 13.6px padding, with no visible label because the input carries an `aria-label`

## Using it with agents

Nothing is published for agents: `/llms.txt` returned 404, and there is no API, MCP server or schema. `robots.txt` is Nuxt's default and allows everything, pointing at a sitemap of 12 URLs. The design values are the usable part, since an agent with a browser session can read them rather than guess, and the privacy page is the reliable summary of the stack behind the site, Supabase for accounts, order data and file storage, and Resend for email. The catch for a crawler is that almost every route redirects to this one page.

## Watch out for

- The headline is thin at 41.6px, so it depends on a dark, busy background staying legible. The same size at weight 300 on a light page would disappear
- The gradient carries four colours at once. Removing the canvas or flattening the layers leaves a banded wash rather than depth
- A transparent input with a 0.24 alpha border is stylish and low-contrast; it needs the label in `aria-label`, as here, and a visible focus state
- Almost every route resolves to this screen: the shop, story, account and checkout URLs answer 302 and land here, so a link audit sees one page
- The public sitemap advertises `/admin`, `/admin/newsletter` and `/admin/products`, and those paths returned 200 with the admin workspace rendered to anyone. The data behind them loads client-side, but putting the workspace in a sitemap is a mistake worth not copying
- The catalogue read as zero products, so the licence and refund terms exist in advance of any file

## Reusable ideas

- Build a hero background as two gradients in one element, a radial highlight over a diagonal ramp, instead of shipping an image
- Pair tight display tracking, near minus 0.05em, with an airy 1.75 line height in the paragraph beneath, so the two ranks feel intentional
- Keep the page ground at near-black with a warm off-white text colour, and use a cool grey for secondary copy rather than lowering its opacity
- Make the primary button the lightest element on a dark page, and give it a 44px minimum height so the target is real
- Transition a fixed list of properties over 0.2s with a snappy ease, and add an active scale, so a button feels pressed rather than tapped
- Publish the legal pages before the catalogue, so a waitlist shop reads as a real business
- Name your processors and retention periods in the privacy page, which answers most support questions without an email

## Related

[Backgrounds Supply](backgrounds-supply.md), [Curations Supply](curations-supply.md), [Fffuel](fffuel.md), [Gradient Buttons](gradient-buttons.md)
