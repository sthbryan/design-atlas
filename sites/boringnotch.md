---
title: Boring Notch
description: Free Mac app that turns the MacBook notch into a hover panel for music, calendar, battery and a drag-and-drop file shelf.
url: https://boringnotch.com
type: website
formats: macOS menu-bar utility · notch hover panel · file shelf · HUD replacement
topics: [landing-pages, inspiration]
verdict: niche
agent: []
pricing: free
licence: Free to download. The page says free and open source without naming a licence, so check the repository before reusing code. The app is not signed with an Apple developer certificate, and the install note tells people to allow it manually
licence_class: not-stated
reviewed: 2026-11-02
status: active
related: [hiddenbar, hazeover]
---
[← Atlas](../site/home.md) · Topics: [landing-pages](../topics/landing-pages.md), [inspiration](../topics/inspiration.md)


# Boring Notch

## What it is

A macOS utility that treats the notch as a surface rather than a flaw: hover it and a panel opens with music controls, the next calendar events, a battery indicator, a camera mirror and a shelf you can drag files onto. It also replaces the standard volume and brightness overlays with sliders drawn around the notch shape. The page is built to sell one trick, and it does that with a single instruction — "Hover the notch to see the magic" — placed where the demo sits.

## When to open it

Open it when you are designing a hover-revealed panel anchored to a physical constraint, or a landing page for a one-feature utility. The album-art treatment is the part worth studying: artwork that bleeds into the panel's colour instead of sitting in a box.

## Most useful

- **Hover as the trigger**, with the panel anchored to the notch instead of a menu, which is the whole interaction model.
- **Colour pulled from content**: album covers tint the panel, so the surface belongs to the song rather than the app.
- **A bottom-up feature list** of five items, each with a one-line use rather than a spec.
- **Testimonials kept short**, signed with first names or studios, and one of them is a joke about meeting attendance.
- **Honest install note** under the download button, explaining the manual security step.

## Using it with agents

No `llms.txt`, MCP server or API was found at review. The page is static and readable, and the source is on GitHub, so an agent can inspect the code rather than the marketing.

## Watch out for

- Counts on the page load as placeholders (stars, downloads), so nothing numeric is verifiable at first paint.
- The app is unsigned, which is what the install note admits; that is a security decision, not a detail.
- The HUD replacement changes system behaviour in ways users may not expect.
- One testimonial reports a meeting-attendance improvement, which is not a plausible outcome of a notch widget.
- The audience is MacBooks with a notch; other machines gain little.

## Reusable ideas

- Anchor an overlay to a physical feature and let the hardware define the shape.
- Derive a panel's accent colour from the content it shows.
- Put the one instruction the reader needs inside the demo area, not in a section below.
- Explain the awkward install step next to the button instead of hiding it in an FAQ.

## Related

[Hidden Bar](hiddenbar.md), [HazeOver](hazeover.md)
