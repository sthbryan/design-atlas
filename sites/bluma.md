---
title: Bluma
description: Describe a component and Bluma writes it, builds it in a real browser and tests it, in React or SwiftUI.
url: https://bluma.design
type: ai-builder
formats: AI component builder · React and SwiftUI output · MCP
topics: [components, ai-interfaces, agents-and-prompts]
verdict: useful
agent: [mcp, prompts]
pricing: freemium
licence: Free to start with credit-based use; each message spends credits depending on the work. No reuse licence for generated components is stated at review.
licence_class: not-stated
reviewed: 2026-11-26
status: active
related: [magicpath, penpot, aicanvas]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [ai-interfaces](../topics/ai-interfaces.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Bluma

## What it is

Bluma is an AI component builder: describe a component, and it writes the React (or SwiftUI) code, builds it in front of you and tests it in a real browser. After the first build you change words, colours, spacing or behaviour by asking, rather than editing code.

## When to open it

Open it when you want to explore a component interactively before committing it to a codebase, or when you need a SwiftUI variant of the same idea.

## Most useful

- **Built and tested in a real browser**: the preview is the actual rendered component, not a mock.
- **Edit by asking**: colour, spacing and behaviour changes happen through chat after the first generation.
- **Two stacks**: React and SwiftUI output from the same description.

## Using it with agents

The site advertises MCP access and a prompt-driven workflow, so an agent can drive the same describe-build-test loop. There is no `llms.txt` at review.

## Watch out for

- Usage is credit-based, so long iteration sessions cost credits.
- Generated components still need a design review before they ship; the builder tests behaviour, not taste.

## Reusable ideas

- Test generated UI in a real browser before showing it, so the preview never lies about layout.
- Keep the chat history as the edit surface after the first generation.

## Related

[MagicPath](magicpath.md), [Penpot](penpot.md), [AI Canvas](aicanvas.md)
