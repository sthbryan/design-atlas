---
title: Vibrant Design
description: Curated library of websites, sections and launch videos that turns each design into build notes and a DESIGN.md for coding agents.
url: https://vibrant.design
type: gallery
formats: curated websites, sections, launch videos and UI shots · moodboards · "surprise me" · build notes and DESIGN.md per design · MCP server · llms.txt
topics: [inspiration, design-md]
verdict: useful
agent: [llms-txt, mcp]
pricing: free
licence: Browsing and saving are free. The site links a licence page at /licence; its text was not machine-readable at review, so the terms for the design files themselves need checking before reuse
licence_class: not-stated
reviewed: 2026-11-11
status: active
related: [collected, devault, refero-styles]
---
[← Atlas](../site/home.md) · Topics: [inspiration](../topics/inspiration.md), [design-md](../topics/design-md.md)

# Vibrant Design

## What it is

A gallery that has already done the analysis. Instead of a screenshot and a link, each entry has been read by a model for its colours, fonts, spacing and layout, and the result is published as build notes and a DESIGN.md file an agent can follow. The catalogue itself is conventional: websites, individual sections, launch videos and UI shots, each credited to its creator with a link to their profile, filtered by Latest or Popular, with a "surprise me" control and moodboards for collecting.

The scoping is the interesting part. Most of the entries are sections — a hero, a feature block, an analytics dashboard, a toggle switch — rather than whole sites. That matches how people actually ask for inspiration now: not "show me a site like this" but "show me a hero like this, with the token values that produced it".

Because DESIGN.md is a plain-text format with a published spec, the bridge from a picture of a design to a build is short: pick the entry, hand the file to an agent, get something in that direction rather than in the model's default direction.

## When to open it

Open it when you want a specific direction and need it as tokens rather than as a JPEG, or when you are gathering a moodboard and want the collection to leave as something an agent can execute. It is less useful when you need to study a whole site's structure, which is what a gallery of full sites is for.

## Most useful

- **Build notes and a DESIGN.md per entry**, which is the difference between inspiration and an instruction.
- **Sections as first-class entries**, matching the unit people actually design.
- **A "surprise me" control**, the cheapest way to break a reference rut.
- **Moodboards**, so the gathering and the using happen in one place.
- **Creator attribution per entry**, with a link, rather than an anonymous tile.
- **`llms.txt` that states the shape of each entry**, so an agent knows what a project page contains.

## Using it with agents

Two channels at review: `llms.txt` resolves and describes the library, the entry fields and the DESIGN.md path, and an MCP server exposes the collected designs to an agent. That is a better contract than a scrapeable grid, because the file an agent receives is already a format other tools understand.

## Watch out for

- The MODEL reads colours, fonts and spacing from a picture. Those values are inferred, not extracted, so treat a generated DESIGN.md as a proposal rather than a measurement.
- The licence page did not parse at review; check what may be reused from an entry and from the design behind it.
- Sponsorship and advertising sit between the entries, which colours taste slightly.
- A gallery of sections can encourage pastiche: five sections from five sites rarely add up to one identity.
- The DESIGN.md files follow an external spec, so their quality depends on how well that spec is implemented here.

## Reusable ideas

- Publish a DESIGN.md beside the screenshot, not instead of it.
- Index by section, not only by site, when the audience is building.
- Offer a random entry as a first-class control.
- Make the entry page an artefact an agent can consume: fields, tokens, credit.

## Related

[Collected](collected.md), [Devault](devault.md), [Refero Styles](refero-styles.md)
