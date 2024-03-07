const { merge } = require("lodash")

module.exports = merge(
  require("./metrics"),
  require("./providers"),
  require("./connections"),
)