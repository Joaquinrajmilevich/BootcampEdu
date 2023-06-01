// Fórmula del punto de equilibrio
function equilibriumPoint(cf, sp, vc) {
  let eP = cf / (sp - vc);
  if (eP == Infinity) {
    return "Los costos no pueden ser iguales al precio de venta";
  }
  return eP;
}

console.log(equilibriumPoint(100, 50, 20));
