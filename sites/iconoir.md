[← Atlas](../README.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md), [components](../topics/components.md)

# Iconoir

- **URL:** https://iconoir.com
- **Type:** icon library
- **Topics:** icons, SVG, assets, React, Figma
- **Pricing / licence:** Free / MIT (donations via Open Collective)
- **Reviewed:** 2026-09-25

## What it is

Iconoir is an open-source SVG icon set started by Luca Burgio and kept up by contributors on GitHub. Icons are drawn on a 24×24 grid with a 1.5 default stroke. The homepage counts 1,671 icons, which covers both styles: the repository holds 1,383 regular (outline) and 288 solid icons. There is no paid tier and no sign-up. Delivery covers raw SVG, a CSS icon font, npm packages for React, React Native and Vue, a Flutter package, a Swift package, a Figma community file and a built-in Framer integration.

## When to open it

Open Iconoir when a product needs one consistent outline icon set under a permissive licence and you want the same icons in design files and in code. It suits dashboards, SaaS apps and marketing sites that would otherwise use Feather, Lucide or Heroicons, and it has a wider choice of niche glyphs.

## Most useful

- **Live customiser**: set optical size, stroke weight and colour on the site before copying or downloading an SVG
- **`iconoir-react`**: tree-shakeable components that accept normal SVG props, plus an `IconoirProvider` that sets colour, stroke and size for everything inside it. It gets roughly half a million downloads a month on npm
- **Many targets from one source**: `iconoir` (SVG files), `iconoir-react-native`, `@iconoir/vue`, `iconoir_flutter`, Iconoir-swift, and a jsDelivr CSS file where `iconoir-<name>` classes draw icons as masks
- **Figma and Framer**: a community Figma file, and a native insert option inside Framer
- **Predictable naming**: kebab-case reference names become PascalCase components (`airplane-helix-45deg` → `AirplaneHelix45deg`)

## Using it with agents

Iconoir is one of the easiest icon sets to hand to an agent. `npm i iconoir-react` (or the Vue or React Native package), import named components, and wrap the app in `IconoirProvider` for a shared stroke and size. There is no llms.txt or MCP server, so ask the agent to check names against the icon list on the site or the `icons/regular` and `icons/solid` folders in the repository instead of guessing. For no-build pages, the CDN CSS classes work with a single `<link>`.

## Watch out for

- The count depends on where you look. The site shows 1,671, the main README says 1,600+, and the React README still says 1,300+. The larger number includes solid variants, so not every glyph has both styles
- Some packages are behind the main repo. Swift lives in a separate repository, and Flutter is published to pub.dev rather than npm
- The CSS build loads from `@main` on jsDelivr in the docs. Pin a version tag in production so a new release can't break things
- The site shows a sponsor banner for another icon vendor. It is advertising, not part of the set

## Reusable ideas

- Let users change stroke weight and optical size before download, so one set fits both dense UIs and large hero art
- Ship one provider or context that sets icon defaults instead of repeating props on every icon
- Publish the same source to every major framework so the design file and the codebase never drift apart
- Name icons in plain kebab-case and derive component names from it mechanically

## Related

[3dicons](3dicons.md), [useanimations](useanimations.md), [animated-icons](animated-icons.md), [shadcn-ui](shadcn-ui.md)
