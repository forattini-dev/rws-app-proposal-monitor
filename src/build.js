const fs = require('fs')
const openapi = require('./openapi')

const { 
  BUILD_PREFIX = "" 
} = process.env

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

Promise
  .resolve({})
  .then(async () => {
    let index = fs.readFileSync(__dirname + '/assets/index.html').toString()
    index = index.replace('{{BUILD_PREFIX}}', BUILD_PREFIX)

    fs.writeFileSync(__dirname + '/../docs/index.html', index)
    fs.writeFileSync(__dirname + '/../docs/openapi.json', JSON.stringify(openapi, null, 2))
  }).then(async () => {
    console.log('done')
  }).then(async () => {
    console.log('waiting')
    await wait(60 * 60 * 1000)
  })
