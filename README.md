# Scatterbrain

Scatterbrain is a package which helps you configure your preferred flavour of JavaScript with multiple tools.

The interface is the same as has been developed recently for node.js, which is still experimental and may change. The point is to enable your code to run on node and all other platforms at once.

## Motivation

Using a language other than JavaScript has never been exactly easy in a node project, especially one which also has a web component.

You need to:

 * Configure how transpilation works for each extension
 * Configure how to resolve files, in case you use aliases or drop-in replacements like `react-native`

And once you do configure that for node, eslint, prettier, webpack, jest, mocha, or any other tool which needs to read and/or run your code, every time you add a new tool or language, you have to painstakingly configure it from scratch.

The JS community has had scatterbrain for long enough.

## Configuration

You configure your nodejs runtime using package.json, which allows you to use `import` and absolute imports in plain old NodeJS (if you wish to use NodeJS).

```json
{
  "type": "module",
  "imports": {
    "#lib/": "./lib"
  }
}
```

*SOON:* scatterbrain will support the [experimental loaders API](https://nodejs.org/api/esm.html#esm_experimental_loaders).

## Webpack

To configure webpack, grab `scatterbrain/webpack` and insert its adapters into your config as such:

webpack.config.js:

```javascript
const rootPath = __dirname // Path to where package.json is
const packageJson = require('./package.json')
const scatterbrain = require('scatterbrain/webpack')

module.exports = {
  module: {
    rules: [
      scatterbrain.rule(rootPath, packageJson)
    ]
  },
  resolve: {
    alias: scatterbrain.aliases(rootPath, packageJson)
  }
}
```

## Jest

jest.config.js:

```
const rootPath = __dirname // Path to where package.json is
const packageJson = require('./package.json')
const scatterbrain = require('scatterbrain/jest')

module.exports = {
  moduleNameMapper: {
    ...scatterbrain.moduleNameMapper(rootPath, packageJson)
  }
}
```

## Roadmap

 - Implement adapters for as many tools as possible
 - Transpile JavaScript according to [experimental loaders API](https://nodejs.org/api/esm.html#esm_experimental_loaders).
 - Use a shared synchronised compilation cache
 - Provide a way to replace modules with drop-in replacements (possibly with config :( )

