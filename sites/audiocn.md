---
title: audiocn
description: Twenty-three audio components and sixteen Web Audio hooks for React, copied into your project with the shadcn CLI.
url: https://audiocn.dev
type: component-registry
formats: 23 components · 6 blocks · 16 hooks · shadcn registry · Markdown twins of every page
topics: [sound, components]
verdict: useful
agent: [registry, llms-txt]
pricing: free
licence: MIT for the code, per the repository licence file, which spells out that one Warcraft III recording used only in the homepage demo is not covered. The audiocn/ui repository had 295 stars at review.
licence_class: open-source-permissive
reviewed: 2026-10-29
status: active
related: [cuelume, shadcn-ui, sensory-ui]
---
[← Atlas](../site/home.md) · Topics: [sound](../topics/sound.md), [components](../topics/components.md)

# audiocn

## What it is

audiocn is a registry of audio interface components for React, built the way shadcn/ui builds: the source is copied into your project, styled with Tailwind and themed with the same CSS variables, on top of Base UI. At review it listed 23 components, six blocks and sixteen hooks. The range covers meters and visualizers, faders and knobs, a full channel mixer, players and sound pads, and every component is a display layer that receives levels and values rather than opening the microphone itself.

## When to open it

- A product that already has audio and needs an interface for it: a mixer, a recorder, a player, a voice note field.
- A tool or marketing page that wants a believable level meter or waveform instead of a decorative animation.
- When you want the components to inherit your shadcn theme rather than an audio widget's default look.

## Most useful

- **Level meter**: peak and RMS readings, stereo channels, peak hold, a scale and readout, and a clip light, with mixer-style blocks of segments on the LCD variant.
- **Mixer**: a multi-channel strip layout with shared metering and keyboard navigation, which is the hardest part of this kind of UI to get right.
- **Knob and fader**: drag plus keyboard input, an editable numeric value, and decibels as the unit instead of a bare 0–1.
- **Waveform**: a static clip with a playhead, seeking, regions and markers, plus a smoothed and an "electric" variant for less literal looks.
- **Sound pad**: trigger pads with hotkeys, progress and accent colours, useful for anything sample-based.
- **Performance**: meters and visualizers paint on the animation frame without re-rendering React, so a mixer with many channels stays smooth.

## Using it with agents

`https://audiocn.dev/llms.txt` lists the docs and explains the registry namespace: add `@audiocn` pointing at `https://audiocn.dev/r/{name}.json` in `components.json`, then install by name. Every documentation page also has a `.md` twin with the install step, usage and full API, so an agent can read one page without crawling the site. No MCP server was listed at review.

## Watch out for

- The components do not play anything. They take levels and values, and wiring the Web Audio graph, a file player or an analyser is your job, whether with the included hooks or another engine.
- Accessible keyboard control is built in, but labels, mute controls and a saved volume preference are yours. Continuous animation also needs a reduced-motion path.
- One recording on the homepage is explicitly excluded from the MIT licence, so do not lift audio from the demo.
- 23 components at review. If the product has no audio, a mixer will read as decoration.
- The blocks assume a mixer-like layout; check them at narrow widths rather than letting a channel strip squash.

## Reusable ideas

- Keep the audio engine outside the components and pass values in, so the UI works with any source.
- Speak the domain's units (decibels, gain) in the API rather than normalised floats.
- Paint the fast-moving parts on the animation frame, outside React, and re-render only for labels.
- Give every continuous control keyboard handling and an editable value, not only a drag gesture.

## Related

[Cuelume](cuelume.md), [shadcn/ui](shadcn-ui.md), [sensory-ui](sensory-ui.md)
