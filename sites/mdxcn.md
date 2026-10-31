---
title: mdxcn
description: Callouts, steps, terminals, timelines and charts for MDX, drawn with text and installed through the shadcn CLI.
url: https://mdxcn.dev
type: component-registry
formats: component library · shadcn registry · MDX components · plain-text fences · agent skill
topics: [documentation, components]
verdict: useful
agent: [registry, llms-txt, skill]
pricing: free
licence: MIT, stated in the shadcn-labs/mdxcn repository, which had 466 stars at review. The code is copied into your project with the shadcn CLI rather than installed as a package.
licence_class: open-source-permissive
reviewed: 2026-10-29
status: active
related: [shadcn-ui, agentcn, 21st-dev]
---
[← Atlas](../site/home.md) · Topics: [documentation](../topics/documentation.md), [components](../topics/components.md)

# mdxcn

## What it is

mdxcn is a set of React components from the shadcn-labs group for figures inside documentation: callouts, numbered steps, terminal transcripts, timelines, tables and charts. What sets it apart is how those figures are drawn. Instead of SVG or canvas, they are built from characters and text, so the same figure written as a fenced block still reads in a README, a pull request, an issue or a note. The site describes each figure as a "framed figure" whose children are ordinary Markdown, which is what lets an agent write the content without knowing the component props. Installation goes through a shadcn-compatible registry, and the parent component is registered once in `mdx-components.tsx`.

## When to open it

- A README, RFC, postmortem, migration guide or pull request body where a sequence, a comparison or a timeline reads faster than prose.
- A docs site built with MDX that wants figures without pulling in a charting dependency.
- An agent writing documentation that needs a figure format it can produce as text, with no drawing step.

## Most useful

- **Text-drawn figures**: charts and diagrams made of glyphs, so they stay legible as plain text and survive being copied out of the page.
- **Three delivery paths**: MDX components for an MDX page, a `::graph-*` block for pipelines that store plain `.md`, and a filter for data-driven Markdown. The site documents the wiring for each.
- **Fenced fallback**: the same figure pasted as a fence keeps its alignment in Markdown surfaces that render monospace blocks.
- **Install and registry**: `pnpm dlx shadcn@latest add https://mdxcn.dev/r/<slug>.json`, with `mdxcn.dev/r/registry.json` listing the components.
- **Styling knobs** limited to what suits a text figure: corners, glyphs, palette and accent.

## Using it with agents

Three channels, all public. `https://mdxcn.dev/llms.txt` is written as an instruction sheet for a writing agent: when a figure is worth drawing, and which syntax to use for each surface. `https://mdxcn.dev/skill.md` is an installable skill with the figure chooser so an agent does not fetch the list every time. The registry lets an agent install a component with the shadcn CLI without reading the docs site. No MCP server was listed at review.

## Watch out for

- Text figures live on a monospace grid. Long labels wrap badly in a narrow column, so keep labels short or the figure stops scanning.
- A fence holds its shape only where the surface renders monospace. In a proportional font the alignment collapses, so check the destination before relying on one.
- Theming stops at glyphs, corners, palettes and accents; these will not match an expressive grid or a heavy brand illustration.
- These are documentation figures, not charts for a product dashboard. Reach for a real chart library when the data is the point.
- The registry is young. Pin the component version you installed if the docs and the code drift.

## Reusable ideas

- Pick the figure from the shape of the claim (a sequence, a contrast, a span of time) rather than from what looks nicest.
- Make every figure degrade to plain text, so one artefact serves the docs site, the README and the pull request.
- Keep the children as Markdown and hide JSX props behind one registered parent, so the person writing the figure never types component code.
- Ship the "when to use this" decision as an agent skill, next to the components themselves.

## Related

[shadcn/ui](shadcn-ui.md), [agentcn](agentcn.md), [21st.dev](21st-dev.md)
