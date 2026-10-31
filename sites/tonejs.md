---
title: Tone.js
description: MIT Web Audio framework with synths, effects and scheduling, for building interface cues instead of downloading them.
url: https://tonejs.github.io
type: js-library
formats: JS library (npm `tone`) · typed API docs · runnable examples
topics: [sound, documentation]
verdict: useful
agent: []
pricing: free
licence: MIT, both in the repository `Tonejs/Tone.js` (about 14.8k stars at review) and on the npm package `tone` 15.1.22.
licence_class: open-source-permissive
reviewed: 2026-10-30
status: active
related: [cuelume, freesound, mixkit-sound-effects, web-kits-audio]
---
[← Atlas](../site/home.md) · Topics: [sound](../topics/sound.md), [documentation](../topics/documentation.md)


# Tone.js

## What it is

Tone.js is a framework on top of the Web Audio API for making sound in the browser: oscillators and synthesisers (`Synth`, `AMSynth`, `FMSynth`, `MetalSynth`, `NoiseSynth`, `PluckSynth`, `PolySynth`), samplers and players, effects (`Reverb`, `FeedbackDelay`, `Chorus`, `Phaser`, `Distortion`, `PitchShift`), components for envelopes, filters, compression and metering, and core pieces for contexts, gains and timing. At review the documentation covered version 15.1.22 and the npm package carried the same version, both MIT. It is meant for interactive music, but it is also the shortest route to a synthesised interface cue: an envelope on an oscillator is a click, and a filtered noise burst is a whoosh.

## When to open it

When a sound has to be generated at runtime rather than shipped as a file — a cue that follows a drag, a tone that changes pitch with progress, a confirmation chime that must be identical across platforms and tiny in bytes. It is also the right tool when you need to shape a downloaded sample: filter it, add a short envelope, render it once and ship the result.

## Most useful

- **Synthesisers with presets of their own**: `MetalSynth` for bells and clicks, `FMSynth` for glassy tones, `PluckSynth` for short plucks; each exposes envelope and harmonic settings, so a cue can be tuned rather than assembled.
- **Effects chain**: reverb and delay on a single short click is what separates a cheap beep from a designed sound.
- **`Offline`**: render a graph faster than real time, which is how you produce a file from a patch instead of shipping the patch.
- **Examples**: a gallery of runnable patches, each with the source next to it, which is more useful for learning a cue than reading the API reference.
- **Typed docs**: one searchable page per version, with every class, method and default.

## Using it with agents

There is no `llms.txt` (a request answers 404) and no MCP server. The docs are a single versioned HTML page with a search index, so an agent can read `https://tonejs.github.io/docs/15.1.22/index.html` in one fetch and work from the class list, then open an example page for the shape of a real patch. Give the agent the cue in sound terms — duration, pitch movement, attack and decay — because "make it feel like a camera shutter" produces worse code than "40 ms noise burst, band-passed at 2 kHz, fast decay".

## Watch out for

- This is an audio framework, not a UI sound kit: nothing here tells you which cue belongs on a toggle. The taste still comes from the component libraries and sound references.
- Browsers block audio until a user gesture, so the context has to be resumed on the first click or keypress; a page that plays on load will stay silent and look broken.
- The docs are versioned in the URL, so examples found in a blog post can point at an older major version with different constructors.
- Synthesis is unforgiving: a badly tuned envelope sounds worse than a stock click, and the difference is mostly time spent listening rather than reading.
- It is a large dependency for one chime; for a single fixed sound, a file from a library is cheaper.

## Reusable ideas

- Put runnable examples beside the API reference, one page per idea, instead of burying them in a tutorial.
- Version the documentation URL so an old example is obviously old.
- Offer offline rendering in the same API as live playback, so a sound can be designed in the browser and exported from it.

## Related

[Cuelume](cuelume.md), [Freesound](freesound.md), [Mixkit Sound Effects](mixkit-sound-effects.md), [@web-kits/audio](web-kits-audio.md)
