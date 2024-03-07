const fs = require('fs')
const openapi = require('./openapi')

const {
  BUILD_SERVER = false,
  BUILD_PREFIX = "",
} = process.env

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

Promise
  .resolve({})
  .then(async () => {
    fs.mkdirSync(__dirname + '/../docs', { recursive: true })
    console.log('dir:    check')
  }).then(async () => {
    let index = fs.readFileSync(__dirname + '/assets/index.html').toString()
    index = index.replace('{{BUILD_PREFIX}}', BUILD_PREFIX)

    fs.writeFileSync(__dirname + '/../docs/index.html', index)
    fs.writeFileSync(__dirname + '/../docs/openapi.json', JSON.stringify(openapi, null, 2))
    console.log('assets: check')
  }).then(async () => {
    if ([true, 'true'].includes(BUILD_SERVER)) return

    console.log('waiting changes...')
    await wait(60 * 60 * 1000)
  })
