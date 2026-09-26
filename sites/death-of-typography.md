---
title: Death of Typography
description: Singapore type collective whose home page is a cropped 380px marquee in its own face, plus a specimen tester with 27 sliders.
url: https://deathoftypography.com
type: font-library
formats: type foundry · live specimen tester · workshops · WooCommerce shop · newsletter
topics: [typography-and-styles, assets]
verdict: niche
agent: []
pricing: freemium
licence: Some families are hosted under the SIL Open Font License, which the site says allows commercial and non-commercial use, redistribution, and modification with credit to DOT and the original designer and the same licence on derivatives. The rest are sold, at review $25 for a single weight, $125 for the nine weights of Strait Sans together and $40 for a commercial licence for DT Robusta. Octopia Neue is pay-what-you-want with $0, $5, $10 and $25 options. Nothing states what you may reuse of the site's own design or screenshots
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [velvetyne, fontshare, typeface-fyi, departure-mono]
---
[← Atlas](../README.md) · Topics: [typography-and-styles](../topics/typography-and-styles.md), [assets](../topics/assets.md)

# Death of Typography

## What it is

Death of Typography is a type collective from Singapore, and it designs its own site the way a specimen sheet works: the letters are the layout. At review the home page measured a band of its name set at 380px in weight 600 on a 56px line, so the words are taller than their own line box and get cropped, running endlessly on a 45s linear loop. The ground is a warm off-white of rgb(255, 252, 252) with rgb(40, 40, 40) ink, not the default white and black. Blocks arrive on a 1.85s reveal with a `cubic-bezier(0.67, 0, 0.3, 1)`, an ease that starts and ends slowly. The rest of the site is a WordPress shop for the collective's own typefaces.

## When to open it

Open it when a brief needs a display face with real character for a poster, event page, zine or loud landing page, and when you want to see how far a type-led page can go without photography: one marquee, one accent and a lot of whitespace. It is also the page to study for an in-browser specimen, because the typefaces page puts three controls on every line of sample text.

## Most useful

- **A cropped marquee band**: 380px type on a 56px line height, scrolled by a 45s linear animation, so the repetition becomes texture rather than a logo
- **The specimen tester**: 27 range sliders across the page, three per sample line, for size, line height and letter spacing, so a face can be judged at poster scale and at text scale in place
- **Two oranges doing different jobs**: the large specimen headings are rgb(236, 86, 54) at 85px in weight 800 on a 90px line, capitalised, while links are the hotter rgb(255, 72, 35)
- **A body face of its own**: body copy is set in Area Normal at 15px on 20px, and sample lines are set in the foundry's own fonts, so the site doubles as a live catalogue
- **A reveal worth copying**: 1.85s with a strong ease-in-out on large blocks, slow enough to read as deliberate
- **Pay-what-you-want including zero** on Octopia Neue, which turns a price into an invitation without dropping the paid tiers

## Using it with agents

There is nothing agent-specific here: `/llms.txt` returned 404, and there is no API, MCP server or package registry, so an agent cannot install a face from this site. `robots.txt` is the WordPress default and only blocks `/wp-admin/`, so reading pages is allowed. The measured values are the useful part, because they can be lifted from a browser session to brief a font choice: crop the line box for a band, animate it linear rather than eased, keep the ground at rgb(255, 252, 252), and give a tester three sliders per line. The other workable loop is to have an agent read a product page for its name and price, then download the files and their licence and write `@font-face` rules with a fallback stack.

## Watch out for

- A 56px line box under 380px type is deliberate cropping, and it needs a clipped container. Lifting the number without the overflow rule will overlap neighbouring sections
- The linear 45s loop is what keeps the band calm. Adding an easing curve turns it into a banner advert
- Several sample lines fell back to a generic sans at review, because the page depends on the foundry's webfonts loading; a tester like this needs real fallback stacks
- `/shop/` returned HTTP 403 at review while individual product pages loaded normally, so the catalogue index is the one page a script cannot read
- Prices are per weight, and only Strait Sans has a bundle, so a family can cost several times its single-weight price
- The Open Font License page says the collective hosts open-source fonts but does not name which families, so check the download before assuming a face is free
- Leftovers from earlier builds are still published (`home-new`, `resources-old`, `shop-old`, a second checkout), and two product categories read "Uncategorized" and "Getai"
- The blog has two posts from 2023 and the footer carries both a 2025 and a 2026 copyright line

## Reusable ideas

- Let one word at a size larger than its line box make the layout, and let the container crop it
- Scroll a marquee linearly over a long duration instead of easing it, so repetition reads as texture
- Use a warm off-white ground, around rgb(255, 252, 252), rather than pure white under large black type
- Reserve the hottest colour in the palette for links and a slightly deeper one for display headings, so the two never compete
- Put size, line-height and letter-spacing sliders on every sample line, because a face lives or dies on those three values
- Slow big reveals to nearly two seconds with an ease-in-out, which reads as considered rather than as a transition library default
- Sell single weights beside the bundle so a small project can buy one without feeling overcharged

## Related

[Velvetyne](velvetyne.md), [Fontshare](fontshare.md), [Typeface.fyi](typeface-fyi.md), [Departure Mono](departure-mono.md)
