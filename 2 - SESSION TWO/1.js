// 1. Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.

const numbers = [1, 2, 3, 4, 5]

const incrementNumbers = numbers => numbers.map((num) => num + 3)

console.log(incrementNumbers(numbers))
// Output: [4, 5, 6, 7, 8]