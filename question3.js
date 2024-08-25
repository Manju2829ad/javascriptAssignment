// Created a Map to store contact information
const contacts = new Map();

// Add contact information to the Map
contacts.set("John Doe", { age: 30, email: "johndoe@example.com", location: "New York" });
contacts.set("Jane Smith", { age: 25, email: "janesmith@example.com", location: "Los Angeles" });
contacts.set("Bob Johnson", { age: 40, email: "bobjohnson@example.com", location: "Chicago" });

// Implement a function to retrieve contact details by name
function getContactDetails(name) {
  return contacts.get(name);
}

// Test the function
console.log(getContactDetails("John Doe")); 
// Output: { age: 30, email: "johndoe@example.com", location: "New York" }