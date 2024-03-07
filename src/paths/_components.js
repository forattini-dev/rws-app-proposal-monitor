module.exports = {
  schemas: {

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
      }
    },

  }
}
