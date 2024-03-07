const { merge, pick } = require('lodash')

const ResponseHeaders = {
  "X-Rate-Limit-Limit": {
    description: "The number of allowed requests in the current period",
    schema: {
      type: "integer"
    }
  },
  "X-Rate-Limit-Remaining": {
    description: "The number of remaining requests in the current period",
    schema: {
      type: "integer"
    }
  },
  "X-Rate-Limit-Reset": {
    description: "The number of seconds left in the current period",
    schema: {
      type: "integer"
    }
  }
}

const ResponseErrors = {
  404: {
    description: "Entity not found.",
    headers: ResponseHeaders,

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
    headers: ResponseHeaders,
    
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
    headers: ResponseHeaders,
    
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/Error429TooManyRequests"
        }
      }
    }
  },
}

const IndexRequestParams = [
  {
    name: 'page',
    required: false,
    in: 'query',
    description: 'Resource page number.',
    schema: { 
      type: 'integer',
      default: 1,
      minimum: 1,
    },
  },
  {
    name: 'pageSize',
    required: false,
    in: 'query',
    description: 'Items per page.',
    schema: { 
      type: 'integer',
      default: 100,
      maximum: 1000,
    },
  },
]

module.exports = {
  ResponseErrors,
  ResponseHeaders,
  IndexRequestParams,

  pickRequestsErrors(statusCodes) {
    return pick(merge({}, ResponseErrors), [].concat(statusCodes))
  }
}
