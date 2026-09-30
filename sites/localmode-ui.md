---
title: LocalMode UI
description: MIT shadcn registry of local-first AI components and runnable browser demos for chat, RAG, vision, audio and privacy flows.
url: https://localmode.ai/
type: component-registry
formats: React components · shadcn registry · installable AI demo blocks
topics: [components, ai-interfaces, agents-and-prompts]
verdict: useful
agent: [cli, registry]
pricing: free
licence: Free to browse and install; the LocalMode repository and UI are MIT licensed. Check third-party model and runtime terms separately.
licence_class: open-source-permissive
reviewed: 2026-09-29
status: active
related: [shadcn-ui, ai-ux-playground, magic-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [ai-interfaces](../topics/ai-interfaces.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# LocalMode UI

## What it is

LocalMode UI combines a shadcn-compatible registry of copy-owned React components with complete AI interface blocks. At review, the live catalogue presented more than 100 components and 36 blocks across chat, retrieval, vision, audio, agents, media and privacy. Its demos run browser-local models rather than requiring a hosted API for every interaction.

## When to open it

Use it when building an AI interface and you need concrete patterns for model loading, citations, tool calls, transcription, image analysis or privacy controls. The blocks make it possible to inspect connected flows as well as isolated components.

## Most useful

- **Component catalogue**: browse by family and inspect small, copy-owned React primitives.
- **Blocks gallery**: open examples such as RAG chat, object detection and voice notes to see how their parts fit together.
- **Browser capability report**: shows hardware and API support that affects whether an on-device experience can run.
- **Install commands**: each registry item can be added through the shadcn CLI; family and whole-catalogue aggregates are also documented.

## Using it with agents

The site documents a shadcn registry at `https://localmode.ai/r/{name}.json`. Add the `@localmode` namespace to `components.json`, then install an item with `npx shadcn@latest add @localmode/ui/conversation/message`. Its installation guide and public GitHub repository are the practical sources for an agent; no dedicated MCP server or `llms.txt` was found.

## Watch out for

- Running demos depend on browser capabilities and may download large models; the page's capability panel reports support, but this browser did not expose the necessary WebGPU/WebAssembly APIs during review.
- The UI blocks and the model/runtime packages are distinct layers. Check the required packages and model licences before shipping a composed block.
- Counts change as the catalogue grows; treat 100+ components and 36 blocks as the site's figures at review.

## Reusable ideas

- Put the install command next to the component preview so discovery and adoption stay in one place.
- Show browser and device constraints as part of the AI interface, rather than letting a model fail silently.
- Group complex demos by user task, then expose their smaller reusable components alongside them.
- Keep tool activity, model loading and result states visible in the conversation surface.

## Related

[shadcn/ui](shadcn-ui.md), [AI UX Playground](ai-ux-playground.md), [Magic UI](magic-ui.md)
