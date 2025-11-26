const path = require("path");
const { env } = require("process");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: { SIZ3R_API_KEY: "0r6nz8p1e4cc3i08uslumk71njg60kbrg20mturbm1wc" },
};
