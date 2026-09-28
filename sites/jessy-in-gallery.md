---
title: Jessy In's Gallery
description: Social art gallery built on MoMA's open collection, with shared two-player curation, live chat, postcards and WebMCP tools for browser agents.
url: https://gallery.jessyin.world
type: gallery
formats: art browsing gallery · shared curation game
topics: [inspiration, ai-interfaces]
verdict: niche
agent: []
pricing: free
licence: Free, no accounts. The terms call it a personal, non-commercial project with no uptime promise. Artwork images and metadata come from the Museum of Modern Art's open collection; the site claims no rights to the works, which stay with their creators and rights holders
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [minimal-gallery, designeer, shape-of-ai]
---
[← Atlas](../site/home.md) · Topics: [inspiration](../topics/inspiration.md), [ai-interfaces](../topics/ai-interfaces.md)

# Jessy In's Gallery

## What it is

A personal project by Jessy In that turns the MoMA open collection into a browsable, social art gallery. It has three views: a shuffled grid of works, an "uncovered" globe that plots each work viewed so far by the artist's home country, and "curate together", where two visitors take turns choosing pieces for a shared mini gallery and cannot go back to a piece they passed. Visitors get a random anonymous name, can see what others are looking at and chat in real time, and can turn a work into a postcard. Short descriptions of each work are written by AI from its title, artist, date and medium. It is built with Next.js, uses PartyKit for the live features and the Anthropic API for descriptions.

## When to open it

Open it for fine-art references (prints, drawings, photographs, design objects) instead of the usual UI shots, when a moodboard needs colour, composition or texture ideas from outside the web. It is also worth a look as a working example of a site that exposes tools to browser AI agents.

## Most useful

- **Random draws from the MoMA collection**: the detail view shows the work's metadata and an AI description, and links back to the work's page in the MoMA collection
- **"Curate together" rounds** that force quick, final picks, useful for group moodboarding
- **The globe view** as a record of the artists' home countries you have covered
- **In-browser postcards**: the image is made on your device and the To, From and Message fields are not sent to a server, according to the privacy page

## Using it with agents

The page registers three WebMCP tools for browsers that support the draft API: one to search works by title, artist, nationality, medium, department or classification, one to open a work in the detail view, and one to fill in a postcard draft. The postcard tool only prepares a draft; a person has to press Share. There is no installable MCP server or llms.txt. The site also has a JSON endpoint for artwork records and random draws, which is not documented.

## Watch out for

- MoMA puts its collection data in the public domain (CC0) but not its images. Rights to each work stay with the artist or estate, so use the works as references, not as assets
- AI-written descriptions may be wrong, as the terms themselves say. Check facts on moma.org
- Chat is not moderated and live presence is kept only in memory
- The privacy page says there are no analytics scripts, but the page code includes Vercel Analytics, Speed Insights and a PostHog client
- It has nothing to do with UI; treat it as an art moodboard, not a pattern library

## Reusable ideas

- Expose a site's main actions as WebMCP tools, and keep anything that shares or sends behind a person's click
- Turn curation into a two-player, turn-based game with picks you cannot undo
- Map the items you have browsed onto a globe so exploring feels like progress
- Build share images on the device so personal messages never reach the server

## Related

[Minimal Gallery](minimal-gallery.md), [Designeer](designeer.md), [The Shape of AI](shape-of-ai.md)
