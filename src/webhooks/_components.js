

module.exports = {
  schemas: {

    Labels: {
      type: "object",
      description: 'Key-value pairs to be used as labels.',
    },

    MetricRequest: {
      type: "object",
      
      required: [
        "name",
      ],
      
      properties: {
        name: {
          $ref: "#/components/schemas/MetricsNames",
        },
        action: {
          type: 'string',
          description: 'Action to be performed on the metric.',
          default: 'observe',
          enum: [
            'set',
            'zero',
            'observe',
            'increment',
            'decrement',
          ],
        },
        value: {
          type: "integer",
          default: 0,
        },
        tags: {
          $ref: "#/components/schemas/Labels",
        },
      }
    },

  }
}
