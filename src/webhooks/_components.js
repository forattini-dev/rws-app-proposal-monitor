module.exports = {
  schemas: {
    LabelsPack: {
      type: "object",
    },

    MetricRequest: {
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
    },
  }
}
