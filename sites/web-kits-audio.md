---
title: "@web-kits/audio"
description: Declarative Web Audio synthesis with JSON sound patches, a CLI, llms.txt and a create-sound agent skill.
url: https://audio.raphaelsalaja.com
type: js-library
formats: JS library (npm) · CLI
topics: [sound, agents-and-prompts]
verdict: very-useful
agent: [llms-txt, cli, skill]
pricing: free
licence: free, MIT / Open source (Buy Me a Coffee optional)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [cuelume, uisfx, sensory-ui, soundcn, dialkit]
---
[← Atlas](../README.md) · Topics: [sound](../topics/sound.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# @web-kits/audio

## What it is

@web-kits/audio is a sound synthesis library by Raphael Salaja, a design engineer who has also written about sound on the web. You describe a sound as a plain object (a source, an optional filter, an ADSR envelope, gain, panning, an LFO and effects), and `defineSound` returns a function that plays it. Sources can be oscillators, coloured noise, wavetables or samples. Effects include reverb, delay, chorus, phaser, flanger, bitcrusher, compressor, EQ and distortion, and there is 3D spatial audio. Sounds can be layered and sequenced. The README gives about 11 kB gzipped, the package was at 0.2.0 when reviewed, and the repository had about 580 GitHub stars.

## When to open it

When fixed sound palettes feel too limiting and you want to design your own interface sounds in code, keep them as reviewable JSON, and adjust them like any other design token. It also fits games, music-like interactions and sonic branding.

## Most useful

- **Patches**: JSON files that map names to sound definitions. The site's Library page lists ten by the author: core (62 sounds), crisp, mechanical, minimal, organic, playful, retro and soft (26 each), synths (17) and drums (8)
- **CLI** (`npx @web-kits/audio add | find | list | remove | check | update | init`) that installs patches from the registry, a GitHub repo, a URL or a local folder as typed TypeScript modules with a barrel `index.ts`
- **React bindings** in `@web-kits/audio/react`: `useSound`, `useSequence`, `usePatch`, `useAnalyser` and a `SoundProvider` for enabled and volume state
- Shorthands such as `sine(freq, decay)` and `noise("pink")` for quick one-liners

## Using it with agents

It publishes `/llms.txt` with the core API, the shape of a sound definition and a map of the docs, and every docs page has a "Copy for LLM" button. It also ships a `create-sound` agent skill in the repository (`skills/create-sound/`): 48 short rules covering UI event recipes, mood words, layering, effects and validation. The skill turns a prompt, or an FFT analysis of a WAV or MP3 you share, into a typed sound definition. Point the agent at `llms.txt` and the skill page.

## Watch out for

- It is a synthesis toolkit, not a ready-made set: you still decide when each sound plays and have to add a mute setting
- Browsers only start audio after a user gesture, so call `ensureReady()` from the first interaction
- The patch files carry no licence field of their own; they are covered by the repository's MIT licence
- Young 0.x API; pin the version

## Reusable ideas

- Treat sounds as data: a named palette in JSON that can be diffed, reviewed and themed
- Install design assets with a CLI that writes typed source files into the project
- Give agents a rule-based skill for creating a sound rather than a fixed list of sounds
- Reverse-engineer a reference sample into parameters, then refine them in words ("warmer", "shorter decay")

## Related

[Cuelume](cuelume.md), [UI SFX](uisfx.md), [sensory-ui](sensory-ui.md), [soundcn](soundcn.md), [DialKit](dialkit.md)
