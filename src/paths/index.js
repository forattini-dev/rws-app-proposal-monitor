const { merge } = require("lodash")

module.exports = merge(
  require("./providers"),
  require("./connections"),
)