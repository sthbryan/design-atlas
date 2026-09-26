[← Atlas](../README.md)

# Agents and prompts

Sites built to be consumed directly by coding agents — through an MCP server, an `llms.txt` index, a CLI, or a ready-made prompt to paste in.

## Start here

- [shadcn/ui](../sites/shadcn-ui.md) — `llms.txt` plus an MCP registry; the ecosystem's agent-integration standard.
- [Kage](../sites/kage.md) — an MCP server that turns real interfaces into structured design briefs and prompts.
- [DESIGN.md](../sites/designmd.md) — an MCP server and CLI for downloading whole design systems into a project.
- [Impeccable](../sites/impeccable.md) — an Apache-2.0 design skill with 24 commands, a deterministic slop detector for CI and PRODUCT.md/DESIGN.md context files.
- [Craftwork](../sites/craftwork.md) — an asset store built for agents: OAuth MCP, a one-command setup wizard, a published `SKILL.md` and a `.well-known` API catalogue.

## All sources

- [21st.dev](../sites/21st-dev.md) — MCP server with `search`, `get_component`, `get_inspiration` and `generate` tools.
- [60fps](../sites/60fps.md) — `llms.txt` plus a separately billed MCP that searches interaction recordings and returns motion breakdowns and SwiftUI code.
- [@web-kits/audio](../sites/web-kits-audio.md) — `llms.txt`, a "Copy for LLM" button on every docs page, and a `create-sound` skill that turns a prompt or a sample's FFT into a typed sound definition.
- [Agentation](../sites/agentation.md) — a local MCP server with nine tools (list pending notes, acknowledge, resolve, a blocking watch) for hands-free, critique and self-driving review loops.
- [agentcn](../sites/agentcn.md) — agent recipes installed through the shadcn CLI or MCP, with `llms.txt`, markdown mirrors, an OpenAPI file and a `.well-known` site skill.
- [Aura](../sites/aura.md) — a remote OAuth MCP to search its catalogue, import projects and publish specific revisions, with billing and shell access kept out.
- [Carbon Design System](../sites/carbon-design-system.md) — a clean `llms.txt` of every component, pattern and package, plus a Carbon MCP behind IBMid that people outside IBM must request.
- [Craftwork](../sites/craftwork.md) — Pro-plan MCP with semantic asset search and signed downloads, set up for several clients by one `npx` wizard.
- [Cuelume](../sites/cuelume.md) — an `agents.md` with install steps, the full API, framework recipes and sound-design rules; no MCP or `llms.txt`.
- [design.dev](../sites/design-dev.md) — form-based generators for DESIGN.md, `AGENTS.md`, `CLAUDE.md`, `SKILL.md`, Cursor rules and MCP configs, and style packs at predictable URLs.
- [DESIGN.md](../sites/designmd.md) — MCP server and standalone CLI for browsing and downloading design systems.
- [DesignMD (designmd.me)](../sites/designmd-me.md) — a CLI and installable agent skill that generate a DESIGN.md before the agent writes UI, plus `CLAUDE.md` snippets.
- [DesignMD.cc](../sites/designmd-cc.md) — `npx @designmdcc/cli <url> > DESIGN.md` with no key, and rules-file snippets for Cursor, Claude Code, Windsurf and Copilot.
- [designmd.supply](../sites/designmd-supply.md) — copy-only output in the Google DESIGN.md format; no CLI or MCP, but the whole generator prompt is open source.
- [Detail (detail.design)](../sites/detail-design.md) — `npx skills add detaildotdesign/skill` turns 120+ curated interface details into rules for a polish review.
- [Details](../sites/details.md) — a Markdown twin of every public page and a paid OAuth MCP that returns ordered video frames, source URLs and implementation briefs, metered by monthly credits.
- [DialKit](../sites/dialkit.md) — an Agent view of its docs in Markdown and ready prompts for wiring live motion controls into a component.
- [Easing Wizard](../sites/easing-wizard.md) — an MCP server with seven curve tools, a keyless REST API with an OpenAPI spec, and a Claude Code plugin that audits a project for generic easings.
- [Efecto](../sites/efecto.md) — 68 MCP tools (per its docs) for building artboards on a canvas you watch, plus a REST API and three design skills; driving it from your own agent is free.
- [getdesign.md](../sites/getdesign-md.md) — `npx getdesign add <slug>` drops a brand DESIGN.md into the project; no MCP.
- [GetLayers](../sites/getlayers.md) — one long prompt per visual layer for any agent, plus a remote MCP and a published `SKILL.md` on the Full Stack lifetime tier.
- [Hallmark](../sites/hallmark.md) — an MIT `SKILL.md` for Claude Code, Cursor and Codex with `audit`, `redesign` and `study` verbs; no MCP or `llms.txt`.
- [Hyperbrowser DESIGNMD](../sites/hyperbrowser-design-md.md) — a single SDK call (`web.fetch` with the branding format) you can script instead of using the UI.
- [icons0](../sites/icons0.md) — an MCP with `search-icons`, `get-icon`, `list-collections` and `list-licenses` (API key required), plus direct shadcn registry URLs.
- [Impeccable](../sites/impeccable.md) — `npx impeccable install` sets up the skill and native hooks for about ten coding tools, and its detector returns CI-friendly exit codes.
- [interior.dev](../sites/interior-dev.md) — `llms.txt`, an `llms-full.txt` with every component's full source, and a plain-text reference page per component.
- [Kage](../sites/kage.md) — MCP server with `design_brief`, `search_designs`, `get_design` and `get_component` tools.
- [Kibo UI](../sites/kibo-ui.md) — `npx kibo-ui add` plus a remote MCP reached through `mcp-remote`; the MCP returned a server error in a test handshake at review.
- [Kobra](../sites/kobra.md) — `llms.txt` index and a markdown API (`/r/<name>.md`) per component.
- [Kombai](../sites/kombai.md) — a frontend coding agent that can drive your Claude Code or Codex CLI, a local MCP other agents can call, and gallery items with stable `kombai:` IDs.
- [Laws of UX](../sites/laws-of-ux.md) — an `llms.txt` that tells agents when to cite each law, and markdown from every page URL through `Accept: text/markdown`.
- [Libraries.dev: Thinking orbs](../sites/libraries-dev-orbs.md) — copy-prompt buttons that include your current settings, and a free skill that scans a project for places to use them.
- [mapcn](../sites/mapcn.md) — a "copy prompt for your agent" button plus a shadcn-style CLI registry install.
- [mcpcn](../sites/mcpcn.md) — MCP App widget blocks installed through the shadcn MCP server, with `llms.txt`, markdown mirrors, an OpenAPI file and a `.well-known` skill.
- [Neuform](../sites/neuform.md) — 71 copyable prompt skills for styles and effects, each with an author and usage count.
- [OpenDesign](../sites/open-design.md) — `od mcp install <agent>` wires a local design engine and 151 DESIGN.md packages into Claude Code, Codex, Cursor and more.
- [OpenMotion](../sites/openmotion.md) — plugs your own Claude Code or Codex CLI in to generate launch videos, but exposes nothing for other agents to call.
- [posts.design](../sites/posts-design.md) — `llms.txt` documenting a public JSON search API over social post references.
- [Prompt Kit](../sites/prompt-kit.md) — the shadcn MCP server pointed at its registry URL, plus `llms.txt`, `llms-full.txt` and notes for the OpenAI and Vercel AI SDKs.
- [Ramps](../sites/ramps.md) — an `llms.txt` documenting every parameter, a keyless JSON palette API, and plain-text pages for any link with `?b=`.
- [React Bits](../sites/reactbits.md) — an `llms.txt` file listing the full component catalog for agents to parse.
- [Recent](../sites/recent-design.md) — a Skills page of design-focused agent skills with copyable `npx skills add` commands.
- [Refero Styles](../sites/refero-styles.md) — MCP integration plus downloadable `DESIGN.md` style files.
- [Remocn](../sites/remocn.md) — a video-composing skill that reads a live component index with use and avoid cases, lengths and dependencies.
- [Screenshot to Code](../sites/screenshot-to-code.md) — a standalone generator; paste its output into your repo and let your agent refactor it against your own components.
- [Scrolltide](../sites/scrolltide.md) — every template ships with an "AI-engineered" prompt to paste into an agent.
- [shadcn/ui](../sites/shadcn-ui.md) — `llms.txt`, an MCP server, and a natural-language component registry.
- [shieldcn](../sites/shieldcn.md) — an agent skill and `llms.txt` covering every badge endpoint and query parameter, so agents can write badge URLs directly.
- [termcn](../sites/termcn.md) — `llms.txt`, markdown copies of every docs page, an OpenAPI file and a `.well-known` skill, with the shadcn MCP server for installs.
- [Transitions.dev](../sites/transitions-dev.md) — a skill whose `review`, `refine` and `apply` commands scan a project for ad-hoc motion and install a best-fit transition after you confirm.
- [TypeUI](../sites/typeui.md) — `npx typeui.sh pull` for style skills from an MIT registry, plus a hosted OAuth MCP that serves skills and prompts.
- [TypeUI DESIGN.md Extractor](../sites/design-md-chrome.md) — writes a `SKILL.md` or DESIGN.md from the open tab for skill-aware agents.
- [UI SFX](../sites/uisfx.md) — `llms.txt`, a Markdown agent guide, a copy-ready prompt and a JSON cue catalogue covering the whole integration.
- [UI Skills](../sites/ui-skills.md) — 306 design-engineering skills behind a routing skill, reachable by CLI, a two-tool MCP (`list_skills`, `get_skill`) and a per-skill `llms.txt`.
- [UIAble](../sites/uiable.md) — mentions Figma MCP for design-to-code flows (no dedicated MCP/CLI of its own).
- [User Interface Wiki](../sites/user-interface-wiki.md) — `npx skills add raphaelsalaja/userinterface-wiki` installs 152 craft rules that report findings as `file:line`.
- [Vessa](../sites/vessa.md) — an open `brand.json` and `llms.txt` per published brand, and an OAuth MCP that can edit and publish guidelines but cannot buy, delete or change a URL.
- [VibePrompts](../sites/vibeprompts.md) — a library of prompts organized by page section, for any AI assistant.
- [VibeUI](../sites/vibeui.md) — 92 one-click layout prompts designed to be pasted into an agent with a style screenshot attached.
- [What Ships](../sites/what-ships.md) — `llms.txt`, an OpenAPI description, a JSON search index and markdown pages, with a guide asking agents to always cite the original post.

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
- Serve every page as markdown too, either at `.md` URLs or through `Accept: text/markdown`, so agents never scrape HTML (Details, Laws of UX, What Ships, mcpcn).
- Publish a site skill under `/.well-known/agent-skills/` and an OpenAPI file next to `llms.txt`, so an agent finds the install rules without searching (agentcn, mcpcn, termcn).
- Return exact parameters and ranges from an API instead of prose, so agents use real values (Ramps, Easing Wizard).
- Put a small router skill in front of many narrow ones, so the agent loads only what the task needs (UI Skills).
- Give agents audit commands, not only generators: find default easings, ad-hoc motion or AI tells before changing anything (Easing Wizard, Transitions.dev, Impeccable, Hallmark).
- Scope write access narrowly: Vessa's MCP can publish but not buy, delete or change a URL, and Transitions.dev's `apply` waits for confirmation.
- Give every catalogue item a stable reference ID an agent can resolve without scraping (Kombai).

## Pitfalls

- Vet third-party CLIs and MCP servers before running them inside an automated agent workflow.
- A registry that accepts third-party sources needs a provenance check before installing an external one via MCP.
- Prompt-generated output quality depends on the model used, not just the prompt — review the result the same way you would any generated code.
- Some agent-ready catalogs restrict commercial reuse of the underlying code (Commons Clause, proprietary tiers) — treat them as ideas, not code to repackage.
- The MCP is often a separate paid plan even when browsing is free (60fps, Craftwork); check what an agent can reach without a subscription.
- `llms.txt` and robots.txt can disagree (posts.design advertises an API that robots.txt disallows), and several sites' terms forbid scraping outright; use the official CLI, API or repo.
- Skill directories list third-party repositories; read a skill's source before installing it (Recent, UI Skills).
- Skills and hooks act inside your agent: Impeccable's hooks run only after you approve them, and it makes a daily version check and optional telemetry calls you can turn off with environment variables.
- Many MCPs sit behind a key, an account or a tier: icons0 needs an API key, Carbon's needs an IBMid and approval, Details meters calls by credit, GetLayers needs the lifetime plan, and Kombai spends its own credits on MCP calls.
- Local MCP servers need care on shared networks: Agentation's accepts private-network origins by default, and CORS is not authentication.
- Agent docs drift from the package: Cuelume's `agents.md` listed 14 of its 17 sounds and Prompt Kit's `llms.txt` lags its sidebar, so check the package exports.
- Some "agent-powered" tools drive your agent rather than exposing anything to it (OpenMotion); don't expect an MCP or API from them.

## Related topics

- [DESIGN.md files](design-md.md)
- [Documentation](documentation.md)
- [Components](components.md)
- [Motion](motion.md)
- [Assets](assets.md)
- [AI interfaces](ai-interfaces.md)
- [UX patterns](ux-patterns.md)
- [Sound](sound.md)
