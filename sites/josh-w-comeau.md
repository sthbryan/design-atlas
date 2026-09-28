---
title: Josh W. Comeau
description: Interactive CSS guides where you can resize layouts, change rules and inspect the resulting interface.
url: https://www.joshwcomeau.com
type: documentation
formats: CSS guides · interactive code playgrounds
topics: [documentation, components]
verdict: useful
agent: []
pricing: free
licence: Blog guides are free to view. The author says the blog source is closed-source; no general reuse licence for article content or demos is stated. The separate HTML skeleton snippet is CC0.
licence_class: not-stated
reviewed: 2026-09-26
status: active
related: [every-layout, utopia]
---
[← Atlas](../site/home.md) · Topics: [documentation](../topics/documentation.md), [components](../topics/components.md)

# Josh W. Comeau

## What it is

Josh W. Comeau publishes interactive web-development guides with custom CSS and React examples. The CSS guides include live layouts and embedded editors, making individual pages useful for inspecting how rules affect a rendered interface rather than relying on prose alone.

## When to open it

- When studying a specific CSS layout behavior or visual technique and wanting a runnable, adjustable example.
- When a design choice depends on how elements flow as the container changes size.

## Most useful

- [Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/) includes a resizable form whose name and email fields flex and wrap without media queries. Drag the width control and observe how the fields share space and move onto new rows.
- [Interactive Guide to Grid](https://www.joshwcomeau.com/css/interactive-guide-to-grid/) includes a code playground and visible grid overlays. Change track definitions and inspect how children align to the invisible row and column structure.
- Both pages expose the rendered result beside editable CSS, so an agent can compare a concrete layout change against its rule.

## Using it with agents

No MCP, API, CLI or agent guide is published. Open one of the linked demos in a browser and give the agent a specific question, such as how wrapping changes as width shrinks. The pages include code in context, but the blog itself is closed-source.

## Watch out for

- These are carefully authored explanations and examples, not a collection of production screens or a neutral component library.
- The site's paid courses are separate from the free blog guides. Don't infer course access from a public article.
- No general licence for reusing the site's examples or article assets is stated. One separate HTML skeleton snippet is explicitly CC0; that does not apply to the rest of the site.

## Reusable ideas

- Use a width control to make responsive transitions inspectable rather than showing only before-and-after screenshots.
- Put the relevant CSS next to the rendered result so each visual change can be tied to a rule.
- Show layout guides directly in the demo when the browser's placement algorithm is otherwise invisible.

## Related

[Every Layout](every-layout.md), [Utopia](utopia.md)
