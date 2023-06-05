// Constante con el elemento que se añadira dinamicamente
const card = (category) => {
  return `
  <div class="col">
    <div class="card text-bg-primary text-center h-100">
      <div class="card-header">
        <div class="fs-5">${category}</div>
      </div>
      <div class="card-body">
        <p class="card-text fw-bold" id="${category}"></p>
      </div>
    </div>
  </div>
  `;
};

//inicializacion de variables
const categoryWrapper = document.getElementById("category-wrapper");
const incomeElement = document.getElementById("total-income");
const categoryElement = document.getElementById("category");
const percentageElement = document.getElementById("percentage");
let categories = [];

// categoryData() devuelve un objeto category
function categoryData() {
  let category = {};
  category["name"] = categoryElement.value;
  category["percentage"] = percentageElement.value;
  if (category.name == "" || category.percentage == "") {
    return false;
  }
  return category;
}

// Muestra y crea las categorias
function showCategory() {
  let cardCategory = categoryData();
  if (!cardCategory) {
    return false;
  }
  categories.push(cardCategory);
  categoryWrapper.innerHTML += card(cardCategory.name);
  categoryElement.value = "";
  percentageElement.value = "";
}

// Muestra cada presupuesto con el porcentaje de cada categoria calculado en su respectivo elemento
function showBudget(incomeValue) {
  for (const category of categories) {
    const categoryName = document.getElementById(category.name);
    categoryName.innerHTML = (incomeValue / 100) * category.percentage;
  }
}

// Agrega una nueva categoria al array categories
// y muestra su respectivo elemento
document.getElementById("add-category").addEventListener("click", () => {
  showCategory();
  showBudget(incomeElement.value);
});

// Actualiza los presupuestos
document.getElementById("calculate").addEventListener("click", () => {
  showBudget(incomeElement.value);
});
