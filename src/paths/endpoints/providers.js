const { pick } = require('lodash')

const { PaginatedResource } = require('../concerns')
const { pickRequestsErrors, ResponseHeaders, IndexRequestParams } = require('../../concerns')

const errors = pickRequestsErrors([404, 422, 429])
errors[404].description = "Provider not found"

module.exports = {
  "/providers": {
    get: {
      summary: 'List of providers',
      description: 'Returns a list of Providers.',
      tags: ['providers'],

      parameters: [
        ...IndexRequestParams,
        {
          name: 'populate',
          required: false,
          in: 'query',
          description: 'Adds attributes to the items.',
          schema: { 
            type: 'string',
            enum: [
              'metrics'
            ]
          },
        },
      ],

      responses: {
        200: {
          description: "Return a 200 status to indicate that the data was received successfully.",
          headers: ResponseHeaders,

          content: {
            "application/json": {
              schema: PaginatedResource('#/components/schemas/ProviderPopulated')
            }
          },
        },
        ...pick(errors, 429),
      }
    }
  },

  "/providers/{id}": {
    get: {
      summary: 'Show a provider',
      description: 'Returns a Provider.',
      tags: ['providers'],

      parameters: [
        {
          name: 'id',
          required: true,
          in: 'path',
          description: 'Provider ID.',
          schema: { 
            $ref: "#/components/schemas/UUID" 
          },
        },
      ],

      responses: {
        200: {
          description: "Return a 200 status to indicate that the data was received successfully.",
          headers: ResponseHeaders,

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ProviderPopulated"
              }
            }
          },
        },
        ...errors,
      }
    }
  },
}