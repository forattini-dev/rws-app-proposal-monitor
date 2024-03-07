const { merge } = require("lodash")

module.exports = merge(
  require("./endpoints/providers"),
  require("./endpoints/connections"),
)