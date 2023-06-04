// Inicialización de variables
const alertSuccess = document.getElementById("alertSuccess");
const alertDanger = document.getElementById("alertDanger");
let previousElement = null;

// // array con usuarios
let users = [
  { username: "admin", password: 1234 },
  { username: "admin1", password: 4321 },
];

// hideClass() oculta elemento
function hideClass(element) {
  element.classList.remove("d-block");
  element.classList.add("d-none");
}

// showClass() muestra elemento
function showClass(element) {
  if (previousElement === element) {
    return;
  } else if (previousElement != null) {
    hideClass(previousElement);
  }
  element.classList.remove("d-none");
  element.classList.add("d-block");
  previousElement = element;
}

// parseFormData devuelve un objeto con los datos
// subidos por el usuario
function parseFormData(form) {
  let data = {};
  for (const element of form) {
    if (element.getAttribute("submitable") == "true") {
      data[element.name] = element.value;
    }
  }
  return data;
}

// checkUser() verifica si el usuario o la contraseña
// concuerda con la array users

function checkUser(userValue, passwordValue) {
  for (const user of users) {
    if (userValue == user.username && passwordValue == user.password) {
      showClass(alertSuccess);
      break;
    }
    showClass(alertDanger);
  }
}

const frm = document.querySelector(".needs-validation");
frm.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();
  if (frm.checkValidity()) {
    submitedUser = parseFormData(frm);
    checkUser(submitedUser.username, submitedUser.password);
  } else {
    frm.classList.add("was-validated");
  }
});
