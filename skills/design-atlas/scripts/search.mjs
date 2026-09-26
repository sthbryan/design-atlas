export const FIELDS = ['title', 'description', 'type', 'topics', 'body', 'licence'];
export const BODY_SECTIONS = ['What it is', 'Most useful', 'Using it with agents', 'Reusable ideas'];

const STOPWORDS = new Set(`
a about above after again against all also am an and any are as at be because been before being below between both
but by can could did do does doing done down during each eg either etc every few for from further get gets got had has
have having he her here hers him his how i ie if in into is it its itself just let like may me might mine more most
must my myself need needs no nor not now of off often on once one only or other our ours out over own per please
same shall she should so some something such than that the their theirs them then there these they this those
through to too under until up upon us very via vs want wants was we were what when where which while who whom why
will with within without would yet you your yours looking find show give idea ideas example examples
reference references recommend suggest stuff thing things help pls lot lots kind sort
`.trim().split(/\s+/));

export function stem(word) {
  let w = word;
  if (/^\d+[a-z]*s$/.test(w)) return w.slice(0, -1);
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
  if (/[^aeiou]e$/.test(w) && w.length >= 5) w = w.slice(0, -1);
  return w;
}

export function normalize(text) {
  return String(text ?? '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/\]\([^)]*\)/g, ' ')
    .replace(/(\d),(\d)/g, '$1$2');
}

export function words(text) {
  return normalize(text)
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 1 && !STOPWORDS.has(w) && !/^\d{4,}$/.test(w));
}

export function tokenize(text) {
  return words(text).map(stem);
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

export const WEIGHTS = { title: 4, description: 2.5, type: 2, topics: 2, body: 1, licence: 0.5 };
const K1 = 1.2;
const B = 0.75;
const SYNONYM_WEIGHT = 0.4;
const SYNONYM_MAX_SHARE = 0.25;
const FUZZY_WEIGHT = { 1: 0.7, 2: 0.5 };
const STATUS_FACTOR = { active: 1, stale: 0.85, broken: 0.7 };
const MIN_SHARE_OF_BEST = 0.25;
const STYLE_QUERY_FILLER = new Set(['site', 'sites', 'websit', 'websites', 'web', 'design']);

function unpack(packed) {
  const tf = new Map();
  let len = 0;
  for (const item of String(packed ?? '').split(' ').filter(Boolean)) {
    const [term, n] = item.split(':');
    const count = Number(n ?? 1);
    tf.set(term, count);
    len += count;
  }
  return { tf, len };
}

export function buildCorpus(sites, indexDocs) {
  const bySlug = new Map((indexDocs ?? []).map((d) => [d.slug, d]));
  const docs = new Map();
  const df = new Map();
  const total = Object.fromEntries(FIELDS.map((f) => [f, 0]));
  let missing = 0;
  for (const site of sites) {
    const raw = bySlug.get(site.slug);
    if (!raw) missing += 1;
    const fields = {};
    const seen = new Set();
    for (const field of FIELDS) {
      fields[field] = unpack((raw ?? searchDoc(site))[field]);
      total[field] += fields[field].len;
      for (const term of fields[field].tf.keys()) seen.add(term);
    }
    for (const term of seen) df.set(term, (df.get(term) ?? 0) + 1);
    docs.set(site.slug, fields);
  }
  const n = sites.length;
  const avg = Object.fromEntries(FIELDS.map((f) => [f, total[f] / Math.max(n, 1) || 1]));
  return { docs, df, avg, n, missing };
}

export function prepareSynonyms(raw) {
  const synonyms = new Map();
  for (const [key, values] of Object.entries(raw?.synonyms ?? {})) {
    const phrase = tokenize(key).join(' ');
    if (!phrase || !Array.isArray(values)) continue;
    const terms = synonyms.get(phrase) ?? new Set();
    for (const value of values) for (const term of tokenize(value)) if (term !== phrase) terms.add(term);
    synonyms.set(phrase, terms);
  }
  const filters = new Map();
  for (const [hint, values] of Object.entries(raw?.filters ?? {})) {
    if (!Array.isArray(values)) continue;
    for (const value of values) {
      const phrase = tokenize(value).join(' ');
      if (phrase && !filters.has(phrase)) filters.set(phrase, hint);
    }
  }
  const visualStyles = new Set((raw?.visual_styles ?? []).flatMap((style) => tokenize(style)));
  return { synonyms, filters, visualStyles };
}

function distance(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let before = [];
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i += 1) {
    const cur = [i];
    let low = i;
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) cur[j] = Math.min(cur[j], before[j - 2] + 1);
      low = Math.min(low, cur[j]);
    }
    if (low > max) return max + 1;
    before = prev;
    prev = cur;
  }
  return prev[b.length];
}

function closest(word, candidates, df) {
  if (word.length < 4 || /\d/.test(word)) return null;
  const max = word.length >= 6 ? 2 : 1;
  let best = null;
  for (const term of candidates) {
    if (term.length < 3) continue;
    const d = distance(word, term, max);
    if (d > max) continue;
    const pick = !best || d < best.d || (d === best.d && ((df.get(term) ?? 0) > (df.get(best.term) ?? 0)
      || ((df.get(term) ?? 0) === (df.get(best.term) ?? 0) && term < best.term)));
    if (pick) best = { term, d };
  }
  return best;
}

export function planQuery(query, corpus, { synonyms, filters, visualStyles = new Set() }) {
  const singles = [...synonyms.keys()].filter((k) => !k.includes(' '));
  const known = new Set([...corpus.df.keys(), ...singles]);
  const candidates = [...known].sort();
  const base = [];
  const corrected = [];
  const unmatched = [];
  const hints = new Set();
  const dropped = [];
  const queryWords = words(query);
  const hasVisualStyle = queryWords.some((raw) => visualStyles.has(stem(raw)));
  const raws = hasVisualStyle ? queryWords.filter((raw) => !STYLE_QUERY_FILLER.has(stem(raw))) : queryWords;
  for (let i = 0; i < raws.length; i += 1) {
    const raw = raws[i];
    const word = stem(raw);
    const pair = i + 1 < raws.length ? `${word} ${stem(raws[i + 1])}` : '';
    if (filters.has(pair)) {
      hints.add(filters.get(pair));
      dropped.push(raw, raws[i + 1]);
      i += 1;
      continue;
    }
    if (filters.has(word)) {
      hints.add(filters.get(word));
      dropped.push(raw);
      continue;
    }
    if (base.some(([term]) => term === word)) continue;
    if (known.has(word)) {
      base.push([word, 1]);
      continue;
    }
    const fix = closest(word, candidates, corpus.df);
    if (fix && !base.some(([term]) => term === fix.term)) {
      base.push([fix.term, FUZZY_WEIGHT[fix.d]]);
      corrected.push(`${raw}→${fix.term}`);
    } else if (!fix) unmatched.push(raw);
  }
  const terms = new Map(base);
  const usable = (term) => corpus.df.has(term) && corpus.df.get(term) <= corpus.n * SYNONYM_MAX_SHARE;
  const groups = base.map(([term, weight]) => {
    const group = new Map([[term, weight]]);
    const synonymWeight = hasVisualStyle && visualStyles.has(term) ? 0.8 : SYNONYM_WEIGHT;
    for (const alt of synonyms.get(term) ?? []) if (!terms.has(alt) && usable(alt)) group.set(alt, weight * synonymWeight);
    return group;
  });
  for (let i = 1; i < base.length; i += 1) {
    const weight = Math.min(base[i - 1][1], base[i][1]) * SYNONYM_WEIGHT;
    const group = new Map();
    for (const alt of synonyms.get(`${base[i - 1][0]} ${base[i][0]}`) ?? []) if (!terms.has(alt) && usable(alt)) group.set(alt, weight);
    if (group.size) groups.push(group);
  }
  const expanded = [...new Set(groups.flatMap((g) => [...g.keys()]).filter((t) => !terms.has(t)))];
  return { terms, expanded, groups, corrected, unmatched, hints: [...hints], dropped, visualStyle: hasVisualStyle };
}

export function rank(sites, plan, corpus) {
  const idf = (term) => {
    const df = corpus.df.get(term) ?? 0;
    return Math.log(1 + (corpus.n - df + 0.5) / (df + 0.5));
  };
  const out = [];
  for (const site of sites) {
    const doc = corpus.docs.get(site.slug);
    if (!doc) continue;
    let score = 0;
    const match = {};
    for (const group of plan.groups) {
      let best = 0;
      for (const [term, weight] of group) {
        let tf = 0;
        const fields = [];
        for (const field of FIELDS) {
          const count = doc[field].tf.get(term);
          if (!count) continue;
          tf += (WEIGHTS[field] * count) / (1 - B + (B * doc[field].len) / corpus.avg[field]);
          fields.push(field);
        }
        if (!tf) continue;
        best = Math.max(best, (weight * idf(term) * tf) / (K1 + tf));
        match[term] = fields;
      }
      score += best;
    }
    if (score > 0) {
      const styleFactor = plan.visualStyle
        ? (site.type === 'gallery' ? 1.35 : 1) * (site.topics?.includes('typography-and-styles') ? 1.6 : 1)
        : 1;
      out.push({ site, score: score * (STATUS_FACTOR[site.status] ?? 1) * styleFactor, match });
    }
  }
  const best = Math.max(0, ...out.map((r) => r.score));
  return out.filter((r) => r.score >= best * MIN_SHARE_OF_BEST);
}
