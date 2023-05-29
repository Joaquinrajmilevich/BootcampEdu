// Inicializo variables
let values = {
  fixedCost: null,
  salePrice: null,
  variableCost: null,
};

const equilibriumPoint = document.getElementById("punto-equilibrio");

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

// notEmpty() devuelve true si ninguna de las propiedades esta vacia
function notEmpty(object) {
  for (const property in object) {
    if (!object[property]) {
      return false;
    }
  }
  return true;
}
// Fórmula del punto de equilibrio
function result(cf, sp, vc) {
  return cf / (sp - vc);
}

// Monitoriza cambios del usuario y le muestra los resultados
document.getElementById("input-wrapper").addEventListener("change", (event) => {
  assignValue(event.target.getAttribute("id"), event.target);
  if (notEmpty(values)) {
    equilibriumPoint.innerText = result(
      values.fixedCost,
      values.salePrice,
      values.variableCost
    );
  }
});
