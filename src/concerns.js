const { merge, pick } = require('lodash')

const RequestsErrors = {
  404: {
    description: "Entity not found.",
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/Error404EntityNotFound"
        }
      }
    }
  },

  422: {
    description: "Unprocessable entity.",
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/Error422UnprocessableEntity"
        }
      }
    }
  },

  429: {
    description: "Too many requests.",
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
    return pick(merge({}, RequestsErrors), [].concat(statusCodes))
  }
}
