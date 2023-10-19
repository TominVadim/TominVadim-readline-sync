const income = 65000;

const incomeTaxCalculator = (income) => {
     const taxRate = 0.15;
     const tax = income * taxRate;
     return tax;

};

console.log(incomeTaxCalculator(income))