// Creating a function to display information
function displayInfo(name, role) {
    console.log(`Name: ${name}, Role: ${role}`);
  }
  
  // Using call to invoke the function with specific arguments
  displayInfo.call(this, "John Doe", "Developer");
  
  // Using apply to invoke the function with arguments passed as an array
  displayInfo.apply(this, ["Jane Smith", "Designer"]);
  
  // Created another function to log a greeting with context
  function greet() {
    console.log(`Hello, my name is ${this.name} and I am a ${this.role}.`);
  }
  
  // Use bind to create a new function boundGreet with a specific context and log the greeting
  const boundGreet = greet.bind({ name: "Alice Johnson", role: "Manager" });
  boundGreet(); // Output: Hello, my name is Alice Johnson and I am a Manager.