---
title: Death of Typography
description: Singaporean type collective with 20 experimental faces and an on-page specimen tester; some fonts are OFL, the rest are sold.
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

Death of Typography (DOT) is a type collective from Singapore, presented as a young group that practices, researches and explores type through collaboration, and supported by Designing Cultures Studio Singapore. It sells its own typefaces through a WordPress and WooCommerce shop. At review the catalogue listed 20 products: Strait Sans in nine separate weights plus a bundle, Getai Grotesk Display, DT Nouveau, DT Nightingale, DT World Tour, DT Dumpling Display, DT Hooke, DT Robusta with a commercial licence, and Octopia Neue. Two other pages carry the rest of the site: a live specimen tester and a workshops page about type education. The blog has two posts, both from April 2023.

## When to open it

Open it when a brief needs a display face with real character for a poster, event page, zine or loud landing page, and you want a small foundry rather than a big catalogue. It is also worth studying for the typeface page itself: it is an unusual example of a specimen embedded in the browser, with sliders that change size, line height and letter spacing across several families at once.

## Most useful

- **The specimen tester** on the typefaces page: editable specimen lines, each with size, line-height and letter-spacing controls, so you can judge a face at poster scale and at text scale without downloading it
- **A nine-weight ladder**: Strait Sans ships as thin, extra-light, light, regular, medium, semibold, bold, extra-bold and black, sold per weight and as one bundle
- **Pay-what-you-want pricing** on Octopia Neue, with $0 still selectable, which makes it usable by students and side projects
- **A plain-language SIL Open Font License page**, spelling out commercial use, redistribution, modification and the reserved-name rule instead of pointing at a PDF
- **Workshops**, framed as experimental type workshops and honest conversations about design education, which is how a young foundry shows its thinking
- **The home page itself**: the collective's name repeated at huge size as the layout, a compact reference for type-led heroes

## Using it with agents

There is nothing agent-specific here: `/llms.txt` returned 404, and there is no API, MCP server or package registry, so an agent cannot install a face from this site. `robots.txt` is the WordPress default and only blocks `/wp-admin/`, so reading pages is allowed. A workable loop is to have an agent fetch a product page for its price and name, download the files and their licence, commit both, and generate `@font-face` rules with a fallback stack.

## Watch out for

- `/shop/` returned HTTP 403 at review while individual product pages loaded normally, so the catalogue index is the one page a script cannot read
- Prices are per weight. Only Strait Sans has a bundle, so a family can cost several times its single-weight price
- The OFL page says the collective hosts open-source fonts but does not say which families they are, so check the download before assuming a face is free
- Leftovers from earlier builds are still published: `home-new`, `resources-old`, `shop-old`, a second checkout, and product categories named "Uncategorized" and "Getai"
- Octopia Neue and the newer display faces show as "$0.00" with a pay-what-you-want slider, which reads like a free font until you reach the cart
- The blog has two posts from 2023, and the footer carries both a 2025 and a 2026 copyright line, so the site's freshness is hard to judge from the blog alone

## Reusable ideas

- Put a real specimen tester on the typeface page, with sliders for size, line height and letter spacing, so a visitor can evaluate a face before downloading
- Offer a pay-what-you-want slider that includes zero, which turns students into advocates without giving up paid tiers
- Write the open-source licence as a short list of what you may do, then name the one condition that matters, such as reserved font names
- Sell single weights beside the bundle, so a small project can buy one weight without feeling overcharged
- Use workshops and talks as the proof that a young foundry knows its craft

## Related

[Velvetyne](velvetyne.md), [Fontshare](fontshare.md), [Typeface.fyi](typeface-fyi.md), [Departure Mono](departure-mono.md)
