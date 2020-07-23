'use strict'

const path = require('path')

const dropTrailingSlash = path => {
  if (path.endsWith('/')) return path.slice(0, -1)
  return path
}

function aliases (root, packageJson) {
  if (!packageJson.imports) return {}

  const privateImports = Object.entries(packageJson.imports)
    .filter(([entry]) => entry.startsWith('#'))
    .map(([entry, importPath]) => [dropTrailingSlash(entry), path.resolve(root, importPath)])

  return Object.fromEntries(privateImports)
}

Object.assign(exports, { aliases })
