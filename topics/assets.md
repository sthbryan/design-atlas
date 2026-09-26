[← Atlas](../README.md)

# Assets

Downloadable icons, illustrations, mockups, sounds and social or store-listing visuals for interfaces and product marketing.

## Start here

- [3dicons](../sites/3dicons.md) — 1,500+ CC0 3D icons with a Figma plugin and online editor.
- [Kitbitz](../sites/kitbitz.md) — 2,000+ hand-drawn illustrations, free with no login required.
- [AppShot Gallery](../sites/appshot-gallery.md) — real App Store/Play Store screenshots filtered by genre, style and tone.
- [Iconoir](../sites/iconoir.md) — 1,671 MIT SVG icons with packages for every major framework; see the [Icons](icons.md) hub for more sets.
- [Craftwork](../sites/craftwork.md) — 40,000+ illustrations, mockups, fonts and templates; the Pro plan adds an MCP server so agents can pick real assets.

## All sources

- [3dicons](../sites/3dicons.md) — rendered 3D icons for dashboards and modern interfaces.
- [Animated Icons](../sites/animated-icons.md) — 4,000+ animated icons recoloured to your palette in the browser, commercial use without attribution.
- [AppShot Gallery](../sites/appshot-gallery.md) — store-listing screenshot and icon references, filterable by style and tone of voice.
- [Aura](../sites/aura.md) — an AI builder with a public asset catalogue alongside its templates and components; commercial use needs a paid plan.
- [Circle Loaders](../sites/circle-loaders.md) — standalone animated SVG loading spinners.
- [Craftwork](../sites/craftwork.md) — a large paid marketplace of 2D and 3D illustrations, device mockups, fonts and templates, with freebies to test quality.
- [Designeer](../sites/designeer.md) — directory that indexes icon, illustration and visual-asset tools.
- [Efecto](../sites/efecto.md) — a browser canvas your agent drives to make social posts, posters, slides and OG images, with an FX engine for dither, ASCII and halftone treatments.
- [Fffuel](../sites/fffuel.md) — about 65 free SVG generators for grainy gradients, blobs, noise, waves and patterns; commercial use is allowed, redistributing the images is not.
- [Iconoir](../sites/iconoir.md) — a consistent MIT outline icon set in SVG, icon font, framework packages, Figma and Framer.
- [icons0](../sites/icons0.md) — search over roughly 200k Iconify icons with a licence filter, copied as SVG, a React component or a shadcn install; see the [Icons](icons.md) hub.
- [Kitbitz](../sites/kitbitz.md) — hand-drawn illustrations with an artisanal, non-digital feel.
- [ogimagecn](../sites/ogimagecn.md) — 22 Open Graph card templates rendered with Satori, plus a free checker that previews a link on seven platforms.
- [posts.design](../sites/posts-design.md) — references for social launch graphics, profile headers and OG images, by post purpose and industry.
- [Recent](../sites/recent-design.md) — separate walls for OG images, App Store screenshots and app icons, next to a broad design feed.
- [shieldcn](../sites/shieldcn.md) — README badges, star-history charts, header banners and sponsor walls in the shadcn style, from 45+ data providers.
- [soundcn](../sites/soundcn.md) — 813 recorded UI and game sounds, mostly CC0 from Kenney, installed one at a time as code; see the [Sound](sound.md) hub.
- [UI SFX](../sites/uisfx.md) — 78 semantic interface sound cues in 12 packs; CC0 audio and an MIT runtime.
- [useAnimations](../sites/useanimations.md) — 87 small animated stroke icons as SVG and Lottie; attribution required.

## Patterns worth reusing

- Ship assets under a clear no-attribution licence (CC0) to remove friction for anyone adopting them.
- Separate an icon gallery from a full illustration or screenshot set so each asset type can be searched on its own.
- Provide an online editor to recolor or remix assets before download instead of shipping only static files.
- Filter store-screenshot references by visual style and tone of voice, not just app category, to match both look and copy.
- Name sounds after what they mean, such as `success` or `blocked`, so the style can be swapped without touching product code (UI SFX).
- Publish agent discovery files (a `SKILL.md`, a `.well-known` API catalogue, an MCP server card) so agents find assets without scraping, and have them download only after the user has chosen (Craftwork).
- Give each social surface (posts, profile headers, OG images) its own wall, since each has different constraints (posts.design, Recent).
- Generate decorative backgrounds (grain, blobs, mesh gradients) as SVG and commit the files, instead of licensing stock art; a little grain keeps large colour fields from looking flat (Fffuel).
- Make licence a search filter and put it on every asset's metadata, not only in a README (icons0, soundcn).
- Generate each page's OG card from its own title and metadata, and check the preview per platform, since each one crops and truncates differently (ogimagecn).
- Style README badges and headers with the product's own tokens, and export light and dark `<picture>` pairs (shieldcn).

## Pitfalls

- Distinctive styles (3D, hand-drawn) are easy to overuse — confirm the style fits the product's identity before committing to it broadly.
- Several asset libraries leave licence terms unclear or unstated — verify before any commercial use.
- Icons optimized for medium sizes can lose clarity when rendered very small; check at your actual target size.
- Proprietary marketplace licences add limits of their own: Craftwork's standard licence covers teams of up to 20 and bans use in templates you sell.
- Sound should back up visual and ARIA feedback, never replace it; add a mute toggle and unlock audio only after a real user gesture (UI SFX).
- Social and OG references show other brands' marketing material; borrow the layout and format, never the assets.
- Generated images can carry limits of their own: Fffuel's can't be resold or redistributed, so they can't go into a template or asset kit, and its filter-heavy SVGs may need converting to JPEG, WebP or AVIF for speed.
- Mixed-licence catalogues need filtering: soundcn's 110 Warcraft clips are non-commercial only, and some icons0 collections use attribution or copyleft licences.
- Satori renders only part of CSS, so an OG card that looks right in the browser can shift in the real PNG (ogimagecn).
- Hosted asset services can rate-limit or go down; self-host anything critical (shieldcn), and remember Efecto's canvas work lives on its servers, not in your repo.

## Related topics

- [Icons](icons.md)
- [Components](components.md)
- [Inspiration](inspiration.md)
- [Typography and styles](typography-and-styles.md)
- [Sound](sound.md)
- [Color](color.md)
- [3D and shaders](3d-and-shaders.md)
