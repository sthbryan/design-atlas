---
title: Mixkit Sound Effects
description: Free .wav and .mp3 sound effects with no sign-up and no attribution, under Envato's Mixkit Free License.
url: https://mixkit.co/free-sound-effects/
type: sound-library
formats: sound effects library · wav and mp3 · llms.txt index · no account needed
topics: [sound, assets]
verdict: useful
agent: [llms-txt]
pricing: free
licence: "Mixkit Sound Effects Free License, from Envato: free for commercial and non-commercial projects, with permission to download, copy, modify, distribute and publicly perform the clips in a larger work. You may not redistribute a sound on its own, as stock, inside a tool or template, or alongside source files, and you may not claim it as your own or register it with a rights-management service. Site content is © Mixkit / Envato."
licence_class: proprietary-free
reviewed: 2026-10-30
status: active
related: [freesound, soundcn, uisfx, web-kits-audio]
---
[← Atlas](../site/home.md) · Topics: [sound](../topics/sound.md), [assets](../topics/assets.md)


# Mixkit Sound Effects

## What it is

Mixkit is Envato's free stock library, and its sound effects section is a straightforward download site: no account, no attribution, `.wav` and `.mp3` files straight from the page. Clips are grouped into broad categories — click, bell, alarm, whoosh, transition, game over, laugh, horror, cat, bird — with the duration printed next to each one, so you can audition a dozen candidates in a minute. The same site also serves free stock video, music and editing templates, each under its own licence.

## When to open it

When you need one short, clean sound for a prototype and cannot take on an attribution obligation: a click for a button, a soft alarm for a failure state, a whoosh for a panel transition. The licence is easier to satisfy than Creative Commons because credit is not required, which matters when the sound ends up in a client deliverable nobody will maintain.

## Most useful

- **The Click category** (`/free-sound-effects/click/`), described on the site as button clicks and interface sounds — the shortest path from "needs a click" to a downloadable file.
- **Duration on the card**, which filters out the twelve-second ambiences when you need eighty milliseconds.
- **No sign-up**: the download link is the download link, so an agent-assisted workflow never stalls on a login.
- **`llms.txt`** at `mixkit.co/llms.txt`, a plain-text index of the library, its categories and the usage rules, written for machine reading.

## Using it with agents

`https://mixkit.co/llms.txt` is a real index: it summarises the platform, states the licence in the agent's terms, and lists the sound-effect categories with URLs, including the interface-sound one. An agent can fetch it, pick a category, and read the category page's server-rendered list of titles and durations to choose a candidate. There is no MCP server and no API. The one rule an agent must not miss: these files may not be redistributed as a collection or bundled into a template, a kit or a component library, so they belong in a product, not in a design-system package.

## Watch out for

- The collection is aimed at video editors, not interface designers: most clips are a second or two of cinematic whoosh, ambience or animal noise, with a few ambiences running past twenty seconds, and the set of genuinely usable UI sounds is small.
- The cards do not show a licence per file — the sound effects all share one licence, and the video section does not.
- Envato uses the site to sell Elements subscriptions, so the header and footer are advertising-heavy.
- No search-by-feel, no similar-sound browsing, and category names are broad enough that browsing is the only way through.

## Reusable ideas

- Drop the account requirement and the attribution requirement at once; it removes the two most common reasons a designer gives up on a free asset.
- Publish a plain-text index with the licence restated in it, so an agent quotes the terms along with the file.
- Show duration on the card, because that is the first thing a person filters on.

## Related

[Freesound](freesound.md), [soundcn](soundcn.md), [UI SFX](uisfx.md), [@web-kits/audio](web-kits-audio.md)
