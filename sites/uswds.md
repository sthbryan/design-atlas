---
title: U.S. Web Design System
description: Federal design system with live component previews, configurable tokens and restrained, accessible page patterns.
url: https://designsystem.digital.gov
type: design-system
formats: design system · Sass package · component and pattern examples
topics: [components, color]
verdict: very-useful
agent: []
pricing: free
licence: Free. Most USWDS code and GSA changes are CC0 1.0; identified third-party files use their own licences, including Apache-2.0, MIT and OFL. GSA trademarks are reserved.
licence_class: mixed
reviewed: 2026-09-26
status: active
related: [carbon-design-system, inclusive-components, component-gallery, design-system-checklist]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [color](../topics/color.md)

# U.S. Web Design System

## What it is

The U.S. Web Design System (USWDS) is a public design system for government services, with Sass components, design tokens, implementation notes and usage patterns. The live site separates component examples from design principles, patterns, token references and utilities. Its page previews pair working component states with implementation and accessibility notes.

## When to open it

- When building forms, status messages, search, navigation or other service-oriented UI; start with the [Alert component preview](https://designsystem.digital.gov/components/alert/).
- When you want to see a color system structured as role-based theme tokens over a larger palette.
- When comparing a compact, typography-led layout with clear margins, strong section labels and explicit component boundaries.

## Most useful

- **[Alert preview](https://designsystem.digital.gov/components/alert/)**: the current page shows informative, warning, success, error and emergency examples, then a slimmer bar and a no-icon version. The colored bar, label, icon and text work together, so status is not communicated by color alone.
- **[Theme color tokens](https://designsystem.digital.gov/design-tokens/color/theme-tokens/)**: the palette is split into base, primary, secondary, accent-warm and accent-cool roles, with lightness grades. This is a useful model for separating product roles from raw palette names.
- **Component pages**: preview, Sass source, settings, variants and accessibility status are grouped on one page, making the jump from visual state to implementation easy to inspect.
- **Patterns and templates**: use these when the question is a task flow or page structure rather than a single control.

## Using it with agents

There is no published MCP, CLI, registry, skill or llms.txt. The website links to its public GitHub repository, and the npm package is available for projects using USWDS directly. An agent can use a component's preview, variant names and Sass settings to map a requested pattern to its implementation, but should check package versions against the current release.

## Watch out for

- The system is designed for U.S. government services; its agency identifier, seals and government-specific styling should not be copied into unrelated products.
- The code licence is mixed. Most code and GSA changes are CC0, but bundled fonts, icons and other dependencies have separate terms; GSA trademarks are not granted for reuse.
- Component accessibility pages report test results, but your own implementation still needs testing in its actual context.

## Reusable ideas

- Use semantic color roles with ordered lightness grades, then let components reference roles instead of raw values.
- Show a status icon and explicit text alongside color so the state remains legible without color perception.
- Keep the rendered preview, variants, configuration tokens and accessibility status together on each component page.
- Use modest page widths and a persistent component index to make a large reference site navigable.

## Related

[Carbon Design System](carbon-design-system.md), [Inclusive Components](inclusive-components.md), [The Component Gallery](component-gallery.md), [Design System Checklist](design-system-checklist.md)
