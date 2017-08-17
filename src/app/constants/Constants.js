// Own actions/constants/components
const constantsProd = require("./Constants.prod.js");
const constantsDev = require("./Constants.dev.js");

// This file will check environment and export the right constants
if (process.env.NODE_ENV === "production") {
  module.exports = constantsProd;
} else {
  module.exports = constantsDev;
}
