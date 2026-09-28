---
title: Lab01
description: Sebastiano Guerriero's 12 live web-app UI experiments, each with its icons, fonts and palette listed.
url: https://lab01.dev
type: gallery
formats: designer portfolio of live product-UI experiments
topics: [inspiration, components, typography-and-styles]
verdict: niche
agent: []
pricing: free
licence: free to view; no licence is stated. The site doubles as a pitch for paid web-app design work, which it prices from $10k
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [uilabs, devl, interior-dev, details]
---
[← Atlas](../site/home.md) · Topics: [inspiration](../topics/inspiration.md), [components](../topics/components.md), [typography-and-styles](../topics/typography-and-styles.md)

# Lab01

## What it is

Lab01 is the "digital lab" and portfolio of Sebastiano Guerriero, a designer who builds web-app interfaces. At review time it showed 12 numbered UI experiments, each running live in an embedded frame on the page, with a small spec card listing the icon set (mostly Nucleo), the fonts (Geist, Geist Mono, Inter, SF Pro, Open Runde or the system sans) and a three- or four-colour palette you can copy with one click.

## When to open it

When you are designing a dense, desktop-style web app (an email client, a kanban board, a document editor, a design tool) and want refined references for small controls, menus and panels, with the exact type and colour choices spelled out.

## Most useful

- **Context and action menus**: a layer menu with hotkeys, a block menu with shortcuts and "Ask AI", and an inbox with hover actions.
- **Morphing inputs**: a send-money form whose "Custom" amount chip turns into an input, and a compact time picker.
- **App surfaces**: a collapsible sidebar with grouped counts, a kanban board, a document view with a status stepper, and an appearance-settings dialog with theme and transparency options.
- **Small polish pieces**: a button with a coloured shadow and an AI-history timeline grouped by day.
- **Spec cards**: icons, fonts and hex colours listed per experiment, which makes each one easy to restyle or reproduce.

## Using it with agents

No registry, `llms.txt` or API. Each experiment is a standalone page under `/experiments/<nn>/index.html` (plain HTML and CSS for some, a bundled script for others), so you can open it full-size, read its fonts and colours from the card, and brief an agent to build a similar control in your stack. Do not copy the source, since no reuse rights are given.

## Watch out for

- It is a portfolio, not a library: small, with no descriptions or code downloads.
- Most experiments use Nucleo icons, a paid icon set, so a faithful rebuild needs your own icon licence or a free alternative.
- The experiments imitate desktop apps, so check how any rebuilt control behaves on small screens.

## Reusable ideas

- Publish a spec card (icons, fonts, palette) next to every UI shot so others can see the decisions, not just the result.
- Show keyboard shortcuts inside context menus to teach them over time.
- Turn a "custom" preset chip into an input in place rather than opening a new field.
- Embed live, isolated demos instead of screenshots so visitors can feel the interaction.

## Related

[UI Labs](uilabs.md), [devl](devl.md), [interior.dev](interior-dev.md), [Details](details.md)
