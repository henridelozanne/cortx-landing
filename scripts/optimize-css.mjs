import { readdir, readFile, writeFile } from 'fs/promises'
import { join } from 'path'

// Read critical CSS
const criticalCSS = await readFile('assets/css/critical.css', 'utf-8')

async function optimizeHTML(filePath) {
  let html = await readFile(filePath, 'utf-8')
  
  // Inject critical CSS inline in head
  html = html.replace(
    '</title>',
    `</title><style>${criticalCSS}</style>`
  )
  
  // Transform stylesheet links to async preload
  html = html.replace(
    /<link\s+rel="stylesheet"\s+href="([^"]+\.css)"\s*crossorigin\s*>/g,
    '<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel=\'stylesheet\'" crossorigin><noscript><link rel="stylesheet" href="$1" crossorigin></noscript>'
  )
  
  await writeFile(filePath, html, 'utf-8')
  console.log(`✓ Optimized: ${filePath}`)
}

async function processDirectory(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath)
    } else if (entry.name.endsWith('.html')) {
      await optimizeHTML(fullPath)
    }
  }
}

// Start from .output/public
const publicDir = '.output/public'
await processDirectory(publicDir)
console.log('\n✨ All HTML files optimized!')
