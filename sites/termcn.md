[← Atlas](../README.md) · Topics: [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md), [ai-interfaces](../topics/ai-interfaces.md)

# termcn

- **URL:** https://termcn.dev
- **Type:** terminal UI component library (shadcn registry)
- **Topics:** components, agents-and-prompts, ai-interfaces
- **Pricing / licence:** free; MIT (repo `shadcn-labs/termcn`); Ink and OpenTUI are also MIT
- **Reviewed:** 2026-09-25

## What it is

A shadcn-style registry of React components for command-line apps, published in two parallel sets: one for Ink and one for OpenTUI. It comes from Shadcn Labs, an independent group led by Aniket Pawar in Mumbai that says it is not affiliated with shadcn. At review time each renderer had roughly 100 components, 12 charts, 9 full-screen templates and 40 colour themes, and the GitHub repository had about 1.2k stars.

## When to open it

When you are building a CLI, a TUI dashboard or a coding-agent front end and want the same copy-in, own-the-code workflow you use for web UI instead of hand-rolling boxes, spinners and key handling.

## Most useful

- **AI set**: chat message and thread, streaming text, a collapsible thinking block, tool-call and tool-approval prompts with risk badges, a per-file change review with diffs, a model picker and a token and cost counter.
- **Data and navigation**: a sortable data grid, virtualised list, JSON and tree views, diff viewer, git status, command palette, tabs and a collapsible sidebar.
- **Forms and feedback**: multi-step wizard, date and time pickers, a path input with tab completion, multi-bar progress for parallel jobs, toasts and a notification centre.
- **Charts**: bar, line, pie, gauge, heat map and braille sparklines, plus dithered variants that give terminal charts a textured look.
- **Templates**: app shell, splash and welcome screens, a login flow, a step-by-step setup flow and a live usage monitor.

## Using it with agents

Items install with the shadcn CLI once `@termcn` is registered in `components.json` (for example `npx shadcn@latest add @termcn/ink/spinner`, or the `opentui/` path), and the namespace is listed in shadcn's public registry directory. The site publishes `llms.txt`, a large `llms-full.txt`, a Markdown copy of every docs page, an OpenAPI file and a short agent skill under `/.well-known/agent-skills/`. The MCP page points to the standard shadcn MCP server rather than a server of its own.

## Watch out for

- Ink and OpenTUI are separate trees with slightly different catalogues (the OpenTUI AI set had fewer items), so pick one renderer and stick to its namespace.
- Some features depend on the terminal: images need iTerm2 or Kitty support, and the embedded terminal needs the native `node-pty` package.
- Several themes carry product names (Vercel, Cursor, GitHub, OpenCode); these are colour homages, not official assets.
- Young project: the repository was created in April 2026 and most commits come from one maintainer.

## Reusable ideas

- Show an agent's tool call as a card with its arguments, status and elapsed time, and ask for approval with an explicit risk level.
- Put reasoning in a collapsible block so the final answer stays readable.
- Review file edits one file at a time with accept and reject per file.
- Offer a high-contrast light theme next to the usual dark palettes for accessibility.
- Keep motion and Unicode behind optional providers so the UI degrades gracefully in basic terminals.

## Related

[shadcn/ui](shadcn-ui.md), [mapcn](mapcn.md), [pdfcn](pdfcn.md), [emailcn](emailcn.md), [21st.dev](21st-dev.md)
