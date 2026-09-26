---
title: AI interfaces
description: chat and agent components, AI UX patterns and status visuals for AI products.
order: 9
---
[← Atlas](../README.md)

# AI interfaces

Interfaces for AI products: chat and agent components, patterns for oversight and trust, visuals for thinking and speaking states, and tools for reviewing what an agent built.

## Start here

- [The Shape of AI](../sites/shape-of-ai.md) — 57 AI UX patterns in six groups, each with trade-offs and real product examples; the place to name what you need before picking components.
- [Prompt Kit](../sites/prompt-kit.md) — MIT shadcn components for chat UIs: prompt input, auto-scrolling conversation, reasoning, tool-call and citation views.
- [termcn](../sites/termcn.md) — terminal components for coding-agent front ends, including agent chat, tool approval and per-file diff review.
- [Orbkit](../sites/orbkit.md) — 33 shader orbs that show whether a voice or chat agent is idle, thinking or speaking, driven by real audio levels.
- [Agentation](../sites/agentation.md) — a dev-only toolbar that turns click-to-annotate feedback into selectors and file paths an agent can act on over MCP.

## All sources

<!-- atlas:sources:start -->
- [Agentation](../sites/agentation.md) — element-attached notes with four output levels, React component detection and an open annotation schema with a pending, acknowledged and resolved lifecycle; PolyForm Shield.
- [agentcn](../sites/agentcn.md) — backend agent recipes (deep search, chat with PDF, PR review, browser agent) in shadcn format for four frameworks; the logic behind a chat UI, with no screens of its own.
- [Kobra](../sites/kobra.md) — proprietary components built for agent products: a sticky message scroller, plan cards for approving actions, hover citations and per-hunk diff review.
- [Libraries.dev: Thinking orbs](../sites/libraries-dev-orbs.md) — MIT canvas orbs with nine named waiting states (searching, composing, listening and more) at avatar and inline sizes.
- [mcpcn](../sites/mcpcn.md) — 30 MCP App widget blocks, from product pickers to event tickets, that render inside chat hosts, plus a scoped ChatGPT Apps SDK theme.
- [Orbkit](../sites/orbkit.md) — WebGL orbs as agent avatars, with a chooser table by goal, off-screen pausing, a still frame under reduced motion and a licence that varies per orb.
- [Prompt Kit](../sites/prompt-kit.md) — input, conversation, reasoning, tool, source and streaming components, plus full-stack chatbot and tool-calling recipes on the AI SDK.
- [shadercn](../sites/shadercn.md) — WebGPU versions of the Orbkit orbs with the same three states, in shadcn format; every orb file carries a non-commercial notice.
- [The Shape of AI](../sites/shape-of-ai.md) — wayfinders, prompt actions, tuners, governors, trust builders and identifiers, cross-linked so a whole flow can be designed at once; CC BY-NC-SA.
- [termcn](../sites/termcn.md) — Ink and OpenTUI components with streaming text, collapsible thinking, tool approval with risk badges, a model picker and a token and cost counter.
- [Transitions.dev](../sites/transitions-dev.md) — an AI-states group of transitions: thinking shimmers, a reasoning stream, streaming text and an image-generation placeholder.
<!-- atlas:sources:end -->

## Patterns worth reusing

- Name the pattern before choosing components, and check how shipping products handle it and what it costs (The Shape of AI).
- Show the plan before acting, keep plan, execution log and evidence as linked views, and give every agent step a visible state: queued, running, waiting for approval, failed, done (The Shape of AI).
- Put an approval step in front of risky actions: plan cards with keyboard shortcuts (Kobra), tool-approval prompts with an explicit risk level (termcn), and accept or reject per hunk or per file for edits (Kobra, termcn).
- Collapse reasoning and tool calls by default behind a one-line status, expandable on demand (Prompt Kit, termcn).
- Keep a conversation pinned to the newest message only while the user hasn't scrolled up, and offer a button to jump back down (Prompt Kit, Kobra).
- Show citations as hover cards with title and domain, point them at the exact passage, and say plainly when a source is missing (Prompt Kit, The Shape of AI).
- Give each agent activity its own visual and motion vocabulary, such as a shimmer on the status text instead of a spinner (Libraries.dev: Thinking orbs, Transitions.dev, Prompt Kit).
- Drive an agent's avatar from app state and real input and output audio levels, not hand-timed animation (Orbkit).
- In a widget inside a chat host, allow one primary and one optional secondary action, move richer navigation to fullscreen, and scope the host theme to a data attribute (mcpcn).
- Give agents selectors, file paths and component names rather than visual descriptions, and make "fixed" an explicit status on each note (Agentation).
- Give the AI a consistent name, colour and icon so people always know which content it produced (The Shape of AI).

## Pitfalls

- Licences range from open to ideas-only: Kobra is proprietary, Agentation is source-available and needs a commercial licence to redistribute, Orbkit's 19 XorDev ports and all shadercn orbs are non-commercial, and The Shape of AI's text is CC BY-NC-SA.
- Most of these are young projects with one maintainer (mcpcn, agentcn, termcn, shadercn, Orbkit); pin what you install.
- Demos and recipes can involve keys: Prompt Kit's primitive demos store a pasted `OPENAI_API_KEY` in localStorage, and agentcn's recipes call paid third-party APIs with keys you supply.
- mcpcn's theme covers looks only; display modes, widget state and tool calls still go through the host's Apps SDK bridge, and only the ChatGPT styling is documented.
- Agentation's MCP server accepts private-network origins by default and its CORS setting is not authentication; don't open it to `*` on a shared network.
- Each orb is its own GPU context: use one per agent and keep fewer than about a dozen on a page (Orbkit). shadercn needs WebGPU and documents no fallback.
- Pattern screenshots show other companies' products and date quickly as those products change (The Shape of AI).

## Related topics

- [Components](components.md)
- [Agents and prompts](agents-and-prompts.md)
- [UX patterns](ux-patterns.md)
- [3D and shaders](3d-and-shaders.md)
- [Motion](motion.md)
