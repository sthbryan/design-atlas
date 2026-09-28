---
title: Iconify
description: One naming scheme, API and toolchain over 200+ open icon sets and about 300k+ icons.
url: https://iconify.design
type: icon-library
formats: icon framework · API · icon browser
topics: [icons, assets, agents-and-prompts]
verdict: very-useful
agent: [api]
pricing: free
licence: Free, funded by sponsors. Most of the code is MIT (a few older packages are Apache 2.0 or GPL 2.0). Icons keep each set's own licence, which ranges from MIT and CC0 to CC BY, GPL and a few non-commercial sets
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [icons0, icon-foundry, iconoir, morphicons, design-mobile-apps]
---
[← Atlas](../site/home.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Iconify

## What it is

Iconify is an open-source framework that puts a large number of open icon sets behind one naming scheme (`prefix:name`, such as `mdi:home` or `lucide:bell`), one data format and one API. It is built by Vjacheslav Trushkin, an Estonian developer. It began in 2016 as SimpleSVG and became a full-time project in 2020, now under Iconify OÜ. The site says it offers over 300,000 icons from more than 200 sets. When reviewed, the public API's collection list held 238 sets and about 378,000 icons, 16 of them hidden. The same data drives the icon-sets browser at icon-sets.iconify.design, framework components, CSS tools, design plugins and a hosted API.

## When to open it

Open it when a project needs icons from more than one family, a rare glyph, or brand logos, without adding a separate package for each set. It is also the base for most "any icon" setups in modern front ends, including Tailwind and UnoCSS icon classes, `unplugin-icons` and Astro Icon.

## Most useful

- **Icon sets browser**: search every set with related-word matching (the keywords were generated with AI, launched August 2026), see each set's author and licence, and generate code, bundles or sprites for selected icons
- **Public API**: `api.iconify.design` returns SVG by URL (`/lucide/home.svg`, with colour and size in the query), CSS for mask or background icons, JSON icon data and a keyless search endpoint, with backup hosts for redundancy
- **Build-time data**: `@iconify/json` holds every set, `@iconify-json/<prefix>` holds one, and the revived `@iconify-icons/<prefix>` packages hold one file per icon
- **Components**: `@iconify/react` (about 3.4 million downloads a month), `@iconify/vue`, `@iconify/svelte`, SolidJS, and the framework-free `iconify-icon` web component, which loads icons on demand
- **CSS and tooling**: plugins for Tailwind CSS 4 and 3 and UnoCSS, plus `@iconify/utils` and Iconify Tools for importing, cleaning and exporting your own sets
- **Design plugins**: Figma, Penpot and Sketch
- **Self-hosting**: the API runs on Node.js or Docker, and a September 2026 deploy script sets up a VPS

## Using it with agents

There is no llms.txt or MCP server, but agents can use the API with no key. A search call finds candidate names, and an SVG URL returns the exact file to inline or save. Other tools build on this too: the design-mobile-apps skill, for example, fetches its icons from this API. For production, have the agent use build-time packages (`@iconify-json/<prefix>` with the Tailwind plugin, UnoCSS or `unplugin-icons`) so the site doesn't depend on the public API at runtime. Ask it to write down each set's licence as it picks icons.

## Watch out for

- Licences vary by set. Of the 238 sets reviewed, 108 were MIT, 52 CC BY 4.0 (attribution needed), 31 Apache 2.0, and a handful GPL or CC BY-SA. Two are non-commercial (CC BY-NC and CC BY-NC-SA). Check the licence in each set's metadata before shipping
- On-demand components fetch icons from the public API as pages load. That adds a third-party request and a point of failure unless you bundle icons or host the API yourself
- The public API is free, but the project asks heavy users to sponsor it, because the servers are paid for by donations
- Brand-logo sets bring trademark limits that no open licence removes
- Counts on the site (300k+ icons, 200+ sets) trail the live API

## Reusable ideas

- Give every icon a stable `prefix:name` ID so sets can be swapped or mixed without changing components
- Keep icon data separate from renderers, so one source can feed React, CSS, fonts and design tools
- Generate related search keywords once, offline, instead of running AI on every query
- Offer free public infrastructure and a self-host path side by side

## Related

[icons0](icons0.md), [Icon Foundry](icon-foundry.md), [Iconoir](iconoir.md), [morphicons](morphicons.md), [design-mobile-apps (Sleek)](design-mobile-apps.md)
