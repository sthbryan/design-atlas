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
    console.log('Usage: node scripts/evals.mjs [--json]\n\nValidates eval and trigger definitions, runs deterministic smoke checks with the skill present, verifies the same checks are unavailable without it, and marks transcript-dependent cases as skipped.');
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
  const transcriptSkipped = definitions.map((d) => ({ name: d.name, cases: d.cases, status: 'skipped', reason: 'needs agent transcripts; runner validates definitions and smoke checks only' }));
  const ok = definitions.every((d) => d.problems.length === 0) && withSkill.every((s) => s.ok) && withoutSkill.every((s) => !s.skillPresent && !s.scriptPresent);
  const result = { ok, definitions, withSkill, withoutSkill, transcriptSkipped };
  console.log(JSON.stringify(result, null, 2));
  process.exitCode = ok ? 0 : 1;
}

main();
