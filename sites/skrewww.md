---
title: Skrewww
description: React design system where one component set adapts through tokens across shape, surface and brand, with contracts agents can read.
url: https://skrewww.com
type: component-registry
formats: React and TypeScript components · shadcn-compatible registry · Figma library · written component contracts · agent skill · llms.txt and llms-full.txt
topics: [components, documentation, agent-skills]
verdict: useful
agent: [llms-txt, registry, skill]
pricing: freemium
licence: No licence is stated for the code at review. 23 Figma components are free and the remaining 52 sit behind Skrewww Pro
licence_class: not-stated
reviewed: 2026-11-10
status: active
related: [shadcn-ui, hexta-ui, component-gallery]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [documentation](../topics/documentation.md), [agent-skills](../topics/agent-skills.md)


# Skrewww

## What it is

A React and TypeScript design system built on one idea, stated on the first screen: the same components adapt through tokens, never forks, across shape, surface and brand. The page is written as an argument about architecture — four layers, with every decision scoped to one — and the status labels are presented as measured rather than aspirational: 58 components at review, 27 stable and 31 beta, with the version of the docs printed beside the count.

The interface itself is deliberately plain: a white page, a large headline set in two lines, four buttons (browse components, view foundations, get the free Figma file, get Pro), and then the architecture section, which numbers its layers and states what belongs in each. Nothing is illustrated that could be said.

## When to open it

Open it when you need a design system that has to serve several products or surfaces from one component set and you want to see how the token layers are argued, or when you are writing component contracts for agents and need a model for describing what a component guarantees.

## Most useful

- **The four-layer architecture** as a way of deciding where a change belongs, instead of patching components per product.
- **Stable and beta counted separately and printed**, which is more honest than a single component total.
- **Contracts written for machines**: `llms.txt` and `llms-full.txt` both resolve, a canonical skill lives at `/agent/skill/SKILL.md`, and the registry installs through the shadcn tooling that agents already know.
- **An explicit statement that no custom MCP exists** and that the shadcn MCP works against the registry — a rare, useful piece of honesty in an agent-facing page.
- **Documented limitations**: content and data tables are described as composition examples rather than shell components, with the reasoning included.

## Using it with agents

The strongest part of the offer. An agent can read `llms.txt` for the index, `llms-full.txt` for the contracts, install the skill, and pull components from the registry with the shadcn CLI. The system tells agents to read the contract before generating code instead of relying on memorised APIs.

## Watch out for

- **No licence is stated for the code**, so nothing here can be shipped on the strength of this page alone; ask, or treat it as look-and-learn.
- The Figma library is split: 23 components free, 52 in Pro, and Figma files are not code.
- Thirty-one of 58 components are beta at review; a name in the index does not promise a settled API.
- The architectural claim is the selling point and the marketing; verify the layers against the code before adopting the model.

## Reusable ideas

- Publish stable and beta counts on the front page, not in a changelog.
- Number the layers of your system and say which layer each decision belongs to.
- Write component contracts that state what a component owns and what it refuses to do.
- Tell agents which retrieval path exists and which does not; a wrong assumption costs more than a missing feature.

## Related

[shadcn/ui](shadcn-ui.md), [HextaUI](hexta-ui.md), [The Component Gallery](component-gallery.md)
