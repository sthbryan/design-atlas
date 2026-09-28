import { existsSync, readFileSync, realpathSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

export const SECTIONS = [
  'Overview', 'Colors', 'Typography', 'Layout and spacing', 'Elevation and depth', 'Shapes', 'Components',
  'Motion', 'Accessibility', 'Responsive behaviour', "Do's and Don'ts", 'Overrides', 'References',
  'Agent guide', 'Provenance',
];
export const KEYS = ['version', 'name', 'description', 'colors', 'typography', 'rounded', 'spacing', 'components'];
const TYPE_KEYS = ['fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing'];
const COMPONENT_KEYS = {
  backgroundColor: 'colors', textColor: 'colors', typography: 'typography', rounded: 'rounded',
  padding: 'spacing', size: 'spacing', height: 'spacing', width: 'spacing',
};
const DIMENSIONS = new Set(['padding', 'size', 'height', 'width']);
export const THRESHOLDS = { text: 4.5, large: 3, ui: 3 };
const HEX = /^#[0-9A-Fa-f]{6}$/;
const PX = /^\d+(\.\d+)?px$/;
const EM = /^-?\d+(\.\d+)?em$/;
const TOKEN = /^[a-z0-9][a-z0-9-]*$/;
const REF = /^\{([a-z]+)\.([a-z0-9][a-z0-9-]*)\}$/;
const PAIR = /^(text|large|ui) on ([a-z0-9][a-z0-9-]*) (\d+\.\d{2}):1((?: \/ \d+\.\d{2}:1)*)$/;
const COMPOSITE = /^Composite of ([a-z0-9][a-z0-9-]*) at (\d+(?:\.\d+)?%(?: \/ \d+(?:\.\d+)?%)*) over ((?:black|white)(?: \/ (?:black|white))*)(?![\w-])/;
const BACKDROPS = { black: '#000000', white: '#FFFFFF' };

const channel = (v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
const linear = (hex) => [1, 3, 5].map((i) => channel(parseInt(hex.slice(i, i + 2), 16) / 255));

export function luminance(hex) {
  const [r, g, b] = linear(hex);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

export function composite(tint, alpha, backdrop) {
  const mix = [1, 3, 5].map((i) => Math.round(alpha * parseInt(tint.slice(i, i + 2), 16) + (1 - alpha) * parseInt(backdrop.slice(i, i + 2), 16)));
  return `#${mix.map((v) => v.toString(16).padStart(2, '0')).join('').toUpperCase()}`;
}

export function oklch(hex) {
  const [r, g, b] = linear(hex);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const A = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  return [L, Math.hypot(A, B), ((Math.atan2(B, A) * 180) / Math.PI + 360) % 360];
}

function parseOklch(text) {
  const inner = text.replace(/^oklch\((.*)\)$/, '$1').trim();
  const parts = inner.split(/\s+/);
  if (parts.length !== 3) return null;
  const [l, c, h] = parts;
  const L = l.endsWith('%') ? Number(l.slice(0, -1)) / 100 : Number(l);
  const values = [L, Number(c), Number(h)];
  return values.every((v) => Number.isFinite(v)) && L >= 0 && L <= 1 && values[1] >= 0 ? values : null;
}

const NUMBER = /^[-+]?(\.[0-9]+|[0-9]+(\.[0-9]*)?)([eE][-+]?[0-9]+)?$/;
const QUOTE_HINT = 'quote the whole value as one string; for a font stack write fontFamily: "\'Azeret Mono\', ui-monospace, monospace"';

function scalar(text, where) {
  const value = text.trim();
  if (value === '' || value.startsWith('#')) return null;
  const first = value[0];
  if (first === '"' || first === "'") {
    let i = 1;
    let out = '';
    for (; i < value.length; i += 1) {
      const ch = value[i];
      if (first === "'" && ch === "'") {
        if (value[i + 1] === "'") { out += "'"; i += 1; continue; }
        break;
      }
      if (first === '"' && ch === '"') break;
      if (first === '"' && ch === '\\') {
        const next = value[i + 1];
        const map = { n: '\n', t: '\t', '"': '"', '\\': '\\', '/': '/', 0: '\0', r: '\r' };
        if (map[next] !== undefined) { out += map[next]; i += 1; continue; }
        const hex = { x: 2, u: 4, U: 8 }[next];
        if (hex && /^[0-9A-Fa-f]+$/.test(value.slice(i + 2, i + 2 + hex)) && value.length >= i + 2 + hex) {
          out += String.fromCodePoint(parseInt(value.slice(i + 2, i + 2 + hex), 16));
          i += 1 + hex;
          continue;
        }
        throw new Error(`${where}: unknown escape \\${next ?? ''} in a double-quoted value`);
      }
      out += ch;
    }
    if (i >= value.length) throw new Error(`${where}: the quoted value is not closed on this line; keep quoted values on one line`);
    const rest = value.slice(i + 1);
    if (rest.trim() && !/^\s+#/.test(rest)) throw new Error(`${where}: text follows the closing quote (${rest.trim().slice(0, 30)}); ${QUOTE_HINT}`);
    return out;
  }
  if (first === '[' || first === '{') throw new Error(`${where}: flow lists and maps are not part of the format; use one key per line`);
  if (first === '|' || first === '>') throw new Error(`${where}: block scalars are not part of the format; keep the value on one line`);
  if ('&*!'.includes(first)) throw new Error(`${where}: anchors, aliases and tags are not part of the format`);
  if ('@`%'.includes(first)) throw new Error(`${where}: a value cannot start with ${first}; ${QUOTE_HINT}`);
  if (value === '-' || value.startsWith('- ')) throw new Error(`${where}: lists are not part of the format`);
  const plain = value.replace(/\s+#.*$/, '').trim();
  if (/:(\s|$)/.test(plain)) throw new Error(`${where}: a plain value cannot contain ": " or end with ":"; ${QUOTE_HINT}`);
  if (/^(~|null|Null|NULL)$/.test(plain)) return null;
  if (/^(true|True|TRUE)$/.test(plain)) return true;
  if (/^(false|False|FALSE)$/.test(plain)) return false;
  if (/^0x[0-9a-fA-F]+$/.test(plain)) return parseInt(plain.slice(2), 16);
  if (/^0o[0-7]+$/.test(plain)) return parseInt(plain.slice(2), 8);
  if (NUMBER.test(plain)) return Number(plain);
  return plain;
}

export function parseFrontMatter(text, lineOffset = 0) {
  const root = {};
  const stack = [{ map: root, indent: null, path: '' }];
  let pending = null;
  let last = null;
  text.split('\n').forEach((raw, index) => {
    const line = raw.replace(/\r$/, '');
    const at = `line ${index + 1 + lineOffset}`;
    if (!line.trim() || /^\s*#/.test(line)) return;
    const indent = line.match(/^ */)[0].length;
    if (line[indent] === '\t') throw new Error(`${at}: indent with spaces, not tabs`);
    if (pending) {
      if (indent > pending.indent) {
        const child = {};
        pending.map[pending.key] = child;
        stack.push({ map: child, indent, path: pending.path });
      }
      pending = null;
    }
    while (stack.length > 1 && indent < stack.at(-1).indent) stack.pop();
    const top = stack.at(-1);
    if (top.indent === null) top.indent = indent;
    if (indent !== top.indent) {
      throw new Error(indent > top.indent && last
        ? `${at}: this line is indented under ${last}, which already has a value; keep each value on one line, and give a key with nested keys no value of its own`
        : `${at}: the indentation does not line up with the keys above it`);
    }
    const body = line.slice(indent);
    if (body === '-' || body.startsWith('- ')) throw new Error(`${at}: lists are not part of the format`);
    const match = body.match(/^("(?:[^"\\]|\\.)*"|'(?:[^']|'')*'|[^\s#'"{}[\],&*!|>%@`][^:]*?)\s*:(?:[ \t]+(.*))?$/);
    if (!match) throw new Error(`${at}: expected "key: value"`);
    const key = /^["']/.test(match[1]) ? scalar(match[1], at) : match[1];
    const path = top.path ? `${top.path}.${key}` : key;
    if (Object.hasOwn(top.map, key)) throw new Error(`${at}: ${path} is defined twice`);
    const value = scalar(match[2] ?? '', `${at} (${path})`);
    top.map[key] = value;
    if (value === null) {
      pending = { map: top.map, key, indent, path };
      last = null;
    } else last = path;
  });
  return root;
}

const isLarge = (role) => {
  if (!role) return false;
  const size = parseFloat(role.fontSize);
  return size >= 24 || (size >= 18.66 && role.fontWeight >= 700);
};

const stripCode = (body) => body.replace(/^```[\s\S]*?^```[^\n]*$/gm, '');
const cells = (line) => line.trim().replace(/^\|/, '').replace(/\|$/, '').split(/(?<!\\)\|/).map((c) => c.trim().replace(/^`(.*)`$/, '$1'));

function sectionText(body, name) {
  const match = body.match(new RegExp(`^## ${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))`, 'm'));
  return match ? match[1] : '';
}

function firstTable(text) {
  const lines = text.split('\n');
  const start = lines.findIndex((l) => l.trim().startsWith('|'));
  if (start < 0) return null;
  const header = cells(lines[start]);
  const separator = lines[start + 1]?.trim() ?? '';
  const separatorCells = cells(separator);
  if (separatorCells.length !== header.length || !separatorCells.every((cell) => /^:?-{3,}:?$/.test(cell))) return null;
  const rows = [];
  for (const line of lines.slice(start + 2)) {
    if (!line.trim().startsWith('|')) break;
    rows.push(cells(line));
  }
  return { header, rows };
}

export function parseMotionTokens(css) {
  return Object.fromEntries([...css.matchAll(/^\s*(--[a-z0-9-]+):\s*([^;]+);/gm)].map((m) => [m[1], m[2].trim()]));
}

function checkFrontMatter(data, err) {
  for (const key of KEYS) if (data[key] === undefined) err(`front matter is missing "${key}"`);
  for (const key of Object.keys(data)) if (!KEYS.includes(key)) err(`front matter key "${key}" is not in the format (allowed: ${KEYS.join(', ')})`);
  for (const key of ['version', 'name', 'description']) {
    if (data[key] !== undefined && (typeof data[key] !== 'string' || !data[key].trim() || data[key].includes('\n'))) err(`${key} must be a one-line string`);
  }
  const groups = {};
  for (const key of ['colors', 'typography', 'rounded', 'spacing', 'components']) {
    const value = data[key];
    if (value === undefined) continue;
    if (!value || typeof value !== 'object' || Array.isArray(value) || !Object.keys(value).length) {
      err(`${key} must be a non-empty map`);
      continue;
    }
    groups[key] = value;
    for (const name of Object.keys(value)) if (!TOKEN.test(name)) err(`${key}.${name}: token names use lowercase letters, digits and hyphens`);
  }
  for (const [name, value] of Object.entries(groups.colors ?? {})) {
    if (value === null) err(`colors.${name} has no value; write it as a quoted "#RRGGBB" string, because an unquoted # starts a YAML comment`);
    else if (typeof value === 'string' && /^(#[0-9A-Fa-f]{8}|#[0-9A-Fa-f]{4})$|^(rgba?|hsla?|oklch)\(/.test(value)) err(`colors.${name}: "${value}" is not a #RRGGBB hex string; for a translucent colour, record the opaque tint here and add composite rows to the Colors table`);
    else if (typeof value !== 'string' || !HEX.test(value)) err(`colors.${name}: "${value}" is not a #RRGGBB hex string`);
  }
  for (const [name, role] of Object.entries(groups.typography ?? {})) {
    if (!role || typeof role !== 'object' || Array.isArray(role)) {
      err(`typography.${name} must be a map of ${TYPE_KEYS.join(', ')}`);
      continue;
    }
    for (const key of TYPE_KEYS) if (role[key] === undefined) err(`typography.${name} is missing ${key}`);
    for (const key of Object.keys(role)) if (!TYPE_KEYS.includes(key)) err(`typography.${name}.${key} is not in the format (allowed: ${TYPE_KEYS.join(', ')})`);
    if (role.fontFamily !== undefined && (typeof role.fontFamily !== 'string' || !role.fontFamily.trim())) err(`typography.${name}.fontFamily must be a string`);
    if (role.fontSize !== undefined && !PX.test(String(role.fontSize))) err(`typography.${name}.fontSize "${role.fontSize}" must be in px`);
    if (role.fontWeight !== undefined && !(Number.isInteger(role.fontWeight) && role.fontWeight >= 100 && role.fontWeight <= 1000)) err(`typography.${name}.fontWeight must be an integer from 100 to 1000`);
    if (role.lineHeight !== undefined && !(typeof role.lineHeight === 'number' && role.lineHeight > 0 && role.lineHeight <= 3)) err(`typography.${name}.lineHeight must be a unitless number`);
    if (role.letterSpacing !== undefined && !EM.test(String(role.letterSpacing))) err(`typography.${name}.letterSpacing "${role.letterSpacing}" must be in em`);
  }
  for (const key of ['rounded', 'spacing']) {
    for (const [name, value] of Object.entries(groups[key] ?? {})) if (!PX.test(String(value))) err(`${key}.${name}: "${value}" must be in px`);
  }
  for (const [name, component] of Object.entries(groups.components ?? {})) {
    if (!component || typeof component !== 'object' || Array.isArray(component) || !Object.keys(component).length) {
      err(`components.${name} must be a non-empty map`);
      continue;
    }
    for (const [prop, value] of Object.entries(component)) {
      const group = COMPONENT_KEYS[prop];
      if (!group) {
        err(`components.${name}.${prop} is not in the format (allowed: ${Object.keys(COMPONENT_KEYS).join(', ')})`);
        continue;
      }
      const ref = typeof value === 'string' ? value.match(REF) : null;
      if (DIMENSIONS.has(prop) && !ref) {
        if (!/^\d+(\.\d+)?px( \d+(\.\d+)?px){0,3}$/.test(String(value))) err(`components.${name}.${prop} "${value}" must be px values or a {spacing.*} reference`);
        continue;
      }
      if (!ref) err(`components.${name}.${prop} must be a {${group}.*} reference, not a raw value`);
      else if (ref[1] !== group) err(`components.${name}.${prop} points at {${ref[1]}.${ref[2]}}; it takes a {${group}.*} token`);
    }
  }
  return groups;
}

function checkReferences(value, path, groups, err) {
  if (typeof value === 'string') {
    for (const [whole, group, token] of value.matchAll(/\{([a-z]+)\.([a-z0-9][a-z0-9-]*)\}/g)) {
      if (!groups[group] || groups[group][token] === undefined) err(`${path}: ${whole} does not resolve`);
    }
  } else if (value && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) checkReferences(child, path ? `${path}.${key}` : key, groups, err);
  }
}

function checkColors(body, groups, err) {
  const colors = groups.colors ?? {};
  const table = firstTable(sectionText(body, 'Colors'));
  if (!table) {
    err('Colors needs a table starting with a Token column');
    return null;
  }
  const { header, rows } = table;
  const oklchAt = header.findIndex((h) => /^OKLCH\b/.test(h));
  const pairsAt = header.findIndex((h) => /^Pairs\b/.test(h));
  if (header[0] !== 'Token' || oklchAt < 2 || oklchAt !== header.length - 3
    || header[oklchAt + 1] !== 'Job' || pairsAt !== header.length - 1 || header.at(-1) !== 'Pairs (measured)') {
    err('Colors table header must be: Token, one column per theme, OKLCH (<theme>), Job, Pairs (measured)');
    return null;
  }
  const themes = header.slice(1, oklchAt);
  const jobAt = header.indexOf('Job');
  const values = {};
  const composites = {};
  for (const row of rows) {
    if (row.length !== header.length) err(`Colors table row has ${row.length} columns; expected ${header.length}`);
    const token = row[0];
    const mix = (row[jobAt] ?? '').match(COMPOSITE);
    if (mix && colors[token]) err(`Colors table ${token}: a composite row is measured, never painted; remove "${token}" from the front matter`);
    if (!mix && !colors[token]) {
      err(`Colors table row "${token}" is not a front-matter colour (a composite row's Job starts with "Composite of <tint> at <alpha>% over <black|white>")`);
      continue;
    }
    if (values[token]) err(`Colors table lists "${token}" twice`);
    values[token] = themes.map((theme, i) => {
      const hex = row[1 + i] ?? '';
      if (!HEX.test(hex)) err(`Colors table ${token} ${theme}: "${hex}" is not a #RRGGBB hex value`);
      return hex.toUpperCase();
    });
    if (mix) {
      composites[token] = { tint: mix[1], alphas: mix[2].split(' / ').map((a) => Number(a.slice(0, -1))), backdrops: mix[3].split(' / ') };
      if (row[pairsAt]) err(`Colors table ${token}: a composite row is a background; leave its Pairs cell empty and declare pairs on the foreground rows`);
    } else if (HEX.test(values[token][0]) && values[token][0] !== colors[token].toUpperCase()) err(`Colors table ${token} ${themes[0]} is ${values[token][0]}, but the front matter says ${colors[token]}`);
    const source = parseOklch(row[oklchAt] ?? '');
    if (!source) err(`Colors table ${token}: OKLCH "${row[oklchAt] ?? ''}" must be "L C H" or oklch(L C H)`);
    else if (HEX.test(values[token][0])) {
      const [L, C, H] = oklch(values[token][0]);
      const dh = Math.abs(((H - source[2] + 540) % 360) - 180);
      if (Math.abs(L - source[0]) > 0.01 || Math.abs(C - source[1]) > 0.01 || (C >= 0.02 && dh > 5)) {
        err(`Colors table ${token}: OKLCH ${row[oklchAt]} does not match ${values[token][0]} (computed ${L.toFixed(3)} ${C.toFixed(3)} ${H.toFixed(0)})`);
      }
    }
  }
  for (const token of Object.keys(colors)) if (!values[token]) err(`colour "${token}" has no row in the Colors table`);
  for (const [token, mix] of Object.entries(composites)) {
    const perTheme = (list, what) => {
      if (list.length === 1) return themes.map(() => list[0]);
      if (list.length === themes.length) return list;
      err(`Colors table ${token}: give one ${what} for all themes or one per theme (${themes.join(', ')})`);
      return null;
    };
    const alphas = perTheme(mix.alphas, 'alpha');
    const backdrops = perTheme(mix.backdrops, 'backdrop');
    if (!values[mix.tint] || composites[mix.tint]) {
      err(`Colors table ${token}: composite tint "${mix.tint}" is not a colour row`);
      delete composites[token];
      continue;
    }
    if (!alphas || !backdrops || alphas.some((a) => !(a > 0 && a < 100))) {
      if (alphas?.some((a) => !(a > 0 && a < 100))) err(`Colors table ${token}: alpha must be between 0% and 100%`);
      delete composites[token];
      continue;
    }
    mix.opposite = themes.map((theme, i) => {
      const tint = values[mix.tint][i];
      const cell = values[token][i];
      if (!HEX.test(tint) || !HEX.test(cell)) return null;
      const expected = composite(tint, alphas[i] / 100, BACKDROPS[backdrops[i]]);
      const off = [1, 3, 5].some((c) => Math.abs(parseInt(expected.slice(c, c + 2), 16) - parseInt(cell.slice(c, c + 2), 16)) > 1);
      if (off) err(`Colors table ${token} ${theme}: ${mix.tint} at ${alphas[i]}% over ${backdrops[i]} composites to ${expected}, not ${cell}`);
      return { name: backdrops[i] === 'black' ? 'white' : 'black', hex: composite(tint, alphas[i] / 100, BACKDROPS[backdrops[i] === 'black' ? 'white' : 'black']), backdrop: backdrops[i] };
    });
  }
  for (const row of rows) {
    const token = row[0];
    const cell = row[pairsAt] ?? '';
    if (!values[token] || !cell) continue;
    for (const entry of cell.split(';').map((e) => e.trim()).filter(Boolean)) {
      const match = entry.match(PAIR);
      if (!match) {
        err(`Colors table ${token}: pair "${entry}" must read "<text|large|ui> on <token> <ratio>:1${themes.length > 1 ? ' / <ratio>:1' : ''}"`);
        continue;
      }
      const [, kind, other, first, rest] = match;
      const declared = [first, ...[...rest.matchAll(/(\d+\.\d{2}):1/g)].map((m) => m[1])].map(Number);
      if (!values[other]) {
        err(`Colors table ${token}: pair "${entry}" names unknown colour "${other}"`);
        continue;
      }
      if (declared.length !== themes.length) {
        err(`Colors table ${token}: pair "${entry}" needs one ratio per theme (${themes.join(', ')})`);
        continue;
      }
      themes.forEach((theme, i) => {
        const [fg, bg] = [values[token][i], values[other][i]];
        if (!HEX.test(fg) || !HEX.test(bg)) return;
        const actual = contrast(fg, bg);
        if (Math.abs(actual - declared[i]) > 0.01) err(`Colors table ${token} on ${other} (${theme}): declared ${declared[i].toFixed(2)}:1, computed ${actual.toFixed(2)}:1`);
        if (actual < THRESHOLDS[kind]) err(`Colors table ${token} on ${other} (${theme}): ${actual.toFixed(2)}:1 is below ${THRESHOLDS[kind]}:1 for ${kind}`);
        const opposite = composites[other]?.opposite?.[i];
        if (!opposite) return;
        const alt = contrast(fg, opposite.hex);
        if (alt < actual - 0.005) err(`Colors table ${token} on ${other} (${theme}): over ${opposite.name} the ratio is ${alt.toFixed(2)}:1, lower than over ${opposite.backdrop}; the composite row must use the worse backdrop`);
        const [lo, hi] = [luminance(bg), luminance(opposite.hex)].sort((a, b) => a - b);
        if (luminance(fg) >= lo && luminance(fg) <= hi) err(`Colors table ${token} on ${other} (${theme}): ${token} lies between the composites over black and over white, so some backdrop matches it; raise the ${composites[other].tint} alpha or change ${token}`);
      });
    }
  }
  return { themes, values };
}

function checkComponentPairs(groups, palette, err) {
  for (const [name, component] of Object.entries(groups.components ?? {})) {
    const fg = String(component.textColor ?? '').match(REF);
    const bg = String(component.backgroundColor ?? '').match(REF);
    if (!fg || !bg || !palette.values[fg[2]] || !palette.values[bg[2]]) continue;
    const role = String(component.typography ?? '').match(REF);
    const large = isLarge(role ? groups.typography?.[role[2]] : null);
    const floor = large ? THRESHOLDS.large : THRESHOLDS.text;
    palette.themes.forEach((theme, i) => {
      const [a, b] = [palette.values[fg[2]][i], palette.values[bg[2]][i]];
      if (!HEX.test(a) || !HEX.test(b)) return;
      const actual = contrast(a, b);
      if (actual < floor) err(`components.${name} (${theme}): ${fg[2]} on ${bg[2]} is ${actual.toFixed(2)}:1, below ${floor}:1`);
    });
  }
}

function checkMotion(body, motionTokens, err) {
  const table = firstTable(sectionText(body, 'Motion'));
  if (!table || !motionTokens) return;
  if (table.header.join('|') !== 'Token|Value|Used for') {
    err('Motion table header must be: Token, Value, Used for');
    return;
  }
  const overrideTable = firstTable(sectionText(body, 'Overrides'));
  const hasOverride = (token, motionValue) => {
    if (!overrideTable) return false;
    const columns = overrideTable.header.map((cell) => cell.toLowerCase());
    const valueIndex = columns.indexOf('project value');
    const reasonIndex = columns.indexOf('reason');
    if (valueIndex < 0 || reasonIndex < 0) return false;
    return overrideTable.rows.some((row) => {
      const projectValue = (row[valueIndex] ?? '').replaceAll('`', '').trim();
      const reason = row[reasonIndex]?.trim() ?? '';
      const tokenPattern = new RegExp(`(^|\\s)${token}(?=\\s|$)`);
      return tokenPattern.test(projectValue)
        && projectValue.replace(tokenPattern, '$1').trim() === motionValue
        && Boolean(reason);
    });
  };
  for (const row of table.rows) {
    if (row.length !== table.header.length) {
      err(`Motion table row has ${row.length} columns; expected ${table.header.length}`);
      continue;
    }
    const [token, value] = row;
    if (!token?.startsWith('--') || motionTokens[token] === undefined) continue;
    if (value !== motionTokens[token] && !hasOverride(token, value)) {
      err(`Motion ${token} is ${value}, but resolved-conflicts sets ${motionTokens[token]}; list ${token} under Overrides with a reason`);
    }
  }
}

export function validateDesignMd(src, { motionTokens } = {}) {
  const errors = [];
  const err = (message) => errors.push(message);
  if (/<!--/.test(src)) err('HTML comments are not allowed');
  const match = src.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return [...errors, 'missing YAML front matter'];
  let data;
  try {
    data = parseFrontMatter(match[1], 1);
  } catch (error) {
    return [...errors, `invalid front matter: ${error.message}`];
  }
  if (typeof data !== 'object' || Array.isArray(data)) return [...errors, 'front matter must be a map'];
  const body = stripCode(src.slice(match[0].length));
  const groups = checkFrontMatter(data, err);
  checkReferences(data, '', groups, err);
  for (const [whole, group, token] of body.matchAll(/\{([a-z]+)\.([a-z0-9][a-z0-9-]*)\}/g)) {
    if (KEYS.includes(group) && (!groups[group] || groups[group][token] === undefined)) err(`body reference ${whole} does not resolve`);
  }
  const h1 = body.match(/^# .+$/gm) ?? [];
  if (h1.length !== 1) err(`needs exactly one H1 title, found ${h1.length}`);
  const headings = [...body.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
  if (headings.join('|') !== SECTIONS.join('|')) {
    const missing = SECTIONS.filter((s) => !headings.includes(s));
    const extra = headings.filter((h) => !SECTIONS.includes(h));
    err(`sections must be, in order: ${SECTIONS.join(', ')}${missing.length ? `; missing: ${missing.join(', ')}` : ''}${extra.length ? `; not in the format: ${extra.join(', ')}` : ''}`);
  }
  for (const name of SECTIONS) if (headings.includes(name) && !sectionText(body, name).trim()) err(`section "${name}" is empty; say in one line why it does not apply`);
  const palette = groups.colors ? checkColors(body, groups, err) : null;
  if (palette) checkComponentPairs(groups, palette, err);
  checkMotion(body, motionTokens, err);
  return errors;
}

const HERE = dirname(fileURLToPath(import.meta.url));
const MOTION_SOURCES = [
  join(HERE, '..', 'references', 'resolved-conflicts.md'),
  join(HERE, '..', 'skills', 'design-atlas-ui', 'references', 'resolved-conflicts.md'),
];

const HELP = `Usage: node <this script> [DESIGN.md ...] [--motion-tokens FILE]

Checks each DESIGN.md against the design-atlas-ui format: the eight front-matter
keys and their value types, {group.token} references, the Colors table and its
declared contrast pairs, the fifteen sections in order, motion tokens against
resolved-conflicts.md, and HTML comments. With no file, checks ./DESIGN.md.

Prints JSON on stdout: ok, motion_tokens (the file the motion block was read
from) and one entry per file with its errors. Errors also go to stderr, one per
line, as "path: message".

Options:
  --motion-tokens FILE  read the motion token block from this resolved-conflicts.md
                        (default: ../references/resolved-conflicts.md beside this
                        script, or the copy inside a Design Atlas clone)
  --help                show this text

Exit codes: 0 every file is valid, 1 at least one file has errors, 2 bad
arguments, a missing file or no motion token block.`;

function fail(message) {
  process.stderr.write(`${message}\n`);
  process.exit(2);
}

function main(argv) {
  const files = [];
  let motionPath = null;
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h') {
      process.stdout.write(`${HELP}\n`);
      process.exit(0);
    }
    if (arg === '--motion-tokens') {
      motionPath = argv[i + 1];
      if (!motionPath || motionPath.startsWith('--')) fail('--motion-tokens needs a file');
      i += 1;
    } else if (arg.startsWith('--')) fail(`unknown option ${arg}; see --help`);
    else files.push(arg);
  }
  if (!files.length) {
    if (!existsSync('DESIGN.md')) fail('no DESIGN.md in the current directory; pass a path, or see --help');
    files.push('DESIGN.md');
  }
  const source = motionPath ?? MOTION_SOURCES.find((path) => existsSync(path));
  if (!source || !existsSync(source)) fail(`no resolved-conflicts.md found${motionPath ? ` at ${motionPath}` : ''}; pass --motion-tokens FILE`);
  const motionTokens = parseMotionTokens(readFileSync(source, 'utf8'));
  if (!motionTokens['--dur-menu']) fail(`${source} holds no motion token block`);
  const results = files.map((path) => {
    if (!existsSync(path)) fail(`${path}: file not found`);
    const errors = validateDesignMd(readFileSync(path, 'utf8'), { motionTokens });
    return { path, ok: errors.length === 0, errors };
  });
  const total = results.reduce((n, r) => n + r.errors.length, 0);
  for (const r of results) for (const message of r.errors) process.stderr.write(`${r.path}: ${message}\n`);
  if (total) process.stderr.write(`${total} error(s) in ${results.filter((r) => !r.ok).length} file(s)\n`);
  process.stdout.write(`${JSON.stringify({ ok: total === 0, motion_tokens: relative(process.cwd(), source) || source, files: results }, null, 2)}\n`);
  process.exit(total ? 1 : 0);
}

const invoked = process.argv[1] && existsSync(process.argv[1]) ? realpathSync(process.argv[1]) : '';
if (invoked === realpathSync(fileURLToPath(import.meta.url))) main(process.argv.slice(2));
