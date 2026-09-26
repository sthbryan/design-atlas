---
title: Prompt Kit
description: "MIT shadcn components for chat UIs: prompt input, auto-scrolling conversation, reasoning, tool-call and citation views."
url: https://www.prompt-kit.com
type: component-library
formats: component library (shadcn registry) for AI chat interfaces
topics: [components, ai-interfaces, agents-and-prompts]
verdict: very-useful
agent: [llms-txt, registry]
pricing: free
licence: free; MIT (repo `ibelick/prompt-kit`, about 3.1k GitHub stars at review)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [motion-primitives, shadcn-ui, kibo-ui, mcpcn, shape-of-ai]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [ai-interfaces](../topics/ai-interfaces.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Prompt Kit

## What it is

prompt-kit is a set of shadcn/ui-style React components for building chat and assistant interfaces, made by ibelick, the developer behind Motion Primitives. It uses React 19, Tailwind CSS and Next.js, and every piece is copied into your project through the shadcn CLI. The registry held 21 components and 2 full-stack "primitives" at review, plus 10 composed blocks on the site. The introduction still calls it a work in progress.

## When to open it

When you are building a chat product, an assistant panel or an agent console and want the awkward parts solved: a growing prompt textarea with action buttons, a message list that sticks to the bottom while tokens stream in, collapsible reasoning and tool-call views, and source citations.

## Most useful

- **Input**: Prompt Input (auto-growing textarea with tooltipped actions), Prompt Suggestion, File Upload with drag-and-drop.
- **Conversation**: Chat Container with smart auto-scroll, Scroll Button, Message with avatars and actions, Markdown, Code Block.
- **Showing the model's work**: Reasoning, Chain of Thought, Steps, Tool (input, output, status and errors), Thinking Bar, Loader variants and Text Shimmer.
- **Trust and feedback**: Source (hover cards for cited URLs), System Message banners and a Feedback Bar.
- **Streaming helpers**: Response Stream to reveal text progressively and JSX Preview to render streamed JSX with tag auto-closing.
- **Blocks and primitives**: prompt inputs with suggestions or autocomplete, full conversations, a sidebar with chat history, and full-stack Chatbot and Tool-calling recipes that add an AI SDK v5 API route.

## Using it with agents

Install any item with `npx shadcn@latest add "https://prompt-kit.com/c/<name>.json"`. For MCP, the docs configure the shadcn MCP server with `REGISTRY_URL` set to `https://www.prompt-kit.com/c/registry.json`, so an agent can list, preview and add components by name. It also publishes `llms.txt` and `llms-full.txt`, and has integration notes for the OpenAI SDK and the Vercel AI SDK.

## Watch out for

- The primitives' live demos ask you to paste an `OPENAI_API_KEY`, which the page stores in the browser's localStorage. Use a restricted key or run the demo locally instead.
- The repo's last push was in March 2026 and new components arrive slowly; treat it as a solid base rather than a complete kit.
- The `llms.txt` component list lags the sidebar slightly (Prompt Suggestion and Reasoning are missing from it).

## Reusable ideas

- Keep a chat view pinned to the newest message only while the user hasn't scrolled up, and offer a button to jump back down.
- Show reasoning, tool calls and steps collapsed by default with a one-line status, expandable on demand.
- Render citations as small hover cards with title and domain instead of raw links.
- Use a shimmer on the status text, not a spinner, while the model is thinking.

## Related

[Motion Primitives](motion-primitives.md), [shadcn/ui](shadcn-ui.md), [Kibo UI](kibo-ui.md), [mcpcn](mcpcn.md), [The Shape of AI](shape-of-ai.md)
