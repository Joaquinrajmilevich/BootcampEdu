// Array con datos de cada categoria
let categories = [
  { name: "necessaryExpenses", percentage: 50 },
  { name: "optionalExpenses", percentage: 30 },
  { name: "savingsInvestment", percentage: 20 },
];

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
// Monitoriza cambios del usuario y le muestra los resultados
document.getElementById("total-income").addEventListener("change", (event) => {
  showBudget(event.target.value);
});
