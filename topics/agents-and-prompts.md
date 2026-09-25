[← Atlas](../README.md)

# Agents and prompts

Sites built to be consumed directly by coding agents — through an MCP server, an `llms.txt` index, a CLI, or a ready-made prompt to paste in.

## Start here

- [shadcn/ui](../sites/shadcn-ui.md) — `llms.txt` plus an MCP registry; the ecosystem's agent-integration standard.
- [Kage](../sites/kage.md) — an MCP server that turns real interfaces into structured design briefs and prompts.
- [DESIGN.md](../sites/designmd.md) — an MCP server and CLI for downloading whole design systems into a project.
- [VibePrompts](../sites/vibeprompts.md) — a pure prompt library: pick a section, copy the prompt, paste it into any agent.

## All sources

- [21st.dev](../sites/21st-dev.md) — MCP server with `search`, `get_component`, `get_inspiration` and `generate` tools.
- [DESIGN.md](../sites/designmd.md) — MCP server and standalone CLI for browsing and downloading design systems.
- [Kage](../sites/kage.md) — MCP server with `design_brief`, `search_designs`, `get_design` and `get_component` tools.
- [Kobra](../sites/kobra.md) — `llms.txt` index and a markdown API (`/r/<name>.md`) per component.
- [mapcn](../sites/mapcn.md) — a "copy prompt for your agent" button plus a shadcn-style CLI registry install.
- [React Bits](../sites/reactbits.md) — an `llms.txt` file listing the full component catalog for agents to parse.
- [Refero Styles](../sites/refero-styles.md) — MCP integration plus downloadable `DESIGN.md` style files.
- [Scrolltide](../sites/scrolltide.md) — every template ships with an "AI-engineered" prompt to paste into an agent.
- [shadcn/ui](../sites/shadcn-ui.md) — `llms.txt`, an MCP server, and a natural-language component registry.
- [UIAble](../sites/uiable.md) — mentions Figma MCP for design-to-code flows (no dedicated MCP/CLI of its own).
- [VibePrompts](../sites/vibeprompts.md) — a library of prompts organized by page section, for any AI assistant.

## Patterns worth reusing

- Ship an MCP server with a few narrow, well-named tools (search, get_component, get_design) instead of one do-everything tool.
- Publish an `llms.txt` index as a lighter-weight alternative to a full MCP server.
- Give agents a simple "copy prompt" button as a low-effort agent hook when a full MCP integration isn't justified yet.
- Keep a versionable "prompt" layer as the spec — shorter and more editable than the component it eventually generates.
- Match a new registry's install convention to an already-established one (like shadcn's CLI) so it feels native to existing projects.

## Pitfalls

- Vet third-party CLIs and MCP servers before running them inside an automated agent workflow.
- A registry that accepts third-party sources needs a provenance check before installing an external one via MCP.
- Prompt-generated output quality depends on the model used, not just the prompt — review the result the same way you would any generated code.
- Some agent-ready catalogs restrict commercial reuse of the underlying code (Commons Clause, proprietary tiers) — treat them as ideas, not code to repackage.

## Related topics

- [Documentation](documentation.md)
- [Components](components.md)
- [Motion](motion.md)
