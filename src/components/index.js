module.exports = {
  schemas: {
    UUID: {
      type: "string",
      format: "uuid",
      description: 'Unique identifier for the object'
    },
    
    MetricsNames: {
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

    Error404EntityNotFound: {
      type: "object",
      required: ["code", "message"],
      properties: {
        code: {
          type: "integer",
        },
        message: {
          type: "string",
          value: "Entity not found",
        }
      }
    },

    Error422UnprocessableEntity: {
      type: "object",
      required: ["code", "message"],
      properties: {
        code: {
          type: "integer",
        },
        message: {
          type: "string",
          value: "Entity already exists",
        }
      }
    },

    Error429TooManyRequests: {
      type: "object",
      required: ["code", "message"],
      properties: {
        code: {
          type: "integer",
        },
        message: {
          type: "string"
        }
      }
    },

  }
}
