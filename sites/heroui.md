---
title: HeroUI
description: Apache 2.0 React and React Native library (formerly NextUI) on React Aria and Tailwind v4, with free MCP, skills and llms.txt.
url: https://www.heroui.com
type: component-library
formats: React and React Native component library (npm packages) with a paid Pro tier
topics: [components, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt, cli, api, skill]
pricing: freemium
licence: the open-source libraries are free under Apache 2.0 since v3.0.3 (MIT before; repo `heroui-inc/heroui`, about 30.8k GitHub stars at review). HeroUI Pro sells perpetual licences in Web, Mobile and combined editions with a year of updates and AI credits; the prices load client-side and were not captured at review
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [base-ui, radix, shadcn-ui, headless-ui, tremor]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# HeroUI

## What it is

HeroUI is the renamed NextUI, maintained by HeroUI Inc (a Y Combinator S24 company). Version 3 is a ground-up rewrite. The web package `@heroui/react` (3.2.6 at review) is built on React Aria Components and Tailwind CSS v4, uses compound components (for example `Card.Header`), and supports React Server Components. A separate React Native library, HeroUI Native, reached 1.0.10. At review the `llms.txt` index listed about 72 web and 39 native component pages. The web set covers forms, overlays, calendars and date pickers, colour pickers, a virtualised table, toasts, toolbars and progress meters. The v2 docs stay online at `v2.heroui.com`.

## When to open it

Open it for a React or React Native product that wants a polished default look with solid accessibility, and when you would rather install a versioned package than copy source into the repo. It is also one of the few libraries sharing a design language across web and native.

## Most useful

- **React Aria foundation**: keyboard, focus and screen-reader behaviour handled for complex widgets like ComboBox, DatePicker and Table
- **Theme Builder** and design tokens (colours, radius) exposed as CSS variables on Tailwind v4
- **Migration guides** for v2 to v3, including a version written for AI assistants
- **Pro**: extra components, full templates (dashboard, mail, CRM, finances) and an AI chat builder

## Using it with agents

Among the most agent-ready libraries in this batch. There is a root `llms.txt` with separate web and native indexes. The MCP packages, such as `@heroui/react-mcp`, are free, need no account, and come with setup guides for Claude Code, Cursor, Codex, Windsurf and others. Agent Skills install into `.claude/skills/` or `.agents/skills/`. The site also offers a read-only docs agent API with an OpenAPI spec, and a CLI that can inject a compact docs index into a project for coding agents.

## Watch out for

- Models trained on NextUI or HeroUI v2 will write v2 APIs; point agents at the v3 docs or migration index
- v3 is a breaking rewrite, and minor releases (such as 3.2.0) still changed Radio, Checkbox and Switch composition
- React 19+ is required for the web library

## Reusable ideas

- Build styled components on a proven accessibility layer instead of writing ARIA logic yourself
- Keep web and native libraries on one token set so a brand carries across platforms
- Publish a migration guide aimed at AI assistants alongside the human one

## Related

[Base UI](base-ui.md), [Radix](radix.md), [shadcn/ui](shadcn-ui.md), [Headless UI](headless-ui.md), [Tremor](tremor.md)
