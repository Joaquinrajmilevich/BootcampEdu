//primer metodo
const operaciones = {
  SUMAR: (a, b) => a + b,
  RESTAR: (a, b) => a - b,
  MULTIPLICAR: (a, b) => a * b,
  DIVIDIR: (a, b) => a / b
}

function calcular(operacion, valorA, valorB) {
  operacion = operacion.toUpperCase();
  return operaciones[operacion](valorA, valorB)
}

//segundo metodo
function calcular1(operacion, valorA, valorB) {
  operacion = operacion.toUpperCase();
  var resultado;
  switch (operacion) {
    case 'SUMAR':
      resultado = sumar(valorA, valorB);
      break;
    case 'RESTAR':
      resultado = restar(valorA, valorB);
      break;
    case 'MULTIPLICAR':
      resultado = multiplicar(valorA, valorB);
      break;
    case 'DIVIDIR':
      resultado = dividir(valorA, valorB)
      break;
    default:
      break;
  }
  return resultado;
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

//tercer metodo
function calcular2(operacion, valorA, valorB) {
  operacion = operacion.toUpperCase();
  var operador;
  switch (operacion) {
    case 'SUMAR':
      operador = '+';
      break;
    case 'RESTAR':
      operador = '-'
      break;
    case 'MULTIPLICAR':
      operador = '*';
      break;
    case 'DIVIDIR':
      operador = '/';
      break;
    default:
      break;
  }
  return(eval(valorA + operador + valorB));
}

//cuarto metodo
function calcular3(operacion, valorA, valorB) {
  operacion = operacion.toUpperCase();
  var resultado;
  switch (operacion) {
    case 'SUMAR':
      resultado = valorA + valorB;
      break;
    case 'RESTAR':
      resultado = valorA - valorB;
      break;
    case 'MULTIPLICAR':
      resultado = valorA * valorB;
      break;
    case 'DIVIDIR':
      resultado = valorA - valorB;
      break;
    default:
      break;
  }
  return resultado;
}

//testplan
//calcular()
console.log(calcular('SUMAR', 3, 5));
console.log(calcular('RESTAR', 50, 60));
console.log(calcular('MULTIPLICAR', 6, 12));
console.log(calcular('DIVIDIR', 15, 3))

console.log('||')

//calcular1()
console.log(calcular1('SUMAR', 3, 5));
console.log(calcular1('RESTAR', 50, 60));
console.log(calcular1('MULTIPLICAR', 6, 12));
console.log(calcular1('DIVIDIR', 15, 3))

console.log('||')

//calcular2()
console.log(calcular1('SUMAR', 3, 5));
console.log(calcular1('RESTAR', 50, 60));
console.log(calcular1('MULTIPLICAR', 6, 12));
console.log(calcular1('DIVIDIR', 15, 3))

console.log('||')

//calcular3()
console.log(calcular1('SUMAR', 3, 5));
console.log(calcular1('RESTAR', 50, 60));
console.log(calcular1('MULTIPLICAR', 6, 12));
console.log(calcular1('DIVIDIR', 15, 3))