const { pick } = require('lodash')
const { pickRequestsErrors } = require('../concerns')
const { PaginatedResource } = require('./concerns')

const errors = pickRequestsErrors([404, 422, 429])
errors[404].description = "Connection not found"

module.exports = {
  "/connections": {
    get: {
      summary: 'List of connections',
      description: 'Returns a list of connections.',
      tags: ['connections'],

      responses: {
        200: {
          description: "Return a 200 status to indicate that the data was received successfully.",
          content: {
            "application/json": {
              schema: PaginatedResource('#/components/schemas/Connection')
            }
          },
        },
        ...pick(errors, 429),
      }
    }
  },

  "/connections/{id}": {
    get: {
      summary: 'Show a connection',
      description: 'Returns a connection.',
      tags: ['connections'],

      parameters: [
        {
          name: 'id',
          required: true,
          in: 'path',
          description: 'connection ID.',
          schema: { type: 'string' },
        },
      ],

      responses: {
        200: {
          description: "Return a 200 status to indicate that the data was received successfully.",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Connection"
                }
              }
            }
          },
        },
        ...errors,
      }
    }
  },
}