---
title: shadcn-cssinjs
description: MIT port of the full shadcn/ui set to StyleX on Base UI, with the same CSS variables, Markdown docs mirrors and a site skill.
url: https://www.shadcn-cssinjs.com
type: component-registry
formats: component registry (shadcn) styled with StyleX
topics: [components, agents-and-prompts]
verdict: useful
agent: [llms-txt, registry, skill]
pricing: free
licence: free and open source under MIT (repo `shadcn-labs/shadcn-cssinjs`); no paid tier
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [shadcn-labs, shadcn-ui, base-ui, coss-ui, startercn, shadercn]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# shadcn-cssinjs

## What it is

A shadcn-style registry that restyles the shadcn/ui component set with StyleX, Meta's compile-time CSS-in-JS library, instead of Tailwind utility classes, and builds it on Base UI primitives. It comes from Shadcn Labs (repo started June 2026 by Aniket Pawar, about 120 stars at review). The June 2026 changelog claims full parity with shadcn/ui; the registry index held 54 UI items plus two helper files at review, from accordion and alert dialog to sidebar, data table, chart, calendar and carousel. Every component uses logical CSS properties, so right-to-left layouts are supported.

## When to open it

When your team prefers typed, colocated styles that compile to atomic CSS but still wants the shadcn/ui API and look. Also useful if you already have a shadcn theme: the components read the same `--background`, `--primary` and related variables, so they can sit next to stock shadcn components.

## Most useful

- A one-for-one StyleX version of each shadcn/ui component, including the heavier ones (calendar, chart, carousel, resizable, sonner)
- A token file that maps shadcn's CSS variables into typed StyleX tokens, with dark mode still driven by a `.dark` class
- RTL previews on each component page
- A theme customiser on the site

## Using it with agents

Well set up. `/llms.txt` links a Markdown mirror of every page, any URL returns Markdown when you append `.md` or send `Accept: text/markdown`, and `/llms-full.txt` holds the whole docs. An agent skill lives at `/.well-known/agent-skills/site-skill.md`. Components install with the shadcn CLI by URL or through an `@shadcn-cssinjs` namespace in `components.json`, which the shadcn MCP server can then browse.

## Watch out for

- Setup is heavier than stock shadcn: StyleX needs a Babel plugin and a PostCSS plugin, and adding `.babelrc` takes Next.js off Turbopack
- The MCP page writes the registry URL without `www`, which redirects; use the `www` host if the CLI complains
- A young project from one maintainer; parity with upstream shadcn/ui depends on it keeping pace

## Reusable ideas

- Keep the upstream CSS variable names so a port can share a theme with the original
- Serve every docs page as Markdown by suffix and by `Accept` header, not only through `llms.txt`
- Publish a site skill at a well-known path so agents can find it without a separate install

## Related

[Shadcn Labs](shadcn-labs.md), [shadcn/ui](shadcn-ui.md), [Base UI](base-ui.md), [coss ui](coss-ui.md), [startercn](startercn.md), [shadercn](shadercn.md)
