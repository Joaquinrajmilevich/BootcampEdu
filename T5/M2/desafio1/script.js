// añade clase is-invalid a elemento
function addInvalid(element) {
  element.classList.remove("is-valid");
  element.classList.add("is-invalid");
}
// añade clase is-valid a elemento
function addValid(element) {
  element.classList.remove("is-invalid");
  element.classList.add("is-valid");
}
// Validación de edad
function isValid(value) {
  return Number.parseInt(value) > 17;
}

document.getElementById("validationAge").addEventListener("change", (event) => {
  const element = event.target;
  if (isValid(element.value)) {
    addValid(element);
    return;
  }
  addInvalid(element);
});
