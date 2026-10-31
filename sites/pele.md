---
title: Pele
description: Renders Mermaid diagrams to SVG synchronously, themed through CSS variables, with no runtime dependencies.
url: https://pele.run
type: js-library
formats: Mermaid to SVG renderer · npm package · CDN build · playground and API docs
topics: [data-viz, documentation]
verdict: useful
agent: []
pricing: free
licence: MIT, stated in the obsidianmd/pele repository by kepano, which had 3,894 stars at review. The README states support for every diagram type in Mermaid 12.1.0 at review.
licence_class: open-source-permissive
reviewed: 2026-10-29
status: active
related: [evil-charts, tremor, astryx]
---
[← Atlas](../site/home.md) · Topics: [data-viz](../topics/data-viz.md), [documentation](../topics/documentation.md)

# Pele

## What it is

Pele takes Mermaid text and returns SVG. It is small, synchronous, has no runtime dependencies, and takes its colours and fonts from CSS variables instead of a JavaScript theme object. `render()` hands back an SVG string for server-side use, and `mount()` draws into an element in the browser, reading the page's fonts and adapting the layout to the container's width. Diagram types can be registered individually for a smaller bundle, and the site hosts documentation, examples and a playground.

## When to open it

- Your docs or product already stores diagrams as Mermaid text but you want SVG that follows the app's theme rather than Mermaid's defaults.
- You need diagrams rendered during a build or on a server, without a browser.
- You want a theme switch to recolour existing diagrams without re-rendering them.

## Most useful

- **Two entry points**: `render(text)` for a string, `mount(el, text)` in a browser, with a CDN global build that can render every `pre.mermaid` on a page.
- **Theme through variables**: `--pele-bg`, `--pele-fg`, `--pele-muted`, `--pele-line`, `--pele-surface`, `--pele-border`, `--pele-accent`, `--pele-font` and `--pele-radius`, with `--pele-series-1` to `-8` for charts. Changing a theme does not re-render the diagram.
- **Width-aware mounting**: `mount()` fits the layout to the container, which is the usual failure of diagram embeds at narrow widths.
- **Bundle control**: import from `pele/core`, register only the diagram types you use, or lazy-load with `renderAsync` from `pele/lazy`.

## Using it with agents

No agent channel was published at review: no `llms.txt`, no MCP server. The README and the API page are short enough for an agent to read, and the npm package and CDN URL are stable, so wiring it is a normal dependency task rather than an integration one.

## Watch out for

- Input is Mermaid, so layout stays under Mermaid's control. You choose the diagram type, the direction and the theme, not where each node sits.
- Theming is variables and class names, not a component API. Anything beyond colour, font and radius means writing CSS against the classes the renderer emits.
- Importing the main entry pulls in every diagram type. On a docs page that uses flowcharts only, register the flowchart and measure the bundle.
- Output is static SVG. Interactivity such as tooltips, panning or linking a node to a route is not part of it at review, and labels need a check against your own contrast pairs.

## Reusable ideas

- Theme rendered output with CSS variables so a theme toggle costs no re-render.
- Read fonts from the page before measuring text, so diagram metrics match the surrounding prose.
- Make diagram types registerable one by one rather than deciding the bundle for the caller.
- Keep a synchronous `render()` next to the DOM-mounting helper; it is what makes build-time rendering possible.

## Related

[Evil Charts](evil-charts.md), [Tremor](tremor.md), [Astryx](astryx.md)
