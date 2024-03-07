const { pick } = require('lodash')

const RequestsErrors = {
  404: {
    description: "Unprocessable Entity",
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/Error404NotFound"
        }
      }
    }
  },

  422: {
    description: "Unprocessable Entity",
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/Error422UnprocessableEntity"
        }
      }
    }
  },

  429: {
    description: "Too many requests",
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/Error429TooManyRequests"
        }
      }
    }
  },
}

module.exports = {
  RequestsErrors,

  pickRequestsErrors(statusCodes) {
    return pick(RequestsErrors, [].concat(statusCodes))
  }
}
