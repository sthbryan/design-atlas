---
title: Animated Icons
description: 4,000+ recolourable Lottie/SVG/GIF icons; free tier plus one-time All-Access, no attribution needed.
url: https://animatedicons.co
type: icon-library
formats: icon library · animated icons
topics: [icons, assets, motion]
verdict: useful
agent: []
pricing: freemium
licence: "Free and premium icons; All-Access is a one-time $99 (personal) or $349 (teams of up to 25). Custom licence: commercial use without attribution, but no redistribution and no competing services"
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [useanimations, iconoir, 3dicons, circle-loaders]
---
[← Atlas](../site/home.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md), [motion](../topics/motion.md)

# Animated Icons

## What it is

Animated Icons is a library of hand-animated icons from Pixel True Design Studios. The site claims more than 4,000 of them, in two illustration styles ("Minimalistic" and "Adventure") and about 180 business-oriented categories, from accessibility and banking to supply chain and web design. Each icon can be recoloured in the browser: pick a variant (two-tone, normal, grey-tone, dark), change the colour layers, adjust stroke width, and on the homepage demo, playback speed. Free icons download as Lottie JSON, SVG, PNG or GIF, or as an embed snippet. Premium icons need a one-time All-Access purchase. Without it they only offer a PNG.

## When to open it

Open it when you need animated icons that already fit a brand palette. Typical uses are feature grids, onboarding steps, empty states and pricing tables on marketing sites, especially in business areas (fintech, HR, logistics, SaaS) that stroke-only sets rarely cover.

## Most useful

- **In-browser recolouring**: set brand colours and stroke width once and apply them to every icon before downloading
- **Several formats per icon**: Lottie JSON for web and app, plus SVG, PNG and GIF for places that can't play Lottie
- **Embed option**: a ready-made embed snippet for builders such as Webflow, which the docs point to alongside lottie-web
- **Wide business coverage**: categories map onto product-marketing sections instead of generic UI glyphs
- **No-attribution licence**: free and paid icons can go into commercial work without credit

## Using it with agents

There is no npm package, API, llms.txt or MCP server, so an agent can't fetch icons itself. The workable flow is to recolour and download the Lottie JSON by hand, put it in the project, and ask the agent to render it with `lottie-web` or `lottie-react` and hook up hover, click or scroll triggers. Keep the JSON unchanged in the repo so it can be recoloured again later.

## Watch out for

- "4,000+" counts free and premium icons together. In one sample page of 90 icons, only 30 were free, and premium icons offer nothing but a PNG unless you pay
- The licence forbids repackaging the icons and any automated scraping or bulk downloading without permission. Don't let an agent crawl the catalogue
- Details on the site don't all agree: the membership page describes the premium set as both "1,000+" and "2,000+", and the footer copyright still reads 2024
- A single Lottie file is small, but a grid of many animated icons playing at once can hurt performance and distract people. Honour `prefers-reduced-motion`

## Reusable ideas

- Offer one-click style presets (two-tone, grey, dark) before custom colour controls, so most users never touch a colour picker
- Let a brand colour setting carry across the whole catalogue instead of recolouring icon by icon
- Organise icons by business domain, not just by UI function, so marketers find whole sets for a page
- Provide a static fallback format (SVG/PNG) next to every animation for email, docs and slides

## Related

[useAnimations](useanimations.md), [Iconoir](iconoir.md), [3dicons](3dicons.md), [Circle Loaders](circle-loaders.md)
