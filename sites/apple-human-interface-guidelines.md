---
title: Apple Human Interface Guidelines
description: Apple platform UI reference with concrete examples for color, navigation, controls and adaptive interface states.
url: https://developer.apple.com/design/human-interface-guidelines
type: guidelines
formats: platform design guidelines · component and interaction examples
topics: [components, color]
verdict: useful
agent: []
pricing: free
licence: Free to read. Apple retains rights to HIG text, images and marks; use the pages as look-only references and do not reuse Apple product imagery or platform assets outside their stated terms.
licence_class: proprietary-free
reviewed: 2026-09-26
status: active
related: [carbon-design-system, material-design-3, inclusive-components, design-system-checklist]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [color](../topics/color.md)

# Apple Human Interface Guidelines

## What it is

Apple's Human Interface Guidelines (HIG) are the visual and interaction reference for Apple's platforms. The current pages cover foundations and platform components, with diagrams and product examples for behaviors such as color adaptation, tab navigation and toolbars. The site is free to read; it is not a general-purpose asset library.

## When to open it

- When designing a native Apple app and you need to compare a control or navigation pattern with platform conventions; the [Tab bars page](https://developer.apple.com/design/human-interface-guidelines/tab-bars) is a concrete example.
- When checking how colors should respond to light, dark and increased-contrast appearances.
- When a toolbar and a tab bar are being used for the same purpose and you need to distinguish navigation from view-level actions.

## Most useful

- **[Color page](https://developer.apple.com/design/human-interface-guidelines/color)**: inspect the examples for system-defined colors, custom color variants and appearance changes. The adaptable color treatment shows how a semantic color can remain recognizable while contrast changes with the environment.
- **[Tab bars page](https://developer.apple.com/design/human-interface-guidelines/tab-bars)**: the diagrams place persistent top-level navigation at the bottom of an iPhone screen and keep each section's navigation state. Apple distinguishes those destinations from actions on the current view, which belong in a toolbar.
- **Component guidance**: use pages such as buttons, search fields, sidebars and toolbars to inspect Apple-specific anatomy and state behavior, then translate the underlying interaction idea to your product's visual language.
- **Color controls**: the guidance recommends a system color picker when an app asks people to choose colors, including access to saved system colors.

## Using it with agents

There is no published MCP, CLI, registry, skill or llms.txt. An agent can read the public HIG pages and use them as a platform-specific reference, but should identify the intended Apple platform before translating an example. No right to reuse Apple design assets or copy the branded imagery is granted by the free documentation access.

## Watch out for

- The HIG targets Apple's own platforms. Its control shapes, terminology and system imagery may not transfer directly to a web product or another platform.
- Apple visuals and trademarks are not reusable assets; use diagrams to understand composition and behavior, then create original product styling.
- The guideline pages explain intent, but they do not replace checking the APIs and availability of the specific platform version you support.

## Reusable ideas

- Reserve persistent navigation for top-level destinations and place actions for the current view in a separate toolbar.
- Define semantic custom colors for both light and dark appearances, then verify an increased-contrast variant.
- Keep color meaning consistent across interactive, informational and status elements.
- Prefer the platform color-control behavior when color selection is a core task.

## Related

[Carbon Design System](carbon-design-system.md), [Material Design 3](material-design-3.md), [Inclusive Components](inclusive-components.md), [Design System Checklist](design-system-checklist.md)
