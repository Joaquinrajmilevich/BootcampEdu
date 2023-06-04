const pointElement = document.getElementById("punto-equilibrio");
let values = {};
// notEmpty() devuelve true si ninguna de las propiedades esta vacia
function notEmpty(object) {
  if (Object.keys(object).length != 3) {
    return false;
  }
  for (const property in object) {
    if (!object[property]) {
      return false;
    }
  }
  return true;
}

// assignValue() asigna el valor asignado por el usuario
// a la propiedad correspondiente
function assignValues(element, object) {
  object[element.id] = element.value;
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
  assignValues(event.target, values);
  console.log(values);
  if (notEmpty(values)) {
    pointElement.innerText = equilibriumPoint(
      values.fixedCost,
      values.salePrice,
      values.variableCost
    );
  } else {
    pointElement.innerText = "faltan valores";
  }
});
