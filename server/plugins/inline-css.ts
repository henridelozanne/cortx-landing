export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('prerender:generate', (route) => {
    if (route.contents && typeof route.contents === 'string') {
      // Transform stylesheet links to async preload
      route.contents = route.contents.replace(
        /<link\s+rel="stylesheet"\s+href="([^"]+\.css)"\s*(?:crossorigin)?\s*>/g,
        '<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel=\'stylesheet\'" crossorigin><noscript><link rel="stylesheet" href="$1" crossorigin></noscript>'
      )
    }
  })
})
