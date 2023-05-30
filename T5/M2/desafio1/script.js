// Monitoriza cambios del usuario y le muestra los resultados
function addInvalid(element) {
  element.classList.remove("is-valid");
  element.classList.add("is-invalid");
}
function addValid(element) {
  element.classList.remove("is-invalid");
  element.classList.add("is-valid");
}

document.getElementById("validationAge").addEventListener("change", (event) => {
  if (event.target.value < 18) {
    addInvalid(event.target);
    return;
  }
  addValid(event.target);
});
