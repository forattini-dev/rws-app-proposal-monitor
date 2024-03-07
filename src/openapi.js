const fs = require('fs')
const { merge } = require('lodash')

const openapi = {
  openapi: "3.1.0",

  info: {
    title: "RWS.Monitor",
    version: "1.0.0",
    summary: "RWS.Monitor specs",
    description: [
      fs.readFileSync(__dirname + '/assets/overview.md', 'utf-8'),
    ].join('\n\n\n'),
  },

  servers: [
    {
      description: "DEV",
      url: "https://api.dev.rws.com.br",
    },
    {
      description: "STG",
      url: "https://api.stg.rws.com.br",
    },
    {
      description: "PRD",
      url: "https://api.rws.com.br",
    },
  ],

  paths: require('./paths'),
  webhooks: require('./webhooks'),
  
  components: merge(
    require('./paths/_components'),
    require('./webhooks/_components'),
    require('./components'),
  ),

  security: {},
  tags: [],
  externalDocs: {},
}

module.exports = openapi
