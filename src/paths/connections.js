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
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Connection"
                }
              }
            }
          },
        }
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
        }
      }
    }
  },
}