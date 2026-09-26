---
title: Figma
description: The default design canvas, with Dev Mode, Code Connect and a remote MCP server that reads designs and writes back to the canvas.
url: https://figma.com
type: design-workspace
formats: design workspace · Dev Mode · remote MCP server with write tools · Code Connect CLI (npm) · REST, Plugin and Widget APIs · llms.txt
topics: [components, agents-and-prompts, typography-and-styles]
verdict: very-useful
agent: [mcp, llms-txt, cli, api, skill]
pricing: freemium
licence: Freemium and proprietary. Starter is free with limited files and up to 500 AI credits a month. Professional costs $16 per Full seat, $12 per Dev seat and $3 per Collab seat per month; Organization ($55/$25/$5) and Enterprise ($90/$35/$5) are billed yearly. The AI terms leave inputs and outputs with the customer. Community files are licensed by their creators, not by Figma
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [shadcn-ui, kombai, open-design, penpot, framer, v0]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md), [typography-and-styles](../topics/typography-and-styles.md)

# Figma

## What it is

Figma, from Figma, Inc., is the browser-based collaborative design canvas that most product teams now treat as the source of truth for UI. The same account covers Figma Design, Dev Mode for handoff, FigJam whiteboards, Slides, Draw, and newer products such as Figma Make (prompt to React app), Figma Sites (publishing, in beta), Figma Motion, Figma Weave (AI media workflows) and Buzz. Design systems live as shared libraries of components, styles and variables, and Code Connect links those components to the real ones in your repo.

## When to open it

Open it whenever the design already exists in Figma and an agent has to build from it, or when a team's tokens and components are kept there. It is also where you check spacing, variants and variable modes by hand before accepting generated code.

## Most useful

- **Dev Mode**: inspect layout, measurements, variables and ready-to-copy CSS or platform snippets, and mark frames ready for development
- **Variables and modes**: colour, number, string and boolean tokens with modes for themes or breakpoints, readable through the REST API, plugins and MCP
- **Code Connect**: maps Figma components to React, HTML/Web Components, SwiftUI, Jetpack Compose or Storybook code. The `@figma/code-connect` CLI is MIT and was downloaded about 4.3 million times a month at review
- **Figma Make**: prompt-to-code prototypes whose code resources can be handed to an agent through MCP
- **Developer docs** with an `llms.txt` index plus separate `llms.txt` files for the Plugin, Widget, REST and Code Connect references

## Using it with agents

The recommended route is the remote MCP server at `https://mcp.figma.com/mcp`, authorised through OAuth. For Claude Code, Figma suggests its plugin (`claude plugin install figma@claude-plugins-official`), which bundles the server settings and agent skills; `claude mcp add --transport http figma https://mcp.figma.com/mcp` also works. Read tools include `get_design_context`, `get_variable_defs`, `get_screenshot`, `get_metadata` and `search_design_system`. `create_design_system_rules` drafts a rules file for your repo. Newer tools write back to the canvas: `use_figma` builds frames, components and variables, and `generate_figma_design` captures a rendered page into Figma. A desktop server running through the Figma app remains for organisations that need it. Figma's `mcp-server-guide` repo collects prompts, rules and skills (about 2,000 stars, no licence file at review).

## Watch out for

- MCP limits depend on plan and seat. Starter gets about 20 read calls a month and View or Collab seats only 6, while Dev or Full seats get 200 a day on Professional and Organization and 600 a day on Enterprise. Write tools such as `create_new_file` are exempt
- Only clients listed in Figma's MCP catalogue can connect. Other clients need to join a waitlist
- Content training is on by default for Starter and Professional teams, so an admin has to switch it off. It is off on Organization and Enterprise
- Large frames produce slow or truncated context. Figma's own guidance is to select smaller sections and use auto layout and named components
- Community files carry whatever licence the creator chose, so check each file before shipping its assets

## Reusable ideas

- Link each design component to its code component, so generated code imports what already exists instead of rewriting it
- Give agents both a structural read (metadata, variables) and a screenshot, so they can check layout against the picture
- Let agents write native design objects back to the canvas, not just read from it, so design and code stay in step
- Publish one `llms.txt` per API surface, so an agent loads only the reference it needs

## Related

[shadcn/ui](shadcn-ui.md), [Kombai](kombai.md), [OpenDesign](open-design.md), [Penpot](penpot.md), [Framer](framer.md), [v0](v0.md)
