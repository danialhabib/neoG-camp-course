// 15. Write an ES6 function that takes an array of numbers and returns the minimum number using the reduce function.

const numbers = [10, 5, 8, 3, 6]

const getMinimumNumber = numbers => numbers.reduce((acc, cv) => (cv < acc ? cv : acc))

console.log(getMinimumNumber(numbers))
// Output: 3