const rootPath = __dirname
const packageJson = require('./package.json')
const scatterbrain = require('scatterbrain/jest')

module.exports = {
  moduleNameMapper: {
    ...scatterbrain.moduleNameMapper(rootPath, packageJson)
  }
}
