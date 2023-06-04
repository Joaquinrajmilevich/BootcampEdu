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

// budgetCalculation() devuelve un array
//con el porcentaje de cada categoria calculado
function budgetCalculation(array, income) {
  for (let i = 0; i < array.length; i++) {
    let category = array[i];
    category["budget"] = (income / 100) * category.percentage;
  }
  return array;
}

// Muestra y crea las categorias
function showCategory() {
  let cardCategory = categoryData();
  if (!cardCategory) {
    return;
  }
  categories.push(cardCategory);
  categoryWrapper.innerHTML += card(cardCategory.name);
  categoryElement.value = "";
  percentageElement.value = "";
}

// Muestra cada presupuesto en su respectivo elemento
function showBudget(incomeValue) {
  const categoriesBudget = budgetCalculation(categories, incomeValue);
  categoriesBudget.forEach((categoryBudget) => {
    const budgetId = document.getElementById(categoryBudget.name);
    budgetId.innerHTML = categoryBudget.budget;
  });
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
