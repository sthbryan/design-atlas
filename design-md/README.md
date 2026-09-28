# DESIGN.md files

Original DESIGN.md files written for the Design Atlas. Each one records a complete visual system as exact tokens plus the reasons behind them: colours for light and dark, type, spacing, radii, depth, motion, components, accessibility and a guide for agents. They are named by style, never by brand, and none imitates an existing company's identity.

The atlas's own [DESIGN.md](../site/DESIGN.md), the identity for the atlas website, is the reference example. The files in this folder follow the same format.

## Licence

The files are atlas content under [CC BY 4.0](../LICENSE). You may copy, adapt and ship them in any project, commercial or not, as long as you give credit. Put this line in the Provenance section of your copy:

```text
Based on <file name> from Design Atlas (https://github.com/sthbryan/design-atlas), CC BY 4.0.
```

The licence covers the file's text and values. Fonts and icon sets named in a file keep their own licences, which each file records under Typography and References; check them again before you ship.

## How to use one

1. Copy the file to your project root as `DESIGN.md`.
2. Change `name`, `description` and the Overview to describe your product, and add the attribution line to Provenance.
3. Add one line to your `AGENTS.md` or `CLAUDE.md` that points to `DESIGN.md`, so every agent finds it.
4. Build with the `design-atlas-ui` skill, which reads DESIGN.md as the source of truth for every value and skips choosing a new direction when the request fits the file.

When you change a value, keep the Colors table and its contrast pairs in step with the front matter. The format and its rules live in the `design-atlas-ui` skill: [design-md-format.md](../skills/design-atlas-ui/references/design-md-format.md). Inside this repository, `npm run check` validates every file here and `site/DESIGN.md` against it.

## Index

| File | Style | Surface | Themes | Type (licence) |
|---|---|---|---|---|
| [DESIGN.md](../site/DESIGN.md) | Gazetteer: slab-serif headings over a UI grotesque, grey-green paper, contour-sienna links, borders only | Reading, with dense index views | Light and dark | Montagu Slab and Nacelle (OFL 1.1), system monospace |
