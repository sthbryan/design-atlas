---
title: UI Layouts
description: 300+ MIT animated React components and sections with a shadcn registry, an MCP server and a paid Pro block site.
url: https://www.ui-layouts.com
type: component-library
formats: component library · shadcn registry · MCP server · paid blocks and templates (Pro)
topics: [components, landing-pages, motion]
verdict: useful
agent: [mcp, llms-txt, registry, prompts]
pricing: freemium
licence: "freemium. The main library is MIT in `ui-layouts/uilayouts` (about 3.6k stars at review). UI Layouts Pro is a separate site sold as a one-time purchase: $139 (Pro Creator), $198 (Forever Builder) and $449 (Team Forge) at review, each shown as a discount from a higher price. The pricing cards promise a commercial licence for unlimited projects, but Pro has no licence or terms page (404)"
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [aceternity-ui, magic-ui, skiper-ui, motion-primitives, velora-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [landing-pages](../topics/landing-pages.md), [motion](../topics/motion.md)

# UI Layouts

## What it is

UI Layouts is an open-source collection of animated React components and landing-page sections, made by Naymur Rahman and contributors with TypeScript, Tailwind CSS and Motion. At review its registry index listed 327 items: 253 components and 74 blocks. The components lean towards visual effects: scroll-driven text and timelines, image masking, clip-path reveals, liquid glass, noise, spotlight cards and animated beams. There are also Three.js and React Three Fiber pieces such as a globe, a ripple image and a mesh gradient. Blocks cover hero, feature, about, team, stats, testimonial, experience, pricing, FAQ and footer sections. A Labs playground lets you record a component over a styled background.

## When to open it

When a landing page or portfolio needs one strong motion moment (a scroll reveal, a masked video hero, a stacking-card sequence) and you want source you can own. It is also useful as an idea bank before you commit to a direction, since each effect has live variants.

## Most useful

- **Scroll and motion**: timeline animation, scroll text, horizontal scroll, sticky scroll, stacking cards and smooth scroll using Lenis.
- **Media**: image and video masking, clip-path effects, image reveal, product cards and several carousels.
- **Overlays**: media, gallery and Linear-style modals, plus a directional drawer built on Vaul.
- **Forms**: phone input, datetime picker, multi-selector, tags input, password strength and colour picker.
- **Pro**: 150+ extra blocks, paid templates and a drag-and-drop template builder that exports React or Next.js.

## Using it with agents

The registry index is served at `/r/registry.json`, and `@ui-layouts` is listed in the official shadcn directory, so the shadcn CLI and MCP can install items by name. There is also a dedicated MCP server, `@ui-layouts/mcp` (MIT on npm), that lets an assistant search components, read their docs and fetch the source. An `llms.txt` lists every component and block with a one-line summary. Pro blocks install from `@ui-layouts-pro` and come with copyable setup prompts.

## Watch out for

- Several links in `llms.txt` (for example the CLI and About docs) returned "not found" at review, so treat it as a component index rather than documentation.
- The Pro pages disagree on size (50+, 100+, 150+ and 200+ blocks all appear).
- Many effects pull in Motion, Three.js, Lenis or Vaul, so check the dependencies before installing.

## Reusable ideas

- Mask a hero video inside large type so the headline and the media become one element.
- Stack cards on scroll so a feature list reads as a sequence rather than a grid.
- Offer a recording playground, so people can share a component as a clip.
- Pair a registry with an MCP server that returns real source, so the agent does not invent the API.

## Related

[Aceternity UI](aceternity-ui.md), [Magic UI](magic-ui.md), [Skiper UI](skiper-ui.md), [Motion Primitives](motion-primitives.md), [Velora UI](velora-ui.md)
