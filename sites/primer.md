---
title: Primer
description: GitHub's design system, with tokens, primitives, component docs, UI patterns and an MCP server for agents.
url: https://primer.style
type: design-system
formats: design tokens · React primitives and components · UI patterns · Octicons · Figma libraries · MCP server
topics: [components, ux-patterns, documentation]
verdict: very-useful
agent: [mcp]
pricing: free
licence: MIT for the code packages, including Primer React, which had 3,927 stars at review. The brand guidelines and logo assets are covered by their own terms, so the class is mixed.
licence_class: mixed
reviewed: 2026-10-29
status: active
related: [material-design-3, carbon-design-system, atlassian-design]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [ux-patterns](../topics/ux-patterns.md), [documentation](../topics/documentation.md)


# Primer

## What it is

Primer is the design system behind GitHub's product interface, published as documentation, tokens, Figma libraries and React packages. Its scope is unusually wide for a public design system: foundations such as colour usage, typography, layout and responsiveness; a long component list built around dense application UI; a set of UI patterns for problems components cannot solve alone; an accessibility section; Octicons; and an MCP server that serves the whole thing to an agent.

## When to open it

- You are building a dense product interface — tables, filter lists, command menus, notification banners — and want to see how a mature system handles it.
- You need to justify a token system, a theme matrix or a component API to a team, and want a documented example rather than an opinion.
- You are writing guidance for agents and want to see a design system that ships its rules as tools.

## Most useful

- **Tokens as CSS variables**: `@primer/primitives` publishes base and functional tokens for size, spacing, typography, borders and colour, split into theme files. The theme matrix is the interesting part: light, dark, dark dimmed, light and dark high contrast, and light and dark colour-blind and tritanopia variants, each a separate import.
- **Primitives before components**: Box, Stack, Inline, Text and Pressable give layout and type without pulling in a full component, which is how the system keeps its component count honest.
- **Components for application UI**: ActionList, ActionMenu, DataTable, NavList, UnderlineNav, SegmentedControl, TreeView, Blankslate, Banner, Timeline, Token, Truncate, SelectPanel, PageHeader and PageLayout. The presence of Blankslate and Truncate says more about the target interface than any marketing line.
- **UI patterns section**: data visualisation, empty states, feature onboarding, forms, loading, navigation, notification messaging, progressive disclosure and saving. Each is a problem with a recommended shape, which is what a component library cannot give you.
- **Accessibility as a first-class section**, including teams and annotations, rather than a page of disclaimers.
- **MCP server**: `@primer/mcp` runs locally over stdio and exposes nineteen tools at review — `list_components`, `get_component`, `get_component_examples`, `get_component_usage_guidelines`, `get_component_accessibility_guidelines`, `find_tokens`, `get_token_usage_patterns`, `get_color_usage`, `get_typography_usage`, `list_icons`, `lint_css`, `review_alt_text` and the pattern and setup tools.

## Using it with agents

The MCP server is the channel worth installing: `npx @primer/mcp@latest` in VS Code, Copilot CLI or any stdio client. Two tools stand out. `lint_css` checks CSS for correct Primer token usage, so an agent can catch a hard-coded colour before review. `review_alt_text` evaluates alt text against accessibility practice, which is the check most generated markup fails. The rest serve component APIs, examples, patterns and token specs, so an agent can answer "what is the right component for this" from the system itself instead of guessing.

## Watch out for

- The system is shaped by GitHub's product: a public marketing site or a media-heavy app will find the components denser and more utilitarian than it wants.
- The components are React-first. Tokens and CSS utilities travel to other frameworks; the components do not.
- Only part of the code is MIT. Primer Brand and the logo assets carry their own terms, so check before reusing anything visual.
- The theme matrix is a real commitment. Supporting colour-blind and high-contrast variants is not a token swap you can postpone indefinitely.
- The site is large, with several navigation levels, and some pages assume you already know the difference between foundations, primitives and components.
- Installing the MCP server gives an agent a lot of context at once. Ask for one component or one pattern at a time, or the answers blur.

## Reusable ideas

- Ship the design system to agents as tools, not only as docs: a linter for tokens and an alt-text reviewer are small, checkable wins.
- Separate primitives from components so layout and type never require a full widget.
- Publish patterns for the problems components cannot solve: empty states, onboarding, progressive disclosure, saving.
- Treat each theme as a file with a name, rather than a class on the body.

## Related

[Material Design 3](material-design-3.md), [Carbon Design System](carbon-design-system.md), [Atlassian Design](atlassian-design.md)
