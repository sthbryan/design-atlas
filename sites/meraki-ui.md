---
title: Meraki UI
description: Free MIT Tailwind snippets (about 228) with left-to-right and right-to-left versions and dark mode; Alpine.js for interactive parts.
url: https://merakiui.com
type: component-library
formats: copy-paste Tailwind CSS component collection with a few free and paid templates
topics: [components, landing-pages]
verdict: useful
agent: []
pricing: free
licence: components free under MIT (repo `merakiui/merakiui`, about 2.7k GitHub stars at review, copyright Khatab Wedaa); the templates page mixes free MIT templates with paid ones from $16 to $69, several of them Cruip products reached through an affiliate link
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [hyperui, flowbite, preline, uiverse, headless-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [landing-pages](../topics/landing-pages.md)

# Meraki UI

## What it is

Meraki UI is a free set of Tailwind CSS snippets made by Khatab Wedaa and Mosab Ibrahim, running since 2020. Its selling point is that every component ships in both left-to-right and right-to-left layouts, with a dark mode variant. At review the components page listed 31 categories and about 228 components: 18 application categories (alerts, avatars, cards, inputs, modals, navbars, sidebars, tables, tabs, tooltips and more) and 13 marketing ones (404 pages, CTAs, contact, email templates, FAQ, features, footers, heroes, pricing, teams, testimonials). The site badge says it targets Tailwind CSS v4.1.

## When to open it

Open it when you are building an Arabic, Hebrew, Persian or Urdu interface and want Tailwind markup that already mirrors correctly, or when you need plain HTML sections for a simple marketing site and don't want a framework dependency.

## Most useful

- **LTR/RTL switch** on every component preview, so you can compare both directions before copying
- **Email templates**: seven responsive HTML email layouts, which few Tailwind collections offer
- **Application basics**: sign-in and registration forms, skeleton loaders, sidebars and cookie banners
- **Marketing sections**: heroes, pricing tables, footers and contact blocks with dark variants
- **Free Vue 3 templates** (blog, agency landing page, courses dashboard) as full-page examples

## Using it with agents

There is no `llms.txt` (404 at review), no MCP server, no CLI and no npm package. Each preview has a "Show Code" and "Copy code" button, so an agent can only work from HTML you paste in or from the GitHub repo. Interactive components are marked "Requires JS" and use Alpine.js (`x-data`) for state, so tell your agent whether to keep Alpine or port the behaviour to your framework.

## Watch out for

- The public repo was last pushed in July 2025, although the site itself keeps a current copyright line
- Components are plain markup with no accessibility behaviour beyond what the HTML gives you; check focus handling on modals and dropdowns yourself
- Placeholder text and Unsplash photos are baked into the snippets

## Reusable ideas

- Offer an RTL toggle next to each preview instead of leaving direction to the user
- Use logical Tailwind utilities (`ms-`, `pe-`, `start-`) so one snippet works in both directions
- Label snippets that need JavaScript so static-site users can skip them

## Related

[HyperUI](hyperui.md), [Flowbite](flowbite.md), [Preline UI](preline.md), [Uiverse](uiverse.md), [Headless UI](headless-ui.md)
