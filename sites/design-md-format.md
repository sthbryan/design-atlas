---
title: Google's DESIGN.md format
description: Apache-2.0 specification and CLI that gives coding agents a persistent, structured description of a visual identity.
url: https://github.com/google-labs-code/design.md
type: documentation
formats: format specification · CLI · examples · agent-facing docs
topics: [design-md, documentation, agents-and-prompts]
verdict: very-useful
agent: [cli, skill]
pricing: free
licence: Apache-2.0, stated in the repository at review (29,130 stars).
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [designmd, design-md-chrome, refero-styles]
---
[← Atlas](../site/home.md) · Topics: [design-md](../topics/design-md.md), [documentation](../topics/documentation.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Google's DESIGN.md format

## What it is

DESIGN.md is a format specification, published by Google Labs, for describing a visual identity to coding agents: tokens plus the reasoning behind them in one file the agent can read on every task. The repository ships a CLI, examples and documentation aimed at agents.

## When to open it

Open it when you want a design system that an agent reads as context, and you would rather follow a published format than invent a structure.

## Most useful

- **A shared format**: files from different sources can be read by the same tooling.
- **Reasoning included**: the format asks for why, not only which hex.
- **CLI and examples**: enough to generate and validate a file without writing tooling.

## Using it with agents

The repository is built for coding agents, with a CLI, skills and agent-facing documentation; it is a format and tooling source rather than a design canvas.

## Watch out for

- A format does not supply taste; the values in a file still have to be good.
- Apache-2.0 covers the specification and tooling, not the visual identity you describe with it.

## Reusable ideas

- Put the reasoning next to the tokens, so an agent can generalise instead of copying values.
- Publish a format plus a CLI, so other tools can build on it rather than each inventing a dialect.


## Related

[DESIGN.md](designmd.md), [TypeUI DESIGN.md Extractor](design-md-chrome.md), [Refero Styles](refero-styles.md)
