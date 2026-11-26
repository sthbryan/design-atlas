---
title: Agent Elements
description: "Copyable chat and agent UI components for shadcn/ui: tool cards, streaming states, plan approvals and diffs."
url: https://agent-elements.21st.dev
type: component-library
formats: component library · shadcn registry · MCP server · skill
topics: [ai-interfaces]
verdict: useful
agent: [registry, mcp, cli, skill]
pricing: free
licence: MIT for the open-source component collection, stated in the repository. Components copied into a project stay under their licence notices.
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [21st-dev, agents-kit, shadcn-ui]
---
[← Atlas](../site/home.md) · Topics: [ai-interfaces](../topics/ai-interfaces.md)

# Agent Elements

## What it is

Agent Elements is an open-source collection of chat and agent UI components built on shadcn/ui, from the 21st.dev team. At review it holds 25 components grouped by role: chat surface, input, tool cards and streaming states. It is the UI layer of the 21st.dev Agent SDK, but every component also works standalone in any React app.

## When to open it

- When an agent interface needs tool invocations, plan approvals or streaming states beyond ordinary chat bubbles.
- When proposed file edits should render as diffs with explicit approve or reject controls.
- When you want shadcn components that plug into `useChat` from the Vercel AI SDK.

## Most useful

- Tool cards per tool type: Bash, Edit, Search, Todo, Plan, Subagent, MCP, Question and a generic renderer, each with its own state.
- Streaming states: ThinkingTool, TextShimmer and SpiralLoader for the in-between moments of a run.
- Composition recipes: plug Bash and Edit cards into `AgentChat` to render real tool invocations from your backend.
- Input kit: InputBar, Suggestions, ModelPicker, ModeSelector and attachment controls.

## Using it with agents

- Registry: `npx shadcn@latest add https://agent-elements.21st.dev/r/agent-chat.json` copies components into the project, individually or as the wired-up `agent-chat` set.
- MCP server: browse and install components from an AI assistant.
- Skills: project-aware context so Claude Code and Cursor compose Agent Elements correctly.
- llms.txt is published at review.

## Watch out for

- The API is typed around `UIMessage` and `ChatStatus` from the Vercel AI SDK, so teams on another stack adapt the data layer.
- The full agent runtime (sandboxed Claude Code or Codex with approvals) lives in the separate 21st.dev Agent SDK; the components alone do not run anything.
- Component counts and the registry surface move with releases; check the docs at review time.

## Reusable ideas

- Give every tool type its own card, with loading and error states, instead of rendering tool output as chat text.
- Render proposed edits as diffs with approve and reject controls, so approval is a real interface decision.
- Group components by role (surface, input, tools, streaming) and expose one full-set install for teams that want everything.

## Related

[21st.dev](21st-dev.md), [Agents Kit](agents-kit.md), [shadcn/ui](shadcn-ui.md)
