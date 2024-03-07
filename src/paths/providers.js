const { PaginatedResource } = require('./concerns')

module.exports = {
  "/providers": {
    get: {
      summary: 'List of providers',
      description: 'Returns a list of Providers.',
      tags: ['providers'],

      responses: {
        200: {
          description: "Return a 200 status to indicate that the data was received successfully.",
          content: {
            "application/json": {
              schema: PaginatedResource('#/components/schemas/Provider')
            }
          },
        }
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
                  $ref: "#/components/schemas/Provider"
                }
              }
            }
          },
        }
      }
    }
  },
}