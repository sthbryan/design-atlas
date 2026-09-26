[← Atlas](../README.md) · Topics: [sound](../topics/sound.md), [assets](../topics/assets.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# UI SFX

- **URL:** https://uisfx.com
- **Type:** sound library · JS library
- **Topics:** sound, assets, agents-and-prompts
- **Pricing / licence:** Free / runtime code MIT, audio CC0 (GitHub Sponsors optional)
- **Reviewed:** 2026-09-25

## What it is

UI SFX is an open-source set of interface sounds by Romain Simon, released in July 2026. Code calls a semantic cue such as `success`, `open`, `processing` or `add-to-cart`, and a swappable "pack" decides how it sounds. There are 78 cues in 13 interaction categories (input, selection, navigation, editing, movement, communication, feedback, progress, loops, media, system, reward and commerce). Twelve packs give them different characters, among them Minimal, Soft, Glass, Arcade, Mechanical, Sci-fi, Cinematic and Zen, for 936 sounds in total: 72 one-shots and 6 seamless loops per pack. The `uisfx` npm package synthesises the sounds live in Web Audio from fixed recipes and also ships every sound as MP3 and Ogg files.

## When to open it

Open it when a web or mobile product needs quiet audio feedback for confirmations, errors, sends, uploads or rewards, and you'd rather not hunt through stock sound sites and clear licences one file at a time. It also helps you choose a sonic tone: the homepage plays the same cue across all twelve packs, next to working demos of a workspace, a shop, a game, a media player and a chat.

## Most useful

- **Semantic API**: `ui.play('complete')` stays the same in code, and `ui.setPack('arcade')` changes how the whole product sounds
- **Loop handles**: `loading`, `processing`, `recording`, `connecting`, `scanning` and `streaming` return a handle you stop when the state ends. Active loops follow a pack change
- **Built-in playback rules**: capped polyphony, no duplicate loops, cooldowns on frequent cues and saved mute/volume preferences, with a custom storage option for React Native or Electron
- **Small runtime**: about 12 kB compressed with no dependencies. The sounds are generated in the browser, so nothing is fetched at runtime
- **CC0 audio files**: MP3 and Ogg in the package for native apps, games and video

## Using it with agents

UI SFX was written with agents in mind. It publishes an `llms.txt`, an `llms-full.txt`, a Markdown agent guide, a copy-ready implementation prompt, a JSON cue catalogue and a full manifest of all 936 files. The guide asks an agent to review the app first, map real outcomes (not raw clicks) to cues, stop every loop on success, failure, cancel and unmount, add a labelled sound toggle, and report an action-to-cue map at the end. Point the agent at `https://uisfx.com/docs/agent-guide.md` and have it run `npm install uisfx`.

## Watch out for

- It is new. The package is still 0.x (0.4.0 when reviewed), so pin the version and expect API changes
- Browsers only allow audio after a user gesture, so call `ui.unlock()` on the first real pointer or key input
- Sound should back up visual and ARIA feedback, never replace it, and a mute toggle is required. The guide also warns against treating `prefers-reduced-motion` as a mute setting
- All sounds are synthesised, not recorded. Listen across the packs before choosing, because some suit games better than productivity tools

## Reusable ideas

- Name sounds after what they mean (`success`, `blocked`), not what they sound like, so the sound design can change without touching product code
- Keep long-running states as stoppable loops tied to visible UI, and play the outcome cue once the loop stops
- Show sound choices by playing the same event across every style side by side
- Ship an agent guide and copy-ready prompt that cover the whole integration, including cleanup and tests

## Related

[useanimations](useanimations.md), [animated-icons](animated-icons.md), [kinetics](kinetics.md), [vibeprompts](vibeprompts.md)
