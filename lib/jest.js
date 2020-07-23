'use strict'

const escapeStringRegexp = require('escape-string-regexp')

const dropTrailingSlash = path => {
  if (path.endsWith('/')) return path.slice(0, -1)
  return path
}

function moduleNameMapper (root, packageJson) {
  if (!packageJson.imports) return {}

  const mapperEntries = Object.entries(packageJson.imports)
    .filter(([entry, importPath]) => entry.startsWith('#'))
    .map(([entry, importPath]) => {
      const entryRegExp = `^${escapeStringRegexp(dropTrailingSlash(entry))}(.+)?`
      const mappedImport = `./${dropTrailingSlash(entry.slice(1))}$1`

      return [entryRegExp, mappedImport]
    })

  return Object.fromEntries(mapperEntries)
}

Object.assign(exports, { moduleNameMapper })
