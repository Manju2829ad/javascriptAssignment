// Create two objects
const person1 = { name: "John Doe", age: 30 };
const person2 = { name: "Jane Smith", age: 25 };

// Create a function to introduce oneself
function introduce() {
  console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}

// Use the call method to make each person introduce themselves
introduce.call(person1); 
introduce.call(person2);