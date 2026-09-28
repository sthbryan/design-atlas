---
title: blocks.so
description: Free MIT shadcn app blocks (dialogs, auth, onboarding, stats, sidebars) from the @blocks-so registry.
url: https://blocks.so
type: component-registry
formats: component registry (shadcn/ui) · app blocks
topics: [components, ux-patterns, agents-and-prompts]
verdict: useful
agent: [registry]
pricing: free
licence: free; MIT (repo `ephraimduncan/blocks`, about 1.8k GitHub stars, last push 2026-09-17)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [shadcn-ui, shadcnblocks, kibo-ui, prompt-kit, shoogle]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [ux-patterns](../topics/ux-patterns.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# blocks.so

## What it is

blocks.so is a free, open-source set of application blocks for shadcn/ui and Tailwind, built by Ephraim Duncan. It covers product screens rather than marketing pages. At review the site showed 81 blocks in 13 categories: stats (15), dialogs (12), login and signup (9), onboarding (7), file upload (6), sidebar (6), form layout (5), tables (5), AI components (5), command menu (4), AI chat (3), grid list (3) and one dashboard. The registry index lists 82 items. Each block page has a live preview, the source, and a numbered install name such as `dialog-05`.

## When to open it

When you are building the inside of an app and need a sensible starting point for a common screen: a confirm dialog, a sign-in form, an onboarding step, a stats row, a file drop zone or a command palette. It is also handy as a free, MIT-licensed baseline to compare against paid block libraries.

## Most useful

- **Dialogs**: confirmation, warning, input, password-check, privacy toggle and member-list variants.
- **Stats**: 15 layouts for KPI cards and metric rows, a common dashboard need.
- **Onboarding and auth**: multi-step onboarding and several login and signup forms.
- **AI chat and AI components**: small chat inputs (one with voice input) that fit an existing shadcn app.
- **Command menu and sidebar**: ready compositions of the shadcn Command and Sidebar primitives.

## Using it with agents

Add `"@blocks-so": "https://blocks.so/r/{name}.json"` under `registries` in `components.json`, then run `npx shadcn@latest add @blocks-so/login-01`. You can also pass the full JSON URL. The namespace is in the official shadcn registry directory, so the shadcn MCP server can find and install blocks from a plain request. The full index is at `/r/registry.json`, with dependencies listed for each block. Each block also has "Open in v0" and "Open in shadcn playground" buttons. No `llms.txt` was published (the URL returned 404).

## Watch out for

- It is small next to commercial libraries and has no marketing sections (no hero, pricing or footer).
- It is maintained by one person, so the pace of new blocks can vary.
- Some blocks pull in extra icon packages (for example Tabler icons) besides Lucide; check the dependency list before installing.
- The page title still says "60+" blocks, which is below the live count.

## Reusable ideas

- Number variants inside a category (`dialog-01` to `dialog-12`) so people and agents can ask for a specific one.
- Add "open in" links so a block can be tried in a sandbox before it is installed.
- Keep one public registry index with dependencies listed, so tools can plan an install without scraping pages.
- Focus a free library on app screens and leave marketing sections to others.

## Related

[shadcn/ui](shadcn-ui.md), [shadcnblocks](shadcnblocks.md), [Kibo UI](kibo-ui.md), [Prompt Kit](prompt-kit.md), [Shoogle](shoogle.md)
