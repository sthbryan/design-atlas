[← Atlas](../README.md) · Topics: [sound](../topics/sound.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Cuelume

- **URL:** https://cuelume.dev
- **Type:** JS library (npm)
- **Topics:** sound, agents-and-prompts
- **Pricing / licence:** free, MIT / Open source
- **Reviewed:** 2026-09-25

## What it is

Cuelume is a small npm package by Daniel Belyi that gives web interfaces a fixed palette of interaction sounds. It includes no audio files: each cue is synthesised with Web Audio when it plays. At review time (v0.2.2) the homepage and README listed seventeen cues, among them chime, sparkle, droplet, bloom, whisper, tick, press, release, toggle, success, error, page, loading, ready, pulse, scan and arrival. The package has no runtime dependencies, is ESM-only and safe to import during server rendering, and its repository had about 1.8k GitHub stars. The site shows endorsements from people at Vercel, Supabase, Intercom and others, and links to a Vercel Labs project it says uses the library.

## When to open it

When you want tasteful sound on buttons, links, toggles and completed actions without choosing or designing sounds yourself. It suits marketing sites, docs and tools where a few well-chosen cues are enough, and you don't need sound packs or a full audio engine.

## Most useful

- **Declarative wiring**: add `data-cuelume-hover`, `-press`, `-release` or `-toggle` to elements, then call `bind()` once. Listeners are delegated, so elements added later are covered without re-binding
- **Imperative calls** for outcomes: `play("success")` after a copy lands, `play("arrival")` on client-side navigation, with an optional per-play volume
- **Sensible limits**: hover sounds are throttled, one shared `AudioContext` is created lazily, and blocked autoplay or unknown names fail silently instead of throwing
- **Interactive inspector** on the homepage for auditioning every cue and its waveform at different volumes

## Using it with agents

The site publishes `https://cuelume.dev/agents.md`, a complete Markdown guide for coding agents with install steps, the attribute table, the full API, framework recipes (React, Astro, plain HTML) and sound-design rules: use hover sounds sparingly, keep success and error cues for outcomes the user caused, and always add a mute setting. There is no `llms.txt` or MCP server.

## Watch out for

- `agents.md` was behind the package at review time: it describes 14 sounds and omits `pulse`, `scan` and `arrival`, so have agents check the `sounds` export
- Mute and volume are not saved; your app has to store the preference and pass it to `setEnabled()` and `setVolume()`
- Hover, press and release only fire for fine pointers such as a mouse; toggle also responds to keyboard and touch
- Early 0.x release, so pin the version

## Reusable ideas

- One data attribute per behaviour keeps sound out of component logic
- Pair a dull press with a brighter release so a click feels like a two-part physical action
- Throttle hover sounds globally so sweeping across a menu stays quiet
- Publish an agent guide that includes taste rules, not only the API

## Related

[UI SFX](uisfx.md), [soundcn](soundcn.md), [@web-kits/audio](web-kits-audio.md), [sensory-ui](sensory-ui.md), [DialKit](dialkit.md)
