---
title: Lucide Animated
description: 467 hover-animated Lucide icons with shadcn registry, llms.txt, skill.md and a hosted MCP endpoint.
url: https://lucide-animated.com
type: icon-library
formats: animated icon library · shadcn registry · MCP server
topics: [icons, motion, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt, registry, skill]
pricing: free
licence: Free / MIT, with optional sponsorship. The README adds terms that forbid redistributing or reselling the demos. Lucide's own artwork is ISC
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [heroicons-animated, morphicons, icons0, animated-icons, shadcn-ui]
---
[← Atlas](../site/home.md) · Topics: [icons](../topics/icons.md), [motion](../topics/motion.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Lucide Animated

## What it is

Lucide Animated is an open-source collection of Lucide icons that play a small animation on hover. Dmytro (`@pqoqubbw` on GitHub and X) started it in October 2024 as practice after the animations.dev course, and it has grown to about 8,100 stars on `pqoqubbw/icons`. The site's icon index and registry list 467 icons, though some page copy still says 350+. Each icon is a TypeScript React component that uses Motion to draw a path, spin a gear or shake a bell. It is delivered one file at a time through the shadcn CLI. Community ports exist for Svelte, Vue, Angular and Flutter, and Heroicons Animated copies its approach for Heroicons.

## When to open it

Open it when a React or Next.js app uses Lucide (which shadcn/ui does by default) and you want nav items, buttons or status icons to move a little on hover without switching icon style. It is also a good set of examples of short, purposeful micro-motion on 24px glyphs.

## Most useful

- **shadcn registry**: the `@lucide-animated` namespace, or `npx shadcn@latest add "https://lucide-animated.com/r/<name>.json"`, drops one component into your project and adds `motion`
- **Search on the site**: press ⌘F to filter hundreds of icons, then copy the install command for the one you want
- **Ref control**: components expose `startAnimation` and `stopAnimation`, so a parent control can trigger the motion
- **Ports**: movingicons.dev for Svelte, plus Vue, Angular and Flutter versions by other authors, linked from the README

## Using it with agents

This is one of the most agent-ready icon sites. It publishes an `llms.txt`, an `llms-full.txt`, a nested icon index at `/icons/llms.txt`, a Markdown page per icon (`/icons/<name>.md`) and a `skill.md` operating guide. A Streamable HTTP MCP endpoint at `https://lucide-animated.com/mcp` offers `search_icons`, `list_icons` and `get_icon`, which return install commands and usage snippets. It answered a `tools/list` request when reviewed. Point the agent at the skill or connect the MCP, and have it install only the icons the UI needs.

## Watch out for

- The skill guide says local imports have no `Icon` suffix and that SVG props are forwarded. The registry files actually export names like `ActivityIcon`, and props go to a wrapping `<div>` (default `size` 28). Tell the agent to read the generated file before importing
- The README's terms (no redistribution or resale) sit next to the MIT licence file. Using icons in products is clearly allowed. Repackaging the set is not something to do without asking
- An npm package called `lucide-animated` exists, but it is published by someone else, has no repository link and is not mentioned on the site. Use the registry instead
- Hover animations don't run on touch devices, and the SVGs have no `aria-hidden`. Handle both for mobile and screen readers
- The ports are separate community projects with their own icon counts and release pace

## Reusable ideas

- Serve every asset as Markdown, a skill file and an MCP tool, so any agent can find and install it without scraping
- Ship one component per icon through a registry, so the project owns the code and bundles only what it uses
- Keep each animation short and linked to the icon's meaning, played on hover or on demand
- Link community ports from the main README so every framework finds its version

## Related

[Heroicons Animated](heroicons-animated.md), [morphicons](morphicons.md), [icons0](icons0.md), [Animated Icons](animated-icons.md), [shadcn/ui](shadcn-ui.md)
