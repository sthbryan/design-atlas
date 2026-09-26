[← Atlas](../README.md) · Topics: [components](../topics/components.md), [landing-pages](../topics/landing-pages.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Kibo UI

- **URL:** https://www.kibo-ui.com
- **Type:** component registry (shadcn/ui) · blocks · MCP server
- **Topics:** components, landing-pages, agents-and-prompts
- **Pricing / licence:** free; MIT (repo `shadcnblocks/kibo`, about 3.9k GitHub stars at review)
- **Reviewed:** 2026-09-25

## What it is

Kibo UI is a shadcn/ui companion registry started by Hayden Bleasel. Where shadcn/ui wraps Radix primitives, Kibo wraps heavier headless libraries to give you higher-level pieces with real behaviour: a Gantt chart, a Kanban board, a rich-text editor, a colour picker modelled on Figma's, a dropzone, an image cropper, a QR code generator. At review time the header counted 41 components, 28 blocks and 1,101 "patterns" (numbered variations of the shadcn primitives such as accordions, alerts and buttons). The GitHub repo now sits under the shadcnblocks organisation, and the site header links out to Shadcnblocks.

## When to open it

When an app needs a functional component that shadcn/ui doesn't ship (scheduling, roadmaps, file upload, code blocks, video player, contribution graph) and you want it themed with the same CSS variables as the rest of your shadcn project. Also when you need a quick marketing or company section: the blocks cover hero, feature, pricing, FAQ, CTA, testimonial, stats, team, changelog, careers and footer.

## Most useful

- **Data-heavy components**: Gantt, Kanban, Calendar, Table, Tree and List, each composable from smaller exported parts.
- **Input and media**: Color Picker, Dropzone, Image Crop, Image Zoom, Editor, Video Player, Rating, Tags and Combobox.
- **Small polish pieces**: Announcement, Banner, Relative Time, Ticker, Status, Pill, Avatar Stack and Theme Switcher.
- **Blocks**: 28 full sections, from a collaborative canvas and a roadmap to about, pricing and footer layouts.
- **Patterns**: a large browseable set of ready-made compositions of the base shadcn primitives.

## Using it with agents

Install a component with `npx kibo-ui add <name>` (for example `gantt`), which copies the source into `@/components/kibo-ui/` and installs dependencies; the same items are served as shadcn registry JSON under `/r/<name>.json`. The docs describe a remote MCP server at `https://www.kibo-ui.com/api/mcp/mcp`, reached through `mcp-remote`, for asking an agent which components exist and how to use them. No `llms.txt` was published (the URL returned 404).

## Watch out for

- The AI chat components that Kibo was once known for are gone from the registry; the sidebar now points to Vercel's AI Elements instead, although the introduction still mentions AI chat primitives.
- Only the CSS-variables mode of shadcn/ui is supported, and shadcn must already be initialised.
- The MCP endpoint answered a test handshake with a server error during this review, so confirm it works before relying on it.
- Commits have slowed (last push in May 2026) since the move to the shadcnblocks organisation.

## Reusable ideas

- Wrap a proven headless library in shadcn-style parts instead of building complex widgets from scratch.
- Ship each complex component as small exported pieces (header, column, item) so teams can rearrange them.
- Offer numbered variants of every primitive so people can pick a starting point instead of styling from zero.
- Pair a component library with full-page sections so the same tokens carry through app and marketing pages.

## Related

[shadcn/ui](shadcn-ui.md), [Magic UI](magic-ui.md), [21st.dev](21st-dev.md), [mapcn](mapcn.md), [Prompt Kit](prompt-kit.md)
