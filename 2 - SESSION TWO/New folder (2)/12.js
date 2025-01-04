// Given an array, find the sum of all odd numbers in the array using reduce() method.

const array = [1, 2, 3, 4, 5, 6, 7]

const sumOfOddInd = (accumlator, currentValue, currentIndex) => currentValue % 2 !== 0 ? accumlator + currentValue : accumlator;

console.log(array.reduce(sumOfOddInd, 0)) // 16