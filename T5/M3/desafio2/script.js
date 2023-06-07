// constante con los tipos de planes
const creditsPlans = [
  { name: "Plan 001", capital: 150000, term: 30, rate: 15 },
  { name: "Plan 002", capital: 300000, term: 180, rate: 10 },
  { name: "Plan 003", capital: 485000, term: 60, rate: 23 },
];

// funcion que devuelve interes generado

function interest(a, b, c) {
  return (a * b * c) / 100;
}

// funcion que devuelve un array con los intereses generados incluidos
function addInterest(plans) {
  const array = [];
  for (const plan of plans) {
    plan["interest"] = interest(plan.capital, plan.term, plan.rate);
    array.push(plan);
  }
  return array;
}

console.log(addInterest(creditsPlans));
