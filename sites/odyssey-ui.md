---
title: Odyssey UI
description: Animated primitives, AI chat parts and pricing blocks built on Animate UI, via the @odysseyui namespace; no licence file in the repo.
url: https://www.odysseyui.com
type: component-registry
formats: animated component registry (shadcn)
topics: [components, motion]
verdict: niche
agent: [llms-txt, registry]
pricing: free
licence: free; no licence is stated on the site, and the GitHub repo (`shr3kx/odysseyUI`) had no licence file at review. The project says its core is built on Animate UI, whose own licence is MIT plus Commons Clause
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [animate-ui, shadcn-ui, radix, base-ui, headless-ui, prompt-kit]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md)

# Odyssey UI

## What it is

Odyssey UI is an animated component registry for React 19, Next.js and Tailwind CSS v4, made by Shr3kx with ctrlcat0x and iam-sahil and documented with Fumadocs. Its docs say the registry setup and template structure come from Animate UI and that some Animate UI components are shown on the site and remain that project's property. The public registry at review held about 155 installable items (excluding demos): roughly 80 primitives (Radix, Base UI and Headless UI wrappers, text and effect primitives), about 55 composed components, 5 hooks and 15 animated icons. The repo started in February 2026, had around 30 stars, and was last updated in May 2026.

## When to open it

- When you already like Animate UI's approach and want a different set of composed pieces on top, such as pricing tables, logo clouds and AI chat parts.
- When you need the same animated primitive (accordion, dialog, tabs, switch) for more than one headless library.

## Most useful

- **AI components**: chat container, message bubble, model selector, prompt input, search modal, steps, thought chain and a token-usage meter.
- **Marketing sections**: six pricing layouts, five logo clouds, an FAQ and an animated footer.
- **Primitives**: parallel Radix, Base UI and Headless UI versions of common controls, plus text effects such as rolling, sliding and counting numbers, shimmer and typing.
- **Templates**: an AI chat starter called Apollo.

## Using it with agents

Install through the shadcn CLI with the `@odysseyui` namespace, which is in the official shadcn directory (for example `npx shadcn@latest add @odysseyui/components-animate-code-block`). The full registry is at `/r/registry.json`, docs pages have "Copy Markdown" and "Ask AI" buttons, and `/llms-full.txt` holds the docs as one Markdown file (there was no `/llms.txt`).

## Watch out for

- With no licence file, reuse rights are unclear; the parts that come from Animate UI carry the Commons Clause, which forbids selling the components themselves.
- Registry names are long and path-like (`components-animate-code-block`), and much of the primitive layer overlaps with Animate UI.
- Young, small project with a short history; the maintainers removed a portfolio template in May 2026, so templates may come and go.
- The site plays sound effects; the docs say you can turn them off from the right-click menu.

## Reusable ideas

- Offer one animated primitive for several headless libraries so teams can keep the base they already use.
- Credit the upstream projects your registry is built on, directly in the introduction.
- Keep sound optional and easy to switch off.

## Related

[Animate UI](animate-ui.md), [shadcn/ui](shadcn-ui.md), [Radix](radix.md), [Base UI](base-ui.md), [Headless UI](headless-ui.md), [Prompt Kit](prompt-kit.md)
