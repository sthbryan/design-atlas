---
title: Open UI
description: Cross-system component research that maps names, visual states and behavior differences for common web controls.
url: https://open-ui.org
type: documentation
formats: component research · web platform proposals · behavior comparisons
topics: [components, documentation]
verdict: niche
agent: []
pricing: free
licence: Free community-group research. Repository reports use the W3C Software and Document License; specifications use the W3C Community License Agreement, and test suites use BSD-3-Clause.
licence_class: mixed
reviewed: 2026-09-26
status: active
related: [component-gallery, inclusive-components, carbon-design-system, design-system-checklist]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [documentation](../topics/documentation.md)

# Open UI

## What it is

Open UI is a W3C community effort to improve native web controls and establish common names and behaviors for UI patterns. Its research pages compare how component libraries and browsers represent controls; its proposal pages track possible platform features such as customizable select and popover. It is a research reference, not a ready-made component kit or a prescriptive visual system.

## When to open it

- When specifying a select, combobox, menu, dialog or another common component; start with the [Select research page](https://open-ui.org/components/select.research/).
- When the same interaction has different names or APIs across design systems.
- When checking whether a proposed browser-native feature has graduated or is still exploratory.

## Most useful

- **[Select research page](https://open-ui.org/components/select.research/)**: its Concepts section includes small/default/large select previews and visual examples of disabled, invalid, loading, searchable, single and multiple states from systems such as Ant Design, UI Fabric and Semantic UI. The Names section shows that comparable controls may be called select, autocomplete, picker or dropdown.
- **State inventory**: expand a concept to see which systems provide that state and how they expose it. Use this to build a coverage checklist for your own component rather than treating one library's API as universal.
- **Proposal status**: pages are grouped as graduated, active or non-active, so a proposed platform feature is not mistaken for a standard browser capability.
- **Design system index**: navigate from a component to the systems that have contributed examples and compare their implementation choices.

## Using it with agents

There is no published MCP, CLI, registry, skill or llms.txt. An agent can read the research pages and follow the linked systems, but should verify the current status of any web-platform proposal before generating code. Use the public proposal or API document as reference, not as a copyable component package.

## Watch out for

- Research coverage is uneven: the Select page's visual examples cover only some systems and many listed states have no screenshot.
- The Select comparison was last updated in 2023, so names and proposal status may have changed since that research snapshot.
- Open UI does not define a standard look for controls. Its value is comparing concepts and behavior; use current implementation references for visual styling.
- License terms differ by content: reports, proposals and test-suite material are not all under the same licence.

## Reusable ideas

- Define component concepts independently from library-specific prop names.
- Organize visual examples by state so designers can compare disabled, invalid, loading and selection variants directly.
- Separate stable platform behavior from proposals that still need browser support.
- Link each concept to implementations so a visual comparison can lead to code research.

## Related

[The Component Gallery](component-gallery.md), [Inclusive Components](inclusive-components.md), [Carbon Design System](carbon-design-system.md), [Design System Checklist](design-system-checklist.md)
