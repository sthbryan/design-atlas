---
title: Icon Museum
description: A hand-picked archive of 245 crafted iOS app icons with copyable palettes, designer credits and redesign history.
url: https://icon.museum
type: gallery
formats: app icon gallery
topics: [icons, inspiration, color]
verdict: useful
agent: []
pricing: free
licence: "Free to browse, no account needed / No licence for the icons: the site says names, trademarks and icons belong to their owners. The press kit (screenshots, logo, demo clips) may be used in articles with credit"
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [appshot-gallery, recent-design, 3dicons, great-apps]
---
[← Atlas](../README.md) · Topics: [icons](../topics/icons.md), [inspiration](../topics/inspiration.md), [color](../topics/color.md)

# Icon Museum

## What it is

Icon Museum is a hand-picked archive of app icons that show clear craft, started in March 2026 and updated weekly. It is a one-person project by Christo Todorov, a design engineer based in Berlin, and the press page says it has no studio and no sponsor. At review the site data listed 245 icons from 245 apps. They were sorted into 21 App Store categories, led by Productivity (47) and Health & Fitness (32), and 25 icon designers were named, including Matthew Skiles and Adam Whitcroft. The site describes itself as covering iOS and macOS, but every icon in the data at review was an iOS icon. The rules for inclusion are stated plainly: no templates, no AI-generated or stock icons, and the app must be live on the App Store or TestFlight.

## When to open it

Open it when you are designing or commissioning an app icon and want a well-chosen set of current work to compare. It also helps you find a designer to hire, because each credited icon links to that designer's portfolio and X profile.

## Most useful

- **Palettes**: each icon comes with its extracted colours, shown as a strip you can click to copy hex values
- **Browse by designer, category or colour**: plus a command palette for quick search
- **Icon history**: an app can keep older icons next to its current one, so redesigns stay on record (a handful at review)
- **Wall of Icons**: every icon on one canvas you can pan and zoom
- **Feeds**: RSS and JSON feeds at `/feed.xml` and `/feed.json` list new additions

## Using it with agents

There is no MCP server, API or real llms.txt (that path returns the app shell). For light automation, the JSON feed and the `/data/site.json` file the site loads give app names, categories, designers and palette hex codes. An agent can read these to pull colour ideas or a shortlist of references. Don't have it copy or trace the icons themselves: they are trademarks of the apps shown.

## Watch out for

- The collection is young and small (a few hundred icons), and it reflects one curator's taste
- Designer credit is sparse: only 44 of 248 icon entries name a designer
- There are no terms of use. `site.json` is internal site data, not a documented API, and could change without notice
- Screenshots of the site itself are fine to use with credit, but the icons shown are not covered by that permission

## Reusable ideas

- Publish clear curation rules (no templates, no AI output, must ship) so readers trust the picks
- Keep old versions of each item next to the current one to record how it changed
- Extract a palette from every image and make each swatch copyable

## Related

[AppShot Gallery](appshot-gallery.md), [Recent](recent-design.md), [3dicons](3dicons.md), [Great Apps](great-apps.md)
