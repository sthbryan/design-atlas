import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { cpSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';
import { SECTIONS, composite, contrast, oklch, parseFrontMatter, parseMotionTokens, validateDesignMd } from './design-md.mjs';

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
  const extraHeader = COLORS
    .replace('| Token | Light | Dark | OKLCH (light) | Job | Pairs (measured) |', '| Token | Light | Dark | OKLCH (light) | Job | Pairs (measured) | Extra |')
    .replace('|---|---|---|---|---|---|', '|---|---|---|---|---|---|---|');
  has(check(fixture({ colors: extraHeader })), /Colors table header must be/);
  has(check(fixture({ colors: COLORS.replace('| bg | #F6F7F4 | #1A1C19 | 0.975 0.004 122 | Page | |', '| bg | #F6F7F4 | #1A1C19 | 0.975 0.004 122 | Page | | Extra |') })), /Colors table row has 7 columns; expected 6/);
  const aligned = COLORS.replace('|---|---|---|---|---|---|', '|:---|---:|:---:|---:|---|:---:|');
  assert.deepEqual(check(fixture({ colors: aligned })), []);
  has(check(fixture({ colors: COLORS.replace('|---|---|---|---|---|---|', '|---| invalid |---|---|---|---|') })), /Colors needs a table/);
  has(check(fixture({ colors: COLORS.replace('|---|---|---|---|---|---|', '|---|---|---|---|---|') })), /Colors needs a table/);
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
  has(check(fixture({ motion: slow, overrides: 'We use `--dur-menu` at 320ms for long menus.' })), /--dur-menu is 320ms, but resolved-conflicts sets 200ms/);
  has(check(fixture({ motion: slow, overrides: '| Row | Project value | Reason |\n|---|---|---|\n| M4 | `--dur-menu` 320ms | |' })), /--dur-menu is 320ms, but resolved-conflicts sets 200ms/);
  has(check(fixture({ motion: slow, overrides: '| Row | Project value | Reason |\n|---|---|---|\n| M4 | `--dur-menu-extra` 320ms | Long menus |' })), /--dur-menu is 320ms, but resolved-conflicts sets 200ms/);
  has(check(fixture({ motion: slow, overrides: '| Row | Project value | Reason |\n|---|---|---|\n| M4 | `--dur-menu` 200ms | Long menus |' })), /--dur-menu is 320ms, but resolved-conflicts sets 200ms/);
  has(check(fixture({ motion: MOTION.replace('| Token | Value | Used for |', '| Name | Duration | Purpose |') })), /Motion table header must be/);
  has(check(fixture({ motion: MOTION.replace('| `--dur-menu` | 200ms | Menus |', '| `--dur-menu` | 200ms | Menus | Extra |') })), /Motion table row has 4 columns; expected 3/);
});

test('easing overrides match the complete value', () => {
  const motion = `${MOTION}\n| \`--ease-out\` | cubic-bezier(0.4, 0, 1, 1) | Menu easing |`;
  const overrides = '| Row | Project value | Reason |\n|---|---|---|\n| M4 | `--ease-out` cubic-bezier(0.4, 0, 1, 1) | A sharper exit |';
  assert.deepEqual(check(fixture({ motion, overrides })), []);
  has(check(fixture({ motion, overrides: overrides.replace('cubic-bezier(0.4, 0, 1, 1)', 'cubic-bezier(0.4, 0, 1, 1) extra') })), /--ease-out is cubic-bezier/);
  has(check(fixture({ motion, overrides: overrides.replace('--ease-out', '--ease-out-extra') })), /--ease-out is cubic-bezier/);
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

test('the command line validates files and reports through its exit code', () => {
  const dir = mkdtempSync(join(tmpdir(), 'design-md-'));
  const good = join(dir, 'good.md');
  const bad = join(dir, 'bad.md');
  writeFileSync(good, fixture());
  writeFileSync(bad, fixture({ overrides: '' }));
  const cli = (...args) => spawnSync(process.execPath, [join(ROOT, 'scripts/design-md.mjs'), ...args], { encoding: 'utf8', cwd: dir });
  const ok = cli(good);
  assert.equal(ok.status, 0, ok.stderr);
  assert.equal(JSON.parse(ok.stdout).ok, true);
  const failed = cli(good, bad);
  assert.equal(failed.status, 1);
  const out = JSON.parse(failed.stdout);
  assert.deepEqual(out.files.map((f) => f.ok), [true, false]);
  assert.match(failed.stderr, /bad\.md: section "Overrides" is empty/);
  assert.equal(cli(join(dir, 'missing.md')).status, 2);
  assert.equal(cli('--motion-tokens', join(dir, 'good.md'), good).status, 2);
  assert.equal(cli().status, 2);
  assert.match(cli('--help').stdout, /Exit codes/);
});

test('the built-in front-matter parser reads the format subset exactly as YAML does', () => {
  const same = [
    FRONT.slice(4, -5),
    'a: Nacelle, system-ui, sans-serif',
    'a: "\'Azeret Mono\', ui-monospace, monospace"',
    "a: '\"Azeret Mono\", ui-monospace'",
    "a: 'it''s'",
    'a: "x\\u00e9 \\"q\\""',
    'a: x # note',
    'a: x#y',
    'a: "#FFFFFF" # white',
    'a: #FFFFFF',
    'a:',
    'a: ~',
    'a: 1.50',
    'a: -0.02em',
    'a: +1',
    'a: 1e3',
    'a: .5',
    'a: 0x1F',
    'a: True',
    'a: yes',
    'a: x,',
    'a: 12:30',
    'a: http://x.test',
    '2xl: 32px',
    '"k y": 1',
    '# comment\na:\n  # nested comment\n  b: 1\n\n  c: 2\nd: 3',
  ];
  for (const text of same) assert.deepEqual(parseFrontMatter(text), parse(text), text);
  const rejectedByBoth = [
    'a: "Azeret Mono", ui-monospace, monospace',
    "a: 'Azeret Mono', ui-monospace",
    'a: "x"y',
    'a: b: c',
    'a: @x',
    'a: 1\na: 2',
    'a:\n  b: 1\n   c: 2',
    'a: - x',
  ];
  for (const text of rejectedByBoth) {
    assert.throws(() => parse(text), text);
    assert.throws(() => parseFrontMatter(text), text);
  }
  const outsideTheFormat = ['a: [1]', 'a: {b: 1}', 'a: |\n  x', 'a: &x 1', 'a: x\n  y', 'a:\n\tb: 1'];
  for (const text of outsideTheFormat) assert.throws(() => parseFrontMatter(text), /not part of the format|one line|tabs/, text);
});

test('the copy shipped with design-atlas-ui runs from the skill folder alone', () => {
  const dir = mkdtempSync(join(tmpdir(), 'design-atlas-ui-'));
  for (const sub of ['scripts', 'references']) cpSync(join(ROOT, 'skills/design-atlas-ui', sub), join(dir, sub), { recursive: true });
  writeFileSync(join(dir, 'DESIGN.md'), fixture());
  const res = spawnSync(process.execPath, [join(dir, 'scripts/validate-design-md.mjs')], { encoding: 'utf8', cwd: dir });
  assert.equal(res.status, 0, res.stderr);
  assert.equal(JSON.parse(res.stdout).motion_tokens, join('references', 'resolved-conflicts.md'));
});

test('a quoted family followed by more of the stack gets a quoting hint', () => {
  const src = fixture({ front: FRONT.replace('fontFamily: Nacelle, system-ui, sans-serif', 'fontFamily: "Azeret Mono", ui-monospace, monospace') });
  has(check(src), /line 13 \(typography\.body\.fontFamily\): text follows the closing quote.*quote the whole value as one string/);
  const quoted = fixture({ front: FRONT.replace('fontFamily: Nacelle, system-ui, sans-serif', 'fontFamily: "\'Azeret Mono\', ui-monospace, monospace"') });
  assert.deepEqual(check(quoted), []);
});

test('colour values get hints for comments and alpha', () => {
  has(check(fixture({ front: FRONT.replace('bg: "#F6F7F4"', 'bg: #F6F7F4') })), /colors\.bg has no value; write it as a quoted "#RRGGBB"/);
  has(check(fixture({ front: FRONT.replace('bg: "#F6F7F4"', 'bg: "#F6F7F4B8"') })), /colors\.bg: .* for a translucent colour, record the opaque tint/);
});

function glassRow({ token = 'bg-worst', alpha = '72%', over = 'black / white', light, dark, pairs = '' } = {}) {
  const [a] = alpha.split(' / ').map((v) => Number(v.slice(0, -1)) / 100);
  const [first, second = first] = over.split(' / ');
  const backdrop = { black: '#000000', white: '#FFFFFF' };
  const lightHex = light ?? composite('#F6F7F4', a, backdrop[first]);
  const darkHex = dark ?? composite('#1A1C19', a, backdrop[second]);
  const [L, C, H] = oklch(lightHex);
  return `| ${token} | ${lightHex} | ${darkHex} | ${L.toFixed(3)} ${C.toFixed(3)} ${H.toFixed(0)} | Composite of bg at ${alpha} over ${over}. Worst case under the glass bar | ${pairs} |`;
}

function withGlass(textPair, row = glassRow()) {
  return `${COLORS.replace('text on bg 14.67:1 / 14.69:1', `text on bg 14.67:1 / 14.69:1; ${textPair}`)}\n${row}`;
}

test('composite rows declare the worst case under a translucent surface', () => {
  const pair = (fg, bg) => contrast(fg, bg).toFixed(2);
  const worstLight = composite('#F6F7F4', 0.72, '#000000');
  const worstDark = composite('#1A1C19', 0.72, '#FFFFFF');
  const good = `text on bg-worst ${pair('#1F2420', worstLight)}:1 / ${pair('#ECEEEA', worstDark)}:1`;
  assert.deepEqual(check(fixture({ colors: withGlass(good) })), []);
  has(check(fixture({ colors: withGlass(good, glassRow({ light: '#A0A0A0' })) })), /bg-worst Light: bg at 72% over black composites to #B1B2B0, not #A0A0A0/);
  const wrongSide = glassRow({ over: 'white / black' });
  const wrongPair = `text on bg-worst ${pair('#1F2420', composite('#F6F7F4', 0.72, '#FFFFFF'))}:1 / ${pair('#ECEEEA', composite('#1A1C19', 0.72, '#000000'))}:1`;
  has(check(fixture({ colors: withGlass(wrongPair, wrongSide) })), /over black the ratio is .* lower than over white; the composite row must use the worse backdrop/);
  has(check(fixture({ colors: withGlass(good, glassRow({ pairs: 'text on bg 2.00:1 / 2.00:1' })) })), /composite row is a background; leave its Pairs cell empty/);
  has(check(fixture({ colors: withGlass(good, glassRow({ token: 'on-accent' })) })), /a composite row is measured, never painted; remove "on-accent" from the front matter/);
  has(check(fixture({ colors: withGlass(good, glassRow({ alpha: '72% / 60% / 50%' })) })), /one alpha for all themes or one per theme/);
});

test('a foreground between the two composites fails, since some backdrop matches it', () => {
  const faint = glassRow({ alpha: '4%' });
  const worstLight = composite('#F6F7F4', 0.04, '#000000');
  const worstDark = composite('#1A1C19', 0.04, '#FFFFFF');
  const control = `ui on bg-worst ${contrast('#7A807A', worstLight).toFixed(2)}:1 / ${contrast('#737973', worstDark).toFixed(2)}:1`;
  const colors = `${COLORS.replace('ui on bg 3.76:1 / 3.85:1', `ui on bg 3.76:1 / 3.85:1; ${control}`)}\n${faint}`;
  has(check(fixture({ colors })), /control on bg-worst \(Light\): control lies between the composites over black and over white/);
});

test('the translucent-surface example in the format spec is valid', () => {
  const spec = readFileSync(join(UI_REFS, 'design-md-format.md'), 'utf8');
  const table = spec.split('### Translucent surfaces')[1].match(/```markdown\n([\s\S]*?)\n```\n/)[1];
  const rows = Object.fromEntries([...table.matchAll(/^\| ([a-z-]+) \| (#[0-9A-F]{6}) \|/gm)].map((m) => [m[1], m[2]]));
  const front = `---\nversion: alpha\nname: Glass\ndescription: Spec example.\ncolors:\n  ink: "${rows.ink}"\n  glass: "${rows.glass}"\ntypography:\n  body:\n    fontFamily: system-ui\n    fontSize: 16px\n    fontWeight: 400\n    lineHeight: 1.5\n    letterSpacing: 0em\nrounded:\n  sm: 4px\nspacing:\n  sm: 8px\ncomponents:\n  panel:\n    backgroundColor: "{colors.glass}"\n---\n`;
  const src = fixture({ front, colors: table }).replaceAll('using {colors.accent}', 'using {colors.ink}');
  assert.deepEqual(check(src), []);
});

test('the shiftboard eval fixture is a valid DESIGN.md', () => {
  const src = readFileSync(join(ROOT, 'skills/design-atlas-ui/evals/files/shiftboard/DESIGN.md'), 'utf8');
  assert.deepEqual(check(src), []);
});
