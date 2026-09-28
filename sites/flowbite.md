---
title: Flowbite
description: Large MIT Tailwind library with data-attribute JS, React/Svelte/Vue ports, Figma kit, open-source MCP and paid Pro blocks.
url: https://flowbite.com
type: component-library
formats: Tailwind CSS component library with a JS plugin, framework ports, Figma kit and paid Pro blocks
topics: [components, landing-pages, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt]
pricing: freemium
licence: the core library is free under MIT (repo `themesberg/flowbite`, about 9.4k GitHub stars at review; copyright Themesberg/Bergside Inc). The docs code is CC BY 3.0. Flowbite Pro (blocks, templates, Figma system) is under a separate EULA, sold as Developer and Designer editions with lifetime updates; prices load at checkout and were not captured at review
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [typeui, preline, daisyui, meraki-ui, headless-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [landing-pages](../topics/landing-pages.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Flowbite

## What it is

Flowbite is one of the largest Tailwind CSS ecosystems, made by Bergside (the team behind Themesberg and TypeUI). The core npm package, `flowbite` (4.0.2 at review), is a Tailwind plugin plus a small JavaScript library. It drives interactive parts (modals, dropdowns, datepicker, carousel, drawers, tooltips) through data attributes or a typed JS API. The docs cover about 45 components, plus forms, typography and plugin pages, and integration guides for most frameworks and back ends. There are separate MIT ports: Flowbite React, Svelte and Vue. On top sit a free set of 430+ SVG icons, a Figma design system and Flowbite Pro, which advertises 450+ website sections and application, marketing and e-commerce templates.

## When to open it

Open it when a Tailwind project needs a wide, consistent set of ordinary components and full-page sections fast, especially in HTML or server-rendered stacks where the data-attribute JavaScript is convenient. Designers who want a Figma kit that mirrors the code also benefit.

## Most useful

- **Interactive components without a framework**: datepicker, modal, drawer, speed dial and clipboard via data attributes
- **Framework ports** with matching markup for React, Svelte and Vue
- **Blocks**: marketing, application and e-commerce sections (a free subset, most in Pro)
- **Figma design system** kept in parity with the coded components, according to the site
- **Built-in RTL and dark mode** guidance in the docs

## Using it with agents

Flowbite publishes `llms.txt` and `llms-full.txt`, but in the GitHub repo rather than at the site root (`flowbite.com/llms.txt` returned 404). The open-source Flowbite MCP server (`npx -y flowbite-mcp`, MIT, stdio or HTTP) gives agents component context. It also has a Figma-to-code tool that needs your own Figma access token, and a tool that generates a theme file from brand colours. The docs also cover MCP UI (interactive widgets inside chat clients) and link to TypeUI.

## Watch out for

- The Pro FAQ says Pro may be used in open-source projects only if the result is not a competing UI library, theme, template or page builder, and design resources may not be resold
- Core releases have slowed (last npm publish May 2026, last push June 2026)
- The flowbite-mcp repo is small (about 40 stars) and was last pushed in January 2026

## Reusable ideas

- Drive interactivity through data attributes so HTML-only users get working components
- Keep code and Figma libraries in parity and say so
- Offer an MCP tool that turns brand colours into a theme file

## Related

[TypeUI](typeui.md), [Preline UI](preline.md), [daisyUI](daisyui.md), [Meraki UI](meraki-ui.md), [Headless UI](headless-ui.md)
