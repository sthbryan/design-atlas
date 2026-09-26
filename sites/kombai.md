---
title: Kombai
description: Credit-based frontend coding agent with an MCP server, plus a free 20,000-design gallery that copies designs as prompts.
url: https://kombai.com
type: ai-builder
formats: AI builder (frontend coding agent) · desktop app · IDE extension · design gallery
topics: [agents-and-prompts, inspiration, landing-pages]
verdict: useful
agent: [mcp, llms-txt, skill]
pricing: freemium
licence: credit-based. Free gives 300 credits a month (150 on sign-up, then 50 a day); Pro is $20/month for 2,000 credits; Team is $40 per user per month with a shared pool; Enterprise is custom; yearly billing saves 20%. "No AI training on your data" is listed from Pro upward. The terms leave you owning what you submit but say nothing specific about generated code. Kombai Gallery is free with no sign-up and states no reuse licence. The app is proprietary.
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [aura, neuform, screenshot-to-code, kage, recent-design]
---
[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [inspiration](../topics/inspiration.md), [landing-pages](../topics/landing-pages.md)

# Kombai

## What it is

Kombai, from Kombai, Inc., is a coding agent limited to frontend work, calling itself an "AI design engineer". It designs screens on an infinite canvas, then writes the code, working from a design system, tokens and a "Context Graph" index of the components, hooks, stores and types already in your repo. It runs as a desktop app (macOS on Apple Silicon, Windows and Linux) and as an extension for VS Code, Cursor, Windsurf, Kiro and other editors. The docs claim tested support for 400+ libraries across React, Vue, Angular, Svelte, React Native, Flutter and more, and the site claims 500,000+ installs. It also runs Kombai Gallery: 20,210 designs at review (13,561 web in 184 categories, 6,649 mobile in 144), including 55 design systems and 32 animations.

## When to open it

Open the Gallery any time you need a reference for a dashboard, hero, pricing, checkout, settings or 404 page, even if you use a different agent. Try the app when you want an agent that respects an existing component library and design system instead of producing generic markup, or when you're turning Figma frames into code.

## Most useful

- **Gallery hand-off**: every design page has a live preview, palette, type scale and a spec table, and a button that copies a short prompt with the page URL and a `kombai:` reference ID for any coding agent.
- **Frontend skills** run from `/` in chat: Improve UI, Clone URL, Import Design System, Audit Design, Improve Accessibility, Animate Design, Create Wireframe and more.
- **Design systems** are stored as `.ds` files (Markdown with YAML front matter), generated from a codebase, a Figma file, a live site or an existing DESIGN.md.
- **Figma to code** without a plugin: mention `@figma`, paste a frame URL that includes a `node-id`, and approve OAuth.
- **Browser tools**: element picker, CSS and DOM editing, with console, network and performance data attached as context.

## Using it with agents

Kombai works in both directions. It can drive your local Claude Code or Codex CLI on your existing subscription, though Kombai credits are still spent on its MCP calls. It also runs a local MCP server that Claude Code, Cursor, Codex, VS Code, Gemini CLI and Antigravity can use to start Kombai chats and read canvases, and it installs skills such as `design-with-kombai` and `review-ui-with-kombai` into them. It connects out to your own MCP servers through `.kombai/mcp.json`. `kombai.com/llms.txt`, `kombai.com/gallery/llms.txt` and `docs.kombai.com/llms-full.txt` are published, and every docs page is also served as Markdown.

## Watch out for

- Credit use depends on task size and model, so costs are hard to predict. The free allowance goes quickly on real work.
- The pricing page lists "no AI training on your data" and SOC 2 only from Pro upward, so read the privacy terms before pointing the free plan at a private repo.
- Its `.ds` format is not Google's DESIGN.md spec, so files don't move between tools unchanged.
- Figma Make and Figma Sites links aren't supported, and page-level Figma URLs without a `node-id` are rejected.
- The separate "Selects" collection curates other designers' work from X, Dribbble and Behance; treat it as inspiration only.

## Reusable ideas

- Index a repo's reusable components and hooks before generating UI, so new screens reuse them instead of duplicating them.
- Give every gallery item a stable reference ID that an agent can resolve without scraping the page.
- Package design tasks (audit, accessibility pass, animate, wireframe) as named skills with a consistent entry point.
- Show palette, type scale and spacing next to each design so the reference can be followed, not just looked at.

## Related

[Aura](aura.md), [Neuform](neuform.md), [Screenshot to Code](screenshot-to-code.md), [Kage](kage.md), [Recent](recent-design.md)
