---
title: SakaniUI
description: Token-driven React design system with a Liquid Glass surface layer, 130+ components, 42 blocks and Figma parity.
url: https://www.sakaniui.com/
type: component-library
formats: React design system · CSS variable tokens · MCP server · agent skill
topics: [components, documentation, agents-and-prompts, color]
verdict: useful
agent: [mcp, skill, llms-txt]
pricing: free
licence: Open-source React design system; the GitHub repository (samzydd/Sakaniui) carries an MIT licence at review. No paid tier is published.
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [shadcn-ui, magic-ui, reactbits]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [documentation](../topics/documentation.md), [agents-and-prompts](../topics/agents-and-prompts.md), [color](../topics/color.md)

# SakaniUI

## What it is

SakaniUI is a React design system built around CSS variable tokens, with a Liquid Glass surface layer on top of conventional components. It ships 130+ components and 42 blocks at review, with Figma parity so the documented system and the shipped code stay in step.

## When to open it

Open it when you want a glass-style system with real tokens and accessibility rather than a one-off glass effect, or when you need blocks that already match a Figma file.

## Most useful

- **Glass done as a system**: the Liquid Glass layer sits on the same token structure as the rest, so surfaces can be re-themed instead of hard-coded.
- **Components and blocks**: 130+ components and 42 blocks at review, organised for product UI rather than marketing pages.
- **Figma parity**: the claim is that components match the Figma file, which makes handoff and agent work line up.

## Using it with agents

The site publishes an MCP server and an agent skill, plus an `llms.txt`, so an agent can read the component and token documentation directly. The repository is MIT-licensed (129 stars at review), so agent-generated output can ship.

## Watch out for

- It is a young library; expect the component set and the glass layer to change.
- The glass effect is the headline, so check contrast and text legibility before adopting it everywhere.

## Reusable ideas

- Put the expressive surface (glass) on the token layer instead of on individual components.
- Keep the Figma file and the component API as two views of one system, not two projects.

## Related

[shadcn/ui](shadcn-ui.md), [Magic UI](magic-ui.md), [React Bits](reactbits.md)
