---
title: Smooth UI
description: 198 MIT animated components with a large AI-interface set, llms.txt, JSON catalog and a no-auth REST API.
url: https://smoothui.dev
type: component-registry
formats: animated component registry (shadcn) with a public API
topics: [components, motion, ai-interfaces, agents-and-prompts]
verdict: very-useful
agent: [llms-txt, cli, registry, api]
pricing: free
licence: free and open source under MIT (repo `educlopez/smoothui`); funded by sponsors, no paid tier found
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [prompt-kit, shape-of-ai, magic-ui, shadcn-ui, kokonut-ui, animate-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [ai-interfaces](../topics/ai-interfaces.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Smooth UI

## What it is

SmoothUI is a library of animated React components by Eduardo Calvo, made for React 19, Tailwind CSS v4 and shadcn/ui, with motion from Motion and, according to the site, GSAP. Its `llms.txt` counted 198 components and 34 page blocks at the time of review, and the site also has templates and a playground. The repo is very active (commits the day before this review) and is in Vercel's 2026 OSS programme.

## When to open it

When you are building an AI product interface and want its moving parts to feel deliberate: streaming responses, reasoning traces, tool calls, citations, task plans. Also a good source of everyday animated controls (tabs, toggles, OTP inputs, steppers, toasts).

## Most useful

- A large AI set (20 items): prompt input, streaming response, reasoning trace, tool-call status, sources stack, context meter, diff view, approval card and a generative agent avatar
- Everyday controls with motion built in: animated tabs, number input with scrubbing, OTP input, stepper, tooltip, toast
- Showpiece effects such as a Siri-style orb, a Dynamic Island, an aperture shader transition and an ASCII renderer
- Page blocks for heroes, pricing, FAQ, features, logo clouds, stats, team, testimonials and footers

## Using it with agents

Unusually complete for agents. `/llms.txt` lists every component with category, complexity and install command; `/llms-full.txt` and `/llms-components.json` give full and structured versions. A public REST API (no auth, OpenAPI spec at `/openapi.json`) supports listing, search, suggestions and source retrieval. Components install with `npx shadcn@latest add @smoothui/<name>` or the project's own `npx smoothui-cli add <name>`, and the shadcn MCP server works with the `@smoothui` namespace.

## Watch out for

- Descriptions vary in quality: many entries say little more than "a … component for SmoothUI", so preview before choosing
- Components expect Tailwind v4 and React 19; older stacks may need manual adjustment
- The site cross-promotes the maker's separate agent tool (UI Craft, installed via Homebrew), which is not part of the library

## Reusable ideas

- Tag each component with a complexity level so agents and humans can judge the cost of adopting it
- Expose a no-auth search and source API next to `llms.txt` for retrieval pipelines
- Design AI states around one visual element that evolves (a ring that spins, then draws a check) instead of swapping icons

## Related

[Prompt Kit](prompt-kit.md), [The Shape of AI](shape-of-ai.md), [Magic UI](magic-ui.md), [shadcn/ui](shadcn-ui.md), [Kokonut UI](kokonut-ui.md), [Animate UI](animate-ui.md)
