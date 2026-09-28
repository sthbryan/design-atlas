---
title: Every Layout
description: Intrinsic CSS layout primitives with free visual examples, interactive demos and configurable generators.
url: https://every-layout.dev
type: documentation
formats: CSS layout reference · interactive examples · generators
topics: [documentation, components]
verdict: useful
agent: []
pricing: freemium
licence: Free rudiments, axioms and selected layout examples; full access is $69 at review. Terms license authored content to purchasers and forbid republication; no code reuse licence is stated.
licence_class: proprietary-paid
reviewed: 2026-09-26
status: active
related: [utopia, design-system-checklist]
---
[← Atlas](../site/home.md) · Topics: [documentation](../topics/documentation.md), [components](../topics/components.md)

# Every Layout

## What it is

Every Layout, by Heydon Pickering and Andy Bell, documents composable CSS layout primitives such as Stack, Cluster, Sidebar and Grid. The public pages pair each primitive with a concrete layout example, implementation notes and, on selected pages, a generator or interactive demo. The full reference and component set is sold as a $69 one-time purchase at review.

## When to open it

- When choosing a resilient CSS structure for repeated content, forms, cards or sidebars.
- When checking how intrinsic sizing and content flow can replace fixed breakpoint decisions.

## Most useful

- [The Stack](https://every-layout.dev/layouts/stack/) shows vertical rhythm, nested spacing and a slide-editor sidebar with its action pinned to the bottom. Try its launchable examples and Stack generator; observe how the layout responds to content and available height.
- [The layout index](https://every-layout.dev/layouts/) links the named primitives, with the Stack, Sidebar and Switcher marked as readable for free. Use the picture index to compare the shape of each pattern before opening its page.
- The Stack page also demonstrates when recursive spacing affects unintended descendants, a useful edge case to inspect before applying a broad selector.

## Using it with agents

No MCP, API, CLI or agent-specific guide is published. Give an agent a specific free primitive page and ask it to compare the shown layout constraints with the target interface. The free Stack page includes the implementation details and generator controls directly in HTML.

## Watch out for

- Most primitive pages and the full component downloads require a purchase; the free pages are a partial sample.
- The examples teach layout techniques; they are not a gallery of finished product styling or brand direction.
- The terms forbid republishing licensed content. No separate reuse licence for the code examples is stated, so treat them as look-and-learn references unless you verify permission.

## Reusable ideas

- Separate spacing between siblings from the components themselves, then compose nested rhythm where needed.
- Let content and container space determine wrapping and placement before adding viewport breakpoints.
- Inspect the documented failure modes and exceptions alongside the happy path.

## Related

[Utopia](utopia.md), [Design System Checklist](design-system-checklist.md)
