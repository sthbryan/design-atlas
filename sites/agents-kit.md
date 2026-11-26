---
title: Agents Kit
description: 224 registry entries of React components for chat, voice agents, tool approvals and generative UI, copied into your app.
url: https://agents-ui.github.io/agents-kit/
type: component-registry
formats: shadcn-compatible registry · chat and voice agent components · app examples
topics: [ai-interfaces, components, agents-and-prompts]
verdict: useful
agent: [registry, llms-txt]
pricing: free
licence: A registry that collects components from several open sources, so each entry keeps its upstream licence. The repository records them in its third-party notices at review; check the entry you take.
licence_class: mixed
reviewed: 2026-11-26
status: active
related: [shadcn-ui, kokonut-ui, prompt-kit]
---
[← Atlas](../site/home.md) · Topics: [ai-interfaces](../topics/ai-interfaces.md), [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Agents Kit

## What it is

Agents Kit is a registry of React components for agent interfaces: chat, voice agents, tool calls and approvals, generated results and the controls around them. Version 0.3 lists 224 installable registry entries at review, including 37 voice entries, with components and app examples you copy into your project through the shadcn-compatible registry.

## When to open it

Open it when you are building an agent product and need the interface pieces (conversation, approval, tool result) rather than the agent runtime.

## Most useful

- **Voice as a first-class category**: not only text chat.
- **Approvals and tool results**: the least-designed part of agent UI, treated as components.
- **Copy, own, change**: source lands in your repo instead of a dependency.

## Using it with agents

It uses the standard shadcn registry and the standard shadcn MCP server, with `llms.txt` and `llms-full.txt`, so existing shadcn tooling works unchanged.

## Watch out for

- Entries come from several upstream projects, so licences differ per component.
- Agent interface patterns are still young; expect to redesign as the product matures.

## Reusable ideas

- Treat tool approvals as a component with states, not a modal you invent per project.
- Reuse the shadcn registry instead of inventing a new install protocol.


## Related

[shadcn/ui](shadcn-ui.md), [Kokonut UI](kokonut-ui.md), [Prompt Kit](prompt-kit.md)
