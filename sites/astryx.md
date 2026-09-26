---
title: Astryx
description: Meta's React design system with rich form controls, strong accessibility hooks and a plugin-based table.
url: https://astryx.atmeta.com/components
type: design-system
formats: design system
topics: [components, documentation]
verdict: very-useful
agent: [cli]
pricing: free
licence: MIT / Open source (© Meta, facebook/astryx)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [shadcn-ui, kobra, aceternity-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [documentation](../topics/documentation.md)

# Astryx

## What it is

Astryx is Meta's design system for React applications, built with StyleX for zero-runtime styling. It covers a broad catalog of product components: SegmentedControl, NumberInput, Stepper, Timestamp, MetadataList, Item, OverflowList, and PowerSearch (a structured filter/tokenizer bar for complex queries). It includes chat-specific pieces like tool call displays and scroll-to-new buttons, date and time pickers, avatar group overflow handling, an imperative alert dialog, and a sophisticated table component with plugin-based extensions (sort, selection, sticky columns, resize, tree mode).

## When to open it

Use Astryx when you're building an application that needs polished, production-ready components with strong accessibility support. It's especially valuable for complex interactive patterns like data tables, search bars, or date inputs where you want battle-tested behavior.

## Most useful

- **Comprehensive table component** with hooks-based plugins for sorting, selection, resizing, and tree structure
- **Rich form controls**: NumberInput with step arrows, Stepper for sequences, DateRangeInput and TimeInput with precise UX
- **Accessibility hooks** (announce, hotkeys, long press, container reveal, keyboard hint) usable on any component
- **PowerSearch/Tokenizer** for building structured filter bars with autocomplete
- **FileInput with validation** and progress tracking for uploads
- **Chat layout pieces**: tool calls, scroll buttons, citation support

## Using it with agents

The npm package (`@astryxdesign/core`) is well-documented. The site uses client-side rendering but includes meta descriptions summarizing each component, which agents can read. A CLI tool (`npx @astryxdesign/cli`) is available for scaffolding, though treat third-party CLIs with care in agent workflows.

## Watch out for

- **StyleX styling** doesn't map directly to Tailwind or CSS-in-JS utilities; you'll need to understand StyleX's atomic CSS approach
- Table plugin system and accessibility hooks have learning curves—plan time to read the integration guide
- CLI tool is third-party; verify its behavior in your environment before using in automation
- MIT license requires keeping Meta's copyright notice if you ever reuse or modify code

## Reusable ideas

- Plugin-based table extensions for sort, selection, and tree modes
- Accessibility hooks for keyboard navigation and screen reader announcements
- Structured filter bars with autocomplete for advanced search
- Chat layout primitives (tool calls, citations, scroll buttons) for agent interfaces
- Avatar group overflow handling for space-constrained layouts
- NumberInput with configurable step behavior for numeric fields

## Related

[shadcn/ui](shadcn-ui.md), [Kobra](kobra.md), [Aceternity UI](aceternity-ui.md)
