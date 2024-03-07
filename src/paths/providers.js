module.exports = {
  "/providers": {
    get: {
      summary: 'List Providers',
      description: 'Returns a list of Providers',
      tags: ['providers'],

      responses: {
        200: {
          description: "Return a 200 status to indicate that the data was received successfully.",
          content: {
            "application/json": {
              schema: {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Provider"
                }
              }
            }
          },
        }
      }
    }
  },

  "/providers/{id}/metrics": {
    post: {
      summary: 'Push connection metrics',
      description: 'Push connection metrics.',
      tags: ['metrics'],

      parameters: [
        {
          name: 'id',
          required: true,
          in: 'path',
          description: 'Provider ID.',
          schema: { type: 'string' },
        },
      ],

      requestBody: {
        description: "Information about a new pet in the system",

        content: {
          "application/json": {
            schema: {
              "$ref": "#/components/schemas/MetricRequest"
            }
          }
        }
      },

      responses: {
        200: {
          description: "Return a 200 status to indicate that the data was received successfully."
        }
      }
    }
  },
}