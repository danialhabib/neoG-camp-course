// Given an array, find the sum of all numbers in the array using reduce() method.

const array = [1, 2, 3, 4];
const sumOfNumbers = (accumulator, currentValue) => accumulator + currentValue;

const sum = array.reduce(sumOfNumbers, 0);
console.log(sum);