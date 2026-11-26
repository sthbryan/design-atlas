---
title: Howler.js
description: Small Web Audio playback library with HTML5 fallback, sprites and spatial audio, under MIT.
url: https://howlerjs.com
type: js-library
formats: audio library · npm package · CDN
topics: [sound]
verdict: useful
agent: []
pricing: free
licence: MIT for the library, stated in the repository. Sound files used with it keep their own terms.
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [freesound, mixkit-sound-effects, audiocn]
---
[← Atlas](../site/home.md) · Topics: [sound](../topics/sound.md)

# Howler.js

## What it is

Howler.js is a JavaScript audio library for the modern web: Web Audio by default, HTML5 Audio fallback, one consistent API. At review the site offers v2.2.3 with about 25,453 GitHub stars. It is about 7KB gzipped with zero dependencies.

## When to open it

- When interface sounds need cross-browser playback without writing codec and fallback logic yourself.
- When many small effects should ship as one file: audio sprites give named segments with lower resource use.
- When a project needs simple spatial or stereo playback in the browser.

## Most useful

- Audio sprites: define and control segments of files for precise playback with fewer requests.
- Full codec coverage across browser-ready formats, with automatic caching and reuse.
- Full control surface: play, pause, seek, rate, fade, loop, mute and volume from one API.
- Modular architecture, so you load only the parts you need.

## Using it with agents

- No agent channel (MCP, llms.txt, CLI, registry, API, prompts or skill) is published at review; the docs and the GitHub repo are the reading path.
- Install from npm or load the UMD build from a CDN; the docs include copyable examples for music players, sprites and spatial audio.

## Watch out for

- The library licence covers the code only. The sound files in a project keep their own reuse terms, so check each asset.
- Last repo push was November 2025 at review, so treat it as stable rather than actively developed.
- Some browsers still require a user gesture before audio starts; sprite playback does not remove that constraint.

## Reusable ideas

- Bundle short UI effects into one sprite file and trigger named segments, instead of dozens of asset requests.
- Default to Web Audio and fall back to HTML5 Audio so one API covers every browser.
- Give audio the same token treatment as motion: short, named cues per interaction, not ad hoc files.

## Related

[Freesound](freesound.md), [Mixkit Sound Effects](mixkit-sound-effects.md), [audiocn](audiocn.md)
