// Create a Set to store unique numbers
const uniqueNumbers = new Set([1, 2, 2, 3, 4, 4, 5, 6, 6, 7]);

// Create a Map to associate each number with its square
const numberSquares = new Map();
for (const num of uniqueNumbers) {
  numberSquares.set(num, num ** 2);
}

// Print the unique numbers and their corresponding squares
console.log("Unique Numbers:", [...uniqueNumbers]);
console.log("Number Squares:", [...numberSquares]);