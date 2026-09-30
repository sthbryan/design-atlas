---
title: Dither Me This
description: Browser image dithering tool with retro palette presets and controls for diffusion, ordered and random patterns.
url: https://doodad.dev/dither-me-this/
type: tool
formats: image dithering · preset palettes · JPEG and PNG export
topics: [assets, color]
verdict: useful
agent: []
pricing: free
licence: The tool is available without a listed fee and its maker accepts optional coffee donations. No reuse licence or terms were stated at review.
licence_class: not-stated
reviewed: 2026-09-29
status: active
related: [dither-garden, ditther, ascii-magic, dotforge]
---
[← Atlas](../site/home.md) · Topics: [assets](../topics/assets.md), [color](../topics/color.md)

# Dither Me This

## What it is

Dither Me This is a browser-based image dithering tool on doodad.dev. It reduces an image to a smaller colour palette, then arranges the remaining colours into dots that suggest the missing shades. The page presents presets for black and white, RGB, CMYK, Game Boy, Teletext, Apple II, Commodore 64, ZX Spectrum, Vaporwave and other retro looks.

## When to open it

- When you want to try a recognisable retro computer palette without building a palette by hand.
- When you need to compare error diffusion, ordered dithering, random dithering or colour reduction on one image.
- When you want to export both a resized source and a dithered result as JPEG or PNG.

## Most useful

- **Presets**: the buttons provide named colour and device-inspired starting points, from Game Boy to Vaporwave and Hacker.
- **Dithering options**: choose error diffusion, ordered, random or colour-reduction-only processing; adjust diffusion map, matrix dimensions, random style and colour palette.
- **Sizing and output**: set image width, compare the original, resized and dithered file sizes, then download JPEG or PNG.
- **Visual direction**: the live editor resembles a movable desktop made of overlapping cream panels, thin hatching, salmon title bars and yellow action buttons. Its compact monospace labels suit the retro image workflow without hiding the controls.

## Using it with agents

There is no published MCP, API, CLI, `llms.txt` or agent guide. Use the browser interface, download the image and add that file to the project for an agent to inspect.

## Watch out for

- The preview can remain on a loading state before an image is selected; load an image before judging the output.
- The site explains that the effect can reduce image file size, but compare the actual exports: the dithered image is not guaranteed to be smaller than the original.
- The page does not state an image-processing privacy policy or an output licence. Do not use sensitive images or assume the generated file has a blanket reuse grant.
- The maker links to a code repository for the dithering implementation; verify its current contents and licence before reusing code. It does not establish reuse rights for the full website or generated artwork.

## Reusable ideas

- Make presets visible as direct actions, then keep the underlying algorithm controls available for users who want to tune the result.
- Show original, resized and processed file sizes together so the tool's optimisation claim can be checked on the current image.
- Use restrained colour accents and bordered panels to give a dense creative interface a recognisable desktop-tool character.

## Related

[Dither Garden](dither-garden.md), [Ditther](ditther.md), [ASCII Magic](ascii-magic.md), [DotForge](dotforge.md)
