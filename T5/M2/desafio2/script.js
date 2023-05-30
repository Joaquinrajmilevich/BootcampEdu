// Inicialización de variables
const inputUser = document.getElementById("inputUser");
const inputPassword = document.getElementById("inputPassword");
const alertSuccess = document.getElementById("alertSuccess");
const alertDanger = document.getElementById("alertDanger");
let previousElement = null;

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

// array con usuarios
let users = [{ username: "admin", password: 1234 }];

// checkUser() verifica si el usuario o la contraseña
// concuerda con la array users
function checkUser(userValue, passwordValue) {
  users.forEach((user) => {
    if (userValue != user.username || passwordValue != user.password) {
      showClass(alertDanger);
      return;
    }
    showClass(alertSuccess);
  });
}

// llama a la función checkUser()
// cuando el usuario hace click en el botton login
document.getElementById("login").addEventListener("click", (event) => {
  event.preventDefault();
  checkUser(inputUser.value, inputPassword.value);
});
