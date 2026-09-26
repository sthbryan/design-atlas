export const FIELDS = ['title', 'description', 'type', 'topics', 'body', 'licence'];
export const BODY_SECTIONS = ['What it is', 'Most useful', 'Using it with agents', 'Reusable ideas'];

const STOPWORDS = new Set(`
a about above after again against all also am an and any are as at be because been before being below between both
but by can could did do does doing done down during each eg either etc every few for from further get gets got had has
have having he her here hers him his how i ie if in into is it its itself just let like may me might mine more most
must my myself need needs no nor not now of off often on once one only or other our ours out over own per please
same shall she should so some something such than that the their theirs them then there these they this those
through to too under until up upon us very via vs want wants was we were what when where which while who whom why
will with within without would yet you your yours looking find show give
`.trim().split(/\s+/));

export function stem(word) {
  let w = word;
  if (w.length <= 3 || /\d/.test(w)) return w;
  if (w.endsWith('ies') && w.length > 4) w = `${w.slice(0, -3)}y`;
  else if (/(sses|xes|zes|ches|shes)$/.test(w)) w = w.slice(0, -2);
  else if (/[^su]s$/.test(w) && !w.endsWith('is')) w = w.slice(0, -1);
  if (w.endsWith('ly') && w.length >= 7) w = w.slice(0, -2);
  let cut = '';
  if (w.endsWith('ing') && w.length >= 7) cut = w.slice(0, -3);
  else if (w.endsWith('ed') && w.length >= 6) cut = w.slice(0, -2);
  else if (w.endsWith('ation') && w.length >= 8) w = w.slice(0, -3);
  if (cut) w = /([^aeioulsz])\1$/.test(cut) ? cut.slice(0, -1) : cut;
  if (w.endsWith('e') && w.length >= 5) w = w.slice(0, -1);
  return w;
}

export function normalize(text) {
  return String(text ?? '')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/\]\([^)]*\)/g, ' ')
    .replace(/(\d),(\d)/g, '$1$2');
}

export function tokenize(text) {
  return normalize(text)
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 1 && !STOPWORDS.has(w) && !/^\d{4,}$/.test(w))
    .map(stem);
}

function packTerms(text) {
  const counts = new Map();
  for (const term of tokenize(text)) counts.set(term, (counts.get(term) ?? 0) + 1);
  return [...counts].map(([term, n]) => (n > 1 ? `${term}:${n}` : term)).join(' ');
}

export function sectionsOf(body) {
  const out = {};
  for (const part of String(body ?? '').split(/^## /m).slice(1)) {
    const [heading, ...rest] = part.split('\n');
    out[heading.trim()] = rest.join('\n');
  }
  return out;
}

export function searchDoc(site, body) {
  const sections = body ? sectionsOf(body) : {};
  const text = {
    title: site.title,
    description: site.description,
    type: [site.type, site.formats].filter(Boolean).join(' '),
    topics: (site.topics ?? []).join(' '),
    body: BODY_SECTIONS.map((name) => sections[name] ?? '').join('\n'),
    licence: [site.licence, site.licence_class].filter(Boolean).join(' '),
  };
  const doc = { slug: site.slug };
  for (const field of FIELDS) {
    const packed = packTerms(text[field]);
    if (packed) doc[field] = packed;
  }
  return doc;
}

export function searchIndexJson(docs, about) {
  return [
    '{',
    `"about":${JSON.stringify({ ...about, fields: FIELDS, body_sections: BODY_SECTIONS, docs: docs.length })},`,
    '"docs":[',
    docs.map((d) => JSON.stringify(d)).join(',\n'),
    ']',
    '}',
    '',
  ].join('\n');
}
