# Licence guide

How to turn a site's `licence_class` into a line in the brief. The class is the atlas's summary as of the page's `reviewed` date. It is a starting point for the user's own check, not legal advice.

## Contents

- [Three questions first](#three-questions-first)
- [Class by class](#class-by-class)
- [What to read on the page](#what-to-read-on-the-page)
- [Traps](#traps)
- [Wording in the brief](#wording-in-the-brief)

## Three questions first

1. **What is being taken?** Ideas, layouts and patterns are free to borrow from any reference. Code, fonts, icons, images, sounds and prompts carry the licence.
2. **Where will it go?** A commercial product, a client project, open-source code or a private prototype. The answer decides the non-commercial, copyleft and paid cases.
3. **Who holds the right?** A paid tier licenses the buyer, sometimes per seat or per project. Never assume the user has bought one.

## Class by class

| Class | Ship code or assets? | Conditions to state |
|---|---|---|
| `public-domain` | Yes | None from copyright. Names and logos can still be trademarks. |
| `open-source-permissive` | Yes | Keep the copyright notice and licence text. Apache-2.0 also asks for its NOTICE file and grants no trademark rights. |
| `cc-attribution` | Yes, with credit | Credit the author where users can see it. BY-SA assets you adapt must be shared under the same licence. |
| `open-source-copyleft` | Only if the project can comply | GPL and AGPL extend to the combined work, and AGPL also covers network use. LGPL and MPL are narrower. Ask the user before adding any. |
| `cc-noncommercial` | Not in a commercial product | Fine for personal or non-profit use with credit. ND variants also forbid modified versions. |
| `source-available` | Only as the licence allows | Readable code with limits on use, such as no competing product or no resale. Quote the limit. |
| `proprietary-free` | Only as the terms allow | Free to use under the site's terms, which often ban redistribution, resale or scraping. |
| `proprietary-paid` | Only the tier the user holds | Free content keeps its own limits. Premium content needs the user's purchase. |
| `mixed` | Part by part | The `licence` text says which parts fall where, for example MIT code with a paid block library. |
| `not-stated` | No | Look only. Take ideas. Upgrade it only after reading a licence on the site or in its repository, and say where. |

The script's `--licence ship` group covers the first three rows, `look-only` covers the last, and `conditional` covers the rest.

## What to read on the page

In this order, stopping once the answer is clear:

1. The frontmatter `licence` text. It holds the details behind the class: which parts are open, which tiers exist, attribution rules.
2. "Watch out for". Restrictions that contradict the headline live here, such as a no-scraping clause, a per-author licence in a community registry, or an npm tag that disagrees with the site.
3. "Using it with agents". It says whether a channel needs an account, a token or a paid plan, and which install commands the page verified.
4. The site or repository itself, only when the user will ship and the class is `not-stated`, `mixed` or conditional. Read the repository's LICENSE file or the site's licence page, one page, never a crawl.

## Traps

- **Galleries.** A gallery's class covers its own content. The interfaces it shows belong to their makers, so take ideas only.
- **Community registries.** Each item can carry its author's licence, whatever the registry's class says.
- **Icon aggregators.** Licences often vary by collection. Filter by licence inside the tool before fetching.
- **Generators.** Rights to generated output can differ from rights to the tool's prompts or library. The `licence` text says which.
- **Brand DESIGN.md files.** They describe a real company's identity. Borrow structure and token naming, never the brand's palette, type pairing and name together.
- **Trademarks.** Open code does not license a product's name or logo. Keep them out of the user's product.
- **Fonts.** Check whether the font licence allows web embedding and bundling in an app. Many free fonts forbid selling the font on its own.
- **Stale dates.** A review older than six months deserves a fresh look at the licence page before shipping.

## Wording in the brief

Write the class, then the consequence, in one cell:

- `open-source-permissive: ship, keep the MIT notice`
- `cc-attribution: ship with visible credit to the author`
- `mixed: MIT components; Pro blocks need a paid licence`
- `cc-noncommercial: ideas only for this commercial app`
- `not-stated: look only until a licence is found`

List every conditional or look-only reference again under "Licence caveats", with the condition and where the user can confirm it.
