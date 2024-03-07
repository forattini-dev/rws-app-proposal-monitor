module.exports = {
  schemas: {

    Metric: {
      type: "object",
      properties: {
        name: {
          type: "string",
        },
        value: {
          type: "integer",
          format: "int32"
        },
      }
    },

    Provider: {
      type: "object",
      properties: {
        id: {
          type: "integer",
        },
        code: {
          "type": "integer",
          "format": "int32"
        },
        metris: {
          type: "array",
          items: {
            "$ref": "#/components/schemas/Metric"
          }
        }
      }
    },

    Connection: {
      type: "object",
      properties: {
        id: {
          type: "integer",
        },
        from: {
          "$ref": "#/components/schemas/Provider"
        },
        to: {
          "$ref": "#/components/schemas/Provider"
        },
        metris: {
          type: "array",
          items: {
            "$ref": "#/components/schemas/Metric"
          }
        }
      }
    },

  }
}
