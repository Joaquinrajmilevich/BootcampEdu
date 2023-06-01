// funcion que aplica la clase bg-success
function profit(element) {
  element.classList.remove("bg-primary");
  element.classList.remove("bg-danger");
  element.classList.add("bg-success");
}

// funcion que aplica la clase bg-danger
function loss(element) {
  element.classList.remove("bg-primary");
  element.classList.remove("bg-success");
  element.classList.add("bg-danger");
}

// funcion que aplica la clase bg-primary
function equal(element) {
  element.classList.remove("bg-danger");
  element.classList.remove("bg-success");
  element.classList.add("bg-primary");
}

// Inicialización Variables
let monthsData = {};
const flux = document.querySelectorAll(".flux");
const values = document.querySelectorAll(".values");
const months = [...document.querySelectorAll(".months")].map(
  (e) => e.innerHTML
);

// funcion que divide un array en 2
function sort(array, arr1, arr2) {
  for (let i = 0; i <= array.length - 1; i += 2) {
    arr1.push(array[i].value);
    arr2.push(array[i + 1].value);
  }
}

// Funcion que crea un objecto con toda la informacion recibida
function createData(valuesArray, namesArray, prop1, prop2) {
  let arr1 = [];
  let arr2 = [];
  let data = {};
  sort(valuesArray, arr1, arr2);
  for (let i = 0; i < namesArray.length; i++) {
    const name = namesArray[i];
    data[name] = {
      [prop1]: arr1[i],
      [prop2]: arr2[i],
    };
  }
  return data;
}

// funcion que devuelve -1 si el valor es negativo
// 1 si es positivo o 0 si el valor igual
function checkProfit(value) {
  if (value < 0) {
    return -1;
  } else if (value > 0) {
    return 1;
  } else {
    return 0;
  }
}

// funcion que setea los valores de flujo de caja
function setFlux() {
  for (let i = 0; i < flux.length; i++) {
    const element = flux[i];
    const object = monthsData[Object.keys(monthsData)[i]];
    element.value = object.income - object.expenses;
    const checked = checkProfit(element.value);
    if (checked == -1) {
      loss(element);
    } else if (checked == 1) {
      profit(element);
    } else {
      equal(element);
    }
  }
}

// funcion que actualiza los datos y la tabla
function updateTable() {
  monthsData = createData(values, months, "income", "expenses");
  setFlux();
}

updateTable();

document.getElementById("input-wrapper").addEventListener("change", (event) => {
  updateTable();
});
