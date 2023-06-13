//En este desafio quise aplicar todo lo he ido aprendiendo
//y quiza parezca un poco sobreprogramado pero quise aprender lo maximo posible

// Obtener elementos del DOM
const categoryWrapper = document.getElementById("category-wrapper");
const incomeElement = document.getElementById("total-income");
const categoryElement = document.getElementById("category");
const percentageElement = document.getElementById("percentage");

// Objeto global para almacenar categorías y el porcentaje total
const global = {
  categories: [],
  sumPercentage: 0,
  uniqueId: 0,
};

// Función para comprobar el porcentaje máximo
function checkMaxPercentage() {
  if (global.sumPercentage > 100) {
    alert("El porcentaje total no puede exceder 100");
    location.reload();
    return false;
  }
  return true;
}

// Función para crear una categoría
function createCategory() {
  const categoryName = categoryElement.value;
  const percentage = parseInt(percentageElement.value);
  // Comprueba si el nombre de categoría está vacío o el porcentaje no es un número válido o es negativo
  if (categoryName === "" || isNaN(percentage) || percentage < 0) {
    return null;
  }

  const category = {
    name: categoryName,
    percentage: percentage,
    id: `${categoryName}-${global.uniqueId++}`,
  };

  global.sumPercentage += percentage;
  if (checkMaxPercentage()) {
    global.categories.push(category);
    return category;
  } else {
    global.sumPercentage -= percentage;
    return null;
  }
}

// Función para renderizar una categoría en la interfaz
function renderCategory(category) {
  const cardHTML = `
    <div class="col">
      <div class="card text-bg-primary text-center h-100">
        <div class="card-header">
          <div class="fs-5">${category.name}</div>
        </div>
        <div class="card-body">
          <p class="card-text fw-bold" id="${category.id}"></p>
        </div>
      </div>
    </div>
  `;

  categoryWrapper.innerHTML += cardHTML; // Agrega el HTML de la categoría al contenedor
}

// Función para actualizar el presupuesto
function updateBudget(incomeValue) {
  const parsedIncome = parseFloat(incomeValue);
  // Comprueba si el valor de ingreso no es un número válido o es negativo
  if (isNaN(parsedIncome) || parsedIncome < 0) {
    alert("Ingrese un valor de ingreso válido");
    return;
  }

  for (const category of global.categories) {
    const categoryName = document.getElementById(category.id);
    categoryName.textContent = (
      (parsedIncome / 100) *
      category.percentage
    ).toFixed(2);
  }
}

// Evento al hacer clic en el botón de agregar categoría
document.getElementById("add-category").addEventListener("mouseup", () => {
  const category = createCategory();
  if (category) {
    renderCategory(category); // Renderiza la categoría en la interfaz
    categoryElement.value = "";
    percentageElement.value = "";
  }
});

// Evento al hacer clic en el botón de calcular
document.getElementById("calculate").addEventListener("mouseup", () => {
  if (checkMaxPercentage()) {
    updateBudget(incomeElement.value); // Actualiza el presupuesto basado en el valor de ingreso
  }
});
