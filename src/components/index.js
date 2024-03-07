module.exports = {
  schemas: {

    Error404NotFound: {
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

    Error422UnprocessableEntity: {
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
