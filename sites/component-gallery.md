---
title: The Component Gallery
description: Reference that compares how 95 design systems name, structure and document the same 60 components.
url: https://component.gallery
type: documentation
formats: component library · documentation
topics: [components, documentation]
verdict: very-useful
agent: []
pricing: free
licence: Not stated (free to access; the site's own code is built with Astro/Tailwind, no access restrictions mentioned)
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [shadcn-ui, aceternity-ui, magic-ui, uiverse, kage]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [documentation](../topics/documentation.md)

# The Component Gallery

## What it is

The Component Gallery is a reference repository documenting how different real design systems solve the same component (naming, technology, guidance, accessibility), instead of showing a single "ideal" component.

## When to open it

- When you're about to build a component (accordion, tabs, popover, pagination...) and want to compare how several design systems name and structure it before settling on your own API.
- When you need to justify an accessibility decision by citing how mature systems (Polaris, Elastic UI, Red Hat Design System, etc.) document it.
- When you want to know whether a pattern already has an industry-standard name (e.g. "disclosure" vs. "accordion" vs. "collapse").

## Most useful

- The site states 60 documented components across 95 different design systems, with 2,671 total examples.
- Each component (e.g. Accordion) aggregates the naming variants used by each system and links directly to its original documentation.
- Per-entry badges: code examples, usage guidelines, accessibility notes, tone of voice, whether it's open source, and whether it's unmaintained.
- Notable catalogued design systems: Polaris (Shopify), Elastic UI, Sainsbury's Design System, Ariakit, SubZero (Axis Bank), Web Awesome, Red Hat Design System, HeroUI, among others, spanning React to Web Components.
- Search with ⌘K plus filtering by technology and by feature (accessibility, code, etc.).

## Using it with agents

No export or MCP of its own; it's used with agents as reference documentation: paste the link or a summary of how 3-4 mature design systems solve a component into your agent before asking it to generate your own, especially for accessibility and naming.

## Watch out for

- Each entry is only a gateway to the original system's documentation: detailed anatomy and guidance live outside the site, not inline.
- Some catalogued design systems are flagged "unmaintained," so check the date before copying a pattern.
- It's an aggregator, not an installable component library: it ships no code of its own, only references.

## Reusable ideas

- Comparing how several mature design systems name the same component before fixing your own naming avoids reinventing already-standardized terms.
- Tagging each entry with "accessibility," "code" and "unmaintained" badges signals at a glance how trustworthy the source is.
- An aggregator can add value without hosting the code itself: good curation and linking is enough.

## Related

[Shadcn Ui](shadcn-ui.md), [Aceternity Ui](aceternity-ui.md), [Magic Ui](magic-ui.md), [Uiverse](uiverse.md), [Kage](kage.md)
