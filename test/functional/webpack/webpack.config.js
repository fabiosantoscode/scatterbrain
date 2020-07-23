'use strict'

const path = require('path')
const scatterbrain = require('scatterbrain/webpack')
const packageJson = require('./package.json')

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      ...scatterbrain.aliases(__dirname, packageJson),
    }
  }
};
