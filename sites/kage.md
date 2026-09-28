---
title: Kage
description: Real product pages and components tagged by style, with screenshot-backed design prompts and a public MCP server.
url: https://kage.design
type: gallery
formats: real-site gallery · component library · design prompts · MCP server
topics: [inspiration, agents-and-prompts, components]
verdict: very-useful
agent: [mcp, prompts]
pricing: free
licence: Prompts and design analyses may be used and adapted commercially without attribution. Screenshots, logos and marks belong to their respective owners; do not reproduce a featured site or reuse its branding, copy or artwork.
licence_class: mixed
reviewed: 2026-09-26
status: active
related: [scrolltide, refero-styles, component-gallery, vibeprompts]
---
[← Atlas](../site/home.md) · Topics: [inspiration](../topics/inspiration.md), [agents-and-prompts](../topics/agents-and-prompts.md), [components](../topics/components.md)

# Kage

## What it is

Kage indexes screenshots of real product pages and sections, adds a short design analysis, and offers a prompt describing their visual structure. The gallery currently lists 335 designs, 1,778 components and 187 products (at review). Its own dark interface is only the catalogue; study the linked product screenshots and live sites for design references.

## When to open it

- When you have a visual direction such as brutalist, editorial or minimal and want tagged examples instead of broad text-search results.
- When a particular part of the page matters: open a full-page record, then inspect its extracted hero, pricing, feature grid or other components.
- When you want the agent to retrieve both a reference image and a written description through MCP.

## Most useful

- Start with the [Brutalist style collection](https://kage.design/style/brutalist) and narrow it by page type (landing pages, OG images or components). It contains 11 designs at review, so use it as a small shortlist rather than a complete survey of the style.
- Open an individual record such as [Obra](https://kage.design/designs/tryobra-landing-page). Its analysis calls out the near-black field, cream panels, orange accents, oversized filled/outlined headlines, thin rules and compact monospace labels. Follow the outbound link to compare the stored capture with the live page before borrowing a pattern.
- [QuietHint](https://kage.design/designs/quiethint-r-landing-page) is another useful landing-page record: its page analysis describes a strict editorial grid, oversized headings, orange accents and alternating light sections with dense dark panels. Use its components to study how a single visual system carries through pricing, FAQ and other sections.
- Browse the [component index](https://kage.design/components) when the question is narrower than a whole page. Kage groups screenshots by function and links each piece back to its source page.
- Compare the screenshot, analysis and live site. The analysis is a starting point for what to inspect—hierarchy, spacing, type, colour, grid and section rhythm—not a substitute for looking at the actual reference.

## Using it with agents

Kage documents a public Streamable HTTP MCP server at `https://kage.design/mcp`, usable without an API key or account. Its current setup page lists `search_designs`, `list_taxonomy`, `get_design` and `get_component`; the `design_brief` tool assembles candidate prompts, and `get_design` returns a screenshot as well as its analysis and components. It also exposes copyable prompts on the site. Ask for a style and page type, inspect a few candidates, then open the live site in the browser to study its rendered behavior at desktop and mobile sizes. The prompt should help describe the design, not silently stand in for visual inspection.

## Watch out for

- The brutalist collection is small (11 designs at review) and the sample can change; use related tags such as Dark or Editorial only when they fit the brief.
- A saved screenshot may differ from the current site. Verify the live page and responsive behavior before using a detail as a design decision.
- The screenshots and featured brands belong to their respective owners. Borrow layout principles and visual relationships, not logos, copy, illustrations or exact assets.
- Kage says prompts and analyses may be used commercially without attribution; that does not grant rights to reproduce a featured site or reuse its screenshots, branding, copy or artwork.

## Reusable ideas

- Pair each reference with both a full-page capture and separately searchable components, so an agent can move between overall rhythm and a specific pattern.
- Record a short visual analysis alongside every capture: composition, typography, colour roles, spacing and section sequence are more actionable than a content summary.
- Keep the original site link beside the gallery record so the agent can verify current behavior instead of treating the capture as the final authority.

## Related

[Scrolltide](scrolltide.md), [Refero Styles](refero-styles.md), [The Component Gallery](component-gallery.md), [VibePrompts](vibeprompts.md)
