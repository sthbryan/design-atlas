---
title: Jiro
description: Prompt library of 1,454 landing pages and sections, each previewable live and copyable as one prompt for Bolt, Lovable, v0 or Cursor.
url: https://jiro.build
type: prompt-library
formats: 1,454+ templates and sections at review · live preview per entry · one-click prompt with component code · MCP server at mcp.jiro.build · Chrome extension · free tier and one-time Pro
topics: [agents-and-prompts, landing-pages]
verdict: useful
agent: [mcp, prompts]
pricing: freemium
licence: A free plan exists and Pro is sold as a one-time payment with lifetime updates, though the price did not render in the page text at review. No licence for the templates is stated on the pages read
licence_class: mixed
reviewed: 2026-11-11
status: active
related: [lovable-prompts, onepromptdesign, typeui]
---
[← Atlas](../site/home.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [landing-pages](../topics/landing-pages.md)

# Jiro

## What it is

A catalogue of landing pages and sections — 1,454 entries at review — where each one is a working preview and a prompt rather than a file. Pick a design, copy once, paste into Bolt, Lovable, Replit, v0 or Cursor, and the same layout comes back as code. The library is organised the way a landing page is built: headers, features, pricing, testimonials, FAQ, footers, plus complete pages by industry.

The claim worth examining is that the output is identical across builders on the strength of the prompt alone. That is plausible only because the prompt carries the component code and the implementation instructions, not just a description of the look; the design is encoded, not described.

There is also an MCP server at `mcp.jiro.build`, which lets an agent pull a section from the library instead of a person copying it, and a Chrome extension for the same job in the browser.

## When to open it

Open it when the fastest path to a decent section is a prompt rather than a component library, or when you want a library organised by page section and industry rather than by component type.

## Most useful

- **Live preview per entry**, so the design is judged before it is pasted.
- **One prompt that includes code and instructions**, which is why cross-builder consistency has a chance.
- **Section-level and page-level entries**, covering both a single block and an entire landing page.
- **An MCP server with a single URL**, so an agent can fetch a section by name without an API key.
- **Industry categories** — fintech, health, real estate, education — which map to how briefs arrive.
- **A free tier beside a one-time Pro**, rather than a subscription.

## Using it with agents

Two channels at review: prompts in full on each entry page, and an MCP server at `mcp.jiro.build` that an agent adds by URL and then queries by section name. There is no `llms.txt`. The MCP route does require a Jiro account and an approval step, which is worth knowing before wiring it into a workflow.

## Watch out for

- The Pro price is not in the page text, and pricing renders client-side; check it in the browser before quoting it.
- "Identical output in every builder" is a claim made by the seller, not a measured result.
- Premium templates are marked inside a library that also advertises 1,454 free entries, so the useful fraction needs checking per section.
- Testimonials are social proof for a young product; treat the counts as marketing until re-checked.
- Prompts age with the builder. A prompt tuned for last year's model produces different code this year.

## Reusable ideas

- Encode the design in the prompt, not in adjectives, when the output has to be consistent.
- Put a live preview and a copy button on the same card.
- Index by page section and by industry at once, because those are two different questions.
- Expose a library to agents over MCP with one URL and no API keys.

## Related

[Lovable Prompts](lovable-prompts.md), [OnePromptDesign](onepromptdesign.md), [TypeUI](typeui.md)
