module.exports = {
  "schemas": {
    "Pet": {
      "type": "object",
      "required": ["id", "name"],
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        },
        "tag": {
          "type": "string"
        }
      }
    },

    "Error": {
      "type": "object",
      "required": ["code", "message"],
      "properties": {
        "code": {
          "type": "integer",
          "format": "int32"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
}