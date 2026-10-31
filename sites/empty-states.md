---
title: Empty States
description: About sixty shipped empty states, captioned by app and platform, on one static page with no filters or links.
url: https://emptystat.es
type: gallery
formats: single-page screenshot gallery · static build
topics: [error-pages, ux-patterns]
verdict: niche
agent: []
pricing: free
licence: Not stated. The page carries no licence, terms or credit line; the screenshots belong to the products shown.
licence_class: not-stated
reviewed: 2026-10-30
status: active
related: [404s, checklist-design, mobbin, 404-gallery]
---
[← Atlas](../site/home.md) · Topics: [error-pages](../topics/error-pages.md), [ux-patterns](../topics/ux-patterns.md)


# Empty States

## What it is

Empty States is a gallery of screenshots of interfaces that have nothing to show. At review the homepage held about sixty entries, every one captioned with the state, the product and the platform: no posts on Reddit for Android, no drafts in Outlook for Android, nothing shared in Sketch Cloud, nobody nearby in Airdrop for macOS, first run of iTunes on macOS. It is a Gatsby site with a title, a one-line introduction and the grid; nothing else. The screenshots date from roughly 2013 to 2020, and the image filenames show it.

## When to open it

When you are writing an empty state for a list, an inbox, a search result or a first run, and you want to see how real products split the work between a title, an explanation, an illustration and an action. It is also a decent reminder that "nothing here" is not one state: some screens have no data yet, some have no results, some were blocked by a permission or by a feature that has not shipped.

## Most useful

- **Captions as a taxonomy**: "No newsletters in Get Response", "No transactions in TransferWise for Android", "Your meeting is safe in Gmail for Android" — each names the object that is missing, which is the sentence your own empty state has to say.
- **Blocked and pending states** sit next to zero-data ones: location services not turned on in Kickstarter, and a missed-call and voicemail feature marked as coming soon.
- **Platform mix** on one page: iOS, Android, macOS and web, so you can compare how dense the same idea becomes on a phone.

## Using it with agents

Nothing machine-readable: no `llms.txt`, no MCP, no API, no export. Quotes and screenshots are the only handles, and the page has no links to the products, so an agent cannot reach the real screen. Transcribe two or three captions and the visible copy, then ask for the structure — title, one sentence of cause, one action, optional illustration — rather than showing it the image.

## Watch out for

- The gallery is frozen. The newest screenshots date from around 2020, and several of the products no longer exist, so treat it as a historical set rather than as current practice.
- No search, filters, tags or pagination: sixty images on one page, in an order you cannot change.
- Some captions are the raw image filename from Tumblr (`tumblr_mg5zrwONUP1rdf37to1_1280`) instead of a description, so a few entries are impossible to identify without looking closely.
- No licence or attribution is stated, and the screenshots are owned by the products shown.
- Screenshots vary in size and aspect ratio, so the grid is uneven; do not read it as a layout reference.

## Reusable ideas

- Caption every entry with state + product + platform; that one line is what makes an image searchable without tags.
- Keep first-run, no-results and blocked states in the same collection, so the designer has to decide which one they are solving.
- A single static page with no chrome at all is enough for a small gallery and stays fast with sixty full-size screenshots.

## Related

[404s](404s.md), [Checklist Design](checklist-design.md), [Mobbin](mobbin.md), [404 Gallery](404-gallery.md)
