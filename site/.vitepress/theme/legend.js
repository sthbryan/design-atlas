export const LICENCE_GROUPS = {
  ship: {
    label: 'Ship',
    icon: 'check',
    meaning: 'reuse with the notice or credit the licence asks for',
    classes: ['public-domain', 'open-source-permissive', 'cc-attribution'],
  },
  conditional: {
    label: 'Conditional',
    icon: 'warning',
    meaning: 'read the terms before you reuse anything',
    classes: ['open-source-copyleft', 'cc-noncommercial', 'source-available', 'proprietary-free', 'proprietary-paid', 'mixed'],
  },
  'look-only': {
    label: 'Look only',
    icon: 'eye',
    meaning: 'no licence stated, so take ideas and nothing else',
    classes: ['not-stated'],
  },
};

const STATUS = {
  stale: { label: 'Stale', icon: 'warning', badge: 'conditional' },
  broken: { label: 'Broken', icon: 'link-break', badge: 'broken' },
};

export const VERDICTS = { 'very-useful': 'Very useful', useful: 'Useful', niche: 'Niche' };

export const words = (value) => String(value ?? '').replace(/-/g, ' ');

export function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export const icon = (name) => `<svg class="atlas-icon" aria-hidden="true" focusable="false"><use href="#atlas-icon-${name}"></use></svg>`;

export function licenceGroup(licenceClass) {
  const key = Object.keys(LICENCE_GROUPS).find((group) => LICENCE_GROUPS[group].classes.includes(licenceClass)) ?? 'look-only';
  return { key, ...LICENCE_GROUPS[key] };
}

export function licenceBadge(licenceClass) {
  const group = licenceGroup(licenceClass);
  return `<span class="atlas-badge atlas-badge-${group.key}">${icon(group.icon)}${group.label}<span class="atlas-sr"> licence, ${escapeHtml(words(licenceClass))}</span></span>`;
}

export function statusBadge(status) {
  const entry = STATUS[status];
  return entry ? `<span class="atlas-badge atlas-badge-${entry.badge}">${icon(entry.icon)}${entry.label}</span>` : '';
}

export const agentText = (agent) => (agent?.length ? agent.join(', ') : 'none');

export function slotsHtml(site) {
  return [
    `<span class="gz-slot gz-verdict"><span class="gz-key">Verdict </span>${escapeHtml(VERDICTS[site.verdict] ?? words(site.verdict))}${statusBadge(site.status)}</span>`,
    `<span class="gz-slot gz-licence">${licenceBadge(site.licence_class)}</span>`,
    `<span class="gz-slot gz-agent"><span class="gz-key">Agent channels </span>${escapeHtml(agentText(site.agent))}</span>`,
    `<span class="gz-slot gz-reviewed"><span class="gz-key">Reviewed </span><time datetime="${escapeHtml(site.reviewed)}">${escapeHtml(site.reviewed)}</time></span>`,
  ].join('');
}

export function legendHtml() {
  const groups = Object.values(LICENCE_GROUPS)
    .map((group) => `<span class="gz-legend-item">${icon(group.icon)}<span><strong>${group.label}:</strong> ${group.meaning}</span></span>`)
    .join('');
  return `<p class="gz-legend"><span class="gz-legend-item">Each row: name and summary, then verdict, licence, agent channels and review date.</span>${groups}</p>\n`;
}
