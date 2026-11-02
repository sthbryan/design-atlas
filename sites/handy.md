---
title: Handy
description: Open-source speech-to-text app that pastes what you say into the focused field, sold on privacy and a single push-to-talk shortcut.
url: https://handy.computer
type: website
formats: desktop app · push-to-talk or toggle recording · local transcription · video walkthrough with transcript
topics: [landing-pages, ai-interfaces]
verdict: niche
agent: []
pricing: free
licence: Free to download and described as open source, without a licence named on the page at review. Transcription runs locally. Sponsored by named companies and funded through GitHub sponsors
licence_class: not-stated
reviewed: 2026-11-02
status: active
related: [boringnotch, oneswitch]
---
[← Atlas](../site/home.md) · Topics: [landing-pages](../topics/landing-pages.md), [ai-interfaces](../topics/ai-interfaces.md)


# Handy

## What it is

Handy is a speech-to-text app that runs on your own machine: press a shortcut, speak, release, and the transcription is pasted into whatever field has focus. The page makes four claims in a row — free, open source, private, simple — and then relies on a video walkthrough of the settings, with a full transcript printed underneath, to explain the two modes: push-to-talk, or press to start and press to stop.

## When to open it

Open it when you are designing the page for a local-first AI utility and need a way to be transparent about what leaves the device, or when you want a reference for placing a transcript under a demo video.

## Most useful

- **The four-claim row** (free, open source, private, simple) that answers the objections in reading order.
- **A transcript beside the demo video**, so the explanation survives a reader who will not press play.
- **Two interaction modes named**, with the default stated.
- **A status indicator described in the demo**: the icon lights while recording, which is the only feedback the app gives.
- **Sponsors listed as text logos**, not a carousel.

## Using it with agents

No `llms.txt`, MCP server or API was found at review. The project is on GitHub with a downloadable build, so an agent can read the source, but the transcription surface is a desktop shortcut rather than an endpoint.

## Watch out for

- The page says open source without naming a licence, so the reuse terms have to be checked in the repository.
- The walkthrough is a screen recording narrated by the developer, including mistakes ("nothing to paste into, so it just does nothing"), which is honest but rough.
- Model size and accuracy are not stated; local transcription quality depends on hardware.
- Only one platform build is offered on the page at review, an Apple Silicon download.
- Sponsors are the only stated funding model, which is a sustainability question for a tool people would depend on.

## Reusable ideas

- Answer the four objections a privacy-sensitive tool has to face, in one row.
- Print a transcript under any demo video.
- Name the default behaviour instead of describing every option.
- Show the app's recording indicator in the demo, since that is the only state the user sees.

## Related

[Boring Notch](boringnotch.md), [One Switch](oneswitch.md)
