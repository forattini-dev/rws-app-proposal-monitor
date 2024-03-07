module.exports = {
  schemas: {

    Metric: {
      type: "object",
      properties: {
        name: {
          $ref: "#/components/schemas/MetricsNames",
        },
      }
    },

    Timeseries: {
      type: "object",
      properties: {
        metric: {
          $ref: "#/components/schemas/MetricsNames",
        },
        interval: {
          type: "object",
          properties: {
            startAt: {
              type: 'string',
              format: 'date',
            },
            endAt: {
              type: 'string',
              format: 'date',
            },
          }
        },
        values: {
          type: "array",
          minItems: 12,
          items: {
            type: "integer",
          }
        },
      }
    },

    Provider: {
      type: "object",
      properties: {
        id: {
          $ref: "#/components/schemas/UUID",
        },
      }
    },

    ProviderPopulated: {
      type: "object",
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
          description: 'Unique identifier for the object'
        },
        metrics: {
          type: "array",
          items: {
            "$ref": "#/components/schemas/Timeseries"
          }
        }
      }
    },

    Connection: {
      type: "object",
      properties: {
        id: {
          $ref: "#/components/schemas/UUID",
        },
        from: {
          type: 'string',
          format: 'uuid',
          description: 'Unique identifier for the object'
        },
        to: {
          type: 'string',
          format: 'uuid',
          description: 'Unique identifier for the object'
        },
        metric: {
          type: "array",
          items: {
            "$ref": "#/components/schemas/Timeseries"
          }
        }
      }
    },

  }
}
