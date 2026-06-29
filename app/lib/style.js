// Parse a CSS declaration string into a React style object.
// Lets us keep the source's inline styles verbatim instead of hand-converting
// every `style="..."` to camelCase — fewer transcription mistakes, exact output.
export function s(css) {
  const out = {};
  if (!css) return out;
  for (const decl of css.split(";")) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const value = decl.slice(i + 1).trim();
    if (!prop || value === "") continue;
    const key = prop.startsWith("--")
      ? prop
      : prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out[key] = value;
  }
  return out;
}
