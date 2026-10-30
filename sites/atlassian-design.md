---
title: Atlassian Design
description: "Atlassian's design system: tokens, primitives, component guidelines and accessibility rules, with llms.txt files for agents."
url: https://atlassian.design
type: design-system
formats: design tokens · React primitives and components · styling standards · accessibility guidance · llms.txt set
topics: [components, ux-patterns, documentation]
verdict: useful
agent: [llms-txt]
pricing: free
licence: Apache-2.0 for the `@atlaskit` packages, per npm metadata at review. The documentation is free to read; check each package before shipping.
licence_class: open-source-permissive
reviewed: 2026-10-29
status: active
related: [primer, material-design-3, carbon-design-system]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [ux-patterns](../topics/ux-patterns.md), [documentation](../topics/documentation.md)


# Atlassian Design

## What it is

Atlassian Design is the design system for Atlassian's products, and it is unusually explicit about the rules behind the visuals. It documents design tokens as the single source of truth, a set of layout and type primitives, the component set built on them, a styling standard enforced by an ESLint plugin, and accessibility guidance aimed at WCAG 2.1 AA. The same material is published for agents as a set of `llms.txt` files.

## When to open it

- You are designing software for long working sessions — issue trackers, boards, admin consoles — where density and scanability beat decoration.
- You need a worked example of tokens driving every visual decision, including spacing and elevation.
- You want accessibility guidance written per component rather than as a generic checklist.

## Most useful

- **Token categories**: colour, typography, spacing, border radius and elevation, shipped through `@atlaskit/tokens`. Elevation as a token is the useful reminder that depth is a decision, not a box-shadow copied from a snippet.
- **Primitives**: Box, Stack, Inline, Text, Pressable, Flex, Grid and Bleed, with the compiled package recommended over the legacy one. The set is small and opinionated, which is what makes it readable.
- **Components grouped by job**: core (avatar, badge, button), form, layout, navigation (breadcrumbs, tabs), feedback (spinner, skeleton, toast, flag), overlay (modal, drawer) and data display (table, tree).
- **UI styling standard**: a documented set of styling practices with an ESLint plugin to enforce them, including token usage and CSS-in-JS patterns. An opinionated linter is a stronger signal than a style guide nobody reads.
- **Accessibility section**: WCAG 2.1 AA guidance, token choices that keep contrast, ARIA usage and keyboard patterns per component.

## Using it with agents

`https://atlassian.design/llms.txt` is a real index, not a placeholder, and it splits the system into companion files: `llms-tokens.txt`, `llms-primitives.txt`, `llms-components.txt`, `llms-styling.txt` and `llms-a11y.txt`. Each names the package to install and what it contains, which lets an agent fetch only the part it needs instead of the whole system. That split is the most useful pattern here: a large design system published as five small, addressable files.

## Watch out for

- The guidance is written for Atlassian's own products, where a table with forty rows and a tree view are normal. On a marketing page the same components will feel heavy.
- The `@atlaskit` package naming and the number of packages make dependency management real work; the primitives package has both a compiled and a legacy variant, and the legacy one is deprecated.
- Tokens are tied to Atlassian's themes. Copying the values gives you a palette without the reasoning, and the reasoning is the valuable half.
- The docs site is broad; without a component name in hand, start from the llms.txt index rather than the navigation.
- Apache-2.0 applies to the code. Illustrations, brand marks and product screenshots are not covered.
- The ESLint rules assume a CSS-in-JS setup, so a Tailwind project cannot adopt them as they are.

## Reusable ideas

- Split a large design system's agent documentation into addressable files by concern, and keep an index that says what each one holds.
- Treat elevation and spacing as tokens, not as one-off values.
- Enforce the styling standard with a linter instead of asking reviewers to remember it.
- Write accessibility guidance per component, including the ARIA and keyboard behaviour, rather than as a single page of principles.

## Related

[Primer](primer.md), [Material Design 3](material-design-3.md), [Carbon Design System](carbon-design-system.md)
