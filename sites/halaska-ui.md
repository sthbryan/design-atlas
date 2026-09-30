---
title: Halaska UI
description: MIT React kit for AI products, pairing live sample screens with reusable interaction patterns and components.
url: https://ui.halaska.com/
type: component-library
formats: React component kit · AI product patterns · component reference
topics: [components, ai-interfaces, agents-and-prompts]
verdict: useful
agent: [llms-txt]
pricing: free
licence: The site says the kit is MIT licensed; the linked public GitHub repository contains an MIT LICENSE. No paid tier was listed at review.
licence_class: open-source-permissive
reviewed: 2026-09-30
status: active
related: [beautiful-ui, gaia-ui, agentcn]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [ai-interfaces](../topics/ai-interfaces.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Halaska UI

## What it is

Halaska UI is a public React kit for AI-product interfaces, built on shadcn/ui foundations. The homepage pairs a before-and-after sample screen with complete chat and workspace examples, a catalogue of 77 components and 40 named patterns at review. The site demonstrates its own visual direction through a switchable palette, light and dark modes, and compact documentation navigation; its sample support-agent interface is an illustrative kit demo, not a separate production product.

## When to open it

- When a prototype needs a more considered AI-product interface without replacing its routing, state or data.
- When you need examples for agent status, approvals, source citations, permissions, checkpoints or handoffs.
- When you want to compare a complete sample screen with the small patterns that compose it.

## Most useful

- The [Chat screen](https://ui.halaska.com/screens/chat) labels its conversation, model/context selector, status, streaming response, approval card and prompt input as separate patterns.
- The [pattern index](https://ui.halaska.com/patterns) groups examples around trust, control, output and work beyond chat. Open a pattern such as [approval card](https://ui.halaska.com/patterns/approval) to inspect it in context.
- The [component index](https://ui.halaska.com/components) covers familiar controls alongside AI-specific pieces such as thinking steps, confidence bars, agent glyphs and streaming text. The home page shows the kit's single-file download command and offers an install prompt to copy.

## Using it with agents

The site links an `llms.txt` and explains a copy-and-paste setup for Claude Code, Cursor, Codex, Windsurf and similar agents. The public [GitHub source](https://github.com/Halaska-Studio/ui) includes the kit and an MIT licence. I could not open the linked plain-text `llms.txt` directly in the review browser, so treat that channel as site-advertised rather than independently inspected. For a visual task, ask the agent to inspect the relevant pattern page and adapt the behavior and hierarchy to the existing product instead of replacing its data or navigation.

## Watch out for

- The kit is aimed at React projects and expects React and React DOM. Its single-file distribution does not include every external dependency a consuming app might need.
- The screens are illustrative examples. Verify product-specific copy, accessibility, data, loading and error states in the actual project.
- The site asks for an email in the install-prompt area; the public repository and component documentation remain separately browseable.

## Reusable ideas

- Show an unstyled prototype beside the same screen with the kit applied, making the effect of a visual system easy to judge.
- Name the pattern attached to each part of a complete screen so visitors can move from a whole flow to one interaction.
- Treat consent, progress, review and accountability as first-class AI-product components alongside chat controls.

## Related

[Beautiful UI](beautiful-ui.md), [GAIA UI](gaia-ui.md), [agentcn](agentcn.md)
