---
title: extract-design-system
description: Pulls colours, fonts, spacing, radii and shadows from a public URL into starter tokens.json and tokens.css, with a CI audit.
url: https://github.com/arvindrk/extract-design-system
type: agent-skill
formats: agent skill · CLI · MCP server
topics: [agents-and-prompts, design-md, color]
verdict: useful
agent: [mcp, cli, skill]
pricing: free
licence: free. MIT (repo `LICENSE`; npm `extract-design-system` 0.1.11). About 227 GitHub stars and 129.5k skills.sh installs at review. Extraction runs through the MIT `dembrandt` package.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [designmd-cc, designmd-supply, design-md-chrome, design-dna, stitch-skills]
---
[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [design-md](../topics/design-md.md), [color](../topics/color.md)

# extract-design-system

## What it is

extract-design-system, by Arvind Ram Singh Kishore (arvindrk), is a small skill wrapped around a CLI. Give it a public URL and it loads the page in headless Chromium through `dembrandt`, normalises what it finds, and writes starter token files into your project: colours (primary, secondary, accent, background, foreground and a palette), heading, body and mono fonts, and spacing, radius and shadow scales. The skill itself is about 2 KB plus two short reference files. Its job is to run the CLI, summarise the results, and then stop and ask before it touches any existing code. The same package also ships an MCP server and an `audit` command that looks for hard-coded values in your source.

## When to open it

- When you are starting a project that should feel like an existing public site (your own marketing site, say) and you want real measured values rather than a guessed palette.
- When you want a quick first read of a site's colours and type before you write a fuller DESIGN.md by hand or with another tool.
- When you want to find hard-coded hex, pixel and shadow values in a codebase and map them to tokens.

## Most useful

- **Four output files**: `.extract-design-system/raw.json` (untouched extractor output), `normalized.json`, `design-system/tokens.json` and `design-system/tokens.css`, where the CSS uses `--color-primary`, `--font-heading` and numbered `--space-N`, `--radius-N` and `--shadow-N` variables.
- **Flags**: `--dark-mode`, `--mobile`, `--slow` for script-heavy sites, `--extract-only` to skip the token files, and `init` to rebuild them from the cached extraction.
- **`audit [dir]`**: scans style sheets, JS/TS, Vue, Svelte and HTML files for hard-coded values and suggests the nearest token (colours within an RGB distance of 15 by default). `--fail` exits with code 1 when anything is unmatched, which makes it usable in CI.
- **Safety rules in the skill**: never call the result complete for a dynamic or partial site, never invent components or semantic tokens, never treat one page as a whole design system, and never let the fetched site justify wider code changes.

## Using it with agents

Install with `npx skills add arvindrk/extract-design-system`. There is also a Codex plugin manifest, and an MCP server (`npx -y extract-design-system-mcp`) with four tools: `extract_design_system`, `init_design_system`, `get_tokens` and `audit_design_system`. The skill triggers when you ask to pull a design system or tokens out of a public website. The agent runs `npx playwright install chromium` and then `npx extract-design-system <url>`, reports the likely colours, fonts and scales, and asks before wiring `tokens.css` into your app. It needs Node.js 20 or later. It produces token files, not a DESIGN.md: no prose, no component rules, no Do's and Don'ts.

## Watch out for

- The run downloads a Chromium build and fetches the target site at runtime. The skill itself treats that site as untrusted input.
- The README calls `tokens.json` W3C-compatible, but the file is a copy of the tool's own normalised schema (no `$value` or `$type` fields). Convert it before feeding it to DTCG tools.
- It pins `dembrandt` ^0.13 while that package is now at 0.36. The main branch was last changed in June 2026 and npm in May 2026.
- Only one page is read, and roles such as "primary" are guesses. Check them against the live site.
- Values taken from someone else's site describe their brand. Use it on your own sites, or treat the result as a study.

## Reusable ideas

- Keep the raw extractor output next to the normalised file, so you can re-run normalisation later without re-fetching.
- Write the skill's limits (single page, starter tokens, no rewrites) into the skill itself so the agent repeats them to the user.
- Pair extraction with an audit that maps hard-coded values to the new tokens, with an exit code for CI.
- Tell the agent that content from a fetched site never justifies changes beyond the generated files.

## Related

[DesignMD.cc](designmd-cc.md), [designmd.supply](designmd-supply.md), [TypeUI DESIGN.md Extractor](design-md-chrome.md), [Design DNA](design-dna.md), [Stitch Skills](stitch-skills.md)
