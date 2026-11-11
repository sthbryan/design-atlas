---
title: Layro
description: React component marketplace that coding agents search and install from over MCP, with every component reviewed and runnable in a sandbox first.
url: https://layro.dev
type: component-registry
formats: React and Tailwind components · MCP server at mcp.layro.dev · CLI with init and add · shadcn-compatible registry items · GitHub sync for your own registry · icon families in the same search
topics: [components, agent-skills]
verdict: very-useful
agent: [mcp, cli, registry]
pricing: free
licence: Browsing, installing and publishing are free. Each component keeps its author's copyright and its own licence, shown on the component page at review
licence_class: mixed
reviewed: 2026-11-11
status: active
related: [shadcn-ui, magic-ui, boardui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [agent-skills](../topics/agent-skills.md)

# Layro

## What it is

A component marketplace built for the agent rather than for the developer browsing it. The catalogue is reachable over MCP, so Claude Code, Codex or Cursor can search it in plain words, plan an install and write the files into a project — and the same catalogue is browsable in a browser with `⌘K`, installable from a terminal, and installable through the shadcn CLI because every item is a registry item.

The pitch is taste. Components are submitted by people, scanned and rendered, and reviewed by a human before they appear; every one runs in a sandboxed preview on a separate domain, so the listing shows the real thing rather than a screenshot. Installs land as source in `components/layro/`, which means the result is editable code rather than a runtime dependency.

The MCP surface is small and legible: `search_components`, `install_plan` (files, packages, steps), `submit_component`, `my_stats`. There is also GitHub sync, so a team's own `registry.json` can be indexed and updated on push.

## When to open it

Open it when an agent is about to reproduce a component from a screenshot, which is the failure this product exists to prevent, or when you want a marketplace where the review is stated in the product rather than implied.

## Most useful

- **Install as a plan, not a blob**: the agent receives files, packages and steps before anything is written.
- **Every component reviewed and running live**, which is a higher bar than a screenshot gallery.
- **Three entry points to one catalogue** — MCP, CLI, shadcn registry — so the same item works in any workflow.
- **Free publishing with a GitHub account**, including from a browser sandbox, which keeps the catalogue from becoming a vendor catalogue.
- **Per-component licences shown on the page**, instead of one site-wide claim that hides the differences.
- **Icons in the same search**, so a component and its glyphs arrive together.

## Using it with agents

This is the strongest part: `npx layro-cli mcp` registers the server with the agent of your choice, or you add `https://mcp.layro.dev` directly. Sign-in happens once in the browser and no API keys are copied. The CLI itself needs no account for installs, and the docs are explicit that installed component code comes from third parties and should be read before shipping.

## Watch out for

- It is a marketplace, so quality varies by author even with review, and the review is a scan plus a render, not a design critique.
- Per-component licences mean a project can accidentally mix incompatible terms; check the licence on each component you keep.
- The catalogue is young and its categories lean towards effects and blocks, which invites decoration over structure.
- MCP gives an agent the ability to install; that is a permission decision, not a convenience.
- Publisher metrics (`my_stats`) reward visibility, which can pull the catalogue towards novelty.

## Reusable ideas

- Let an agent fetch an install plan before writing files, so the change is reviewable.
- Run every listing in a sandbox and show the run, not a mockup.
- Keep one catalogue reachable by CLI, registry and MCP rather than building three products.
- Publish the licence per item, and say who owns what after install.

## Related

[shadcn/ui](shadcn-ui.md), [Magic UI](magic-ui.md), [BoardUI](boardui.md)
