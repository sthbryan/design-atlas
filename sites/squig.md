---
title: squig
description: A wireframing canvas where real UI components render as hand-drawn sketches, with an agent bridge into the open tab.
url: https://squig.sh
type: tool
formats: infinite canvas · component and block library · browser agent API · local MCP companion · plugin
topics: [ux-patterns, components, agents-and-prompts]
verdict: useful
agent: [mcp, api, llms-txt]
pricing: free
licence: MIT, stated in the pablostanley/squig repository, which the site invites contributions to and which had 96 stars at review.
licence_class: open-source-permissive
reviewed: 2026-10-29
status: active
related: [shadcn-ui, page-flows, mobbin]
---
[← Atlas](../site/home.md) · Topics: [ux-patterns](../topics/ux-patterns.md), [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# squig

## What it is

squig is a browser wireframing tool built on an infinite canvas. You drag in real UI components — the shadcn vocabulary of buttons, inputs, selects, tables, dialogs, tabs, nav and sidebars, plus blocks such as heroes, pricing tables, FAQs, AI chat, checkout and kanban — and every one renders as a hand-drawn sketch through rough.js. The library exposed 155 entries at review, components and blocks together, organised into groups such as buttons, forms and selection. Files autosave into browser storage, and a file menu exports a copy, PNG or SVG. The repository is MIT and runs locally with pnpm.

## When to open it

- Before visual design, when the argument is about structure: how many steps, what the header says, where the comparison sits.
- When feedback on a polished mockup keeps drifting to corner radius instead of the idea.
- When you want an agent to draft or rearrange a wireframe inside the tab you already have open.

## Most useful

- **Components with variants**: drop a button and the inspector flips its icon side, size and fill while it stays a component. Break apart is one-way and deliberate, for the cases no variant covers.
- **One search for everything**: `⌘K` covers tools, actions, components and blocks, and Enter drops the choice in the middle of the view.
- **Paste as material**: a screenshot lands as a reference inside a drawn frame and is shrunk on the way in, copy lands as text, and layers copied from another tab keep their structure.
- **Figma's keyboard**: select, rectangle, ellipse, draw, text and arrow on single keys, arrows to nudge, and a custom big-nudge step.
- **Paper and ink settings**: three paper shades, a dot grid, palettes such as "Internet blue", and hand-drawn, sans or serif type.
- **Agent bridge**: "Connect agent" copies instructions for an agent with access to that tab; it checks the document id and edits through `window.squig` or supported WebMCP tools, and both parties' edits merge and autosave. In the open canvas the object exposed 25 methods at review, including `addComponent`, `addText`, `addShape`, `update`, `group`, `spacing`, `tidy`, `describe` and `svg`, which is enough to build or measure a screen without touching the UI.

## Using it with agents

Three routes. The browser bridge needs no install: an agent with control of the tab edits the open drawing. The companion, `pnpm squig serve <file>.squig.json`, opens the editor at a loopback address and serves MCP over stdio or Streamable HTTP, with thirteen tools at review (`squig_get_document`, `squig_edit_document`, `squig_replace_document`, `squig_history`, `squig_restore`, `squig_comment`, `squig_export_document`, `squig_measure_text`, `squig_render_document` and the rest), plus an OpenAPI schema, a `squig://guides/wireframing` resource and a wireframe-first prompt. Alongside them, `https://squig.sh/llms.txt` and `llms-full.txt` document tools, setup and limits, and the repository ships an optional plugin that guides an agent to continue the open canvas or a chosen file. There is no signup, no cloud storage and no API key; the agent uses its own model account.

## Watch out for

- Browser storage is not a backup. Clearing site data clears the drawings, another browser profile does not have them, and the drawer keeps only the most recent forty. Export a copy when a file matters.
- The sketch is the point. Nothing here is production CSS to lift into a build, and the components are wireframe representations rather than the real components.
- Run one companion per file and keep the process alive while working. Moving a browser drawing to disk means exporting first; the two stores are not linked.
- Local history is bounded, at 50 snapshots and 16 MiB per file at review, and MCP tool results are capped at 8 MiB, so a large canvas can fail with a 413 that still saved the edit.
- The project is young, with a small star count and a last push in mid-September at review, so check the issue tracker before depending on the agent bridge.

## Reusable ideas

- Render every component to one array of drawing primitives, so the canvas, the panel previews and the search thumbnails share a single definition.
- Make high fidelity a one-way door: components stay components until you deliberately break them.
- Hand an agent access to the artefact the human is looking at, instead of a copy in another session.
- Shrink pasted screenshots and frame them, so a reference cannot outweigh the sketch.

## Related

[shadcn/ui](shadcn-ui.md), [Page Flows](page-flows.md), [Mobbin](mobbin.md)
