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
          type: "string",
          description: 'Chosen metric.',
          enum: [
            'request_response_time',
            'request_success',
            'request_total',
            'request_error_4xx',
            'request_error_404',
            'request_error_429',
            'request_error_5xx',
            'resource_index_time',
            'resource_get_time',
            'resource_create_time',
            'resource_update_time',
            'resource_delete_time',
          ],
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
