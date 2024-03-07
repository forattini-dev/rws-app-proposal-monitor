module.exports = {
  PaginatedResource (ref) {
    return {
      type: "object",
      properties: {
        total: {
          type: "integer",
        },
        page: {
          type: "integer",
        },
        perPage: {
          type: "integer",
        },
        items: {
          type: "array",
          items: {
            $ref: ref,
          }
        }
      }
    }
  }
}