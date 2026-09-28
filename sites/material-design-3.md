---
title: Material Design 3
description: Google's component and color system with role-based schemes, adaptive UI examples and expressive component patterns.
url: https://m3.material.io
type: design-system
formats: design system · component documentation · color system
topics: [components, color]
verdict: very-useful
agent: []
pricing: free
licence: Free to read. The archived Material Theme Builder source is Apache-2.0; the current documentation does not provide a blanket licence for every design-kit image or brand asset.
licence_class: mixed
reviewed: 2026-09-26
status: active
note: The separate Material Theme Builder repository was archived in July 2026; use the current documentation as the reference and confirm any linked tooling before depending on it.
related: [carbon-design-system, daisyui, material-symbols, component-gallery]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [color](../topics/color.md)

# Material Design 3

## What it is

Material Design 3 (M3) is Google's design system for building Android and other digital interfaces. The current site covers component behavior and styling, design foundations, adaptive layouts, and the newer M3 Expressive direction. M3 Expressive examples combine brighter color, flexible type, rounded and contrasting shapes, and motion while keeping component roles consistent.

## When to open it

- When looking for a complete component reference with states, role names and implementation guidance; start with [navigation bar](https://m3.material.io/components/navigation-bar/overview).
- When designing a color system that must produce coordinated light and dark schemes from a small number of source colors.
- When comparing how layouts and controls should adapt across phone, tablet and larger screens.

## Most useful

- **[Color roles](https://m3.material.io/styles/color/roles)**: the color system assigns semantic roles such as primary, secondary, tertiary, surface, outline and error; role pairs make it easier to judge foreground/background relationships across themes.
- **M3 Expressive**: the current overview links examples of adaptive components, expressive type, contrasting shapes and motion. Inspect the combination within each component instead of lifting Google's product identity.
- **[Navigation bar component](https://m3.material.io/components/navigation-bar/overview)**: inspect its anatomy, states and platform-specific behavior, then compare related button or dialog pages.
- **Dynamic color**: Material's wallpaper-based scheme shows one way to personalize interface color while preserving semantic roles.
- **Theme Builder caveat**: the former official Material Theme Builder generated light/dark roles and code from a seed color, but its GitHub repository was archived in July 2026. Do not assume that this specific hosted tool is maintained.

## Using it with agents

There is no published MCP, CLI, registry, skill or llms.txt. The documentation and component pages can be read in a browser. Agents can use the explicit names of Material color roles and states as a vocabulary for implementation, then check the result against the current examples. Do not rely on the archived builder as an API.

## Watch out for

- M3 is a recognizable Google visual language. Adapt the role system or component behavior to your own product; avoid copying Google's logos, product assets or signature styling wholesale.
- A role-based palette still needs checks for the contrast pairs and interaction states your implementation actually uses.
- Material's platform implementations are not interchangeable: check whether a component example is for Android, web or another platform.
- The official Theme Builder code is Apache-2.0 but archived; check its dependencies and output before reusing it.

## Reusable ideas

- Name palette values by function so components can switch themes without hard-coded brand colors.
- Generate paired light and dark color roles from a seed and preview them across representative controls.
- Treat adaptive size classes as layout decisions, not just a scaled-up phone view.
- Pair expressive shape or type choices with readable hierarchy and consistent semantic roles.

## Related

[Carbon Design System](carbon-design-system.md), [daisyUI](daisyui.md), [Material Symbols](material-symbols.md), [The Component Gallery](component-gallery.md)
