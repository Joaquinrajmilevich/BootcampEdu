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
document.getElementById("validationAge").addEventListener("change", (event) => {
  if (event.target.value < 18) {
    addInvalid(event.target);
    return;
  }
  addValid(event.target);
});
