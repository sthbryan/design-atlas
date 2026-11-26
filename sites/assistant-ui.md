---
title: assistant-ui
description: React primitives and runtime for production AI chat, with CLI-copied source, llms.txt and optional Cloud.
url: https://www.assistant-ui.com
type: component-library
formats: component library · runtime · CLI · MCP · API
topics: [ai-interfaces, components]
verdict: very-useful
agent: [cli, llms-txt, api]
pricing: freemium
licence: MIT for the open-source library, stated in the repository. Assistant Cloud is a separate hosted product with its own terms.
licence_class: mixed
reviewed: 2026-11-26
status: active
related: [agents-kit, 21st-dev, shadcn-ui]
---
[← Atlas](../site/home.md) · Topics: [ai-interfaces](../topics/ai-interfaces.md), [components](../topics/components.md)

# assistant-ui

## What it is

assistant-ui is a frontend library for AI agents: composable React primitives and a runtime for production chat, backend-agnostic through adapters (AI SDK, LangGraph, LangChain, MASTR, custom). The runtime owns the thread, the stream and the tools; the CLI copies the UI source into your repo so every part is yours to reshape. At review it shows about 13,400 GitHub stars and 3.6M weekly npm downloads, and it ships for React, Vue, React Native and Ink.

## When to open it

- When a chat interface needs streaming, threads, tool calls and human approvals as composed primitives, not a monolithic component.
- When the backend is undecided: the runtime takes any backend through adapters.
- When source ownership matters: the CLI copies components into the project instead of hiding them in a package.

## Most useful

- Runtime pattern: a provider, a hook and one component (`AssistantRuntimeProvider`, `useChatRuntime`, `Thread`) with the transport streaming from your route.
- Elements library on top of the runtime for threads, composers and message parts that teams compose themselves.
- Assistant Cloud (optional) hosts threads and persistence when you do not want to build them.
- Docs ship as llms.txt plus `.md` canonical pages, so agents read the same content as people.

## Using it with agents

- CLI: installs and sets up the library, and copies UI source into `components/assistant-ui` for editing.
- llms.txt is published at `assistant-ui.com/llms.txt`, and docs pages have `.md` equivalents for agent reading.
- MCP: Assistant Cloud project reads are available over MCP on paid plans (verify on the pricing page at review time).

## Watch out for

- The library is MIT, but Assistant Cloud is hosted and priced separately (Free tier, Pro and Enterprise at review). Do not assume cloud features are in the open-source licence.
- Adapters cover the major runtimes, but a fully custom backend still needs an adapter written.
- Weekly download and star counts are at review figures and drift.

## Reusable ideas

- Separate the runtime (thread, stream, tools) from the primitives (message, composer, thread list) so backends and UI evolve independently.
- Copy component source into the project via CLI, so customisation is editing owned code.
- Publish every docs page as markdown as well as HTML, with an llms.txt index, as the default agent surface.

## Related

[Agents Kit](agents-kit.md), [21st.dev](21st-dev.md), [shadcn/ui](shadcn-ui.md)
