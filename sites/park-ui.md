---
title: Park UI
description: Source-distributed component system on Ark UI and Panda CSS, with CLI install and docs as markdown.
url: https://park-ui.com
type: component-library
formats: component library · source distribution · CLI · Figma kit
topics: [components]
verdict: very-useful
agent: [cli]
pricing: free
licence: MIT, stated in the repository and docs.
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [shadcn-ui, radix, component-gallery]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md)

# Park UI

## What it is

Park UI is an accessible component system and code distribution platform built on Ark UI (headless) and Panda CSS, supporting several JavaScript frameworks. Instead of shipping an npm package, it distributes components as source code you own: read the recipe, edit it, and keep it. The design was developed with Brains & Pixels.

## When to open it

- When library component overrides are the pain point: source distribution means you edit the recipe directly instead of wrapping.
- When you want the same component API across React, Vue or Solid without relearning a styling system.
- When an agent should read and improve component code rather than fight a black-box API.

## Most useful

- Open code: every component implementation and recipe is exposed, so customisation means editing the file, not overriding an external API.
- Composition: all components share the Ark UI interface, so they combine predictably and stay consistent across frameworks.
- CLI and docs both distribute source: install with the Park UI CLI or copy from the website.
- Figma kit for prototyping with the same components, plus a planned variable-based theming path.

## Using it with agents

- CLI installs components into your project; docs are browsable as markdown, and the open-code model makes the source itself agent-readable.
- No first-party MCP server or llms.txt was found at review (llms.txt returns 404), so the CLI plus source is the agent path.
- The shared component interface is what makes agent output predictable: one API shape everywhere.

## Watch out for

- Source ownership cuts both ways: you own the code, including keeping it current yourself. There is no bug queue to file against.
- The system is opinionated about composition. Teams that want per-component NPM versioning will find source distribution a bigger commitment.
- The docs site had no llms.txt at review, so agent access relies on the CLI and the repo.

## Reusable ideas

- Distribute components as editable source with a shared headless interface, so design and code stay in one place.
- Align interactive controls to shared size tokens, so a Button and an Input sit evenly in the same row.
- Make the component API identical across frameworks; consistency is what makes agent output reliable.

## Related

[shadcn/ui](shadcn-ui.md), [Radix](radix.md), [The Component Gallery](component-gallery.md)
