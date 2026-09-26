---
title: Appinspo
description: A curated feed of about 760 app shots by device, plus a tool that turns a screenshot into an AI style brief.
url: https://appinspo.com
type: gallery
formats: inspiration gallery · screenshot-to-style-brief generator
topics: [inspiration, agents-and-prompts, design-md]
verdict: useful
agent: [prompts]
pricing: free
licence: 'Free to browse. The AI brief tool gives 5 free briefs with an account, and an unlimited tier at $9 was marked "coming soon" at review. No licence for the images: the footer says all content belongs to its original owners'
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [refero-styles, getdesign-md, collect-ui, mobbin]
---
[← Atlas](../README.md) · Topics: [inspiration](../topics/inspiration.md), [agents-and-prompts](../topics/agents-and-prompts.md), [design-md](../topics/design-md.md)

# Appinspo

## What it is

Appinspo is a hand-curated feed of app interface shots collected from X, Pinterest, Dribbble, Are.na, Layers and similar places. The curator is @jordiplz on X, who started it as a personal stash and opened it up. At review it held 764 posts across six tabs: Desktop (415), Mobile (248), Icons (50), Illustrations (27), Watch (13) and Vision (11). The current version was rebuilt on Lovable with a Supabase backend, and its oldest entry dates from March 2026. Each post credits the original designer with a link to their profile. A sister site, Webinspo, does the same for websites.

## When to open it

Open it when you want to know what visual style designers are posting right now, rather than what shipped apps already do. It suits early mood-boarding for a new app, a watchOS or visionOS concept, or an icon or illustration direction. Pick another gallery if you need complete flows or production screens.

## Most useful

- **Device tabs**: Watch and Vision are rare in other galleries, even though the sets are small
- **Designer credit on every post**: a quick route to people worth following for a given style
- **Boards**: with an account, you can save posts into your own boards
- **AI Design Skill**: upload a PNG, JPG or WEBP up to 10 MB. A vision model then scores it on a fixed set of traits (18 for UI, 13 each for icons and illustrations), such as layout density, radius, shadow, navigation pattern, CTA hierarchy or stroke weight, and turns the result into a downloadable Markdown brief

## Using it with agents

The gallery has no API, MCP or llms.txt, so use posts as visual references you describe to the agent. The brief generator is the agent-facing part. It writes a style file for your chosen tool: Cursor (`.cursorrules`), Claude Code (a Markdown file kept in the project), Lovable or v0 (a first message), or image models such as Midjourney, Stable Diffusion, DALL·E and Firefly (a prompt prefix). The site says briefs keep to style-level patterns and leave out product names, exact brand colours, logos and copy, so the result reads more like a small DESIGN.md than a clone spec.

## Watch out for

- You need a free account to generate and download briefs, and after 5 briefs the paid tier was not yet on sale
- Images are embedded from third-party hosts, mostly X's media CDN, so posts break if the original is deleted
- Many posts are concept shots from social media, not shipped products. Treat them as style ideas, not proven patterns
- There are no stated terms of use, and no licence for the gallery or the generated briefs

## Reusable ideas

- Split an inspiration feed by device class, not just by app category
- Credit and link the designer on every post in a curated feed
- Turn a reference image into a fixed checklist of style traits before writing any prompt
- Format one analysis differently for each AI tool instead of giving everyone the same prompt

## Related

[Refero Styles](refero-styles.md), [getdesign.md](getdesign-md.md), [Collect UI](collect-ui.md), [Mobbin](mobbin.md)
