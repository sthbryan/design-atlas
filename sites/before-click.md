---
title: before.click
description: 361 App Store screenshot strips, paywalls and onboarding flows, plus an MIT ASO agent skill.
url: https://before.click
type: gallery
formats: gallery · agent skill
topics: [inspiration, ux-patterns, agent-skills]
verdict: useful
agent: [skill]
pricing: free
licence: free to browse with no login. Paid sponsor slots run from $29 a day to $449 a month. No terms page or licence for the images is published; the companion ASO skill is MIT
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [appshot-gallery, screan, design-mobile-apps, what-ships]
---
[← Atlas](../README.md) · Topics: [inspiration](../topics/inspiration.md), [ux-patterns](../topics/ux-patterns.md), [agent-skills](../topics/agent-skills.md)

# before.click

## What it is

before.click (it calls itself "before") is a curated gallery of App Store marketing images from well-designed iPhone and Mac apps. At review the Explore view listed 361 apps with store screenshots and icons, plus smaller sets of 14 onboarding flows and 13 paywalls, and 39 "Posts": interaction and concept clips from designers on X. Apps can be filtered by 18 store categories and by platform, and sorted by hot picks or latest. Each app card shows its rating, price, update date and a link to the store listing. The site is built with Next.js by the GitHub user alexszczurek, who also publishes an MIT-licensed ASO skill for coding agents and a long written ASO guide on the site's Insights page.

## When to open it

- When you are planning the five to ten screenshots for a new App Store listing and want to see how strong apps frame one idea per image.
- When you need real onboarding or paywall sequences to compare, not single screens.
- When you want an agent to write or audit your App Store name, subtitle and keyword field.

## Most useful

- **Screenshot sets as a sequence**: every app shows its full store strip, so you can study pacing and caption rhythm as well as individual frames.
- **Onboarding and paywall tabs**: small but hand-picked, with the same app filters.
- **Collections**: bookmark apps into named, coloured folders and share a folder by link.
- **Insights guide**: a long ASO article covering the three ranked text fields, keyword research, screenshots, preview video, ratings and localisation.
- **Claim credit and request app**: designers can claim the work they did, and anyone can suggest an app to add.

## Using it with agents

The header copies `npx skills add alexszczurek/before-skills`, which installs a single `aso` skill (MIT, 14 GitHub stars at review). It condenses the Insights guide into rules with reasons and hard numbers: character budgets for each field, a six-step keyword research procedure, screenshot guidance and an audit checklist ordered from the cheapest fix. It separates claims Apple has confirmed from industry inference. The gallery itself has no API, llms.txt or export, so treat the images as visual references you describe to the agent.

## Watch out for

- The screenshots belong to the apps shown. No licence or terms page is published, so use them for reference only.
- Counts disagree across pages: the sponsor page mentions 272 curated apps while Explore listed 361. There is also a paid first-row slot, marked as featured, next to the organic picks.
- It covers iOS and Mac only. There are no Google Play listings.
- Many routes are client-rendered, and there is no sitemap, so deep links may not preview well.

## Reusable ideas

- Show each app's whole screenshot strip in order, not a single hero frame, because the sequence is the design.
- Ship the written guide as an installable agent skill, and link the two from each other.
- Offer a "claim credit" action so designers can attach their name to the work shown.
- Label an ASO rule as confirmed or inferred so readers know how much weight it carries.

## Related

[AppShot Gallery](appshot-gallery.md), [Screan](screan.md), [design-mobile-apps (Sleek)](design-mobile-apps.md), [What Ships](what-ships.md)
