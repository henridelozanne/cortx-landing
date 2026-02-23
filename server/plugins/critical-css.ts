export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    // Only apply to HTML pages
    if (!event.path.endsWith('.html') && event.path !== '/') return
    
    // Transform render-blocking CSS to async with preload
    html.head = html.head.map((element) => {
      if (typeof element === 'string') {
        // Convert blocking stylesheets to async preload
        return element.replace(
          /<link\s+rel="stylesheet"\s+href="([^"]+)"\s+crossorigin>/g,
          '<link rel="preload" as="style" onload="this.onload=null;this.rel=\'stylesheet\'" href="$1" crossorigin><noscript><link rel="stylesheet" href="$1" crossorigin></noscript>'
        )
      }
      return element
    })
  })
})
