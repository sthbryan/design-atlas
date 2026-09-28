---
title: Uiuno
description: Early shadcn workspace where a bot collects motion and shader effects into registries; credit to originals is lost.
url: https://uiuno.com
type: design-workspace
formats: component workspace · hosted shadcn registries · curated collection
topics: [components, motion, agents-and-prompts]
verdict: niche
agent: [registry]
pricing: freemium
licence: free "Guest" and "Free" plans shown; the page data mentions credits and paid access per item, but no pricing page was published (404). The items checked were marked MIT, each linking to its original source. No terms page was found. Operator not stated.
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [shoogle, shadcn-ui, paper-shaders, reactbits, 21st-dev]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Uiuno

## What it is

Uiuno calls itself a workspace where people and AI agents build, collect, curate and share shadcn/ui components and design systems, using the shadcn registry schema as the storage format. The public side is an Explore page. At review its 27 small public collections held 90 items in total. Many are motion and effect pieces: page transitions, carousels, scroll-linked text, cursor and hover effects, dither and WebGL shaders, a Paper Shaders port, retro styles, mockups and a "best-of-shadcn" pick list. Items are grouped into areas such as Motion, Marketing, Media and 3D & Effects. Every public item was published by "UIxBot", an account labelled as a curation agent. Many are ports from CodePen or items re-hosted from other shadcn libraries.

## When to open it

When you are looking for a lively effect (a coverflow gallery, an image hover reveal, a kinetic-type headline, a shader background) and want it already packaged as a shadcn registry item. It is also worth watching as an early take on agent-run curation, where a bot gathers components into collections that people can follow.

## Most useful

- **Motion and scroll pieces**: page transitions, card stacks, marquees and scroll-linked reveals.
- **Shader and WebGL items**: light rays, raycast and pixel-grid shaders, plus dither effects.
- **Item pages**: a preview, the code, the npm dependencies, a link to the original source and a licence line.
- **Design systems area**: a namespace for design systems, empty at review.

## Using it with agents

Each collection is served as registry JSON at `/r/<collection>/registry.json`, and item pages give an install command such as `npx shadcn@latest add @best-of-shadcn/dock`. For that to work, `components.json` needs a matching namespace entry, and the site does not document one. Item pages have Cursor, Claude and Codex buttons, but what they send is not documented. There is no `llms.txt`, no public MCP endpoint and no docs page (all 404). The collections are not in the official shadcn directory.

## Watch out for

- Very early: most pages outside Explore return 404, and there is no documentation, pricing or terms.
- Curated ports carry the licence the bot recorded. Check the linked original (a CodePen, another library) before you ship one.
- The registry JSON names UIxBot as the author of every item. Credit to the original creator appears only as a source link on the web page, so it is lost once the item is installed. Prefer the original registry when there is one.
- Nobody is named as the operator, so it is hard to judge how long it will be maintained.

## Reusable ideas

- Store every component as a shadcn registry item from day one, so collections are installable as soon as they are made.
- Put the original source link and licence on every curated item.
- Let a curation agent build themed collections that people can follow, with its bot identity shown openly.
- Group effects by what they do (scroll-linked, hover, cursor) rather than by technique.

## Related

[Shoogle](shoogle.md), [shadcn/ui](shadcn-ui.md), [Paper Shaders](paper-shaders.md), [React Bits](reactbits.md), [21st.dev](21st-dev.md)
