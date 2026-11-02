---
title: Hidden Bar
description: Free MIT-licensed Mac app that hides menu bar icons behind an arrow, with ⌘-drag sorting and a second always-hidden zone.
url: https://hiddenbar.app
type: website
formats: macOS menu-bar utility · separator arrow · command-drag sorting · auto-collapse timer · Homebrew cask
topics: [landing-pages, inspiration]
verdict: niche
agent: []
pricing: free
licence: Free, MIT licensed, notarized by Apple, with no account, paywall or ads at review. The source is on GitHub. Downloads also run through a Homebrew cask or the Mac App Store
licence_class: open-source-permissive
reviewed: 2026-11-02
status: active
related: [menubarx, boringnotch]
---
[← Atlas](../site/home.md) · Topics: [landing-pages](../topics/landing-pages.md), [inspiration](../topics/inspiration.md)


# Hidden Bar

## What it is

Hidden Bar adds a separator to the macOS menu bar: everything to its left slides off-screen when you click it, everything to its right stays. At review the page claimed 14,000+ GitHub stars, and the app itself is a few megabytes. The marketing page is unusually literal for a utility — it shows the mechanism (⌘-drag to sort icons across the separator), the timer that re-collapses the bar, and a second zone for icons you almost never need.

## When to open it

Open it when you are designing an explainer for a tiny interaction, because this page shows how to make one mechanism legible in three steps: place the separator, sort the icons, click to collapse. It is also a reference for a free app's page that has no pricing section at all.

## Most useful

- **One mechanism, three numbered steps**, each with the shortcut in the heading rather than buried in prose.
- **Keyboard modifiers stated as part of the interaction** (⌘-drag to move, option-click for the second zone).
- **A stat row** (free, 14K stars, one click, macOS 10.13+) that answers objections before the FAQ.
- **Install path for two audiences**: a terminal command for developers and a download for everyone else.
- **No account, no paywall** stated plainly, which is the whole personality of the page.

## Using it with agents

No `llms.txt` or API, but the app is MIT licensed with a Homebrew cask, so an agent can read the source and install it with `brew install --cask hiddenbar`. That is the rare case where the utility itself is reachable headlessly.

## Watch out for

- Hiding icons does not stop them running; the page says so, but it is easy to misread as quitting them.
- macOS changes menu bar behaviour between releases, and this class of app tends to break on major updates.
- The article-style copy repeats the same instruction in several sections to hold search traffic.
- Stars and version numbers are dated to the review, not maintained live.
- It only organises; it does not group or tint icons.

## Reusable ideas

- Explain one mechanism with three steps and put the shortcut in the step heading.
- Offer a shell install beside the download button.
- Answer the four obvious objections in a stat row before the FAQ.
- Say what the utility does not do, in one line, near the top.

## Related

[MenubarX](menubarx.md), [Boring Notch](boringnotch.md)
