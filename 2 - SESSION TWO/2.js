// 2. Write an ES6 function that takes an array of strings and returns an array with all the stringscapitalised using the map method.

const myArray = ['apple', 'banana', 'cherry']

const capitalizeArray = arr => arr.map((arr) => arr.toUpperCase())

console.log(capitalizeArray(myArray))
// Output: ["APPLE", "BANANA", "CHERRY"]