---
title: Beautiful UI
description: "21 polished MIT shadcn components for agent UIs: thinking states, approvals, tool chips, task rows, diff tables and a prompt bar."
url: https://www.beautifului.dev
type: component-registry
formats: shadcn registry of components for agent and chat interfaces
topics: [components, ai-interfaces]
verdict: very-useful
agent: [registry]
pricing: free
licence: Free. MIT, copyright Shane Levine, shown on the site's `/license` page; no public source repository was linked at review
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [prompt-kit, kokonut-ui, glimm, shadcn-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [ai-interfaces](../topics/ai-interfaces.md)

# Beautiful UI

## What it is

Beautiful UI is a small, carefully finished set of React components for AI-native products, built by Shane Levine of the product design studio Turbo. At review the registry listed 21 components plus six shared primitives (a button, a glide menu, an entity chip, a value pill, a shimmer and a streaming text helper) and a foundation style with design tokens, light and dark variables, spacing utilities and keyframes. The components cover loading and thinking states, streamed answers with sources, approval cards, tool-call chips, task rows, a tabbed chat, a prompt bar, recommendation and context cards, diff, records and filter tables, sidebar navigation, search, a flowchart, insight cards, a code block, a fine-tune card and selection actions. All demos share a playful ice-cream shop scenario, and a "harness" page assembles them into a full agent desktop.

## When to open it

Open it when you are designing the surfaces around an agent: how it shows it is working, how it asks permission, how it reports tool calls and proposes edits to data. It is a good reference even if you never install anything.

## Most useful

- **Thinking and loading states**: a pixel-grid loader with elapsed time and expandable traces for reasoning, search and coding steps
- **Approval card**: multi-question human-in-the-loop prompts with skip and continue
- **Tool chips and task rows**: compact summaries of tool calls and live task status (running, failed, done)
- **Diff table**: proposed AI edits swept across a data table before you accept them
- **Prompt bar**: a composer with `@` sources, `/` commands, a model picker and dictation

## Using it with agents

Each component installs with `npx shadcn add https://www.beautifului.dev/r/<name>.json`; dependencies such as the foundation style resolve automatically, and the index is at `/r/registry.json`. There is no `llms.txt` (404 at review), no MCP server and no docs beyond the live demos, so an agent works from the registry JSON.

## Watch out for

- No public GitHub repository, issue tracker or changelog was linked, so maintenance is hard to judge
- The foundation step asks you to import its CSS into your global stylesheet, which brings its own tokens and spacing utilities
- The Streaming Text component pulls in the `glimm` WebGL transition package as a dependency
- The site is also a lead-in for the studio's paid design services

## Reusable ideas

- Show an agent's work as chips and rows with explicit states rather than a wall of log text
- Ask for approval in a card with bounded options before the agent acts
- Present proposed data edits as a reviewable diff inside the table itself
- Keep one fictional business across all demos so components read as a coherent product

## Related

[Prompt Kit](prompt-kit.md), [Kokonut UI](kokonut-ui.md), [glimm](glimm.md), [shadcn/ui](shadcn-ui.md)
