---
title: Subframe Motion
description: 309 MIT React and WebGL motion examples you can copy out, exposed to agents through a Motion MCP server.
url: https://www.subframe.com/motion
type: component-library
formats: copy-paste React components · Motion and WebGL shader examples · MCP server
topics: [motion, 3d-and-shaders, components, inspiration]
verdict: useful
agent: [mcp]
pricing: free
licence: MIT, stated on each example with the full text in the source panel. No account is needed, and Subframe's paid design app is a separate product.
licence_class: open-source-permissive
reviewed: 2026-11-11
status: active
related: [motion-primitives, canvas-ui, shaders, aceternity-ui]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [3d-and-shaders](../topics/3d-and-shaders.md), [components](../topics/components.md), [inspiration](../topics/inspiration.md)


# Subframe Motion

## What it is

Subframe Motion is the component studio's free library of hand-built motion work for React: 309 examples at this review, split into components and interactions, animation and motion, and WebGL and shaders. Each example is a real, editable React component rather than a video — a ticket you can tear, a stub you drag, a guilloché pattern, halftone sculptures, lit metal keys, liquid shaders — with previews that pause, and the source and its MIT notice one click away. The library shipped in October 2026 and has been growing in batches since.

## When to open it

- When you need one specific micro-interaction with real physics (tear, drag, fold, magnetic pull) and want working React source, not a description.
- When you want an agent to find and install motion for you without a catalogue of marketing pages.
- When you are learning how far CSS and Motion go before reaching for a canvas.

## Most useful

- **Copy-out source**: every example is a standalone `.tsx` file, so it drops into a project with no package or runtime of Subframe's own.
- **The WebGL half is the differentiator**: most motion galleries stop at DOM transitions; this one includes shader material studies with live controls.
- **Paused-by-default previews**: a page of 309 animations that all play at once would be unusable, so previews need a click.
- **Interaction-level granularity**: the catalogue is named for behaviour ("Off the grid", "Tear ticket", "Pull the stub") rather than for the component wrapper.

## Using it with agents

This is where the library is unusual: it exposes the catalogue to agents over MCP at `mcp.subframe.com/motion/mcp`, advertised as a "Motion MCP" you install rather than a page you scrape. There is no `llms.txt` and no CLI. In practice an agent asks the MCP for an example, gets the source, and copies it into the repo — the same file you would get by hand.

## Watch out for

- **The MCP is the only machine-readable channel**: no `llms.txt` or API means a non-MCP agent has to read the HTML like a person.
- **Examples are demonstrations, not a design system**: they share no tokens, so styling them to an existing product is your work.
- **WebGL examples cost frames** and need a fallback where the context is unavailable.
- **Licence is per example**; the MIT text is in the source panel, so keep the notice when you copy.
- **New and changing**: weeks old at this review, so slugs and file exports can move.

## Reusable ideas

- Name motion examples after the behaviour, so a search is a description of what the user does.
- Put the licence inside the source panel you copy from, not on a separate terms page.
- Give agents an MCP that returns the same code a human would copy; the two paths then cannot drift.
- Ship previews paused, with an explicit play.

## Related

[Motion Primitives](motion-primitives.md), [Canvas UI](canvas-ui.md), [Shaders](shaders.md), [Aceternity UI](aceternity-ui.md)
