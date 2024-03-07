module.exports = {
  server: "docs",
  reloadDebounce: 2000,
  watchEvents: ["change"],
  
  watchOptions: {
    ignoreInitial: true
  },

  files: [
    // "docs/css/*.css",
    // "docs/js/*.js",
    "docs/*.html",
    "docs/*.json",
    {
      match: ["docs/*.json"],
      fn: function(event, file) {
        if (event === "change") {
          const bs = require("browser-sync")
          bs.reload();
        }
      }
    }
  ],
};
