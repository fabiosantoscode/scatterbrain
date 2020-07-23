'use strict'

const assert = require('assert')
const { execSync } = require('child_process')

execSync('npm run build')

const output = execSync('node ./dist/main.js').toString()

assert(output.includes('hello foo'), 'Hello foo was not in the output')

console.log('webpack tests OK')
