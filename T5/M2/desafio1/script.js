// Monitoriza cambios del usuario y le muestra los resultados

document.getElementById("validationAge").addEventListener("change", (event) => {
  if (event.target.value < 18) {
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
    return;
  }
  event.target.classList.remove("is-invalid");
  event.target.classList.add("is-valid");
});
