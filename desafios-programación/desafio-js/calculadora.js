//primer metodo
const operaciones = {
  SUMAR: (a, b) => a + b,
  RESTAR: (a, b) => a - b,
  MULTIPLICAR: (a, b) => a * b,
  DIVIDIR: (a, b) => a / b,
};

function calcular(operacion, valorA, valorB) {
  return operaciones[operacion.toUpperCase()](valorA, valorB);
}

//segundo metodo
function calcular1(operacion, valorA, valorB) {
  switch (operacion.toUpperCase()) {
    case "SUMAR":
      return sumar(valorA, valorB);
    case "RESTAR":
      return restar(valorA, valorB);
    case "MULTIPLICAR":
      return multiplicar(valorA, valorB);
    case "DIVIDIR":
      return dividir(valorA, valorB);
    default:
      break;
  }
}

function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  return a / b;
}

//tercer metodo erroneo
function calcular2(operacion, valorA, valorB) {
  operacion = operacion.toUpperCase();
  var operador;
  switch (operacion) {
    case "SUMAR":
      operador = "+";
      break;
    case "RESTAR":
      operador = "-";
      break;
    case "MULTIPLICAR":
      operador = "*";
      break;
    case "DIVIDIR":
      operador = "/";
      break;
    default:
      break;
  }
  return eval(valorA + operador + valorB); // no usar eval
}

//testplan
//calcular()
console.log(calcular("SUMAR", 3, 5));
console.log(calcular("RESTAR", 50, 60));
console.log(calcular("MULTIPLICAR", 6, 12));
console.log(calcular("DIVIDIR", 15, 3));

console.log("||");

//calcular1()
console.log(calcular1("SUMAR", 3, 5));
console.log(calcular1("RESTAR", 50, 60));
console.log(calcular1("MULTIPLICAR", 6, 12));
console.log(calcular1("DIVIDIR", 15, 3));
