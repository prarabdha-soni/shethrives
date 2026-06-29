// Inline SVG icons, ported verbatim from the source `icon()` helper.
// Returned as raw HTML strings for use with dangerouslySetInnerHTML, exactly
// as the original template consumed them.
const STROKE =
  'width="22" height="22" viewBox="0 0 28 28" fill="none" stroke="#d4337c" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';

const PATHS = {
  droplet: '<path d="M14 3.5C14 3.5 21.5 12 21.5 17a7.5 7.5 0 0 1-15 0C6.5 12 14 3.5 14 3.5Z"/>',
  clock: '<circle cx="14" cy="14" r="9.5"/><path d="M14 8.5V14l4 2.2"/>',
  reuse: '<path d="M6 13a8 8 0 0 1 13.5-4.2"/><path d="M20 5.5V9h-3.5"/><path d="M22 15a8 8 0 0 1-13.5 4.2"/><path d="M8 22.5V19h3.5"/>',
  pin: '<path d="M14 24.5C14 24.5 6.5 17 6.5 11.5a7.5 7.5 0 0 1 15 0C21.5 17 14 24.5 14 24.5Z"/><circle cx="14" cy="11.5" r="2.8"/>',
  leaf: '<path d="M21.5 6C12.5 6 6.5 11.5 6.5 21C15.5 21 21.5 15 21.5 6Z"/><path d="M6.5 21C10 17.5 13.5 14 17.5 10.5"/>',
  check: '<circle cx="14" cy="14" r="9.5"/><path d="M9.5 14.2l3 3L19 11"/>',
};

export function icon(name) {
  return "<svg " + STROKE + ">" + (PATHS[name] || "") + "</svg>";
}

export const igIcon =
  '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none"/></svg>';
