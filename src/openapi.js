const fs = require('fs')

const openapi = {
  openapi: "3.1.0",
  
  info: {
    title: "RWS.Monitor",
    version: "1.0.2",
    description: [
      fs.readFileSync(__dirname + '/assets/1-introduction.md', 'utf-8'),
    ].join('\n\n\n'),
  },

  servers: [
    {
      description: "Development server",
      "url": "http://petstore.example.com/api",
    }
  ],

  paths: {},
}

openapi.paths = {
  "/pets": {
    "get": {
      "summary": "List all pets",
        "operationId": "listPets",
          "tags": ["pets"],
            "responses": {
        "200": {
          "description": "An array of pets",
            "content": {
            "application/json": {
              "schema": {
                "type": "array",
                  "items": {
                  "$ref": "#/components/schemas/Pet"
                }
              }
            }
          }
        },
        "default": {
          "description": "Unexpected error",
            "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Error"
              }
            }
          }
        }
      }
    }
  }
}

openapi.components = {
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

module.exports = openapi
