---
title: Chrome Music Lab
description: Google's hands-on music experiments, useful for studying playful grids, musical controls and sound-led visual interaction.
url: https://musiclab.chromeexperiments.com/
type: tool
formats: browser music experiments · visual sound tools · Song Maker
topics: [sound, inspiration, motion]
verdict: useful
agent: []
pricing: free
licence: The experiments are free to use in a browser. Google links source code for many experiments, but no blanket licence for the site's artwork or sounds is stated; check each project before reuse.
licence_class: not-stated
reviewed: 2026-09-27
status: active
related: [chrome-experiments, web-kits-audio, soundcn]
---
[← Atlas](../README.md) · Topics: [sound](../topics/sound.md), [inspiration](../topics/inspiration.md), [motion](../topics/motion.md)

# Chrome Music Lab

## What it is

Chrome Music Lab is a set of small browser experiments for exploring music through direct manipulation. The homepage is an image-led grid of playful interfaces; individual experiments include sound visualizers, drawing tools and Song Maker, a sequencer that turns a colored grid into a melody.

## When to open it

Open it when an interface needs to make sound or music feel approachable, or when you want to study how a visual control can teach a musical idea while the user plays with it.

## Most useful

- **Homepage grid**: a clean white header sits above a full-bleed mosaic of square experiment tiles. Pixel art, small characters, a color wheel, a microphone control and a sound spectrogram give each experiment a distinct visual identity while keeping the collection coherent.
- **Song Maker**: a broad, lightly ruled note grid fills most of the viewport. A compact top bar names the tool, while the bottom row groups play, instrument, percussion, tempo, microphone, settings, undo and save controls. Clicking a cell adds a saturated note block, making the relationship between position and sound immediately legible.
- **Experiment variety**: the homepage also links to Spectrogram, Sound Waves, Kandinsky, Oscillators, Strings and other focused tools. Open each directly to study its own visual mapping.

## Using it with agents

There is no published MCP, API, CLI or agent guide. The About page links to Google's public source repository for many experiments, but the live tools are the clearest references for their rendered behavior. Give an agent a specific experiment URL and name the interaction or visual mapping to study.

## Watch out for

- Audio begins through user interaction, so provide a visible control and a non-audio way to understand the state.
- The experiments are separate mini-apps rather than a reusable component library; their controls and visual language vary.
- The site does not state a blanket licence for its visual assets or sounds. Treat the experiments as look-only references unless the specific source and asset licences permit reuse.

## Reusable ideas

- Let users build a result by placing visual marks directly in the space where the result is represented.
- Pair a dominant interactive canvas with a small, persistent set of clearly grouped playback and adjustment controls.
- Give each experiment a distinct illustration while keeping the collection's page grid and navigation consistent.

## Related

[Chrome Experiments](chrome-experiments.md), [@web-kits/audio](web-kits-audio.md), [soundcn](soundcn.md)
