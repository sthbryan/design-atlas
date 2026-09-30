export function searchSource(src) {
  return src
    .replace(/<!-- atlas:sources:start -->[\s\S]*?<!-- atlas:sources:end -->/g, '')
    .replace(/^## Related\n[\s\S]*$/m, '');
}

export function renderSearch(src, env, md) {
  let source = searchSource(src);
  if (env.relativePath?.startsWith('sites/') && env.relativePath !== 'sites/index.md') {
    source = source.replace(/^## (.+)$/gm, '**$1**');
  }
  const html = md.render(source, env);
  return env.frontmatter?.search === false ? '' : html;
}
