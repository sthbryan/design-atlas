[← Atlas](../README.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# icons0

- **URL:** https://icons0.dev
- **Type:** icon search · MCP server · shadcn registry
- **Topics:** icons, assets, agents-and-prompts
- **Pricing / licence:** free (Ko-fi donations). The app's code is MIT (GitHub `marcoripa96/i0`, about 150 stars). Each icon keeps its original collection's licence. Most are permissive, but some sets on the site use attribution or copyleft licences (Emoji One under CC BY, Dashicons under GPL, for example), so filter by licence before shipping.
- **Reviewed:** 2026-09-25

## What it is

icons0 is a fast search engine over the open-source icon sets collected by Iconify, built by Marco Ripamonti. The homepage says 200k+ icons in 150+ collections. The live counter showed 236 collections, and the README describes a database of 223 collections and 303k+ icons, so treat the numbers as approximate. Search mixes keyword matching (SQLite FTS5) with semantic vector search (Gemini embeddings). Every SVG is stored in its database, so nothing depends on an icon package at runtime. It is built with Next.js, Turso and Drizzle.

## When to open it

- When you need one specific glyph and don't care which set it comes from, or want to compare "settings" or "sparkles" across dozens of sets at once.
- When an agent keeps inventing icon names that don't exist in the library you use.
- When you want a single icon as a local React component without installing a whole icon package.

## Most useful

- **Filters** by collection, category and licence, with per-collection icon counts.
- **Copy formats**: raw SVG, a typed React component, or a shadcn install command.
- **Batch fetch** of up to 20 icons in one request.
- **Stats page** showing what agents actually fetch over MCP (about 2,000 icons from 29 clients since 8 August at review, dominated by Lucide).

## Using it with agents

- MCP: `https://icons0.dev/mcp`, with four tools: `search-icons`, `get-icon` (SVG or React), `list-collections` and `list-licenses`. It needs an API key: sign in on the site and generate a token, which the setup dialog places in an `Authorization: Bearer` header. Without one the endpoint returns 401.
- shadcn: `https://icons0.dev/r/<collection>/<name>.json` works as a direct URL (for example `lucide/house`). The site shows a shorter `@icons0/...` form, but that namespace wasn't in shadcn's public registry index at review, so add it to your `components.json` first or use the full URL.
- There is no `llms.txt`.

## Watch out for

- The README's example `lucide:home` returns "not found" because Lucide renamed that icon to `house`. Have the agent search before it fetches by name.
- Installing a whole collection (`/r/lucide.json`) writes one component file per icon, which is thousands of files.
- Licences are reported per collection. The MCP `list-licenses` tool and the licence filter are the quickest way to stay within MIT or Apache sets.
- It is a small, recent one-person project (first commit February 2026). Self-hosting needs a Turso database and, for semantic search, a Google AI key.

## Reusable ideas

- Make licence a first-class search filter, not something users look up afterwards.
- Serve single icons as registry items so a project only gets the components it uses.
- Combine keyword and semantic search so both "cog" and "preferences" find the settings icon.
- Publish anonymous usage stats from your MCP so people can see which assets agents really reach for.

## Related

[Iconoir](iconoir.md), [3dicons](3dicons.md), [Animated Icons](animated-icons.md), [useAnimations](useanimations.md), [shadcn/ui](shadcn-ui.md)
