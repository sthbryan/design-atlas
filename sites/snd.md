---
title: SND
description: A small library of handcrafted UI sounds with an npm package that plays them from code.
url: https://snd.dev
type: sound-library
formats: sound library · npm package
topics: [sound, assets]
verdict: useful
agent: []
pricing: free
licence: Free for personal, business, commercial and non-commercial use under the site's Terms of Use; no attribution needed.
licence_class: proprietary-free
reviewed: 2026-11-28
status: active
related: [uisfx, mixkit-sound-effects, freesound]
---
[← Atlas](../site/home.md) · Topics: [sound](../topics/sound.md), [assets](../topics/assets.md)

# SND

## What it is

SND is a small set of UI sound assets made with sound designers, sold as a curated library for web UIs. Each sound is matched to a common interface component, so a click on a button, a hover on a menu or a completion chime has a prepared file. The demo on the site plays the sounds next to working components, and the `snd-lib` npm package loads the library in JavaScript so a developer can trigger sounds from code.

## When to open it

Open it when a product needs a short, consistent set of interface cues (clicks, hovers, confirmations) without hunting through a stock library for a matching tone. It suits teams that want sounds designed as a set, not pulled one at a time from different packs.

## Most useful

- **Component-matched sounds**: each cue fits a real UI element rather than a generic beep
- **Code demos**: the homepage shows the sounds used beside working components, so you can judge them in context
- **npm package**: `snd-lib` lets an app call the library directly from JavaScript
- **Free terms**: the sounds are free for commercial work under the site's terms

## Using it with agents

There is no MCP server, API or llms.txt. The work an agent can do is mechanical: read the site, list the sounds by component, and help choose and drop in the files. The npm package is the integration point.

## Watch out for

- The catalogue is small by design, so it covers common components only; less common interactions need another source
- Use is free, but the sounds stay the authors' property under the Terms of Use; do not redistribute the files as a library

## Reusable ideas

- Curate sound by component instead of by style, so a product can sound coherent across screens
- Demo sounds next to live components, because a sound only reads correctly in context

## Related

[UI SFX](uisfx.md), [Mixkit Sound Effects](mixkit-sound-effects.md), [Freesound](freesound.md)
