// Fórmula del punto de equilibrio
function equilibriumPoint(fc, sp, vc) {
  return fc / (sp - vc);
}

let fixedCost = parseFloat(prompt("Ingresa el costo fijo total: "));
let salePrice = parseFloat(prompt("Ingresa el precio de venta: "));
let variableCost = parseFloat(prompt("Ingresa el costo variable: "));

console.log(equilibriumPoint(fixedCost, salePrice, variableCost));
