const argv = require("yargs")
  .options("b", {
    alias: "base",
    type: "number",
    description: "indicates the base of the multiplication table",
    demandOption: true,
  })
  .options("p", {
    alias: "print",
    type: "boolean",
    default: false,
    description: "Show the multiplication table on console",
  })
  .options("l", {
    alias: "limit",
    type: "number",
    default: 10,
    description: "Indicates how many values will be multiplied",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) throw "Error! -> The base must be a number";
    if (isNaN(argv.l) || argv.l < 0)
      throw "Error! -> The limit must be a positive number";
    return true;
  }).argv;

module.exports = argv;
