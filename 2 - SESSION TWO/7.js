// 7. Write an ES6 function that takes an array of numbers and returns an array with only the numbers that are divisible by 3 and also by 5.

const numbers = [1, 2, 30, 4, 15]

const isDivisibleBy3and5 = numbers => numbers.filter((num) => num % 3 === 0 && num % 5 === 0)

console.log(isDivisibleBy3and5(numbers))
// Output: [30, 15]