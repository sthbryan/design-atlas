[← Atlas](../README.md)

# Agents and prompts

Sites built to be consumed directly by coding agents — through an MCP server, an `llms.txt` index, a CLI, or a ready-made prompt to paste in.

## Start here

- [shadcn/ui](../sites/shadcn-ui.md) — `llms.txt` plus an MCP registry; the ecosystem's agent-integration standard.
- [Kage](../sites/kage.md) — an MCP server that turns real interfaces into structured design briefs and prompts.
- [DESIGN.md](../sites/designmd.md) — an MCP server and CLI for downloading whole design systems into a project.
- [VibePrompts](../sites/vibeprompts.md) — a pure prompt library: pick a section, copy the prompt, paste it into any agent.
- [Craftwork](../sites/craftwork.md) — an asset store built for agents: OAuth MCP, a one-command setup wizard, a published `SKILL.md` and a `.well-known` API catalogue.

## All sources

- [21st.dev](../sites/21st-dev.md) — MCP server with `search`, `get_component`, `get_inspiration` and `generate` tools.
- [60fps](../sites/60fps.md) — `llms.txt` plus a separately billed MCP that searches interaction recordings and returns motion breakdowns and SwiftUI code.
- [Aura](../sites/aura.md) — a remote OAuth MCP to search its catalogue, import projects and publish specific revisions, with billing and shell access kept out.
- [Craftwork](../sites/craftwork.md) — Pro-plan MCP with semantic asset search and signed downloads, set up for several clients by one `npx` wizard.
- [DESIGN.md](../sites/designmd.md) — MCP server and standalone CLI for browsing and downloading design systems.
- [DesignMD (designmd.me)](../sites/designmd-me.md) — a CLI and installable agent skill that generate a DESIGN.md before the agent writes UI, plus `CLAUDE.md` snippets.
- [DesignMD.cc](../sites/designmd-cc.md) — `npx @designmdcc/cli <url> > DESIGN.md` with no key, and rules-file snippets for Cursor, Claude Code, Windsurf and Copilot.
- [designmd.supply](../sites/designmd-supply.md) — copy-only output in the Google DESIGN.md format; no CLI or MCP, but the whole generator prompt is open source.
- [DialKit](../sites/dialkit.md) — an Agent view of its docs in Markdown and ready prompts for wiring live motion controls into a component.
- [getdesign.md](../sites/getdesign-md.md) — `npx getdesign add <slug>` drops a brand DESIGN.md into the project; no MCP.
- [Hyperbrowser DESIGNMD](../sites/hyperbrowser-design-md.md) — a single SDK call (`web.fetch` with the branding format) you can script instead of using the UI.
- [Kage](../sites/kage.md) — MCP server with `design_brief`, `search_designs`, `get_design` and `get_component` tools.
- [Kobra](../sites/kobra.md) — `llms.txt` index and a markdown API (`/r/<name>.md`) per component.
- [Libraries.dev: Thinking orbs](../sites/libraries-dev-orbs.md) — copy-prompt buttons that include your current settings, and a free skill that scans a project for places to use them.
- [mapcn](../sites/mapcn.md) — a "copy prompt for your agent" button plus a shadcn-style CLI registry install.
- [Neuform](../sites/neuform.md) — 71 copyable prompt skills for styles and effects, each with an author and usage count.
- [OpenDesign](../sites/open-design.md) — `od mcp install <agent>` wires a local design engine and 151 DESIGN.md packages into Claude Code, Codex, Cursor and more.
- [OpenMotion](../sites/openmotion.md) — plugs your own Claude Code or Codex CLI in to generate launch videos, but exposes nothing for other agents to call.
- [posts.design](../sites/posts-design.md) — `llms.txt` documenting a public JSON search API over social post references.
- [React Bits](../sites/reactbits.md) — an `llms.txt` file listing the full component catalog for agents to parse.
- [Recent](../sites/recent-design.md) — a Skills page of design-focused agent skills with copyable `npx skills add` commands.
- [Refero Styles](../sites/refero-styles.md) — MCP integration plus downloadable `DESIGN.md` style files.
- [Screenshot to Code](../sites/screenshot-to-code.md) — a standalone generator; paste its output into your repo and let your agent refactor it against your own components.
- [Scrolltide](../sites/scrolltide.md) — every template ships with an "AI-engineered" prompt to paste into an agent.
- [shadcn/ui](../sites/shadcn-ui.md) — `llms.txt`, an MCP server, and a natural-language component registry.
- [TypeUI](../sites/typeui.md) — `npx typeui.sh pull` for style skills from an MIT registry, plus a hosted OAuth MCP that serves skills and prompts.
- [TypeUI DESIGN.md Extractor](../sites/design-md-chrome.md) — writes a `SKILL.md` or DESIGN.md from the open tab for skill-aware agents.
- [UI SFX](../sites/uisfx.md) — `llms.txt`, a Markdown agent guide, a copy-ready prompt and a JSON cue catalogue covering the whole integration.
- [UIAble](../sites/uiable.md) — mentions Figma MCP for design-to-code flows (no dedicated MCP/CLI of its own).
- [VibePrompts](../sites/vibeprompts.md) — a library of prompts organized by page section, for any AI assistant.
- [VibeUI](../sites/vibeui.md) — 92 one-click layout prompts designed to be pasted into an agent with a style screenshot attached.

## Patterns worth reusing

- Ship an MCP server with a few narrow, well-named tools (search, get_component, get_design) instead of one do-everything tool.
- Publish an `llms.txt` index as a lighter-weight alternative to a full MCP server.
- Give agents a simple "copy prompt" button as a low-effort agent hook when a full MCP integration isn't justified yet.
- Keep a versionable "prompt" layer as the spec — shorter and more editable than the component it eventually generates.
- Match a new registry's install convention to an already-established one (like shadcn's CLI) so it feels native to existing projects.
- Publish discovery files (a `SKILL.md`, a `.well-known` API catalogue, an MCP server card) so agents find the product without scraping (Craftwork).
- Offer a one-command installer that configures the MCP server for several agent clients at once (Craftwork, OpenDesign).
- Scope an MCP tightly and require explicit revision IDs for writes, so an agent can't silently overwrite newer work (Aura).
- Write the agent guide as a full workflow: review the app first, map real outcomes rather than raw clicks, clean up on unmount, and report what was wired at the end (UI SFX).
- Ship rules-file snippets (`CLAUDE.md`, `.cursor/rules`, Copilot instructions) that tell each agent to run the tool and use its output as ground truth (DesignMD.cc, designmd.me).

## Pitfalls

- Vet third-party CLIs and MCP servers before running them inside an automated agent workflow.
- A registry that accepts third-party sources needs a provenance check before installing an external one via MCP.
- Prompt-generated output quality depends on the model used, not just the prompt — review the result the same way you would any generated code.
- Some agent-ready catalogs restrict commercial reuse of the underlying code (Commons Clause, proprietary tiers) — treat them as ideas, not code to repackage.
- The MCP is often a separate paid plan even when browsing is free (60fps, Craftwork); check what an agent can reach without a subscription.
- `llms.txt` and robots.txt can disagree (posts.design advertises an API that robots.txt disallows), and several sites' terms forbid scraping outright; use the official CLI, API or repo.
- Skill directories list third-party repositories; read a skill's source before installing it (Recent).
- Some "agent-powered" tools drive your agent rather than exposing anything to it (OpenMotion); don't expect an MCP or API from them.

## Related topics

- [DESIGN.md files](design-md.md)
- [Documentation](documentation.md)
- [Components](components.md)
- [Motion](motion.md)
- [Assets](assets.md)
