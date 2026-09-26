---
title: Framer
description: Canvas website builder and host with an in-app agent, skills, and a bridge that lets Claude Code or Codex edit projects on branches.
url: https://framer.com
type: design-workspace
formats: visual website builder and host · built-in AI agent and skills · external-agent bridge (`@framer/agent`) · Server API (npm) · template marketplace · llms.txt
topics: [landing-pages, motion, agents-and-prompts]
verdict: very-useful
agent: [llms-txt, cli, api, skill]
pricing: freemium
licence: Freemium and proprietary. Free includes a Framer subdomain, 1 GB bandwidth and 500 trial AI credits, and the pricing FAQ calls it ideal for non-commercial use. With yearly billing, Basic is $10 and Pro is $30 per site per month, with 1,000 and 3,000 agent credits. Extra editors are $20 a month, and Enterprise is custom. Customers keep ownership of their content. Marketplace templates come from Framer or third-party creators
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [motion-dev, aura, spline, rive, figma, v0]
---
[← Atlas](../README.md) · Topics: [landing-pages](../topics/landing-pages.md), [motion](../topics/motion.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Framer

## What it is

Framer is a canvas-based website builder: you design responsive pages visually and publish them to Framer's own hosting, with CMS, SEO, analytics, localisation, A/B testing and staging built in. Framer's agent generates and edits pages from prompts, and its changes stay editable on the canvas. Custom behaviour comes from React code components, code overrides, plugins and the Fetch feature for external APIs. The Framer Motion animation library was spun off and now lives on as Motion.

## When to open it

Open it for marketing sites, launch pages and portfolios that a designer or marketer will keep editing after launch, especially when scroll effects and polished interactions matter more than an app backend. Skip it when you need code in your own repo: Framer hosts the site and does not export a codebase.

## Most useful

- **Freeform responsive canvas** with breakpoints, effects and interactions, published straight to a global CDN
- **Skills**: reusable written rules the agent applies on request, such as a `design-system` skill that restricts it to existing styles, spacing and components
- **Branching and staging**: preview links, reviews and rollback before anything goes live
- **Marketplace** of free and paid templates, components, plugins and vectors, useful as landing-page references even outside Framer
- **Agent-readable output**: published pages can be served as Markdown by adding `?md`, and there is a help article on adding your own `llms.txt`

## Using it with agents

Framer does not require an MCP server. The External Agents page gives an install prompt that runs `npx @framer/agent setup`, which installs two skills into your agent's skills folder. Running `/framer` then links Claude Code, Codex, Cursor, Antigravity or any agent with a terminal to a project you approve in the browser. The agent can read and write the canvas, components and CMS, and every change lands on a branch you review before publishing. External agents are free during the preview. Scripts can use the MIT `framer-api` Server API package with a per-project API key. Framer's own site publishes `llms.txt`, and most pages have Markdown versions.

## Watch out for

- There is no code export, so the site stays on Framer's hosting and plans. Moving away means rebuilding it
- Pricing is per site, and pages, CMS items and bandwidth are capped per plan with paid overage blocks. Check the limits for content-heavy sites
- Agent and translation features draw on shared workspace credits, which run out quickly on large edits
- `@framer/agent` is a pre-1.0 package with no licence on npm at review, and features marked preview may change
- Third-party templates are vetted but not guaranteed, so check each template's licence and quality before you build on it

## Reusable ideas

- Route every agent change through a branch with a preview link, so edits from outside tools are reviewed before they go live
- Keep brand rules as named skills the agent calls on demand, instead of repeating them in every prompt
- Serve a Markdown version of every published page with a query parameter, so agents read content without scraping
- Give the canvas code escape hatches (components, overrides) instead of forcing all behaviour through no-code panels

## Related

[Motion](motion-dev.md), [Aura](aura.md), [Spline](spline.md), [Rive](rive.md), [Figma](figma.md), [v0](v0.md)
