---
title: Spacedrive
description: File app page whose hero is a device dashboard, with one card per machine and cloud, each showing connection state, storage bar and folder chips.
url: https://spacedrive.com
type: website
formats: product site · device and storage dashboard preview · totals panel · downloadable app for desktop and mobile
topics: [landing-pages, data-viz]
verdict: useful
agent: []
pricing: paid
licence: Bought once with no account, subscription or telemetry, per the page at review; the price was not shown. The app is proprietary, with a separate open-source project described in the founder note
licence_class: proprietary-paid
reviewed: 2026-11-02
status: active
related: [warp, yaak]
---
[← Atlas](../site/home.md) · Topics: [landing-pages](../topics/landing-pages.md), [data-viz](../topics/data-viz.md)


# Spacedrive

## What it is

Spacedrive connects files across devices and cloud accounts in one app, and its page makes the claim through a dashboard rather than a screenshot of a file list. The overview panel carries totals — 96.2TB, 2.4M files indexed, 1.7M content hashes, five devices, 70 TOPS of compute — above a stack of device cards. Each card names the machine or service, its platform, its connection state (LAN, Relay, Offline) and a storage bar with used and total capacity, then a row of folder chips ending in "+7 more". NAS, S3, Google Drive and Dropbox are drawn with the same anatomy as a MacBook.

## When to open it

Open it when you are designing a multi-device or multi-account dashboard and need a pattern for making unlike resources comparable, or when a product's value is aggregation and the page has to show breadth without a feature grid.

## Most useful

- **Uniform card anatomy across unlike sources**: a local disk, a NAS and a cloud bucket all get name, platform, state, capacity and contents.
- **Connection state as a badge** (LAN, Relay, Offline) rather than a coloured dot, which is legible without a legend.
- **Storage bars with the used and total values**, used over total, instead of a percentage alone.
- **Folder chips with an overflow count**, so a card hints at depth without listing everything.
- **A totals row above the stack**, giving the eye an anchor before the detail.

## Using it with agents

No `llms.txt`, MCP server or API was found at review. The page is static text and readable, so an agent can lift the dashboard vocabulary, but the app itself is a desktop client behind a purchase.

## Watch out for

- Every number on the dashboard is demo data presented as a real account; treat it as illustration.
- The founder note explains a rewrite from an open-source project to a native app, which means older references to the project may describe something else.
- "No telemetry, no account" is a strong claim worth checking in the app's own privacy terms.
- The page is long and the note to the community is the most text-heavy part; the design argument is in the first screen only.
- Device names are fictional in the preview, so the realism is stylistic.

## Reusable ideas

- Design one card that can hold a laptop, a server and a cloud bucket without special cases.
- Name connection state in words; colour alone fails at small sizes.
- Show capacity as used over total, with the bar.
- Put the aggregate figures above the list they summarise.

## Related

[Warp](warp.md), [Yaak](yaak.md)
