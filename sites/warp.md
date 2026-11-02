---
title: Warp
description: Developer site built as a terminal, with bracketed nav keys, numbered figure captions and a YAML file annotated in the margin.
url: https://www.warp.dev
type: website
formats: product site · annotated config-as-code sample · live task grid · terminal download and early access
topics: [landing-pages, documentation]
verdict: useful
agent: []
pricing: freemium
licence: Free terminal download with early access requested for the cloud product; plan prices were not on the page read at review. The platform is proprietary
licence_class: proprietary-paid
reviewed: 2026-11-02
status: active
related: [spacedrive, yaak, vercel-web-design-guidelines]
---
[← Atlas](../site/home.md) · Topics: [landing-pages](../topics/landing-pages.md), [documentation](../topics/documentation.md)


# Warp

## What it is

Warp's home page is designed as if it were the product: monospace everywhere, a nav written as bracketed key hints (`[C] Configuration`, `[S] SDLC`, `[Q] Quality loop`), and sections introduced by figure captions in the same voice — "fig. 1 — the factory". The most striking piece is a `factory.yaml` listing where every field is explained in the right margin, aligned to its line: alias, repositories, secrets, MCP servers, cloud providers, agent defaults. It reads like documentation and works as a sales page.

## When to open it

Open it when you are presenting a configuration format on a marketing page and need a reference for annotated code, or when a developer audience justifies a monospace, terminal-flavoured identity instead of the usual hero-plus-screenshot.

## Most useful

- **Margin annotations on code**: each key explained on the same baseline as the line, so the sample never has to be read separately from its meaning.
- **Figure captions instead of section titles** ("fig. t4 · the factory"), which give the page a technical register without gimmicks.
- **A live status grid** (queued, working, waiting, shipped) drawn with block characters and a small legend, plus totals for tasks and merged changes.
- **Nav as keyboard hints**, which tells a terminal user how the page thinks about interaction.
- **One download link beside the early-access ask**, so the commercial product and the free tool are not confused.

## Using it with agents

No `llms.txt` or MCP server was found at review. The page is static text, so an agent can read the YAML sample and the annotations as plain content, which is unusual for a marketing page and useful when briefing a model on a config schema.

## Watch out for

- The monospace, all-lowercase treatment costs readability on long lines; the page is better scanned than read.
- Numbers on the status grid are illustrative figures, not a live system.
- The product framing changed from terminal to cloud factories, and the page carries both without reconciling them.
- Early access means the thing being sold is not generally available.
- The aesthetic is a strong commitment; it suits infrastructure and would be wrong for a consumer product.

## Reusable ideas

- Annotate a code sample in the margin rather than in a caption below it.
- Label sections as figures to set a technical tone without illustrations.
- Put keyboard hints in the navigation when the audience lives in a terminal.
- Show a status board with a legend instead of describing states in prose.

## Related

[Spacedrive](spacedrive.md), [Yaak](yaak.md), [Vercel Web Design Guidelines](vercel-web-design-guidelines.md)
