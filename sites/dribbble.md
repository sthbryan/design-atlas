---
title: Dribbble
description: Huge shot-sharing community and designer marketplace for fast visual and motion exploration; mostly concepts, no agent access.
url: https://dribbble.com
type: gallery
formats: design shot-sharing community · designer marketplace · publishing API
topics: [inspiration, motion]
verdict: useful
agent: []
pricing: freemium
licence: "Free to browse and post. Pro plans for designers were $4, $8 or $99 a month billed yearly at review. Marketplace projects carry graduated platform fees: 10% down to 4% for designers, 5% down to 2% for clients, plus card processing. Members keep the rights to their work, but Dribbble may use it for marketing. The terms forbid scraping and copying site content"
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [behance, inspora, collect-ui, mobbin, inspiration-grid]
---
[← Atlas](../README.md) · Topics: [inspiration](../topics/inspiration.md), [motion](../topics/motion.md)

# Dribbble

## What it is

Dribbble is a community where designers post "shots": single images, short animations or small sets showing a piece of work. It started in 2009 as an invite-only network and opened to everyone in 2021. In 2024 it launched a marketplace where clients hire designers and pay for fixed services. The about page describes a remote team of 23 and a move from ad revenue to revenue sharing. Most shots cover UI, branding, illustration, icons, typography and motion.

## When to open it

Open it for fast visual exploration at the start of a project: moodboards, icon and illustration styles, micro-animation ideas, how a particular aesthetic (glass, neo-brutalist, pastel 3D) looks when polished. It is also where many freelance product and brand designers show their portfolios.

## Most useful

- **Huge volume and quick scanning**: shots are cropped to one idea, so dozens of directions can be compared in minutes
- **Motion shots**: short loops of transitions, loaders and interactions that explain timing better than stills
- **Designer profiles** with services, pricing and availability, useful when hiring
- **Collections** that members save and share for moodboards

## Using it with agents

There is no MCP, `llms.txt` or browse API. API v2 is a publishing API: it uses OAuth, works mainly on the signed-in member's own shots, and dropped the popular and aggregated shot streams in 2018. Its terms forbid building design search or designer-discovery tools with Dribbble data, and forbid scraping or storing data outside the API. At review the homepage and shot listings returned an empty bot-check response (HTTP 202) to scripted requests. For agent work, choose shots by hand and describe the direction in words.

## Watch out for

- Many shots are concepts or polished mockups, not shipped products. They often ignore real content, edge cases, accessibility and responsive layout
- Trends spread quickly, so the most popular shots tend to look alike
- Search ranking can be boosted: Pro plans include ranking boosts and paid Boosted Shot credits
- The marketplace's fees and plans changed in February 2026; check the help centre before quoting them

## Reusable ideas

- Crop a reference to one idea so it can be compared at a glance
- Show motion as short loops next to stills when timing is the point
- Put services, price and availability on a portfolio profile so hiring takes fewer steps
- Publish a clear API policy that says which uses are allowed and which compete with the product

## Related

[Behance](behance.md), [Inspora](inspora.md), [Collect UI](collect-ui.md), [Mobbin](mobbin.md), [Inspiration Grid](inspiration-grid.md)
