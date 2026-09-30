---
title: SkySend
description: Minimal encrypted file-sharing landing page that explains its security model through a centered hero, terminal install example and concise proof points.
url: https://skysend.app/
type: website
formats: end-to-end encrypted file sharing · CLI and TUI · REST API · self-hosted
topics: [inspiration, landing-pages, agents-and-prompts]
verdict: niche
agent: [cli, api]
pricing: free
licence: Free to browse and self-host; the application is AGPL-3.0. Public instances publish their own limits, and users can also run their own server.
licence_class: open-source-copyleft
reviewed: 2026-09-29
status: active
related: [sevalla, railway, best-saas-web-designs]
---
[← Atlas](../site/home.md) · Topics: [inspiration](../topics/inspiration.md), [landing-pages](../topics/landing-pages.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# SkySend

## What it is

SkySend is an open-source service for sharing files and encrypted notes without accounts. Its homepage makes the security model part of the visual hierarchy: a centered headline emphasizes the privacy promise in green, a short explanation sits directly beneath it, and a terminal card shows the self-host command before the page expands into features, automation and setup.

## When to open it

Use it as a reference for explaining a technical trust property in a product landing page, or when you need an example of a self-hosted utility that offers both a web UI and scriptable access.

## Most useful

- **Hero**: states the task and privacy guarantee in one sentence, then gives documentation and source-code paths equal prominence.
- **Copyable install command**: the Docker command makes self-hosting tangible before visitors reach the longer guide.
- **Trust explanation**: separate sections explain client-side encryption, the URL fragment key and standard algorithms.
- **Automation section**: CLI, TUI, REST API and CI use cases are presented as parallel ways to access the same service.
- **Feature list**: describes file/note types, expiry, download limits and storage choices in plain language.

## Using it with agents

SkySend documents a cross-platform CLI and a REST API that each self-hosted instance exposes. These are usable from agent workflows and CI; the docs cover commands and endpoint behavior. There is no public MCP server or `llms.txt` listed on the homepage.

## Watch out for

- Client-side encryption and URL-fragment key handling are security claims; assess the implementation and threat model in the repository before relying on them.
- Public instance limits vary. The page distinguishes public servers from self-hosting, so check the chosen instance before sharing files.
- The AGPL-3.0 licence applies to the project code; the brand and marketing artwork are not a general-purpose asset library.

## Reusable ideas

- Put the first practical command in the hero when self-hosting is the product's key promise.
- Explain a security property as a short sequence of user-visible facts rather than a wall of cryptographic terms.
- Show browser, command-line and API access as sibling paths under one service.
- Pair trust claims with links to documentation and source code.

## Related

[Sevalla](sevalla.md), [Railway](railway.md), [Best SaaS Web Designs](best-saas-web-designs.md)
