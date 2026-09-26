[← Atlas](../README.md) · Topics: [design-md](../topics/design-md.md), [agents-and-prompts](../topics/agents-and-prompts.md), [typography-and-styles](../topics/typography-and-styles.md)

# getdesign.md

- **URL:** https://getdesign.md
- **Type:** style library · CLI · paid custom files
- **Topics:** design-md, agents-and-prompts, typography-and-styles
- **Pricing / licence:** the public collection is free. Its GitHub repo (`VoltAgent/awesome-design-md`) and the `getdesign` CLI are MIT, and the site's Terms say public-directory files may be used in your projects. Paid products: a private DESIGN.md for $34 (one-time, shown as reduced from $54), Catalog Pass at $99/month, and a Website Starter Kit at $199. Paid deliverables may not be resold or republished as standalone products.
- **Reviewed:** 2026-09-25

## What it is

getdesign.md is the website for the "awesome-design-md" collection, run by the VoltAgent team. It offers DESIGN.md files that analyse the public look of well-known sites (Stripe, Linear, Claude, Notion, Ferrari, IBM...). It also runs a "Retro Web" series of 1990s-era styles. The GitHub badge counts 73 free files. The site's catalog claims 550+ entries, but most of those are paid analyses you request or unlock with Catalog Pass, not free downloads.

## When to open it

- When you want a free, carefully written file for a well-known tech or consumer brand, with light and dark previews.
- When you want to install a style from the terminal with one command.
- When you need a file for a site that isn't in the collection and are willing to pay for a private one.

## Most useful

- Each entry comes with a `DESIGN.md` plus `preview.html` and `preview-dark.html` specimen pages.
- The format follows Google's Stitch spec. The YAML front matter has `version: alpha`, `name`, `description`, and detailed `colors`, `typography`, `rounded`, `spacing` and `components` tokens with `{colors.primary}` references. The README lists nine prose sections (Visual Theme & Atmosphere through Agent Prompt Guide). Newer files use Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, Do's and Don'ts, Responsive Behavior, and Iteration Guide.
- The Do's and Don'ts are unusually specific (exact weights, padding floors, where the accent is allowed), and agents follow them well.
- Detail pages show a live preview, install counts and bookmarks.

## Using it with agents

- CLI: `npx getdesign@latest add <slug>` writes `./DESIGN.md`. If a file already exists it writes into a subfolder; use `--force` to overwrite or `--out <path>` to choose the location. `npx getdesign list` prints every slug.
- You can also download from the detail page or copy the file straight from GitHub.
- The site suggests a one-line prompt: tell the agent to read DESIGN.md before writing any UI. It has no MCP server and no working llms.txt (the `/llms.txt` URL returns an empty catalog page).

## Watch out for

- The files describe real brands. The Terms forbid products that could be confused with the referenced brand and forbid copying logos, imagery or copyrighted content. Some newer files deliberately misspell the brand name in their front matter.
- "550+" is not the free count. Only the GitHub collection (about 73 files) is free. Catalog entries marked for request or Catalog Pass are paid, and Catalog Pass covers a selected set of about 40 files, not the whole catalog.
- The repo does not accept pull requests that add new DESIGN.md files, only fixes that were discussed in an issue first.
- The site promotes the maintainers' own starter kits and a sponsor slot.

## Reusable ideas

- Ship light and dark HTML specimen pages next to every DESIGN.md so a person can check the tokens visually.
- Reference tokens by path (`{colors.primary}`) inside component definitions instead of repeating hex values.
- Write Don'ts as hard limits ("never above weight 300", "no new accent colours") rather than vague advice.
- End the file with an iteration guide explaining how to extend the system without drifting.

## Related

[DESIGN.md](designmd.md), [Refero Styles](refero-styles.md), [Design.md Store](designmd-store.md), [TypeUI](typeui.md), [DesignMD (designmd.me)](designmd-me.md)
