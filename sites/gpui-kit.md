---
title: GPUI Kit
description: A Rust desktop UI framework showcase with component examples, theme controls, docking, data tables and application stories.
url: https://gpui-kit.com/versions/main/
type: component-library
formats: Rust UI framework · components · design guides · app stories
topics: [components, documentation, inspiration]
verdict: useful
agent: [llms-txt]
pricing: free
licence: Software and code examples use Apache-2.0; documentation prose and original illustrations are CC BY 4.0.
licence_class: mixed
reviewed: 2026-09-26
status: active
related: [base-ui, design-system-checklist, interface-design]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [documentation](../topics/documentation.md), [inspiration](../topics/inspiration.md)

# GPUI Kit

## What it is

GPUI Kit is a Rust UI framework built on GPUI for native desktop apps, with a WebAssembly component showcase. Its main page explains three layers: a ready-made visual system, behavior-focused primitives, and a JavaScript extension host.

## When to open it

Use it when designing information-dense desktop software or investigating how a component foundation can handle focus, selection, overlays, virtualization and docking while leaving visual style to the app.

## Most useful

- The component showcase includes data tables, virtual lists, code editing, dock layouts, motion and theme examples.
- The three-layer comparison makes the boundary between ready-made presentation and low-level behavior explicit.
- App Stories show the framework applied to complete interfaces, beyond isolated component cards.
- Design Guides and the full-text agent document provide deeper implementation context.

## Using it with agents

The site publishes an `llms-full.txt` link and design/coding guide pages. Ask an agent to identify the layer and desired interaction before looking up a component example.

## Watch out for

- This is a Rust and GPUI reference for native applications; its patterns may need translation for web UI.
- The documentation snapshot URL is versioned as `main`, so contents can change.
- Software and examples are Apache-2.0, while some documentation prose and illustrations use CC BY 4.0.

## Reusable ideas

- Separate interaction mechanics from presentation so products can own their visual identity.
- Show a component in realistic, information-dense contexts such as a large table or docked workspace.
- Treat keyboard behavior, focus states and accessibility as part of the component contract.
- Let a theme selector preview semantic tokens across examples rather than only changing a sample card.

## Related

[Base UI](base-ui.md), [Design System Checklist](design-system-checklist.md), [Interface Design](interface-design.md)
