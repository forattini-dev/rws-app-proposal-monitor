const fs = require('fs')
const openapi = require('./src/openapi')

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

Promise
  .resolve({})
  .then(async () => {
    fs.writeFileSync('./docs/openapi.json', JSON.stringify(openapi, null, 2))
    console.log('done')
  }).then(async () => {
    console.log('waiting')
    await wait(60 * 60 * 1000)
  })
