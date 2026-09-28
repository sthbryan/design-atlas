---
title: Bearnie
description: "MIT shadcn-style registry for Astro: about 60 accessible components copied in by CLI or MCP server, no framework runtime, llms-full.txt."
url: https://bearnie.dev
type: component-registry
formats: Astro component registry with its own CLI and MCP server
topics: [components, agents-and-prompts]
verdict: useful
agent: [mcp, llms-txt, cli]
pricing: free
licence: free; MIT (repo `michael-andreuzza/bearnie`, about 350 GitHub stars at review), covering the site, registry, CLI, scaffolder and MCP server
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [shadcn-ui, hyperui, headless-ui, daisyui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Bearnie

## What it is

Bearnie brings the shadcn/ui "copy the source into your project" workflow to Astro. It is built by Michael Andreuzza, who also runs Lexington Themes, and started in January 2026. Components are plain `.astro` files with Tailwind CSS v4 and small vanilla JavaScript runtimes, so there is no React, Vue or Svelte island. At review the registry index (version 0.12.0) held 64 entries, including about 60 documented components: the usual primitives (button, dialog, dropdown menu, select, tabs, toast, tooltip) plus calendar, combobox, command menu, file upload, image compare, input OTP, stepper, tags input, timeline, tree and a lazy video embed. Themes come from Tailwind's own palette: a gray base and an accent colour, which the site counts as 160+ combinations.

## When to open it

Open it when you are building a content site or marketing site in Astro and want accessible interactive pieces without adding a UI framework runtime. It is also useful if you like shadcn/ui's ownership model but your project isn't React.

## Most useful

- **CLI**: `npx bearnie init`, then `npx bearnie add dialog tabs`; `diff` and `update` show and pull registry changes to files you already copied
- **Scaffolder**: `npm create bearnie@latest` starts an Astro project with a chosen theme, or every component with `--full`
- **Form set**: Field, Input Group, Number Input, Tags Input and Input OTP wire labels and errors with ARIA
- **Barrel export** so all components can be imported from one path

## Using it with agents

Very agent-friendly. `bearnie.dev/llms.txt` lists every page, and `llms-full.txt` (about 400 KB at review) has the full docs as text. A local MCP server, `@bearnie/mcp`, runs through `npx` and gives tools to list, search, read and add components, resolving dependencies and copying shared runtime files. The registry is a JSON index at `bearnie.dev/registry/index.json`, in Bearnie's own format rather than the shadcn registry schema, so `npx shadcn add` will not read it.

## Watch out for

- Requires Astro 7 or later and Tailwind v4; older Astro projects need upgrading first
- It is a young, single-maintainer project (CLI at 0.3.x at review), so expect breaking changes
- The `llms.txt` and the MCP docs page list slightly different tool names; check the tool list your client actually receives

## Reusable ideas

- Give a copy-paste library a `diff` command so people can see how their copy drifted from upstream
- Ship shared behaviour as tiny runtime files instead of a framework dependency
- Build themes from two choices (neutral base, accent) instead of a long list of presets

## Related

[shadcn/ui](shadcn-ui.md), [HyperUI](hyperui.md), [Headless UI](headless-ui.md), [daisyUI](daisyui.md)
