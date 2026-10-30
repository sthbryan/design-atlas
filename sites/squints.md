---
title: Squints
description: Free Chrome extension that measures spacing, identifies type and colour, and slows or scrubs animations on any live page.
url: https://squints.app
type: browser-extension
formats: Chrome extension · rulers and guides · column grid · colour and font pickers · animation recorder and scrubber
topics: [ux-patterns, motion]
verdict: useful
agent: []
pricing: free
licence: Free at review, with a link to the Chrome Web Store and no payment mentioned. No licence is stated for the extension and no source repository is linked.
licence_class: not-stated
reviewed: 2026-10-29
status: active
related: [detail, ui-patterns, page-flows]
---
[← Atlas](../site/home.md) · Topics: [ux-patterns](../topics/ux-patterns.md), [motion](../topics/motion.md)

# Squints

## What it is

Squints is a Chrome extension that puts the measuring tools of a design editor onto any live web page. Its premise, stated plainly on the page, is that spacing, type, colour and motion decisions are now made in the browser, where nobody has the tools to look closely. It offers rulers and snapping guides, a column grid remembered per site, a box inspector that reports the gap to the next element, colour and font pickers, annotation drawing, and an animation recorder that plays motion at a tenth of its speed and lets you step through it frame by frame.

## When to open it

- You are matching a design to a live implementation and need the actual gap, size or colour rather than an eyeballed value.
- You cannot tell which font actually rendered, or which token a colour came from.
- An interaction or a load-in animation is too fast to judge, and a screen recording is not precise enough.

## Most useful

- **Box and gap inspector**: read an element's box and the distance to its neighbour, which is the measurement designers reach for first.
- **Rulers and guides that snap**: drag them out as in a design tool, then keep them across a page.
- **A column grid per site**: the grid is remembered per site, so a review session does not start by rebuilding it.
- **Colour with the token**: every format plus the design token behind the value, which turns a screenshot argument into a code change.
- **Font identification with metrics**: reports the face that really rendered and its measurements, which settles fallback and loading questions.
- **Slow motion and scrubbing**: play any animation at a tenth of its speed or step through it frame by frame, the fastest way to find what is wrong with an easing curve.
- **Annotations on the page**: arrows, boxes and notes drawn in place, for a review that has to leave the browser as a screenshot.

## Using it with agents

No agent channel at review: no `llms.txt`, no MCP server, no API. It is a human instrument for inspecting what a build actually produced, and its output reaches an agent as numbers, screenshots or a written note.

## Watch out for

- Chrome only at review, with the store listing as the install path. Other browsers are not covered.
- An extension that reads and draws on every page is a trust decision. It is free and made by an individual, so read the permissions before installing it on a work profile.
- Measuring a live page measures the build, not the design intent. The gap you read may be a bug, and the extension cannot tell you which value was intended.
- Slowing an animation down changes the thing you are judging. A curve that looks right at a tenth speed can still feel abrupt in use.
- No licence is stated. Do not assume the extension, or any code in it, can be reused.

## Reusable ideas

- Move the measuring tools to where the decision is made, rather than asking people to keep a mockup open beside the build.
- Remember per-site state, such as the column grid, so a tool gets cheaper to use the second time.
- Report the token behind a colour, not just the hex value; the token is what the fix will be written in.
- Slow motion beats a screen recording when the question is about a curve.

## Related

[Detail](detail.md), [UI-Patterns.com](ui-patterns.md), [Page Flows](page-flows.md)
