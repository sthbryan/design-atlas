---
title: Freesound
description: 738,000+ Creative Commons sounds with a v2 API, per-file licences and Gen AI opt-out preferences; downloads need an account.
url: https://freesound.org
type: sound-library
formats: sound library · search and similar-sound browsing · API v2 (token or OAuth2) · bulk data packs
topics: [sound, assets]
verdict: useful
agent: [api]
pricing: free
licence: "Per sound, not per site: CC0, CC BY 4.0, CC BY-NC 4.0, plus the retired Sampling+ that the site still explains. Non-commercial sounds cannot be used in a commercial product without asking the uploader, and attribution sounds must be credited the way each licence requires. Uploaders can also state Generative AI training preferences, introduced in July 2026, which the API exposes."
licence_class: mixed
reviewed: 2026-10-30
status: active
related: [mixkit-sound-effects, soundcn, uisfx, web-kits-audio]
---
[← Atlas](../site/home.md) · Topics: [sound](../topics/sound.md), [assets](../topics/assets.md)


# Freesound

## What it is

Freesound is a collaborative library of audio recordings, started in 2005 at the Music Technology Group of Universitat Pompeu Fabra in Barcelona and still run from there. At review it described itself as a collection of 738,124 sounds: interface clicks, foley, ambiences, instruments, short musical phrases and the mess that comes with twenty years of uploads. Search works by keyword and tags, and every sound page shows a waveform, the licence badge, the uploader, the duration and a column of sounds that sound alike. Downloads require a free account: the download URL redirects to the login page.

## When to open it

When a downloaded sound is the right answer and a synthesised cue is not: the specific click, the paper rustle, the soft chime that a sound designer would record. It is also the only practical source here for licence-clean ambience and foley under a permissive licence, because each file states its own terms.

## Most useful

- **Per-file licence badges** (CC0, CC BY, CC BY-NC), visible before you download and filterable in search, so a commercial project can be restricted to CC0 and attribution sounds from the start.
- **Similar sounds**: every sound page offers content-based neighbours, which is faster than guessing tags when you know the texture you want but not the words for it.
- **API v2**: token or OAuth2 authentication, with resources for search, sounds, users and packs, plus audio descriptors for content-based queries. Client libraries are listed in the docs.
- **Bulk downloads for research**: a Data Packs Portal for large dumps, separate from the API.
- **Generative AI preferences**: since July 2026 uploaders can state whether their sounds may train Gen AI models, and whether that includes commercial or open-source-only models; speech uploads have an extra voice-cloning opt-out.

## Using it with agents

The API is the channel. Create a token from an account, then query search and sound endpoints; results carry the licence per sound, so an agent can filter before recommending anything. The audio descriptors also let an agent search by brightness or noisiness rather than by keyword. There is no `llms.txt` (a request returns 404), and no MCP server. Because downloads sit behind a login, an unauthenticated agent can read metadata and use preview URLs but cannot fetch the original file — plan for the human to download, or pass a token through the environment rather than the prompt.

## Watch out for

- The licence is per sound, and a search page mixes CC0 with CC BY-NC without much visual weight; a single non-commercial file in a commercial product is a real problem.
- Attribution is a formality per licence, not a courtesy: CC BY sounds need the uploader's name and the source URL wherever you publish.
- The Gen AI preference panel adds a second permission layer that is not part of the Creative Commons licence, so "CC0" does not automatically mean "fine to train on".
- Preview MP3s are for auditioning, not for shipping; download the original format for the master.
- The interface is old, and previews can be heavy on a slow connection; expect a lot of clicking to compare candidates.

## Reusable ideas

- Put the licence on the item, not in a separate terms page, and make it filterable.
- Offer content-based "similar" browsing next to tags, because most people recognise a sound faster than they can describe it.
- Let contributors state downstream AI preferences explicitly, and surface those preferences through the API so bulk users cannot ignore them.

## Related

[Mixkit Sound Effects](mixkit-sound-effects.md), [soundcn](soundcn.md), [UI SFX](uisfx.md), [@web-kits/audio](web-kits-audio.md)
