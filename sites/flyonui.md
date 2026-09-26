---
title: FlyonUI
description: Semantic Tailwind classes plus bundled Preline JS plugins; MIT with Preline Fair Use terms inherited, paid Pro blocks and MCP builder.
url: https://flyonui.com
type: component-library
formats: Tailwind CSS component library with semantic classes and JS plugins, plus paid Pro blocks and an MCP builder
topics: [components, typography-and-styles, agents-and-prompts]
verdict: useful
agent: [mcp]
pricing: freemium
licence: FlyonUI's own code is MIT (repo `themeselection/flyonui`, about 2.5k GitHub stars at review), but the licence file says it bundles code from daisyUI and the full Preline UI plugin source, which stays under Preline's MIT plus Fair Use dual licence. FlyonUI Pro and the Pro MCP are lifetime licences; the site's structured data lists offers from $129 to $499 at review
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [daisyui, preline, flowbite, shadcn-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [typography-and-styles](../topics/typography-and-styles.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# FlyonUI

## What it is

FlyonUI is made by ThemeSelection (the licence names CleVision Technologies as the legal entity). It combines daisyUI-style semantic classes (`btn`, `card`, `modal`) with Preline's headless JavaScript plugins, so you get short class names and working interactive components in one Tailwind CSS v4 plugin. The site claims 80+ free components and examples and 500+ free and Pro blocks. It also lists 10+ themes, templates for dashboards and landing pages, and a Figma design system that it says has over 1,000 variants.

## When to open it

Open it when you like daisyUI's readable markup but need dropdowns, overlays, tabs, selects and datatables that actually work without writing JavaScript. Open it too if you want a framework-agnostic kit you can drop into HTML, React or Vue alike.

## Most useful

- **Semantic classes plus JS plugins** in one package, installed with npm and the `@plugin` directive
- **Themes** switched through semantic colour tokens, as in daisyUI
- **Blocks**: marketing, dashboard, e-commerce, datatable and bento-grid sections (a free subset)
- **Figma kit** matching the coded components

## Using it with agents

FlyonUI MCP is marketed as a Tailwind AI builder for VS Code, Cursor, Windsurf and Cline. It has commands to generate, refine or take inspiration from blocks and pages. A free tier works with free blocks only, and Pro features need a Lemon Squeezy licence key. The site's `llms.txt` is only a list of marketing and block pages, not usable documentation. There is no shadcn registry or CLI for copying source.

## Watch out for

- Because Preline code is bundled, Preline's Fair Use terms (no competing products, attribution on derivative themes) apply to FlyonUI users too
- Releases have slowed: npm was last published in September 2025 (2.4.1) and the repo last pushed in March 2026
- Pro assets may not be redistributed apart from an end product, and building themes, templates or starter kits from them is restricted

## Reusable ideas

- Pair a CSS-only semantic layer with a separate behaviour layer instead of rebuilding both
- Offer a free MCP tier limited to free assets so people can try the workflow before paying
- State bundled third-party licences in the licence file rather than hiding them

## Related

[daisyUI](daisyui.md), [Preline UI](preline.md), [Flowbite](flowbite.md), [shadcn/ui](shadcn-ui.md)
