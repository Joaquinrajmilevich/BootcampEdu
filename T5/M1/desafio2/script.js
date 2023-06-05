// Array con datos de cada categoria
let categories = [
  { name: "necessaryExpenses", percentage: 50 },
  { name: "optionalExpenses", percentage: 30 },
  { name: "savingsInvestment", percentage: 20 },
];

//Muestra cada presupuesto con el porcentaje de cada categoria calculado en su respectivo elemento
function showBudget(incomeValue) {
  for (const category of categories) {
    const categoryName = document.getElementById(category.name);
    categoryName.innerHTML = (incomeValue / 100) * category.percentage;
  }
}

// Monitoriza cambios del usuario y le muestra los resultados
document.getElementById("total-income").addEventListener("change", (event) => {
  showBudget(event.target.value);
});
