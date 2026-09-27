---
title: Svgl
description: Searchable brand-logo SVG library with category filters, light and dark variants, copy formats, downloads and an API.
url: https://svgl.app
type: icon-library
formats: brand-logo library · API · shadcn registry · browser extensions
topics: [icons, assets]
verdict: useful
agent: [api, registry]
pricing: free
licence: Free library and MIT-licensed site code. The site explicitly says users must obtain permission before using a logo; logos and marks remain subject to their owners' rights.
licence_class: mixed
reviewed: 2026-09-27
status: active
related: [simple-icons, thesvg, iconify]
---
[← Atlas](../README.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md)

# Svgl

## What it is

Svgl is a searchable catalogue of brand marks and wordmarks presented in a responsive grid. At review the site showed 670 logos, category totals, a search field, alphabetical sorting and light/dark variants for some entries. Each card links to the brand site and exposes copy or download actions. The project also publishes API docs, a shadcn/ui registry and browser extensions.

## When to open it

- Find a product or platform mark for a clearly attributed integration list, partner panel or technology directory.
- Compare how the same logo is supplied for light and dark surfaces before building a brand list.
- Search by product name or category when checking whether a particular logo is represented.

## Most useful

- **Search and categories**: the directory divides entries into product areas such as AI, design, software and hosting, with a text search and A–Z sorting.
- **Multiple forms**: available entries can expose SVG, React TSX or JSX copy actions, direct downloads and, for some marks, alternate wordmarks or theme variants.
- **Integration**: the site links to an API, a shadcn-compatible registry and extensions for design or development workflows.
- **Source code**: the `pheralb/svgl` repository identifies the application code as MIT licensed.

## Using it with agents

Use the [API documentation](https://svgl.app/docs/api) for programmatic lookup or the [shadcn/ui registry](https://svgl.app/docs/shadcn-ui) to add supported logo components. There is no MCP or agent skill listed on the reviewed site. A successful lookup does not grant permission to use the mark.

## Watch out for

- The site displays a notice that permission must be obtained before using a logo. The MIT licence covers the repository's application code, not the third-party marks in its collection.
- Do not treat an available download or copy button as a logo licence. Check the relevant brand's official usage rules for each mark.
- A repository licence does not establish redistribution rights for every bundled SVG; confirm rights for the specific asset before packaging it.

## Reusable ideas

- Put a concise rights reminder beside the catalogue controls where users are about to copy an asset.
- Combine category browsing with direct product links so a found logo can be checked against its source.
- Expose the same asset through search, a copyable framework format and a direct download.

## Related

[Simple Icons](simple-icons.md), [theSVG](thesvg.md), [Iconify](iconify.md)
