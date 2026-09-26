[← Atlas](../README.md) · Topics: [sound](../topics/sound.md), [assets](../topics/assets.md), [components](../topics/components.md)

# soundcn

- **URL:** https://soundcn.xyz
- **Type:** sound library (shadcn registry)
- **Topics:** sound, assets, components
- **Pricing / licence:** free; site code MIT, most audio CC0 from Kenney, but the 110-sound World of Warcraft set is © Blizzard Entertainment and not freely licensed
- **Reviewed:** 2026-09-25

## What it is

soundcn is a shadcn-style registry of short recorded sound effects for React apps, made by the GitHub user kapishdima and started in February 2026 (about 785 stars at review time). The live registry held 813 sounds: 703 from Kenney's public-domain packs (interface, digital, impact, sci-fi, casino, RPG, jingles and two voice-over packs) and 110 clips from World of Warcraft. Installing a sound copies a TypeScript module that holds the MP3 as an inline base64 data URI, plus a small `useSound` hook and a framework-agnostic engine built on the Web Audio API. There are no runtime dependencies and nothing is fetched at play time.

## When to open it

When you want real recorded clicks, switches, pops, notifications or game-style effects rather than synthesised tones, and you want each one to live in your repo as source instead of as an asset pipeline. It is also handy for prototypes and games that need door, footstep, card, dice or laser effects.

## Most useful

- **One command per sound**: `npx shadcn add @soundcn/<name>`; `@soundcn` is listed in the shadcn public registry index, and each item also has a direct URL at `/r/<name>.json`
- **Rich metadata**: every registry item carries a plain-language description, tags, keywords, duration, file size, author and licence, so you can pick sounds without listening to all of them
- **`useSound` options**: volume, playback rate, interrupt, a `soundEnabled` flag for a global mute, stop on unmount, and `onPlay`/`onEnd` callbacks
- **Tiny files**: most UI sounds are a few kilobytes, and unused ones are dropped by the bundler

## Using it with agents

The full catalogue is machine-readable at `https://soundcn.xyz/r/registry.json`, and each item's description says what the sound means ("toggle switched on", "error"), so an agent can search by intent and install with the shadcn CLI or the shadcn MCP server. There is no `llms.txt` (it returned 404) and no agent guide, so tell the agent which interactions should make a sound and to add a mute setting.

## Watch out for

- The World of Warcraft sounds (tagged `warcraft`) belong to Blizzard; the README says they are included only for non-commercial, educational and reference use. Filter them out before shipping, and check each item's `meta.license` field
- The repository's MIT licence covers the code; the audio licence is set per sound
- Base64 adds about a third to each file's size, so long clips such as jingles and ambient loops make bundles heavier
- React only; the hook needs a client component in Next.js

## Reusable ideas

- Ship binary assets through a text-only registry by encoding them as data URIs inside typed modules
- Put the licence, author and duration on every asset's metadata, not only in the README
- Describe each sound by the event it signals so it can be searched by intent

## Related

[UI SFX](uisfx.md), [Cuelume](cuelume.md), [sensory-ui](sensory-ui.md), [@web-kits/audio](web-kits-audio.md), [shadcn/ui](shadcn-ui.md)
