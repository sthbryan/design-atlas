[← Atlas](../README.md) · Topics: [assets](../topics/assets.md), [agents-and-prompts](../topics/agents-and-prompts.md), [typography-and-styles](../topics/typography-and-styles.md)

# Craftwork

- **URL:** https://craftwork.design
- **Type:** asset marketplace · MCP server
- **Topics:** assets, agents-and-prompts, typography-and-styles
- **Pricing / licence:** Freebies plus paid packs (roughly $8–$160 on the homepage); Pro from $49/month or $199/year ($69/$299 for teams). Proprietary licence: commercial use for teams of up to 20, no redistribution or resale in templates
- **Reviewed:** 2026-09-25

## What it is

Craftwork is a design-resource marketplace run by Craftwork Studio, a small team based in Bangkok. It sells its own packs alongside work from independent authors. The About page claims more than 40,000 assets across roughly 3,000 packs: 2D and 3D illustrations, device mockups, fonts, icons, backgrounds, Figma UI kits, and Framer, Webflow, Notion and Jitter templates. Packs sell one by one, and some are free. A Pro subscription unlocks the whole library, a Figma plugin and an authenticated MCP server.

## When to open it

Open Craftwork when a landing page or product needs human-made visuals, such as a 3D hero object, a spot-illustration set, a device mockup or a display font, and a paid licence is fine. Open the MCP page when you want a coding agent to pick real assets instead of generating images.

## Most useful

- **Wide single catalogue**: illustrations, 3D, mockups, fonts and site templates in one place, with a freebies category for testing quality
- **Craftwork MCP server**: Streamable HTTP with OAuth, offering semantic search, filtered browsing, "similar" lookups, pack contents, signed download links and an agent-only font catalogue. It is included with Pro (500 requests/month on the monthly plan, 5,000 on yearly)
- **`@craftwork-design/wizard`**: an MIT-licensed npm CLI that adds the MCP server and a `craftwork-assets` skill to Claude Code, Codex, Cursor, VS Code, Zed and similar clients
- **Public discovery files**: a published `SKILL.md`, a `.well-known` API catalogue with OpenAPI descriptions, and an MCP server card, so agents don't need to scrape pages
- **Plain-language licence page**: a clear list of what is and isn't allowed for packs, freebies, Pro and demo files

## Using it with agents

This is one of the few asset stores built for agents. Run `npx -y @craftwork-design/wizard@latest`, finish the OAuth prompt in your agent, then ask for assets by style or use case, for example an isometric workspace illustration. The published skill tells agents to search and inspect first, download only once the user has chosen, never ship low-resolution preview images, and use the public API catalogue when not signed in. Without Pro, agents can only read public catalogue metadata.

## Watch out for

- The licence is proprietary. Craftwork and its authors keep the copyright, companies over 20 people need the Extended licence, and assets can't go into templates or kits you sell
- Pro bans bulk or automated downloading outside the MCP limits, and demo files can't be used in any published or client work
- Quality and style vary because many packs come from third-party authors. Check the author and preview before building a page around one pack
- MCP access, the Figma plugin and the font catalogue all need a paid Pro plan. The lifetime plan's price wasn't listed when reviewed

## Reusable ideas

- Publish a `SKILL.md`, a `.well-known` API catalogue and an MCP server card so agents can find the product without scraping
- Have agents evaluate an asset first and download it only after an explicit choice, with previews marked as not for shipping
- Put licence terms in "you can / you can't" columns for each plan
- Offer a one-command setup wizard that configures several agent clients at once

## Related

[kitbitz](kitbitz.md), [3dicons](3dicons.md), [designeer](designeer.md), [kage](kage.md)
