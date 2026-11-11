const ITEM = '.VPSidebar .VPSidebarItem > .item';
const CONTROL = '.VPSidebar .item[role="button"], .VPSidebar .caret[role="button"]';

let observer = null;
let scheduled = false;
let count = 0;

const nameOf = (item) => (item.querySelector(':scope > .text, :scope > .link .text')?.textContent ?? '').trim();

function apply() {
  scheduled = false;
  for (const item of document.querySelectorAll(ITEM)) {
    const group = item.parentElement;
    const list = group?.querySelector(':scope > .items');
    if (!list) continue;
    const link = item.querySelector(':scope > a.link');
    const caret = item.querySelector(':scope > .caret');
    const disclosure = link ? caret : item;

    if (!list.id) list.id = `atlas-sidebar-group-${++count}`;

    item.setAttribute('tabindex', link ? '-1' : '0');

    if (caret && !link) {
      caret.setAttribute('tabindex', '-1');
      caret.setAttribute('aria-hidden', 'true');
    } else if (caret) {
      caret.setAttribute('tabindex', '0');
      caret.removeAttribute('aria-hidden');
    }

    if (!disclosure) continue;
    const label = nameOf(item);
    disclosure.setAttribute('aria-expanded', String(!group.classList.contains('collapsed')));
    disclosure.setAttribute('aria-controls', list.id);
    if (!link) disclosure.setAttribute('aria-label', label ? `Toggle ${label}` : 'Toggle section');
  }
}

function schedule() {
  if (scheduled) return;
  scheduled = true;
  queueMicrotask(() => {
    scheduled = false;
    apply();
  });
}

function onKeydown(event) {
  if (event.key !== ' ') return;
  const control = event.target.closest?.(CONTROL);
  if (!control) return;
  event.preventDefault();
  control.click();
}

export function enhanceSidebar() {
  if (observer) return;
  observer = new MutationObserver(schedule);
  observer.observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ['class'] });
  document.addEventListener('keydown', onKeydown);
  apply();
}

export function releaseSidebar() {
  observer?.disconnect();
  observer = null;
  document.removeEventListener('keydown', onKeydown);
}
