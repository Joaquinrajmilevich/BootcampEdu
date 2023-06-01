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
  return category;
}

// budgetCalculation() devuelve un array
//con el porcentaje de cada categoria calculado
function budgetCalculation(array, income) {
  const newArray = [];
  for (let i = 0; i < categories.length; i++) {
    let category = categories[i];
    category["budget"] = (income / 100) * category.percentage;
    newArray.push(category);
  }
  return array;
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
  categories.push(categoryData());
  categoryWrapper.innerHTML += card(categoryData().name);
  categoryElement.value = "";
  percentageElement.value = "";
  showBudget(incomeElement.value);
});

// Actualiza los presupuestos
document.getElementById("calculate").addEventListener("click", () => {
  showBudget(incomeElement.value);
});
