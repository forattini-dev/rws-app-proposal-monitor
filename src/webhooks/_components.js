module.exports = {
  schemas: {
    LabelsPack: {
      type: "object",
    },

    ConnectionMetricRequest: {
      type: "object",
      
      required: [
        "name",
      ],
      
      properties: {
        name: {
          type: "string",
        },
        value: {
          type: "integer",
        },
        tags: {
          $ref: "#/components/schemas/LabelsPack",
        },
      }
    }
  }
}
