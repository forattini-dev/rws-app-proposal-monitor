const { ResponseErrors, ResponseHeaders } = require('../concerns')

const defaultResponses = {
  200: {
    description: "Metric push received successfully.",
    headers: ResponseHeaders,
  },
}

module.exports = {
  "/connections/{id}/metrics": {
    post: {
      summary: 'Push a connection metric',
      description: 'Push a connection metric.',
      tags: ['metrics'],

      parameters: [
        {
          name: 'id',
          required: true,
          in: 'path',
          description: 'Connection ID.',
          schema: { 
            $ref: "#/components/schemas/UUID"
          },
        },
      ],

      requestBody: {
        description: "Information that refence a metric and its value.",

        content: {
          "application/json": {
            schema: {
              "$ref": "#/components/schemas/PushMetricRequest"
            }
          }
        }
      },

      responses: {
        ...defaultResponses,
        ...ResponseErrors,
      }
    }
  },

  "/providers/{id}/metrics": {
    post: {
      summary: 'Push a provider metric',
      description: 'Push a provider metric.',
      tags: ['metrics'],

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

      requestBody: {
        description: "Information that refence a metric and its value.",

        content: {
          "application/json": {
            schema: {
              "$ref": "#/components/schemas/PushMetricRequest"
            }
          }
        }
      },

      responses: {
        ...defaultResponses,
        ...ResponseErrors,
      }
    }
  },
}