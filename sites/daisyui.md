---
title: daisyUI
description: MIT Tailwind plugin of semantic component classes and 35 themes; llms.txt doubles as a skill, paid Blueprint MCP.
url: https://daisyui.com
type: style-library
formats: CSS component plugin for Tailwind CSS with themes, plus paid AI and design add-ons
topics: [components, typography-and-styles, color, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt, skill]
pricing: freemium
licence: "the library is free under MIT (repo `saadeghi/daisyui`, about 42.5k GitHub stars at review). Paid extras: the Blueprint MCP server ($22 a month, $45 a quarter or $600 lifetime at review), Dashboard and Charts skills (from $29 and $39), a Figma library (from $49) and templates ($19 to $69)"
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [flyonui, preline, flowbite, shadcn-ui, headless-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [typography-and-styles](../topics/typography-and-styles.md), [color](../topics/color.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# daisyUI

## What it is

daisyUI is a Tailwind CSS plugin by Pouya Saadeghi that adds semantic class names such as `btn`, `card`, `modal` and `toggle` on top of utility classes. It is pure CSS with no JavaScript, so it works in any framework or in plain HTML. Version 5 (5.7.46 at review) targets Tailwind CSS v4 and is enabled with `@plugin "daisyui"` in your CSS. The components index had 67 entries at review, from basics (button, input, select, table, tabs) to less common pieces (dock, FAB, countdown, diff, hover gallery, text rotate, browser and phone mockups, a theme controller). It ships 35 built-in themes built on semantic colour tokens (primary, secondary, accent, neutral, info, success, warning, error), and has an online theme generator.

## When to open it

Open it when you want short, readable markup in a Tailwind project, fast prototypes, or a theme switch that recolours the whole UI through CSS variables. It suits server-rendered stacks (Rails, Laravel, Django, HTMX) where a React component library isn't an option.

## Most useful

- **Theme system**: 35 presets, custom themes defined in CSS, and nested themes per section
- **Semantic colour tokens** that every component shares, so a brand change touches one place
- **Pure-CSS interactive parts**: drawer, modal, collapse, swap and dropdown work without JavaScript
- **Mockup components** for browser windows, phones and code blocks in marketing pages
- **CDN build** for quick demos with no build step

## Using it with agents

The `llms.txt` (about 2,300 lines at review) is a full usage reference that doubles as an agent skill, and `npx skills add saadeghi/daisyui` installs it. Docs pages have "text version for AI prompts" links. The site lists setup guides for about a dozen coding tools. It points to Context7 as a free third-party MCP option. Its own MCP server, Blueprint, needs a paid licence key and adds image- or Figma-to-daisyUI conversion.

## Watch out for

- The `llms.txt` skill tells agents to apply daisyUI to every HTML or JSX task, even unrequested ones. Scope it to projects that actually use daisyUI
- daisyUI 5 needs Tailwind v4; version 4 snippets and older model knowledge often use class names that changed
- CSS-only components leave keyboard and focus behaviour to native elements, so test modals and dropdowns

## Reusable ideas

- Name components by role (`btn-primary`) and let utilities handle one-off tweaks
- Put every colour behind a small set of semantic tokens so themes stay swappable
- Publish the docs as an agent-readable file that is also installable as a skill

## Related

[FlyonUI](flyonui.md), [Preline UI](preline.md), [Flowbite](flowbite.md), [shadcn/ui](shadcn-ui.md), [Headless UI](headless-ui.md)
