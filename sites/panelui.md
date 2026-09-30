---
title: PanelUI
description: MIT React Native component library for Expo, with Tailwind styling, live examples and agent resources.
url: https://panelui.dev/
type: component-library
formats: React Native and Expo components · Tailwind · docs · MCP and skill
topics: [components, agents-and-prompts, ai-interfaces]
verdict: useful
agent: [llms-txt, mcp, skill]
pricing: free
licence: Free and MIT-licensed. The live docs and homepage listed 136 components at review; the GitHub README appears older and gives a lower count.
licence_class: open-source-permissive
reviewed: 2026-09-29
status: active
related: [shadcn-ui, ionicons, design-mobile-apps]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md), [ai-interfaces](../topics/ai-interfaces.md)

# PanelUI

## What it is

PanelUI is an MIT-licensed React Native component library for Expo projects. It combines Tailwind styling with accessible components, animation examples and app-oriented patterns; the current live site lists 136 components at review. The homepage shows examples in several theme families, including dashboard, assistant and milestone interfaces.

## When to open it

Open it when building an Expo app and you want a broad set of native components with ready-made examples, or when comparing how to document a large mobile library by category and live demo.

## Most useful

- **Component catalogue**: browse the live docs by component family and inspect examples before integrating them.
- **Theme families**: compare Panel, Moon and Grass treatments without changing the library's component model.
- **Animation examples**: the docs emphasize Reanimated behavior on the UI thread and compatibility with Expo Go.

## Using it with agents

The official `llms.txt` indexes the documentation and agent resources. The docs provide an installable skill and an MCP integration; use their current setup pages for client-specific configuration. Components are also documented for direct project installation. The live site and docs are the current count source; the repository README has an older component count.

## Watch out for

- Confirm the Expo, React Native and Tailwind versions required by the current installation guide.
- The repository README is behind the live docs in its component count, so prefer the website's catalogue and `llms.txt` when checking what is available.
- Test animations on the target devices and reduced-motion settings before shipping.

## Reusable ideas

- Let developers browse mobile components through realistic app surfaces, not just isolated controls.
- Offer distinct theme presets while keeping component structure and usage consistent.
- Publish a searchable docs index, an agent skill and MCP access alongside the component catalogue.

## Related

[shadcn/ui](shadcn-ui.md), [Ionicons](ionicons.md), [design-mobile-apps (Sleek)](design-mobile-apps.md)
