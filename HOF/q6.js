let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" }
  ];
  
  // Function to categorize expenses based on amount
  function categorizeExpense(expense) {
    if (expense.amount > 100) {
      return "High Expense";
    } else {
      return "Low Expense";
    }
  }
  
  // Use map to create a new array with categorized expenses
  const categorizedExpenses = expenses.map(expense => categorizeExpense(expense));
  
  console.log(categorizedExpenses);