const pointElement = document.getElementById("punto-equilibrio");
// Inicializo variables
let values = {
  fixedCost: null,
  salePrice: null,
  variableCost: null,
};

// notEmpty() devuelve true si ninguna de las propiedades esta vacia
function notEmpty(object) {
  for (const property in object) {
    if (!object[property]) {
      return false;
    }
  }
  return true;
}

// assignValue() asigna el valor asignado por el usuario
// a la propiedad correspondiente
function assignValue(valueId, target) {
  switch (valueId) {
    case "fixed-cost":
      values.fixedCost = target.value;
      break;
    case "sale-price":
      values.salePrice = target.value;
      break;
    case "variable-cost":
      values.variableCost = target.value;
      break;
    default:
      break;
  }
}

// Fórmula del punto de equilibrio
function equilibriumPoint(cf, sp, vc) {
  let eP = cf / (sp - vc);
  if (eP == Infinity) {
    return "Los costos no pueden ser iguales al precio de venta";
  }
  return eP;
}

// Monitoriza cambios del usuario y le muestra los resultados
document.getElementById("input-wrapper").addEventListener("change", (event) => {
  assignValue(event.target.getAttribute("id"), event.target);
  if (notEmpty(values)) {
    pointElement.innerText = equilibriumPoint(
      values.fixedCost,
      values.salePrice,
      values.variableCost
    );
  }
});
