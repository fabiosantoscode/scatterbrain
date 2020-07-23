
const fs = require('fs')
const { execSync } = require('child_process')

const root = __dirname

for (const test of fs.readdirSync(root + '/functional')) {
  const cwd = `${root}/functional/${test}`

  console.log('RUNNING FUNCTIONAL TESTS IN ' + cwd)

  const output = execSync(`npm run test`, { cwd })

  console.log(output.toString())
}

