const argv = require("process").argv;
const sumar = require("./operaciones/sumar");
const restar = require("./operaciones/restar");
const multiplicar = require("./operaciones/multiplicar");
const dividir = require("./operaciones/dividir");

const operacion = argv[2];
const numA = +argv[3];
const numB = +argv[4];

let resultado = 0;
//practicando
if (operacion === "sumar") {
  resultado = sumar(numA, numB);

} else if (operacion === "restar") {
  resultado = restar(numA, numB);

} else if (operacion === "multiplicar") {
  resultado = multiplicar(numA, numB);

} else if (operacion === "dividir") {
  resultado = dividir(numA, numB);

  if (numA === 0 && numB === 0) {
    return console.log("0");
  }
  
} else {
    resultado = 'Operacion no reconocida';
}

console.log(resultado);
