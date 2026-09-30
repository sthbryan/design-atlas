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
- [Agentation](../sites/agentation.md) — React toolbar that turns click-to-annotate feedback into selectors and file paths agents can act on over MCP.
- [agentcn](../sites/agentcn.md) — Backend agent recipes in shadcn format (19 recipes × 4 frameworks), including one that extracts a DESIGN.md; no UI.
- [AI UX Playground](../sites/ai-ux-playground.md) — A practical AI-interface reference with named patterns, live interaction demos, product teardowns, and agent skills.
- [Auri (auri.ai)](../sites/auri.md) — Interactive demos of an AI keyboard, visual chat and notes show how assistant features can fit into everyday writing flows.
- [Banani](../sites/banani.md) — Public UI-screen references and an AI editor for turning prompts or screenshots into editable prototypes.
- [Beautiful UI](../sites/beautiful-ui.md) — 21 polished MIT shadcn components for agent UIs: thinking states, approvals, tool chips, task rows, diff tables and a prompt bar.
- [benday](../sites/benday.md) — An MIT React component that turns a logo into a halftone mark with 21 controllable loading and agent-state animations.
- [beUI](../sites/beui.md) — MIT motion components, agent UI and charts with llms.txt, JSON API, agent skill and hosted MCP; paid Pro adds blocks and templates.
- [Fluid Functionalism](../sites/fluid-functionalism.md) — Spring-driven shadcn registry (Radix or Base UI) with proximity hover, AI chat parts and copy prompts.
- [Fuser](../sites/fuser.md) — A polished recipe page explains an image workflow with a connected input, recipe and output diagram.
- [GAIA UI](../sites/gaia-ui.md) — MIT, shadcn-compatible React components for AI assistants, with documented registry installation and a focused agent-app visual language.
- [Jessy In's Gallery](../sites/jessy-in-gallery.md) — Social art gallery built on MoMA's open collection, with shared two-player curation, live chat, postcards and WebMCP tools for browser agents.
- [Keel Workspace](../sites/keel-workspace.md) — A polished CRM workspace demo with dense pipeline metrics, source-backed agent decisions and keyboard-first review controls.
- [Kobra](../sites/kobra.md) — Proprietary component system for AI and agent product interfaces, with an llms.txt index and a markdown API per component.
- [Kokonut UI](../sites/kokonut-ui.md) — Playful Motion components with AI inputs; llms.txt links per-component Markdown pages with full source.
- [Libraries.dev: Thinking orbs](../sites/libraries-dev-orbs.md) — MIT React loading orbs with nine AI "thinking" states, copy-prompt buttons and an installable agent skill.
- [Liquid Orb Editor](../sites/liquid-orb-editor.md) — Live WebGPU editor for liquid-glass orbs, with shareable parameter links and Web or SwiftUI/Metal code export.
- [LocalMode UI](../sites/localmode-ui.md) — MIT shadcn registry of local-first AI components and runnable browser demos for chat, RAG, vision, audio and privacy flows.
- [Luma (AI)](../sites/luma-ai.md) — Creative AI product site with a dark, editorial hero, production-focused workflow examples and pricing for multimodal creative agents.
- [mcpcn](../sites/mcpcn.md) — Young MIT registry of 30 MCP App widget blocks (commerce, events, forms) with an optional ChatGPT Apps SDK theme.
- [microcharts](../sites/microcharts.md) — MIT React charts sized for sentences, tables and KPI cards, with a catalog and seven live example apps.
- [Nous Portal](../sites/nous-portal.md) — A dark AI service portal with a fixed resource rail, editorial typography, model catalog and clear subscription comparisons.
- [Orbkit](../sites/orbkit.md) — 33 state-driven WebGL orbs for voice and chat agents, with llms.txt, a skill, a JSON API and a shadcn install.
- [PanelUI](../sites/panelui.md) — MIT React Native component library for Expo, with Tailwind styling, live examples and agent resources.
- [Prompt Kit](../sites/prompt-kit.md) — MIT shadcn components for chat UIs: prompt input, auto-scrolling conversation, reasoning, tool-call and citation views.
- [Sevalla](../sites/sevalla.md) — Cloud hosting landing page that explains apps, databases, storage and static sites through product previews, location data and MCP workflows.
- [shadercn](../sites/shadercn.md) — WebGPU ports of the Orbkit orbs in shadcn registry format; the orb files are non-commercial despite the MIT repo.
- [Smooth UI](../sites/smooth-ui.md) — 198 MIT animated components with a large AI-interface set, llms.txt, JSON catalog and a no-auth REST API.
- [Spectrum UI](../sites/spectrum-ui.md) — Free Apache-2.0 animated shadcn components and blocks, strong on AI-assistant, chart and empty-state blocks, with an MCP server.
- [Swift Pieces](../sites/swift-pieces.md) — Animated SwiftUI components for iOS with live interaction previews, single-file source and agent installation paths.
- [termcn](../sites/termcn.md) — Ink and OpenTUI terminal components via shadcn CLI, including agent chat, tool-approval and diff-review widgets.
- [The Shape of AI](../sites/shape-of-ai.md) — Emily Campbell's 57 AI UX patterns in six groups, each with trade-offs and real product examples; CC BY-NC-SA.
- [Transitions.dev](../sites/transitions-dev.md) — Curated product-UI transitions as portable CSS, with an agent skill, CLI and live Refine timeline.
- [Wasmer.sh](../sites/wasmer-sh.md) — Browser-based WebAssembly shell with one-click examples for Pi, Node.js, Python, databases and developer utilities.
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
