let originalNum=[2,5,8,10,3];



const originalNumbers = [2, 5, 8, 10, 3];

originalNumbers.forEach((number, index) => {
  originalNumbers[index] = number * 2;
});

console.log(originalNumbers); // Output: [4, 10, 16, 20, 6]