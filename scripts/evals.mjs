import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SKILLS = ['design-atlas', 'design-atlas-ui'];

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

function checkSkill(name) {
  const dir = join(ROOT, 'skills', name);
  const evalsPath = join(dir, 'evals', 'evals.json');
  const triggersPath = join(dir, 'evals', 'triggers.json');
  const data = readJson(evalsPath);
  const triggers = readJson(triggersPath);
  const ids = new Set();
  const problems = [];
  for (const c of data.evals ?? []) {
    if (!c.id || ids.has(c.id)) problems.push(`duplicate or missing id ${c.id}`);
    ids.add(c.id);
    if (!c.prompt || !c.expected_output || !Array.isArray(c.expectations) || c.expectations.length === 0) {
      problems.push(`case ${c.id} is missing prompt, expected_output or expectations`);
    }
    for (const f of c.files ?? []) {
      if (!existsSync(join(dir, f))) problems.push(`case ${c.id} missing file ${f}`);
    }
  }
  for (const t of triggers ?? []) {
    if (!t.query || typeof t.should_trigger !== 'boolean') problems.push('invalid trigger row');
  }
  return { name, cases: data.evals?.length ?? 0, triggers: triggers?.length ?? 0, problems };
}

const FIXTURE_ASSERTIONS = {
  locationIs: (data, a) => (data.location === a.value ? null : `location is ${JSON.stringify(data.location)}, expected ${JSON.stringify(a.value)}`),
  snapshotLatestReviewPresent: (data) => (/^\d{4}-\d{2}-\d{2}$/.test(data.snapshot?.latest_review ?? '') ? null : 'snapshot.latest_review is missing or not a YYYY-MM-DD date'),
  countRange: (data, a) => {
    const n = data.sites?.length ?? -1;
    return n >= a.min && n <= a.max ? null : `shown count ${n} outside [${a.min}, ${a.max}]`;
  },
  totalMin: (data, a) => ((data.total ?? -1) >= a.min ? null : `total ${data.total} below ${a.min}`),
  totalIs: (data, a) => (data.total === a.value ? null : `total ${data.total}, expected ${a.value}`),
  allFieldIn: (data, a) => {
    const bad = (data.sites ?? []).filter((s) => !a.values.includes(s[a.field])).map((s) => `${s.slug}:${s[a.field]}`);
    return bad.length ? `${a.field} outside [${a.values.join(', ')}]: ${bad.join(', ')}` : null;
  },
  allLicenceIn: (data, a) => {
    const bad = (data.sites ?? []).filter((s) => !a.values.includes(s.licence_class)).map((s) => `${s.slug}:${s.licence_class}`);
    return bad.length ? `licence_class outside [${a.values.join(', ')}]: ${bad.join(', ')}` : null;
  },
  allHaveAgent: (data, a) => {
    const bad = (data.sites ?? []).filter((s) => !(s.agent ?? []).includes(a.value)).map((s) => s.slug);
    return bad.length ? `rows without agent channel ${a.value}: ${bad.join(', ')}` : null;
  },
  allVerdictsIn: (data, a) => {
    const bad = (data.sites ?? []).filter((s) => !a.values.includes(s.verdict)).map((s) => `${s.slug}:${s.verdict}`);
    return bad.length ? `verdict outside [${a.values.join(', ')}]: ${bad.join(', ')}` : null;
  },
  anyTopicIn: (data, a) => ((data.sites ?? []).some((s) => (s.topics ?? []).some((t) => a.values.includes(t))) ? null : `no row tagged with any of [${a.values.join(', ')}]`),
  slugPresent: (data, a) => ((data.sites ?? []).some((s) => s.slug === a.value) ? null : `slug ${a.value} not in results`),
  slugAbsent: (data, a) => ((data.sites ?? []).some((s) => s.slug === a.value) ? `slug ${a.value} unexpectedly present` : null),
  everyRowHasPath: (data) => {
    const bad = (data.sites ?? []).filter((s) => !/^sites\/[a-z0-9-]+\.md$/.test(s.path ?? '')).map((s) => s.slug);
    return bad.length ? `rows without a sites/<slug>.md path: ${bad.join(', ')}` : null;
  },
};

function runFixtureScenario(scenario) {
  const failures = [];
  const args = ['--offline', '--location', 'bundled', ...(scenario.args ?? [])];
  const res = spawnSync(process.execPath, [join(ROOT, 'skills', 'design-atlas', 'scripts', 'query.mjs'), ...args], { encoding: 'utf8', timeout: 15000 });
  const expectedExit = scenario.expectExit ?? 0;
  if (res.status !== expectedExit) failures.push(`exit ${res.status}, expected ${expectedExit}`);
  if (expectedExit !== 0 && scenario.stderrIncludes && !res.stderr.includes(scenario.stderrIncludes)) {
    failures.push(`stderr does not include ${JSON.stringify(scenario.stderrIncludes)}: ${res.stderr.trim().split('\n').pop()}`);
  }
  let data = null;
  try {
    data = JSON.parse(res.stdout);
  } catch {}
  if (!data) {
    if (expectedExit === 0) failures.push('stdout is not valid JSON');
    else if ((scenario.assertions ?? []).length) failures.push('stdout is not valid JSON, cannot run assertions');
    return { id: scenario.id, eval: scenario.eval ?? null, ok: failures.length === 0, failures };
  }
  for (const a of scenario.assertions ?? []) {
    const check = FIXTURE_ASSERTIONS[a.kind];
    if (!check) {
      failures.push(`unknown assertion kind ${a.kind}`);
      continue;
    }
    const problem = check(data, a);
    if (problem) failures.push(problem);
  }
  return { id: scenario.id, eval: scenario.eval ?? null, ok: failures.length === 0, failures };
}

function runFixtures() {
  const path = join(ROOT, 'skills', 'design-atlas', 'evals', 'fixtures.json');
  if (!existsSync(path)) return { mode: 'bundled', cases: [], problems: ['fixtures.json missing'] };
  const fixtures = readJson(path);
  const cases = (fixtures.scenarios ?? []).map(runFixtureScenario);
  return { mode: fixtures.mode ?? 'bundled', cases, problems: cases.filter((c) => !c.ok).map((c) => `${c.id}: ${c.failures.join('; ')}`) };
}

function smokeWithSkill(name) {
  if (name === 'design-atlas') {
    const res = spawnSync(process.execPath, [join(ROOT, 'skills', name, 'scripts', 'query.mjs'), '--offline', '--topics'], { encoding: 'utf8' });
    let location = null;
    try { location = JSON.parse(res.stdout).location; } catch {}
    return { command: 'query.mjs --offline --topics', exit: res.status, location, ok: res.status === 0 && Boolean(location) };
  }
  const res = spawnSync(process.execPath, [join(ROOT, 'skills', name, 'scripts', 'validate-design-md.mjs'), '--help'], { encoding: 'utf8' });
  return { command: 'validate-design-md.mjs --help', exit: res.status, ok: res.status === 0 };
}

function main() {
  if (process.argv.includes('--help')) {
    console.log('Usage: node scripts/evals.mjs [--json]\n\nValidates eval and trigger definitions, runs deterministic smoke checks with the skill present, verifies the same checks are unavailable without it, runs the design-atlas bundled fixtures (skills/design-atlas/evals/fixtures.json) against the real catalog, and marks transcript-dependent cases as skipped.');
    return;
  }
  const definitions = SKILLS.map(checkSkill);
  const withSkill = SKILLS.map((name) => ({ name, ...smokeWithSkill(name) }));
  const empty = mkdtempSync(join(tmpdir(), 'atlas-no-skill-'));
  const withoutSkill = SKILLS.map((name) => ({
    name,
    skillPresent: existsSync(join(empty, 'skills', name, 'SKILL.md')),
    scriptPresent: existsSync(join(empty, 'skills', name, 'scripts', name === 'design-atlas' ? 'query.mjs' : 'validate-design-md.mjs')),
  }));
  rmSync(empty, { recursive: true, force: true });
  const fixtures = runFixtures();
  const transcriptSkipped = definitions.map((d) => ({ name: d.name, cases: d.cases, status: 'skipped', reason: 'needs agent transcripts; runner validates definitions, smoke checks and bundled fixtures only' }));
  const ok = definitions.every((d) => d.problems.length === 0) && withSkill.every((s) => s.ok) && withoutSkill.every((s) => !s.skillPresent && !s.scriptPresent) && fixtures.problems.length === 0;
  const result = { ok, definitions, withSkill, withoutSkill, fixtures, transcriptSkipped };
  console.log(JSON.stringify(result, null, 2));
  process.exitCode = ok ? 0 : 1;
}

main();
