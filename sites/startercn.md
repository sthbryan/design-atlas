---
title: startercn
description: MIT Next.js template for publishing your own shadcn registry, with Fumadocs docs, llms.txt and skill discovery.
url: https://startercn.vercel.app
type: template-library
formats: registry template (shadcn/ui) · docs site starter
topics: [components, documentation, agents-and-prompts]
verdict: useful
agent: [llms-txt, api, skill]
pricing: free
licence: free; MIT (repo `shadcn-labs/startercn`, about 40 stars, last push 2026-07-11)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [shadcn-labs, shadcn-skills, shadcn-ui, web-kits-audio, shieldcn]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [documentation](../topics/documentation.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# startercn

## What it is

startercn is a GitHub template for publishing your own shadcn-compatible component registry, made by Aniket Pawar of Shadcn Labs. Forking it gives you a Next.js 16 app with a landing page, a Fumadocs documentation site, a `registry.json` manifest and one placeholder component under `registry/new-york/`. Running `pnpm registry:build` writes the installable JSON to `public/r/`. It also comes with some polish already set up: copy-state motion, view transitions, animated icons, optional web haptics and UI sounds from `@web-kits/audio`. The README badges come from shieldcn. The demo site itself shows only the placeholder component.

## When to open it

When you have a few components worth sharing and want a docs site and an installable registry live in an afternoon, instead of wiring up Fumadocs, the registry build and the agent files yourself. It is also a working reference for what an agent-friendly docs site can publish.

## Most useful

- **Registry scaffold**: manifest, build script and output folder already connected, so `npx shadcn add <your-url>/r/<name>.json` works after you deploy.
- **Docs site**: MDX pages with a component preview and install block ready to copy for each new item.
- **Agent files**: `llms.txt`, `llms-full.txt`, Markdown copies of pages (add `.md` or send `Accept: text/markdown`), an OpenAPI description and an API catalog.
- **Skill discovery**: a `/.well-known/agent-skills/index.json` that points to a short site skill explaining how to install from the registry.
- **Bundled launch skill**: a copy of `launch-shadcn-registry` under `.agents/skills/` for listing the finished registry in directories.

## Using it with agents

The demo site shows every agent file the template produces. The `llms.txt` indexes the docs and machine-readable resources, and the site skill and OpenAPI file both send MCP workflows to the official shadcn MCP server rather than running their own. An agent can clone the template, replace the placeholder, update `registry.json` and run the build, since all the steps are plain scripts.

## Watch out for

- The template's copy of the launch skill is older than the one in the Shadcn Labs skills repo, which has since added more directory targets; install the current version separately.
- It is set up for the `new-york` style on Radix primitives. For Base UI or another style, change `components.json` and the registry folders yourself.
- Remember to replace the placeholder URLs, the sponsor link and the analytics setup before you publish.
- Low activity since July 2026. Compare it with shadcn's own registry template before you choose.

## Reusable ideas

- Ship `llms.txt`, Markdown page copies and a well-known skill index as part of the template, not as an afterthought.
- Point agents to the official MCP server instead of running a custom one for a small registry.
- Keep one placeholder component that shows every docs pattern, so replacing it teaches the structure.
- Build small feedback touches (sound, haptics, motion) into the docs shell, so every registry made from it gets them.

## Related

[Shadcn Labs](shadcn-labs.md), [Shadcn Labs Skills](shadcn-skills.md), [shadcn/ui](shadcn-ui.md), [@web-kits/audio](web-kits-audio.md), [shieldcn](shieldcn.md)
