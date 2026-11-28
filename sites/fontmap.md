---
title: Fontmap
description: An interactive map of 1,100+ Google Fonts placed by visual similarity, open source under MIT.
url: https://github.com/tfrere/fontmap
type: tool
formats: interactive map · UMAP projection of Google Fonts
topics: [typography-and-styles, inspiration]
verdict: useful
agent: []
pricing: free
licence: The repository is released under the MIT licence. The Google Fonts themselves keep their own licences (mostly OFL).
licence_class: open-source-permissive
reviewed: 2026-11-28
status: active
related: [usecolor, getdesign-md, ramps]
---
[← Atlas](../site/home.md) · Topics: [typography-and-styles](../topics/typography-and-styles.md), [inspiration](../topics/inspiration.md)

# Fontmap

## What it is

Fontmap is an interactive map of 1,100+ Google Fonts arranged by visual similarity. Each font is plotted in a two-dimensional space derived from FontCLIP embeddings and a UMAP projection, so the reader can pan and zoom across the map and watch similar fonts cluster together. The repository is small and MIT-licensed, with a live demo on Hugging Face Spaces.

## When to open it

Open it when choosing a typeface and you want to see alternatives that look alike rather than share a category name, or when exploring how letterforms cluster across weights, widths and styles.

## Most useful

- **Similarity, not tags**: fonts placed by how they look, close to their nearest visual neighbours
- **Explorable at scale**: pan and zoom across 1,100+ fonts at review instead of scrolling a list
- **MIT repository**: the code and data pipeline are free to study and reuse

## Using it with agents

There is no MCP server, API or llms.txt. The work is visual exploration; the repository offers the embedding and projection pipeline for anyone building a similar tool.

## Watch out for

- The map's 2D layout is a projection, so the exact neighbours depend on the model and must be judged visually
- Font licences vary (mostly OFL); check each font's own licence before shipping it

## Reusable ideas

- Place alternatives by visual similarity so "more like this" is an interaction, not a search query
- Show nearest neighbours explicitly, since they are the useful output of a similarity map

## Related

[Usecolor](usecolor.md), [getdesign.md](getdesign-md.md), [Ramps](ramps.md)
