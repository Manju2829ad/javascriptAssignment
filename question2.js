/*
const ages = [29, 25, 19, 22, 24, 20, 26, 18, 21, 23];
Perform the following tasks:

Sort the array and find the minimum and maximum age.
Find the median age (the middle item if the number of items is odd, or the average of the two middle items if the number of items is even).
Find the average age (sum of all items divided by the number of items).
Find the range of the ages (maximum minus minimum).
Compare the value of (min - average) and (max - average) using the abs() method (which returns the absolute value).
*/


const ages = [29, 25, 19, 22, 24, 20, 26, 18, 21, 23];

console.log(ages)
let max = ages[0]; // Initialize max with the first element of the array
let min = ages[0]; // Initialize min with the first element of the array

for (let i = 1; i < ages.length; i++) { // Start loop from the second element
    if (ages[i] > max) {
        max = ages[i]; // Update max if current element is greater
    }

    if (ages[i] < min) {
        min = ages[i]; // Update min if current element is smaller
    }
}

console.log(`max: ${max} min: ${min}`);
//2.Find the median age (the middle item if the number of items is odd, or the average of the two middle items if the number of items is even).
let median = 0;

if (ages.length % 2 === 0) {
  // even length
  let mid1 = ages[ages.length / 2 - 1];
  let mid2 = ages[ages.length / 2];
  median = (mid1 + mid2) / 2;
} else {
  // odd length
  median = ages[Math.floor(ages.length / 2)];
}

console.log(median)



//3. Find the average age (sum of all items divided by the number of items).


let sum = 0;
for(let age of ages){
    sum += age;
}
let avg = sum / ages.length;



//4. Find the range of the ages (maximum minus minimum).
let minAge = Math.min(...ages);
let maxAge = Math.max(...ages);
let ageRange = maxAge - minAge;

//5.



const min1 = Math.min(...ages);
const max1 = Math.max(...ages);
const average = ages.reduce((acc, age) => acc + age, 0) / ages.length;

const minDiff = Math.abs(min1 - average);
const maxDiff = Math.abs(max1 - average);

console.log(`Min diff: ${minDiff}`);
console.log(`Max diff: ${maxDiff}`);