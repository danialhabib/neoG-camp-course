// 7. Write an ES6 function that takes an array of numbers and returns the first number that is divisible by 7.

const numbers = [1, 2, 3, 21, 14, 7];

const isDivisibleBy7 = numbers.find(num => num % 7 == 0)

console.log(isDivisibleBy7)
// Output: 21