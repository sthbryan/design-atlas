---
title: Sound
description: interface sound cues, synthesis libraries and sound-enabled components.
order: 18
---
[← Atlas](../README.md)

# Sound

Interface sounds for the web: semantic cue sets, synthesis libraries, sound-enabled components and the guidance on when sound helps at all.

## Start here

- [UI SFX](../sites/uisfx.md) — 78 semantic cues in 12 swappable packs, with CC0 audio, an MIT runtime and an agent guide that covers the whole integration.
- [Cuelume](../sites/cuelume.md) — seventeen synthesised interaction cues wired with data attributes and one `bind()` call; MIT, with an `agents.md` that includes taste rules.
- [@web-kits/audio](../sites/web-kits-audio.md) — design your own sounds as JSON patches and play them with Web Audio; MIT, with `llms.txt` and a `create-sound` agent skill.
- [sensory-ui](../sites/sensory-ui.md) — sound-enabled versions of 24 shadcn/ui components, mapped to 17 semantic roles and nine synthesised packs.
- [User Interface Wiki](../sites/user-interface-wiki.md) — the guidance layer: when sound is appropriate, volume and envelopes, and a rule set an agent can review against.

## All sources

<!-- atlas:sources:start -->
- [@web-kits/audio](../sites/web-kits-audio.md) — Declarative Web Audio synthesis with JSON sound patches, a CLI, llms.txt and a create-sound agent skill.
- [Cuelume](../sites/cuelume.md) — Seventeen synthesised interaction cues wired by data attributes and bind(), with a full agents.md guide.
- [sensory-ui](../sites/sensory-ui.md) — Sound-enabled versions of 24 shadcn components with 17 semantic roles and nine synthesised packs.
- [soundcn](../sites/soundcn.md) — 813 recorded UI and game sounds installed via shadcn CLI; 110 Blizzard clips are non-commercial only.
- [UI SFX](../sites/uisfx.md) — 78 semantic UI sound cues in 12 swappable packs; MIT runtime, CC0 audio, llms.txt and agent guide.
- [User Interface Wiki](../sites/user-interface-wiki.md) — Raphael Salaja's nine demo-rich articles on motion, sound and type, installable as a 152-rule agent skill.
<!-- atlas:sources:end -->

## Patterns worth reusing

- Name sounds by what they mean, not how they sound, so switching a pack retunes the whole product without touching code (UI SFX, sensory-ui, soundcn).
- Keep sound out of component logic: one data attribute per behaviour and a single delegated listener (Cuelume), or one `sound` prop on components you already use (sensory-ui).
- Make a sound's length follow how much the action matters: ticks for toggles, sweeps for navigation, chimes for milestones, and leave celebratory cues off until a team opts in (sensory-ui).
- Throttle frequent cues such as hover, cap how many sounds play at once and never stack duplicate loops (Cuelume, UI SFX).
- Model long-running states as loops with a handle you stop on success, failure, cancel and unmount, then play the outcome cue (UI SFX).
- Treat a sound palette as reviewable data: JSON patches you can diff and theme (@web-kits/audio), with licence, author and duration on every sound's metadata (soundcn).
- Audition a sound style by playing the same event across every pack side by side (UI SFX).
- Pair a duller press with a brighter release so a click feels like a two-part physical action (Cuelume).
- Give agents taste rules, not only an API: sound only the outcomes the user caused, use hover sounds sparingly, and always add a mute (Cuelume, UI SFX).

## Pitfalls

- Browsers only start audio after a user gesture; unlock it on the first real pointer or key input (`ui.unlock()` in UI SFX, `ensureReady()` in @web-kits/audio).
- Sound should back up visual and ARIA feedback, never replace it, and every product needs a labelled mute. Cuelume doesn't save mute or volume, so your app has to store the preference.
- Reduced motion is not a mute setting: UI SFX's guide warns against treating it as one, while sensory-ui mutes under `prefers-reduced-motion` by default unless you change its `reducedMotion` option.
- Licences can be set per sound: filter out soundcn's Blizzard clips (tagged `warcraft`) before shipping and check each item's `meta.license`; its MIT licence covers only the code.
- Recorded clips shipped as base64 add about a third to their size, so long jingles and loops make bundles heavier (soundcn).
- Almost everything here is a young 0.x release or an early preview (Cuelume, UI SFX, @web-kits/audio, sensory-ui); pin versions. Agent docs can lag the package, as Cuelume's `agents.md` did (14 sounds listed, 17 shipped).
- Synthesised packs vary in character and some suit games better than productivity tools; listen across them before choosing (UI SFX).

## Related topics

- [Assets](assets.md)
- [Components](components.md)
- [Motion](motion.md)
- [UX patterns](ux-patterns.md)
- [Agents and prompts](agents-and-prompts.md)
