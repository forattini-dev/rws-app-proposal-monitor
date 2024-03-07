const { PaginatedResource } = require('./concerns')

module.exports = {
  "/metrics": {
    get: {
      summary: 'List of metrics',
      description: 'Returns a list of metrics.',
      tags: ['metrics'],

      responses: {
        200: {
          description: "Return a 200 status to indicate that the data was received successfully.",
          content: {
            "application/json": {
              schema: PaginatedResource('#/components/schemas/Metric')
            }
          },
        }
      }
    }
  },
}