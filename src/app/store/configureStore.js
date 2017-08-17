// Own actions/constants/components
const storeProd = require("./configureStore.prod");
const storeDev = require("./configureStore.dev");

// This file will check environment and export the right store
if (process.env.NODE_ENV === "production") {
  module.exports = storeProd;
} else {
  module.exports = storeDev;
}
