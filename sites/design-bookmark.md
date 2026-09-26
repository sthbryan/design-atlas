---
title: DesignBookmark
description: Directory of about 2,500 design, dev and AI tools in 59 categories, with a page per tool, clear sponsor labels and an llms.txt with counts.
url: https://designbookmark.com
type: directory
formats: directory of design, development and AI tools · llms.txt
topics: [inspiration, assets]
verdict: niche
agent: [llms-txt]
pricing: free
licence: Free to browse; a Google sign-in syncs bookmarks. Listing a tool has been free since 18 September 2026, according to the terms. Sponsorships are arranged by email and marked on the card, and some outbound links may be affiliate links. Product names, logos and screenshots belong to their owners; no licence is given for the directory's own text
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [designeer, insposite, curations-supply, libraries-dev-orbs]
---
[← Atlas](../README.md) · Topics: [inspiration](../topics/inspiration.md), [assets](../topics/assets.md)

# DesignBookmark

## What it is

DesignBookmark is a large link directory for designers, developers and makers, linked to DjectStudio, a UI kit and template shop: its llms.txt gives a DjectStudio contact address. At review it listed 2,479 tools in 59 categories across 11 groups, with 187 added that week. The design groups are the biggest part: Design Inspiration (347), Free UI Resources (75), Design Tools (74), Icons (65), Typography (52), 3D & Motion (52), Colour & Gradient (50), Mockups (41), Design Systems (40) and Illustrations (33). The rest covers AI tools, dev tooling, marketing, productivity, platform app lists (Mac Apps alone has 229) and templates. Every tool has its own page with a screenshot, a short description, a pricing label and similar tools. The site is built with Next.js.

## When to open it

Open it when you know the kind of tool you need (a mockup generator, a colour tool, an icon set) but not its name, and want a long list you can filter. It is less useful as a quality filter: the terms say a listing is not an endorsement, and anyone can submit.

## Most useful

- **Category pages with counts**, sortable by newest or A to Z, and a Newest page for recent additions
- **Tool pages** with a pricing label (such as Freemium), linked categories and an alternatives list
- **Featured** editor's picks, which the terms say cannot be bought
- **Weekly email** of new tools
- **Clear disclosure rules**: sponsored cards are labelled and their links tagged as sponsored

## Using it with agents

It publishes an llms.txt with a short summary, key pages and every category URL with its tool count, and says each tool page carries SoftwareApplication structured data at a predictable `/tool/{slug}` address. Its robots.txt lets the main AI crawlers in with a ten-second crawl delay. There is no API or MCP server, so point an agent at the llms.txt to shortlist tools in a category, then check each one on its own site.

## Watch out for

- It is a generalist directory: many entries are Mac utilities, AI assistants and business tools that have little to do with design
- The terms say entries may be out of date and should be checked on the provider's site
- DjectStudio appears as a sponsored card on the home page
- Counts differ between pages (the home page description says 2,000+, the llms.txt says 2,479+)

## Reusable ideas

- Publish category counts in llms.txt so an agent can see how deep each section is before crawling it
- Give every entry a stable URL and structured data so it can be cited
- Keep editorial picks, sponsored slots and ordinary listings visibly apart, and write the rules into the terms
- Show an alternatives list on each entry page to keep people browsing

## Related

[Designeer](designeer.md), [Insposite](insposite.md), [Curations Supply](curations-supply.md), [Libraries.dev: Thinking orbs](libraries-dev-orbs.md)
