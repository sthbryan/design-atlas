---
title: Sona UI
description: Small MIT set of accessible animated React components with an agent manifest, catalog, skill and read-only API through shadcn.
url: https://www.sonaui.com
type: component-registry
formats: animated component registry (shadcn) · agent skill · read-only API
topics: [components, motion, ux-patterns]
verdict: useful
agent: [llms-txt, registry, api, skill]
pricing: free
licence: free; MIT (repo `Dinil-Thilakarathne/sona-ui`), which the docs restate as use, modify and distribute in personal and commercial projects. Funded by GitHub Sponsors and a platform partner
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [beui, smooth-ui, base-ui, paper-shaders, shadcn-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [ux-patterns](../topics/ux-patterns.md)

# Sona UI

## What it is

Sona UI is a small, carefully specified set of animated React components by Dinil Thilakarathne, built with Tailwind CSS and Motion (some controls sit on Base UI) and installed as source through shadcn. Its agent catalog listed 42 entries at review (30 components, 5 effects, 3 text treatments, 2 shaders and 2 foundations), 7 of them marked preview; the homepage counter showed 27. Every entry describes its purpose, accessibility and motion behaviour rather than just its look. The repo is young (April 2025), has around 120 stars, and was updated in September 2026.

## When to open it

- When you want a handful of polished interactions that respect keyboard use and reduced motion, not a large effects gallery.
- When you are after interaction patterns that are hard to get right: hold-to-delete, swipe actions on a list row, an overflow menu that keeps the important actions visible, or a lightbox that returns to its thumbnail.

## Most useful

- **Controls**: fluid and expandable tabs, animated dialog, dropdown, switch, checkbox, slider, tooltip and a stepper.
- **Pattern components**: expanding action, schedule chip, assignment cluster with a people picker, live activity, section rail and link preview.
- **Menus**: circular dock and circular context menu for small sets of related actions.
- **Decoration**: magnetic and ripple buttons, image trail, marquee, split and stagger text, plus two shaders built on Paper Design Shaders.

## Using it with agents

Unusually thorough. Add the `@sona-ui` registry to `components.json` (it is in the official shadcn directory) and install with `npx shadcn@latest add @sona-ui/<name>`. `/llms.txt` points to an agent manifest, a JSON catalog that tags each item with category, status and dependencies, a full guidance file, and an OpenAPI description of a read-only API. A Sona UI skill (`shadcn add @sona-ui/agent-skill`) teaches the agent to inspect the project, explain its choice, install, then record pass or fail for keyboard, layout, theme and reduced-motion checks. MCP access goes through the standard shadcn MCP server; there is no custom one.

## Watch out for

- Small catalogue; items marked preview may still change their API.
- Some components need shared foundations (`sona-utils`, `sona-motion`, `sona-theme`); the CLI adds them, but they bring their own tokens into your theme.
- The apex domain sometimes answered scripted requests with HTTP 429 during review; the `www` host worked.

## Reusable ideas

- Describe each component by the job it does, its accessibility and its motion, so both people and agents can choose by intent.
- Publish a manifest that tells agents which catalogue is current and to say when they are working from an older snapshot.
- Ask agents to report a pass, fail or not-run result for each check after installing a component.

## Related

[beUI](beui.md), [Smooth UI](smooth-ui.md), [Base UI](base-ui.md), [Paper Shaders](paper-shaders.md), [shadcn/ui](shadcn-ui.md)
