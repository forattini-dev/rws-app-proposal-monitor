module.exports = {
  "/connections/{id}/metrics": {
    post: {
      summary: 'Push connection metrics',
      description: 'Push connection metrics.',
      tags: ['metrics'],

      parameters: [
        {
          name: 'id',
          required: true,
          in: 'path',
          description: 'Connection ID',
          schema: { type: 'string' },
        },
      ],

      requestBody: {
        description: "Information about a new pet in the system",

        content: {
          "application/json": {
            schema: {
              "$ref": "#/components/schemas/ConnectionMetricRequest"
            }
          }
        }
      },

      responses: {
        200: {
          description: "Return a 200 status to indicate that the data was received successfully"
        }
      }
    }
  },

  "/providers/{id}/metrics": {
    post: {
      summary: 'Push provider metrics',
      description: 'Add system metrics',
      tags: ['metrics'],

      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'Provider ID',
          required: true,
          schema: { type: 'string' },
        },
        {
          in: 'path',
          name: 'id',
          description: 'Provider ID',
          required: true,
          schema: { type: 'string' },
        },
      ],

      requestBody: {
        description: "Information about a new pet in the system",

        content: {
          "application/json": {
            schema: {
              "$ref": "#/components/schemas/Pet"
            }
          }
        }
      },

      responses: {
        200: {
          description: "Return a 200 status to indicate that the data was received successfully"
        }
      }
    }
  }
}