---
title: Ahmad Shadeed
description: Hands-on CSS layout articles and an interactive lab for inspecting modern selectors, grids and container queries.
url: https://ishadeed.com
type: documentation
formats: CSS articles · interactive lab
topics: [documentation, components]
verdict: useful
agent: []
pricing: free
licence: Articles and lab are free to view. No content or code reuse licence was stated on the reviewed pages.
licence_class: not-stated
reviewed: 2026-09-26
status: active
related: [every-layout, modern-css]
---
[← Atlas](../site/home.md) · Topics: [documentation](../topics/documentation.md), [components](../topics/components.md)

# Ahmad Shadeed

## What it is

Ahmad Shadeed publishes practical CSS and interface-layout references, including standalone browser demos and an interactive lab. The strongest visual references let you resize or change content while seeing how a layout responds to Grid, subgrid, container queries and related features.

## When to open it

- When debugging a layout technique and you need a minimal visual example that can be manipulated in the browser.
- When reviewing a real page composition and wanting to see how the CSS structure holds up across content or viewport changes.

## Most useful

- [iShadeed Lab](https://lab.ishadeed.com/) contains small, interactive CSS experiments. Try its container-query examples and Lab Mixer to see how combinations of features affect the rendered result.
- [Rebuilding a FIFA standings layout with subgrid](https://ishadeed.com/article/fifa-layout/) provides controls for selecting a round and changing grid line placement. Observe how nested rounds inherit the parent grid while occupying different tracks.
- [Modern CSS section layout](https://ishadeed.com/article/modern-css-section-layout/) lets you change card counts and text length to inspect `:has()`, container-query and defensive image sizing behavior in a real section composition.

## Using it with agents

No MCP, API, CLI or agent-specific guide is published. Send an agent the direct article or lab URL and state which control to manipulate and which visual property to observe. Demos are rendered browser examples rather than a published component package.

## Watch out for

- This is an individual author's collection of articles, not a cohesive design system or catalogue of finished UI screens.
- Some experiments may rely on newer CSS features or browser capabilities; check the feature's current support before adopting it.
- No general reuse licence is stated for the article content, demo code or visuals; treat them as look-only references.

## Reusable ideas

- Make a layout control expose the key CSS decision, such as a grid line or the number of children.
- Stress-test composition with both viewport resizing and changing content counts.
- Explain the failure mode next to the improved result so the design constraint is clear.

## Related

[Every Layout](every-layout.md), [Modern CSS Solutions](modern-css.md)
