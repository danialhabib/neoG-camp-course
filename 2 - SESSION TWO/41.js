// 2. Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array

const numbers = [1, 2, 3, 4, 5]

const sumSquares = numbers => numbers.reduce((acc, current) => (acc + current ** 2), 0)

console.log(sumSquares(numbers))
// Output: 55