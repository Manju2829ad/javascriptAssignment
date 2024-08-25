function createCounter() {
    let count = 0; // Private variable
  
    return function() {
      count++; // Increment the private variable
      return count; // Return the updated count
    };
  }
  
  const counter = createCounter(); // Create a new counter
  
  console.log(counter()); // Output: 1
  console.log(counter()); // Output: 2
  console.log(counter()); // Output: 3