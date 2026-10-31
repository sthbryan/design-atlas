---
title: Gauge UI
description: Composable SVG gauge primitives for React, where arcs, zones, ticks and needles assemble from one shared context.
url: https://gauge-ui.dev
type: component-registry
formats: gauge primitives · shadcn registry · browser studio for composing a dial
topics: [data-viz, components]
verdict: niche
agent: [registry]
pricing: free
licence: MIT, stated in the thordursk/gauge-ui repository, which had 168 stars at review. The components arrive as a file you own, with no runtime dependency beyond React and the shadcn `cn` helper.
licence_class: open-source-permissive
reviewed: 2026-10-29
status: active
related: [evil-charts, tremor, beui]
---
[← Atlas](../site/home.md) · Topics: [data-viz](../topics/data-viz.md), [components](../topics/components.md)

# Gauge UI

## What it is

Gauge UI is a small registry of SVG primitives for dials: a track, a value arc, a stacked arc, coloured zones, ticks, tick labels, a needle, a hub and a value label. A single `Gauge` component owns the domain and the geometry, and every child reads the value, the angles and the radius from context, laying itself out against one reference radius. Angles run clockwise from six o'clock, which is why the parts can be added, removed or reordered without breaking the dial. A studio on the site lets you compose a gauge and copy the code.

## When to open it

- A dashboard needs one speedometer, temperature dial, storage ring or credit score, and it should look like the rest of a shadcn app rather than like a chart-library widget.
- You want the gauge source in your own tree, so you can change the geometry, the taper or the tick count.
- You need a closed ring with a value that wraps past the seam, which most gauge components cannot do.

## Most useful

- **Composable parts**: `GaugeTrack`, `GaugeArc`, `GaugeZones`, `GaugeTicks`, `GaugeTickFill`, `GaugeTickLabels`, `GaugeNeedle`, `GaugeHub` and `GaugeValue`, each optional.
- **Arc behaviour**: `from`, `reverse` to grow back from the end, and `wrap` to carry a value past the seam of a closed ring.
- **Zones as data**: a list of cutoffs and colours, plus `zoneColor()` to tint the value arc by whichever band the value falls in.
- **Tick fill modes**: light the ticks inside the value or range, or only the tick at each end.
- **Install**: `npx shadcn@latest add https://gauge-ui.dev/r/gauge.json`, or register the namespace once and install by name.

## Using it with agents

The registry is the agent channel: the component JSON at `https://gauge-ui.dev/r/gauge.json` gives an agent the source to write into `components/gauge/`, and the README documents the props. There was no `llms.txt` at review, so an agent has to read the page or the repository, and the studio is a human tool.

## Watch out for

- A dial answers "is this one value near its limit" and nothing else. For comparison across items, a bar or line chart is more honest, and a dial with three needles is worse than a table.
- The numeric readout is drawn SVG text. Pair it with a real text value or an accessible label, and state the range, or the dial is unreadable to a screen reader.
- Reversed and wrapping arcs are easy to misconfigure. Keep the studio output as the reference before you hand-edit geometry.
- The registry namespace only works once `components.json` has the entry, which is easy to forget in a monorepo.

## Reusable ideas

- One provider owns the domain and the geometry; children position themselves against a shared reference rather than receiving a dozen props.
- Distribute a single file so colours and sizes stay in the reader's project instead of a package's theme.
- Ship a studio that emits the code you paste, rather than a props playground you reproduce by hand.

## Related

[Evil Charts](evil-charts.md), [Tremor](tremor.md), [beUI](beui.md)
