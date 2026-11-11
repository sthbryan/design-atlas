---
title: Wensity UI
description: 115 animated React components, 57 primitives and 87 blocks in one design language, with a CLI, MCP server, skills and a free background studio.
url: https://ui.wensity.com
type: component-library
formats: React component library · shadcn-compatible registry · CLI · MCP server · agent skills · background generators
topics: [components, motion, ai-interfaces, landing-pages]
verdict: useful
agent: [mcp, cli, llms-txt, skill, registry]
pricing: freemium
licence: free items are MIT, including the CLI and MCP server; Pro components and blocks sit under the Wensity UI Commercial License (unlimited projects and clients, one developer per licence, no redistributing the source as a library, template or UI kit). Pro was US$169 a year or US$199 once at review; templates US$59–$99 each. Team pricing is by email.
licence_class: mixed
reviewed: 2026-11-11
status: active
related: [shadcn-ui, aceternity-ui, magic-ui, 21st-dev, motion-primitives]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [ai-interfaces](../topics/ai-interfaces.md), [landing-pages](../topics/landing-pages.md)


# Wensity UI

## What it is

Wensity UI is a React and Tailwind CSS library from Wensity Private Limited in India, covering the ground between a component kit and a page kit. At this review its machine-readable catalogue listed 115 components across eight categories, 57 UI primitives, 87 blocks across fourteen categories and three Next.js templates. The count that matters is the split: 38 components and all 57 primitives are free, while the other 77 components and every block need Pro. The catalogue is organised by effect family (cinematic interactions, text animations, micro-interactions, morph and gooey, heavy SaaS blocks) and by interface type, including a section for agentic AI interfaces such as a tool-call timeline and a voice-reactive orb.

## When to open it

- When you need the whole surface of a product — marketing blocks, app primitives and smaller animated components — in one design language rather than gluing three registries together.
- When you are building an AI product interface and want the reasoning step, tool call, diff or approval already designed.
- When you want a shader, mesh gradient or grain texture and would rather tune it live in a generator than start from GLSL.

## Most useful

- **Background Studio**: shader, mesh and gradient backgrounds you adjust live and export, plus separate CSS gradient, mesh, noise and halftone generators that need no account.
- **Agentic AI Interfaces**: the category most libraries lack — reasoning steps, tool calls, streamed output and approvals as components rather than screenshots.
- **Blocks by page job**: hero, feature, how it works, pricing, comparison, social proof, FAQ, contact, CTA, login, navbar, footer and animated backgrounds.
- **Documented source**: every installed file opens with a comment explaining how it works, and the catalogue is published as `llms.txt` plus `llms-full.txt` and three section files.
- **Four install paths**: CLI, shadcn CLI, manual copy and MCP.

## Using it with agents

This is the most agent-complete part of the product. `npx wensity@latest init` then `npx wensity@latest add <slug>` (with `--type block` for blocks) installs typed `.tsx` source with no runtime package and no licence check inside your app. Free items also install through the shadcn CLI as `@wensity/<slug>`; Pro items are never published to that registry, which keeps the paid catalogue behind `npx wensity login`. The MCP server (`@wensity/mcp@0.1.3`) searches the catalogue, shows an install plan and writes files after approval, and connects to Claude Code, Cursor, VS Code and Codex. Skills install with `npx wensity@latest skills add <name>`: three are free, ten come with Pro, and the free ones are also on GitHub.

## Watch out for

- **The split is the product**: free is only a third of the components, and no blocks, so a landing page ends up needing Pro.
- **No runtime package cuts both ways**: installed code keeps working after a yearly plan ends, but fixes and new releases do not arrive unless the plan is active.
- **One licence per developer**: a Pro licence covers one person; teams are quoted by sales, not self-serve.
- **New company, new library**: incorporated in July 2026, so the roadmap and long-term support are unproven.
- **Volume over curation**: a catalogue this broad varies in polish. Check the component you need rather than assuming the family is even.

## Reusable ideas

- Publish counts and the free/paid split as structured data, so an agent can decide before installing.
- Make the install plan visible and approve it before writing files; that is a better agent contract than blind install.
- Keep one design language across marketing blocks, app primitives and motion components.
- Ship the small generators free: they are the cheapest way to be remembered.

## Related

[shadcn/ui](shadcn-ui.md), [Aceternity UI](aceternity-ui.md), [Magic UI](magic-ui.md), [21st.dev](21st-dev.md), [Motion Primitives](motion-primitives.md)
