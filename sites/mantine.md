---
title: Mantine
description: "React component library with a cohesive, easy-to-browse docs site: abundant examples, hooks documentation and MCP access."
url: https://mantine.dev
type: component-library
formats: component library · React · hooks
topics: [components]
verdict: very-useful
agent: [mcp, llms-txt]
pricing: free
licence: "MIT licence, stated in the repository. Free for commercial and client work with no per-seat terms. Mantine and its icons packages are covered by the same licence; check the repository for the current notice."
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [radix, ant-design]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md)

# Mantine

## What it is

Mantine is a React component library that ships components together with a large set of hooks. The docs site is the reason to study it: a cohesive, browsable catalog where every component has examples you can read as specifications, not just demos.

## When to open it

- When a React product needs components plus hooks in one library and one docs site.
- When the component catalog must stay browsable at scale: consistent page structure, examples per variant, props one search away.
- When agents will consume the library: the MCP server and llms.txt make the docs reachable as structured input.

## Most useful

- Component pages structured as references: examples first, props and API beside, so a reader can copy a working pattern before reading details.
- Hooks documented in the same system as components, which keeps the catalog mental model to one surface.
- The docs site itself demonstrates the library: consistent navigation, predictable layout, and the library's own design language throughout.
- Agent channels published at review: an MCP server and an llms.txt alongside the docs.

## Using it with agents

- Mantine publishes an MCP server and an llms.txt; the npm packages are the install path and the docs are the usage reference.
- Component pages double as agent input: examples show exact props and composition for each component.

## Watch out for

- MIT at review; keep the licence notice when redistributing code or templates built on it.
- The library is React-first at review; server components and other frameworks follow the docs, check the current status.
- Version the docs with the release you install; component APIs change between majors.

## Reusable ideas

- Present each component page as example first, API beside, so readers copy a working pattern before details.
- Document hooks in the same catalog and layout as components, instead of a separate manual.
- Ship MCP and llms.txt with a component library when agents are part of the audience, not as a later add-on.

## Related