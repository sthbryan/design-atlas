---
title: Screan
description: Free MIT browser studio that exports store screenshots for every size and language as one ZIP.
url: https://screan.app
type: tool
formats: tool · open-source web app
topics: [assets, landing-pages]
verdict: useful
agent: []
pricing: free
licence: free, no account; source is MIT (© 2025 Patrice Cassard, repo `cassardp/Screan`). Optional Buy Me a Coffee. AI translation uses your own Claude API key and is billed by Anthropic
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [before-click, appshot-gallery, ui-camera]
---
[← Atlas](../README.md) · Topics: [assets](../topics/assets.md), [landing-pages](../topics/landing-pages.md)

# Screan

## What it is

Screan is a free, browser-only studio for making App Store and Google Play listing screenshots, made by the developer Patrice Cassard. You drop in raw captures, choose a layout (text at the top, centre or bottom), style the headline and subheadline, set a gradient or image background and a device frame, then export every size you need as one ZIP. It covers iPhone, iPad and Mac for Apple, and phones and tablets for Android. It is plain HTML, CSS and JavaScript with no build step: JSZip handles the ZIP, Lucide supplies the icons, and projects are saved in the browser's IndexedDB. The GitHub repo had 15 stars at review, and the app was at version 1.07.

## When to open it

- When you need a clean, consistent set of store screenshots for an indie app and don't want a subscription tool or a Figma template.
- When you ship in several languages and want one layout exported for every locale in one go.
- When you want a store screenshot generator you can fork and self-host.

## Most useful

- **Batch export**: every format and every language is rendered into one ZIP in one click.
- **Store-safe PNGs**: the exporter writes 8-bit RGB PNGs with no alpha channel, because App Store Connect rejects transparent screenshots.
- **Twelve languages** with per-language headline and body text, typed by hand or filled by the optional AI translation.
- **Typography controls**: SF Pro and New York on macOS or Segoe UI on Windows, plus eleven Google Fonts, each with five weights and preset or custom sizes.
- **Screenshot placement**: offset, rotation, scale, border and shadow for the device image.

## Using it with agents

There is no API, CLI or MCP server. The built-in AI feature only translates captions: it calls the Anthropic Messages API straight from the browser with a key you paste in, and the key is kept in localStorage. Because the whole app is a static, MIT-licensed folder, an agent can clone the repo, change the defaults or formats in `js/config.js`, and deploy your own copy.

## Watch out for

- The Claude key sits in plain localStorage and is sent from the browser. Use a restricted key and clear it on shared machines.
- Work lives only in this browser's IndexedDB. Clearing site data deletes projects, and nothing syncs across devices.
- Frames are generic rounded rectangles, not photoreal device mockups, and there are no templates or a gallery of examples.
- No terms or privacy page is published. The page loads Vercel analytics.

## Reusable ideas

- Encode store rules (sizes, no alpha channel) in the exporter itself so a wrong upload cannot happen.
- Group output by language and format folder in the ZIP, matching how the store consoles ask for it.
- Keep translation optional and "bring your own key", so the free tool has no running costs.
- Fall back to the operating system's native fonts so captions match platform typography.

## Related

[before.click](before-click.md), [AppShot Gallery](appshot-gallery.md), [ui.camera](ui-camera.md)
