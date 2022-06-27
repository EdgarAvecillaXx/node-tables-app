const { crearTablas } = require("./helpers/tablas");
const argv = require("./config/yargs");
require("colors");

// * Yargs imports

/* ----------- Starts Code ----------------- */

console.clear();
const base = argv.b;
const print = argv.p;
const limit = argv.l;

//* mandar información al programa desde la command line
//* extraemos el argv con la info
//?const [, , arg3 = `base=${defaultBase}`] = process.argv;
//?const [, base = defaultBase] = arg3.split("=");

crearTablas(base, print, limit)
  .then((crearTablas) => console.log(crearTablas.rainbow, "Creado".green))
  .catch((error) => console.log(error));
