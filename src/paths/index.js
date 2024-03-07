module.exports = {
  "/pets": {
    "get": {
      "tags": ["pets"],
      "summary": "List all pets",
      "operationId": "listPets",

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
