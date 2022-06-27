//* en node es indispensable usar la sintaxis require(), para importar modulos.
const { writeFile } = require("fs");
const colors = require("colors");
const crearTablas = async (base, print, limit) => {
  try {
    let salida = "";
    let ouput = "";
    for (let num = 0; num <= limit; num++) {
      salida += `${num} x ${base} = ${base * num} \n`;
      ouput += `${colors.blue(num)} x ${colors.magenta(base)} = ${colors.yellow(
        base * num
      )} \n`;
    }

    if (print) {
      console.log("====================".cyan);
      console.log(" Tabla del", colors.magenta(base));
      console.log("====================".cyan);
      console.log(ouput);
    }

    writeFile(`./tables/tabla-${base}.txt`, salida, (error) => {
      if (error) throw error;
    });

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

//* forma de exportar modulos desde node
module.exports = {
  crearTablas,
};
