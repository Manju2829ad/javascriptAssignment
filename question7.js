// Create an object named calculator with methods add, subtract, and multiply
const calculator = {
    add: function(x, y) {
      return x + y;
    },
    subtract: function(x, y) {
      return x - y;
    },
    multiply: function(x, y) {
      return x * y;
    },
    calculate: function(operation, x, y) {
      switch (operation) {
        case 'add':
          return this.add(x, y);
        case 'subtract':
          return this.subtract(x, y);
        case 'multiply':
          return this.multiply(x, y);
        default:
          return 'Invalid operation';
      }
    }
  };
  
  // Using call to perform an addition operation using the calculate method
  console.log(calculator.calculate.call(calculator, 'add', 10, 5)); // Output: 15
  
  // Using apply to perform a multiplication operation using the calculate method with arguments as an array
  console.log(calculator.calculate.apply(calculator, ['multiply', 10, 5])); // Output: 50
  
  // Creating another object named discountCalculator with a discount percentage property and a method applyDiscount
  const discountCalculator = {
    discountPercentage: 0.1,
    applyDiscount: function(price) {
      return price * (1 - this.discountPercentage);
    }
  };
  
  // Using bind to create a new function calculateDiscount that is bound to the discountCalculator object and can be reused
  const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);
  console.log(calculateDiscount(100)); // Output: 90