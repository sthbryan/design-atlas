---
title: Imageory
description: Small personal gallery of 125 AI-generated backgrounds and textures, each with its full prompt ready to copy; no licence stated.
url: https://www.imageory.in
type: prompt-library
formats: AI image gallery · prompt library
topics: [assets, agents-and-prompts]
verdict: niche
agent: [prompts]
pricing: free
licence: Free to browse without an account; a free account (email or Google) adds favourites. No terms, privacy page or licence is published, for either the images or the prompt text
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [vibeprompts, fffuel, poly-haven]
---
[← Atlas](../site/home.md) · Topics: [assets](../topics/assets.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Imageory

## What it is

Imageory is a small, personal gallery of AI-generated images, each shown with the full text prompt that produced it. It is made by Palak (@palakonweb on X). At review it held 125 images across 16 mood-based collections, including Skyart, Whimsical, Landscapes, Landscape texture, Noise, Gradients, Blue cosmos, Dark and Surreal, plus a "Palak's fav" set. It is a Next.js app with a Supabase backend, and images are served from Cloudflare R2. Entries record a style, a few tags and a date, but the model used is left blank.

## When to open it

Open it when you need an atmospheric background, hero texture or gradient and want a prompt you can rerun or change instead of a stock photo. It is also handy for seeing how a certain look (painterly sunset, grainy gradient, dreamy sky) is written out in words. With about a hundred images it will not replace a real stock or asset library.

## Most useful

- **Prompt next to every image**: each prompt is a long, specific description of subject, light, palette, texture and aspect ratio, and a good model for how to write your own
- **Copy prompt and download image** buttons on each entry
- **Prompt search** plus mood collections, so you can jump straight to gradients, noise or landscapes
- **Mostly wide renders**: about three quarters of the images are roughly 16:9 (around 1672 × 941), which suits hero banners and section backgrounds; the rest are portrait or square

## Using it with agents

There is no API, MCP server or llms.txt; every other path on the site redirects to sign-up. Copy a prompt into an image model to make your own version, or give it to a coding agent as the brief for a generated background. Treat the prompts as starting points: the site does not say which model made each image, so the same text will look different elsewhere.

## Watch out for

- No licence is stated. The images are AI output from an unnamed model and service, so check that tool's terms before shipping one in a product
- The collection is small and made by one person, and could change or vanish without notice
- Unknown routes send you to a sign-up screen, which makes deep links unreliable
- Prompts often describe a painterly or cinematic style; they are less useful for flat UI illustration

## Reusable ideas

- Store the prompt with every generated asset, so it can be regenerated or tweaked later
- Group images by mood (noise, gradients, sky) rather than by subject, the way designers look for backgrounds
- Write background prompts with the aspect ratio and colour palette spelt out
- Put copy-prompt and download on the card itself, one click away

## Related

[VibePrompts](vibeprompts.md), [Fffuel](fffuel.md), [Poly Haven](poly-haven.md)
