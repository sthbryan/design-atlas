---
title: Kokonut UI
description: Playful Motion components with AI inputs; llms.txt links per-component Markdown pages with full source.
url: https://kokonutui.com
type: component-registry
formats: animated component registry (shadcn) with a paid Pro tier
topics: [components, motion, ai-interfaces, landing-pages]
verdict: very-useful
agent: [llms-txt, registry]
pricing: freemium
licence: free components under MIT (repo `kokonut-labs/kokonutui`); Kokonut UI Pro at kokonutui.pro is a one-time lifetime purchase listed at $119 (reduced from $159), non-refundable, under its own terms
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [prompt-kit, magic-ui, shadcn-ui, shape-of-ai, cult-ui, smooth-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [ai-interfaces](../topics/ai-interfaces.md), [landing-pages](../topics/landing-pages.md)

# Kokonut UI

## What it is

An open-source collection of playful, interactive React components built with Next.js, Tailwind CSS, shadcn/ui and Motion, from the Kokonut Labs team and part of Vercel's 2025 OSS programme. The free site is grouped into backgrounds, cards, navigation, inputs, AI, text effects and buttons. The Pro site adds marketing sections (heroes, features, pricing, FAQ, sign-in pages, footers, testimonials) and seven full Next.js templates.

## When to open it

When you need a single expressive piece rather than a system: an AI chat input with a model picker, a hold-to-confirm button, a card that flips or stacks, a shimmering "thinking" label. It suits AI product landing pages in particular.

## Most useful

- A small AI group: prompt input with model selection, search-mode input, voice button, and two loading states for model activity
- Text effects (scroll highlight, typewriter, matrix scramble, glitch, sliced and swoosh hovers)
- Interaction-heavy buttons: particle burst, magnetic attract, hold-to-confirm, expanding social share
- Canvas and SVG hero backgrounds (light beams, flowing paths, particle flow field)

## Using it with agents

Well prepared for agents. `/llms.txt` lists every component with a short description and a link to a Markdown version of its page that includes the install command and full source. Components install via the `@kokonutui` namespace (`npx shadcn@latest add @kokonutui/card-flip`), the registry index is at `/r/registry.json`, and the docs include an MCP page that sets up the shadcn MCP server for Claude Code, Cursor, VS Code or Codex.

## Watch out for

- "100+ components" is the Pro figure; the free registry held about 51 items during this review
- Pro terms bar redistribution, derivative component libraries and use in open-source projects without written permission, and let the vendor end access at its discretion
- Some components pull extra dependencies (Vaul for the drawer, next-themes for the theme switch), so check the Markdown page before installing

## Reusable ideas

- Publish a per-component Markdown page with source, and link all of them from `llms.txt`
- Treat AI waiting states (thinking text, task logs) as first-class components with their own motion
- Use press-and-hold as a lightweight confirmation pattern for destructive actions

## Related

[Prompt Kit](prompt-kit.md), [Magic UI](magic-ui.md), [shadcn/ui](shadcn-ui.md), [The Shape of AI](shape-of-ai.md), [Cult UI](cult-ui.md), [Smooth UI](smooth-ui.md)
