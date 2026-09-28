---
title: Mobbin
description: The biggest library of real app screens and flows, searchable by agents through its own MCP server; strict terms.
url: https://mobbin.com
type: gallery
formats: screen and flow library · MCP server · REST API
topics: [inspiration, ux-patterns, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt, api]
pricing: freemium
licence: Freemium. Free is limited (no flows, search or MCP, 3 collections); Pro is $10/month billed yearly or $15/month billed quarterly and includes MCP; Team is $16–24 per member per month and adds the REST API. Screens stay the property of the apps shown, and the proprietary terms restrict reuse
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [collect-ui, good-ui, laws-of-ux, appshot-gallery, appinspo]
---
[← Atlas](../site/home.md) · Topics: [inspiration](../topics/inspiration.md), [ux-patterns](../topics/ux-patterns.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Mobbin

## What it is

Mobbin is a searchable library of screenshots and recorded flows from shipped products, run by Mobbin Pte. Ltd. in Singapore since 2018. At review the homepage counted 1,428 apps, more than 621,500 screens and 323,900 flows, covering iOS apps, web apps and about 200 marketing sites, with new content added weekly. You can browse by app category, screen type (login, paywall, settings), UI element (bottom sheet, toast, tab bar) and flow (onboarding, checkout, subscribing). You can also search the text inside screenshots. Flows play as video or as a clickable prototype.

## When to open it

Open Mobbin before designing a common screen or journey when you want to see how a dozen real products handle it: permission priming, paywalls, account deletion, empty states, identity checks. It is most useful for mobile, where it has the deepest coverage, and for flows, where a single screenshot misses the order of steps.

## Most useful

- **Flows**: ordered screen sequences with the transitions between them, so you can study the whole journey rather than one frame
- **Three ways to slice**: screen patterns, UI elements and flow actions are separate indexes, which helps when you know the component but not the screen
- **Text in screenshots**: search the copy itself, handy for microcopy research ("are you sure", "skip for now")
- **Collections and Figma**: save references with notes, upload your own screenshots, or paste screens into Figma with the plugin (paid plans)
- **Website sections**: heroes, pricing, testimonials and footers from the sites catalogue

## Using it with agents

Mobbin is one of the few galleries with first-party agent access. The MCP server at `https://api.mobbin.com/mcp` uses Streamable HTTP and OAuth, so no key is pasted. It is read-only and offers three tools: `search_screens`, `search_flows` and `search_sections`. Results come back with images, product names and links, and clients that support MCP Apps can show them as a gallery. For Claude Code the docs suggest adding the verified connector in Claude Desktop, or running `claude mcp add mobbin --scope user --transport http https://api.mobbin.com/mcp` and then authenticating from `/mcp`. The site also publishes `llms.txt`, `llms-full.txt`, `mcp.md`, `pricing.md` and an OpenAPI file. The REST endpoint (`POST /v1/screens/search`) needs a Team workspace key. Both the MCP server and the API are limited to 60 requests per minute.

## Watch out for

- MCP needs a paid plan, and the REST API needs Team or higher. The free tier is a limited preview with no search or flows
- There is no monthly plan, only quarterly or yearly billing, and payments are generally non-refundable
- Deep Search costs 5 AI credits per search. Credit limits start after a grace period that begins on 5 October 2026 and is expected to last about six months
- The terms bar scraping, mirroring, or using AI to make derivative works or train models unless the terms or Mobbin allow it. They also say derivative works made with the service belong to Mobbin. Read clause 10 before building on retrieved screens
- Screens belong to the apps shown. The terms allow limited citation with credit to the owners, under Singapore fair-use law
- Counts disagree across pages: the About page still says 100k+ screenshots, the homepage says 621,500+

## Reusable ideas

- Index the same captures three ways (screen type, UI element, user action) so each question has its own way in
- Treat a flow as a first-class object with its own search, not a folder of loose screenshots
- Give agents written rules of evidence: a pattern seen in shipped apps is a convention, not proof that it works
- Publish machine-readable pricing and MCP pages next to the human ones

## Related

[Collect UI](collect-ui.md), [Good UI](good-ui.md), [Laws of UX](laws-of-ux.md), [AppShot Gallery](appshot-gallery.md), [Appinspo](appinspo.md)
