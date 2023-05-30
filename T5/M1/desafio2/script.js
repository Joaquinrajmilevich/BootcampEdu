// Asigna a una constante un nodeList con los elementos a modificar
const budgets = document.querySelectorAll(".budgets");

// Crea un diccionario de funciones que contiene las formulas para cada caso
let distribute = {
  necessaryExpenses: (income) => (income / 100) * 50,
  optionalExpenses: (income) => (income / 100) * 30,
  savingsInvestment: (income) => (income / 100) * 20,
};

// budgetCalculation() devuelve el valor de cada presupuesto llamado
function budgetCalculation(budget, income) {
  return distribute[budget](income);
}

// Monitoriza cambios del usuario y le muestra los resultados
document.getElementById("total-income").addEventListener("change", (event) => {
  budgets.forEach((element) => {
    element.innerHTML = budgetCalculation(element.id, event.target.value);
  });
});
