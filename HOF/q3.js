let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" }
  ];
  
  // Calculate tax for each expense and create a new array
  const expensesWithTax = expenses.map(expense => {
    // Calculate tax based on 10% of the amount
    const tax = expense.amount * 0.1;
  
    // Create a new object with the original expense data and the calculated tax
    return {
      ...expense,
      tax: tax
    };
  });
  
  console.log(expensesWithTax);