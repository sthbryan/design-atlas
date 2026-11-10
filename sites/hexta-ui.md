---
title: HextaUI
description: shadcn/ui blocks for AI chat interfaces, covering streaming, tool calls, voice and agent states, with an MCP server and Markdown docs.
url: https://hextaui.com
type: component-library
formats: React and Tailwind v4 components · copy-in shadcn blocks · 55 paid Pro blocks · MCP server · Markdown docs · llms.txt
topics: [ai-interfaces, components, agent-skills]
verdict: useful
agent: [mcp, llms-txt]
pricing: freemium
licence: The 65 components, 9 hooks and 5 utilities are MIT and free; HextaUI Pro adds 55 blocks for a one-time payment, $49 Solo or $149 Team until 30 November 2026 and $79 or $249 afterwards. There is no npm package, because the code is copied into the project
licence_class: mixed
licences:
  code: open-source-permissive
  assets: proprietary-paid
reviewed: 2026-11-10
status: active
related: [shadcn-ui, skrewww, component-gallery]
---
[← Atlas](../site/home.md) · Topics: [ai-interfaces](../topics/ai-interfaces.md), [components](../topics/components.md), [agent-skills](../topics/agent-skills.md)


# HextaUI

## What it is

A component library aimed at one narrow and currently underserved surface: the chat interface of an AI product. The hero states the scope as a list of hard states rather than features — streaming, tool calls, voice, agent states — and the promise is that the blocks already handle them, so the page is about the awkward middle of building an assistant, not about buttons.

The structure is shadcn-shaped: components are copied into the project rather than installed from a package, the free library is MIT, and Pro adds finished blocks. There is also a research page that counts what the blocks actually import, which is a better argument for a component library than a screenshot.

## When to open it

Open it when you are building a chat, copilot or agent panel and need a reference for the states a message can be in — streaming text, a tool call in progress, a failed tool call, a voice session, an agent that is waiting for permission. Also useful when you want to see how a component library documents itself for agents.

## Most useful

- **The state vocabulary of an assistant UI**, which is the part most component libraries skip: streaming, tool calls, voice and agent states as named, separate components.
- **Markdown docs beside every component plus an MCP server**, so an agent can fetch props and install commands instead of guessing them.
- **Copy-in ownership**: no package, no version pin, the code belongs to the project once it lands.
- **A usage census** across the 55 Pro blocks — the most-used component, the median number of imports per block — published as evidence rather than a claim.
- **A visible one-time price with a stated date range**, unusual in a market that mostly rents components.

## Using it with agents

The best-documented channel in this batch. `llms.txt` and a full Markdown version resolve, the MCP server answers component questions, and the docs are readable as text. The library also tells an agent when to prefer the Markdown over the MCP, which cuts down on pointless tool calls.

## Watch out for

- The distinction between free and Pro is real: the free parts are foundations, the finished screens are paid, and prices change after the dates on the page.
- It is Tailwind v4 and React, so adopting it is adopting that stack.
- Copy-in code means you own the maintenance, including the accessibility of a live chat log.
- Chat UI ages quickly; a block that handles tool calls today may not match next year's model APIs.

## Reusable ideas

- Name the hard states in the hero instead of listing features.
- Publish a census of what your own blocks import, and let the numbers argue for the library.
- Ship Markdown docs and an MCP endpoint together, and say which one to use when.
- Price one-time and put an end date on the introductory tier.

## Related

[shadcn/ui](shadcn-ui.md), [Skrewww](skrewww.md), [The Component Gallery](component-gallery.md)
