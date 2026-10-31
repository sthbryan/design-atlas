---
title: Epic Easing
description: Easing curve generator with bezier, spring and bounce kinds, a property preview, and CSS, SCSS, Swift and Obj-C export.
url: https://epiceasing.com
type: tool
formats: easing curve generator · presets · live property preview · CSS, SCSS, Swift and Objective-C export
topics: [motion]
verdict: useful
agent: []
pricing: free
licence: No fee and no account at review; no licence or reuse terms are stated for the site. The export is a timing-function value you could write yourself.
licence_class: not-stated
reviewed: 2026-10-29
status: active
related: [animista, gsap, motion-primitives]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md)

# Epic Easing

## What it is

Epic Easing is a single-purpose tool for building easing curves. It groups the work into four numbered steps down the page — recipe, preview, export, share — and keeps everything on one screen. You pick a kind (linear, ease, spring, bounce), a direction, and a style from a list of named curves, or drag the four bezier handles and read the exact numbers. A preview section runs the curve on a chosen property at a chosen duration, and the export panel writes the result in CSS, SCSS, Swift or Objective-C.

## When to open it

- A transition feels wrong and you need to see the curve, not guess at a keyword.
- You need a spring or bounce that still ships as CSS, and want to compare presets before committing.
- You are matching the motion of an existing app, and the numbers matter more than the shape.

## Most useful

- **Kinds and styles**: linear, ease, spring and bounce as separate kinds, with styles from sine and quad through expo and circ to back, plus a curve named after the tool itself.
- **Direction**: in, out, in-out and out-in, which is the distinction most generators skip.
- **Preview on a real property**: move, width, height, scale, rotate, opacity, rotate X, rotate Y, and a frame view, with a duration field. Judging a curve on the property it will animate is more useful than watching a dot slide.
- **Numeric handles**: the four values are shown and editable, so a curve can be copied from a design spec or matched to an existing transition.
- **Export with copy**: the CSS panel writes prefixed timing functions and a `transition` shorthand; SCSS, Swift and Objective-C are one click away.
- **State in the URL**: the curve and the chosen language live in the query string, so every configuration is shareable and bookmarkable.

## Using it with agents

No agent channel was published at review: no `llms.txt`, no MCP server, no API. It is a human tool, and an agent is better served by the numbers once you have them, since the output is a single `cubic-bezier()` value or an `Animation` curve in Swift.

## Watch out for

- The CSS panel still emits `-webkit-`, `-moz-` and `-o-` prefixed timing functions. They are harmless but dated, so trim them before they reach a code review.
- Spring and bounce are offered as their own kinds while the CSS export is still a timing function. A single bezier cannot describe a real spring, so check the exported motion against the preview instead of trusting the label.
- There is no account, no saved library and no history. Copy the numbers out; the URL is the only record.
- The preview is a single element. Overshoot on a small button looks different from overshoot on a full-width panel, and duration changes the feel more than the curve does.
- No licence terms are stated. Nothing here is worth copying as content, but do not treat the site's presets as a licensed motion library.

## Reusable ideas

- Number the steps of a one-screen tool so a first-time visitor knows where to start and where it ends.
- Preview the curve on the property it will animate, and let the visitor switch property without losing the curve.
- Keep the whole state in the URL; sharing a configuration then costs nothing and needs no backend.
- Offer a beginner and an advanced mode on the same screen, rather than hiding presets behind a separate page.

## Related

[Animista](animista.md), [GSAP](gsap.md), [Motion Primitives](motion-primitives.md)
