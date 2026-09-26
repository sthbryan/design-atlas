---
title: agentcn
description: Backend agent recipes in shadcn format (19 recipes × 4 frameworks), including one that extracts a DESIGN.md; no UI.
url: https://www.agentcn.run
type: component-registry
formats: agent recipe registry (shadcn format)
topics: [agents-and-prompts, ai-interfaces, design-md]
verdict: niche
agent: [llms-txt, registry, api, skill]
pricing: free
licence: free; MIT (repo `shadcn-labs/agentcn`, about 480 GitHub stars at review). Recipes call paid third-party APIs you bring keys for.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [mcpcn, prompt-kit, designmd-supply, designmd-cc, shadcn-ui]
---
[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [ai-interfaces](../topics/ai-interfaces.md), [design-md](../topics/design-md.md)

# agentcn

## What it is

agentcn applies the shadcn copy-the-source model to backend AI agents. It is by Aniket Pawar under the community Shadcn Labs organisation, the same maker as mcpcn. The docs say plainly that it is not a UI component registry: each recipe installs an agent definition, an `instructions.md`, tool files and sometimes a `SKILL.md` into your project. There are 19 recipes, each written for four frameworks (Vercel's Eve, Flue, Mastra, and LangGraph via the Dawn meta-framework), for 76 registry items. It launched in June 2026 and added Mastra and LangGraph in July.

## When to open it

When the interface is done and you need a working agent behind it: deep web research with citations, chat over a PDF, a YouTube video or a database, a PR reviewer, a Slack bot, or a browser agent. It pairs naturally with an AI chat UI kit, since this covers the logic side and not the screens.

## Most useful

- **Research**: Deep Search (searches, critiques its own findings, repeats until each claim is cited) and Docs Expert.
- **Retrieval**: Chat with PDF (page-cited), Company Knowledge (with PII redaction), Docs Chatbot and Chat with Database (read-only SQL).
- **Automation**: GitHub PR Review, Slack Agent, Google Sheets, a Playwright Browser Agent and a sandboxed shell "Claw" assistant.
- **Design-adjacent**: Extract DESIGN.md turns a domain into a DESIGN.md plus a Tailwind v4 `@theme` block and CSS variables, following the designmd.supply pipeline with one vision-model call; AI SEO Audit scores about 30 checks and returns a fix prompt.
- **Live previews**: each recipe page runs the agent in the browser and shows its tool calls as it works.

## Using it with agents

Install with `npx shadcn@latest add @agentcn/<framework>/<recipe>` (for example `@agentcn/eve/deep-search`), or register the `@agentcn` namespace once. The shadcn MCP server can browse and install recipes from your editor. Like mcpcn, it serves `llms.txt`, `llms-full.txt`, Markdown versions of every page, an OpenAPI file and a site skill at `/.well-known/agent-skills/site-skill.md`.

## Watch out for

- Most recipes depend on outside services: Bright Data for search, context.dev for the DESIGN.md and SEO recipes, and Anthropic models by default. Each needs its own API key and billing.
- Default model IDs are hard-coded in the agent files; change them to match your provider.
- It is a young project with one maintainer, and the framework APIs it targets (especially Eve and Flue) are themselves new.
- Despite the shadcn naming and tooling, it ships no interface components; you still need a UI kit for the front end.

## Reusable ideas

- Let a research agent grade its own draft and search again to fill gaps, with a hard cap on rounds.
- Keep instructions, tools and skills as separate plain files so each can be read and edited on its own.
- Derive tokens deterministically from measured styles and let the model write only the prose.
- Show a live trace of tool calls next to any agent demo so users see how the answer was built.

## Related

[mcpcn](mcpcn.md), [Prompt Kit](prompt-kit.md), [designmd.supply](designmd-supply.md), [DesignMD.cc](designmd-cc.md), [shadcn/ui](shadcn-ui.md)
