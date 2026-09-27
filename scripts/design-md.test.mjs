import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { SECTIONS, contrast, oklch, parseMotionTokens, validateDesignMd } from './design-md.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const UI_REFS = join(ROOT, 'skills/design-atlas-ui/references');
const motionTokens = parseMotionTokens(readFileSync(join(UI_REFS, 'resolved-conflicts.md'), 'utf8'));

const FRONT = `---
version: alpha
name: Fixture
description: A small valid file used by the tests.
colors:
  bg: "#F6F7F4"
  text: "#1F2420"
  accent: "#8A4B14"
  on-accent: "#FBF8F4"
  control: "#7A807A"
typography:
  body:
    fontFamily: Nacelle, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  display:
    fontFamily: Montagu Slab
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.02em
rounded:
  sm: 4px
spacing:
  sm: 8px
  md: 12px
components:
  button:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  banner:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    padding: "{spacing.md}"
---
`;

const COLORS = `| Token | Light | Dark | OKLCH (light) | Job | Pairs (measured) |
|---|---|---|---|---|---|
| bg | #F6F7F4 | #1A1C19 | 0.975 0.004 122 | Page | |
| text | #1F2420 | #ECEEEA | 0.254 0.010 151 | Body text | text on bg 14.67:1 / 14.69:1 |
| accent | #8A4B14 | #E0A36B | 0.480 0.107 56 | Links | text on bg 6.31:1 / 7.86:1 |
| on-accent | #FBF8F4 | #1A1C19 | 0.980 0.006 75 | Text on accent | text on accent 6.40:1 / 7.86:1 |
| control | #7A807A | #737973 | 0.593 0.011 145 | Input edges | ui on bg 3.76:1 / 3.85:1 |`;

const MOTION = `| Token | Value | Used for |
|---|---|---|
| \`--dur-menu\` | 200ms | Menus |`;

function fixture({ colors = COLORS, motion = MOTION, overrides = 'None.', front = FRONT, sections = SECTIONS } = {}) {
  const body = sections.map((name) => {
    const content = { Colors: colors, Motion: motion, Overrides: overrides }[name] ?? `Text for ${name}, using {colors.accent}.`;
    return `## ${name}\n\n${content}\n`;
  }).join('\n');
  return `${front}\n# Fixture design system\n\n${body}`;
}

const check = (src) => validateDesignMd(src, { motionTokens });
const has = (errors, pattern) => assert.ok(errors.some((e) => pattern.test(e)), `expected ${pattern}, got:\n${errors.join('\n')}`);

test('contrast follows the WCAG formula', () => {
  assert.equal(contrast('#000000', '#FFFFFF').toFixed(2), '21.00');
  assert.equal(contrast('#777777', '#FFFFFF').toFixed(2), '4.48');
  assert.equal(contrast('#FFFFFF', '#777777'), contrast('#777777', '#FFFFFF'));
});

test('oklch converts sRGB hex', () => {
  const [L, C] = oklch('#FFFFFF');
  assert.ok(Math.abs(L - 1) < 1e-3 && C < 1e-3);
  const [l, c, h] = oklch('#FF0000');
  assert.deepEqual([l.toFixed(3), c.toFixed(3), Math.round(h)], ['0.628', '0.258', 29]);
});

test('the motion token block is read from resolved-conflicts', () => {
  assert.equal(motionTokens['--dur-menu'], '200ms');
  assert.equal(motionTokens['--ease-out'], 'cubic-bezier(0.23, 1, 0.32, 1)');
});

test('a complete file passes', () => {
  assert.deepEqual(check(fixture()), []);
});

test('front matter keys are required and closed', () => {
  has(check(fixture({ front: FRONT.replace(/^rounded:\n  sm: 4px\n/m, '').replace('    rounded: "{rounded.sm}"\n', '') })), /missing "rounded"/);
  has(check(fixture({ front: FRONT.replace('version: alpha', 'version: alpha\nmotion: fast') })), /"motion" is not in the format/);
});

test('value types are checked', () => {
  has(check(fixture({ front: FRONT.replace('"#1F2420"', '"#1F2"') })), /colors\.text: "#1F2" is not a #RRGGBB/);
  has(check(fixture({ front: FRONT.replace('fontSize: 16px', 'fontSize: 1rem') })), /fontSize "1rem" must be in px/);
  has(check(fixture({ front: FRONT.replace('lineHeight: 1.5', 'lineHeight: 24px') })), /lineHeight must be a unitless number/);
  has(check(fixture({ front: FRONT.replace('  sm: 8px', '  sm: 0.5rem') })), /spacing\.sm: "0\.5rem" must be in px/);
  has(check(fixture({ front: FRONT.replace('    padding: 8px 12px', '    borderColor: "{colors.control}"') })), /borderColor is not in the format/);
  has(check(fixture({ front: FRONT.replace('textColor: "{colors.on-accent}"', 'textColor: "#FBF8F4"') })), /textColor must be a \{colors\.\*\} reference/);
});

test('references resolve and match their group', () => {
  has(check(fixture({ front: FRONT.replace('{colors.on-accent}', '{colors.paper}') })), /\{colors\.paper\} does not resolve/);
  has(check(fixture({ front: FRONT.replace('rounded: "{rounded.sm}"', 'rounded: "{spacing.sm}"') })), /takes a \{rounded\.\*\} token/);
  has(check(fixture().replace('Text for Overview, using {colors.accent}', 'Text for Overview, using {colors.link}')), /body reference \{colors\.link\} does not resolve/);
});

test('sections are required, in order, with no extras', () => {
  has(check(fixture({ sections: SECTIONS.filter((s) => s !== 'Motion') })), /missing: Motion/);
  has(check(fixture({ sections: [SECTIONS[1], SECTIONS[0], ...SECTIONS.slice(2)] })), /sections must be, in order/);
  has(check(fixture({ sections: [...SECTIONS, 'Imagery'] })), /not in the format: Imagery/);
  has(check(fixture().replace('# Fixture design system\n', '')), /exactly one H1/);
  has(check(fixture({ overrides: '' })), /section "Overrides" is empty/);
});

test('headings inside code blocks are ignored', () => {
  assert.deepEqual(check(fixture({ overrides: 'None.\n\n```markdown\n## Not a section\n```' })), []);
});

test('the Colors table must match the front matter', () => {
  has(check(fixture({ colors: COLORS.replace('| bg | #F6F7F4 |', '| bg | #F6F7F5 |') })), /bg Light is #F6F7F5, but the front matter says #F6F7F4/);
  has(check(fixture({ colors: COLORS.split('\n').filter((l) => !l.startsWith('| control')).join('\n') })), /"control" has no row/);
  has(check(fixture({ colors: `${COLORS}\n| link | #123456 | #654321 | 0.3 0.05 250 | Links | |` })), /row "link" is not a front-matter colour/);
  has(check(fixture({ colors: COLORS.replace('| #1A1C19 | 0.975', '| dark | 0.975') })), /bg Dark: "dark" is not a #RRGGBB/);
  has(check(fixture({ colors: COLORS.replace('0.480 0.107 56', '0.60 0.107 56') })), /accent: OKLCH 0\.60 0\.107 56 does not match/);
  has(check(fixture({ colors: COLORS.replace('0.480 0.107 56', '0.480 0.107 90') })), /accent: OKLCH .* does not match/);
  assert.deepEqual(check(fixture({ colors: COLORS.replace('0.480 0.107 56', 'oklch(48% 0.107 56)') })), []);
});

test('declared pairs are recomputed and held to their floor', () => {
  has(check(fixture({ colors: COLORS.replace('text on bg 6.31:1 / 7.86:1', 'text on bg 6.90:1 / 7.86:1') })), /accent on bg \(Light\): declared 6\.90:1, computed 6\.31:1/);
  has(check(fixture({ colors: COLORS.replace('ui on bg 3.76:1 / 3.85:1', 'text on bg 3.76:1 / 3.85:1') })), /control on bg \(Light\): 3\.76:1 is below 4\.5:1 for text/);
  has(check(fixture({ colors: COLORS.replace('ui on bg 3.76:1 / 3.85:1', 'ui on bg 3.76:1') })), /needs one ratio per theme/);
  has(check(fixture({ colors: COLORS.replace('ui on bg 3.76:1 / 3.85:1', 'ui on paper 3.76:1 / 3.85:1') })), /unknown colour "paper"/);
  has(check(fixture({ colors: COLORS.replace('ui on bg 3.76:1 / 3.85:1', '3.76:1 on bg') })), /must read "<text\|large\|ui> on <token>/);
});

test('component pairs must pass in every theme', () => {
  const darkFail = COLORS.replace('| on-accent | #FBF8F4 | #1A1C19 |', '| on-accent | #FBF8F4 | #C08050 |').replace('text on accent 6.40:1 / 7.86:1', '');
  has(check(fixture({ colors: darkFail })), /components\.button \(Dark\): on-accent on accent is .* below 4\.5:1/);
  const large = FRONT.replace('typography: "{typography.body}"', 'typography: "{typography.display}"');
  const lowLight = COLORS.replace('| on-accent | #FBF8F4 | #1A1C19 | 0.980 0.006 75 | Text on accent | text on accent 6.40:1 / 7.86:1 |', '| on-accent | #D9A77F | #1A1C19 | 0.765 0.080 60 | Text on accent | |');
  const lowFront = large.replace('on-accent: "#FBF8F4"', 'on-accent: "#D9A77F"');
  const errors = check(fixture({ front: lowFront, colors: lowLight }));
  assert.ok(!errors.some((e) => /components\.button/.test(e)), errors.join('\n'));
  has(check(fixture({ front: FRONT.replace('on-accent: "#FBF8F4"', 'on-accent: "#D9A77F"'), colors: lowLight })), /components\.button \(Light\)/);
});

test('motion tokens follow resolved-conflicts unless overridden', () => {
  const slow = MOTION.replace('200ms', '320ms');
  has(check(fixture({ motion: slow })), /--dur-menu is 320ms, but resolved-conflicts sets 200ms/);
  assert.deepEqual(check(fixture({ motion: slow, overrides: '| Row | Project value | Reason |\n|---|---|---|\n| M4 | `--dur-menu` 320ms | Long menus |' })), []);
});

test('comments are rejected', () => {
  has(check(fixture({ overrides: 'None. <!-- later -->' })), /HTML comments are not allowed/);
});

test('the worked excerpt in the format spec is valid apart from its omitted sections', () => {
  const spec = readFileSync(join(UI_REFS, 'design-md-format.md'), 'utf8');
  const excerpt = spec.split('## Worked excerpt')[1].match(/```markdown\n([\s\S]*?)\n```\n/)[1];
  const errors = check(`${excerpt}\n`).filter((e) => !/^sections must be|exactly one H1/.test(e));
  assert.deepEqual(errors, []);
});
