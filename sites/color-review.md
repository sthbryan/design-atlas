[← Atlas](../README.md) · Topics: [color](../topics/color.md), [typography-and-styles](../topics/typography-and-styles.md)

# Color.review

- **URL:** https://color.review
- **Type:** tool
- **Topics:** color, typography-and-styles
- **Pricing / licence:** Free / licence and terms not stated
- **Reviewed:** 2026-09-25

## What it is

Color.review is a contrast checker for one foreground and background pair, made by the designer Anton Robsarve. It shows the WCAG 2.1 contrast ratio in large type with a live text and headline preview, and marks pass or fail against the 3, 4.5 and 7 thresholds for AA and AAA. Both colours can be edited as hex, RGB, HSL, HSV or CMYK. The colour field has contrast lines drawn over it, showing where the 3:1, 4.5:1 and 7:1 boundaries fall against the other colour. Under the tool, a short explainer covers large-text sizes and the 3:1 rule for interface elements. It is a small Vue app served through Cloudflare. There is no account or pricing, and the page asks for sign-ups to a planned desktop and mobile app.

## When to open it

Open it for a fast, visual check of a text and background pair, especially when a colour fails and you want to see how far to move it. It's also handy in review threads, because every pair has its own link.

## Most useful

- **Contrast lines on the picker**: drag the colour along the lines to find the nearest shade that passes AA or AAA
- **Direct links**: `color.review/check/<fg>-<bg>` (hex without `#`) opens the exact pair
- **Flip**: swap foreground and background in one click, for dark-mode checks
- **Eyedropper**: in Chrome and Edge it can sample any colour on screen through the browser's EyeDropper API
- **Background shortcuts**: jump to white or a random colour to test a foreground against more than one surface

## Using it with agents

There is no API, MCP server or llms.txt (`/llms.txt` just returns the app shell), and results only appear after JavaScript runs. Use it as a human check on colours an agent picks. When you ask an agent to fix contrast, you can put the `check/` link in the task. The agent can't read the result from it, but you and your reviewers can.

## Watch out for

- It measures WCAG 2.1 ratios only, with no APCA and no colour-blindness simulation
- It checks one pair at a time. For whole palettes or token sets, use a palette tool
- No licence, terms or privacy page is published, and the page loads Google Analytics
- The app promised in the sign-up form had not appeared at review time

## Reusable ideas

- Draw pass/fail boundaries on the picker itself instead of only showing a number
- Put both colours in a readable URL path so every check can be shared and bookmarked
- Offer a one-click flip for testing dark-mode pairs
- Keep the standard's key numbers (text sizes, 3:1 for UI parts) right under the tool

## Related

[Huetone](huetone.md), [Ramps](ramps.md), [OKLCH](oklch.md)
