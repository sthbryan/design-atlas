---
title: editorcn
description: Tiptap toolbar and Notion-style block editors plus a read-only renderer, styled for shadcn apps.
url: https://www.rtecn.space
type: component-library
formats: rich text editor components (shadcn registry and npm)
topics: [components, ux-patterns]
verdict: useful
agent: [llms-txt, registry, api, skill]
pricing: free
licence: free; MIT on GitHub (repo `shadcn-labs/editorcn`), though the npm packages declare no licence field; Tiptap is MIT
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
note: The original `editorcn.vercel.app` redirects here.
related: [shadcn-ui, termcn, pdfcn, component-gallery, uiable]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [ux-patterns](../topics/ux-patterns.md)

# editorcn

## What it is

A small set of Tiptap-based rich text editors styled to match shadcn/ui, built by Abdullah Mukadam as part of the Shadcn Labs family (which says it is not affiliated with shadcn). Rather than dozens of widgets it ships a few complete pieces: a toolbar editor, a Notion-style block editor, a read-only static renderer, and two add-on extensions for images and tables. Its UI parts use Base UI, Tailwind CSS v4 and Lucide icons. The repository had about 310 stars at review time.

## When to open it

When a product needs comments, posts, notes or document editing and you want a working editor that fits a shadcn app in an afternoon, while keeping the source so you can reshape it later.

## Most useful

- **Toolbar editor**: 20+ controls for formatting, headings, lists, links, alignment, colour and history, in default, subtle and compact looks, plus embed controls for YouTube and X posts.
- **Block editor**: slash commands, drag handles and a bubble menu, with images, tables, code blocks and task lists.
- **Static renderer**: turns saved HTML or JSON back into styled read-only output for blog posts, previews or chat history.
- **Extensions**: an image placeholder that uploads or embeds by URL, and a table tool with a grid-size picker, merged cells and header row control.
- **Docs on ownership**: a clear page on which files you own after a registry install versus an npm install, and what that means for updates.

## Using it with agents

Add `@editorcn` to `components.json`, then run `npx shadcn@latest add @editorcn/editor` or `@editorcn/block-editor`; the same pieces also exist as npm packages. The site publishes `llms.txt`, `llms-full.txt`, Markdown copies of each page, an OpenAPI file and a short agent skill, and points to the standard shadcn MCP server for MCP.

## Watch out for

- The Templates page tells you to install extra controls (font size, heading select, emoji menu and others) from `/r/custom-controls/...` URLs that returned 404 at review time.
- Version ranges disagree: the docs and registry accept Tiptap 2.11.5 or later, while the npm packages require Tiptap 3.
- The registry namespace is not in shadcn's public directory, and the docs still point to the old Vercel host.
- A narrow catalogue: two editors and two extensions, so collaboration, mentions or comments are up to you.

## Reusable ideas

- Offer both a toolbar editor for short content and a block editor for long documents, sharing one serialisation format.
- Render stored rich text through a dedicated read-only component instead of mounting a disabled editor.
- Let authors pick a table size from a grid picker rather than typing rows and columns.
- Put the formatting bubble menu on selection so the canvas stays clean.

## Related

[shadcn/ui](shadcn-ui.md), [termcn](termcn.md), [pdfcn](pdfcn.md), [The Component Gallery](component-gallery.md), [UIAble](uiable.md)
