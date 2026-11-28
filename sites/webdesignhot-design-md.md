---
title: WebDesignHot Design MD
description: A curated catalogue of 470 DESIGN.md files in the WebDesignHot v0.2 format, with CLI and MCP for agents.
url: https://github.com/WebDesignHot/design-md
type: style-library
formats: DESIGN.md collection · CLI · MCP server
topics: [design-md, agents-and-prompts]
verdict: useful
agent: [mcp, cli]
pricing: free
licence: The repository is released under the MIT licence. Each file keeps a lineage block crediting the original brand design, and the files themselves are reconstructions, not the brands' own documents.
licence_class: open-source-permissive
reviewed: 2026-11-28
status: active
related: [getdesign-md, design-md-format, hyperbrowser-design-md]
---
[← Atlas](../site/home.md) · Topics: [design-md](../topics/design-md.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# WebDesignHot Design MD

## What it is

WebDesignHot Design MD is a curated catalogue of about 470 DESIGN.md files in the WebDesignHot v0.2 format, each describing a brand's design in the tokens-and-guides shape agents consume. Files are submitted through a CLI that lints them before opening a pull request, and an MCP server (`design-md-mcp`) lets agents list, fetch and submit files from their toolchain. The repository is MIT-licensed and asks reusers to keep the lineage block intact.

## When to open it

Open it when you want starting DESIGN.md drafts for real brands to adapt, or when you want a catalogue-then-submit workflow (browse the set, lint your own file, contribute it back).

## Most useful

- **Real-brand drafts at scale**: about 470 files at review, each in one format
- **Submit pipeline**: the CLI lints and audits a file before it becomes a fork
- **MCP access**: agents can browse and fetch the catalogue as tools
- **Lineage blocks**: every file credits the original brand design it reconstructs

## Using it with agents

Install the CLI (`npx @webdesignhot/design-md submit ./DESIGN.md`) to lint and submit, or connect the `design-md-mcp` server for catalogue access. An agent can list the files, read a brand's tokens, and adapt them rather than authoring from a blank page.

## Watch out for

- The files are reconstructions in a third-party format, not the brands' own design documents; keep lineage intact and do not present them as official
- The catalogue is community-submitted, so audit a file's tokens against your own checks before adopting them

## Reusable ideas

- Keep a lineage block in every reconstructed file so credit survives the copy
- Lint submissions with the same CLI agents use, so the catalogue stays machine-readable

## Related

[getdesign.md](getdesign-md.md), [Google's DESIGN.md format](design-md-format.md), [Hyperbrowser DESIGNMD](hyperbrowser-design-md.md)
