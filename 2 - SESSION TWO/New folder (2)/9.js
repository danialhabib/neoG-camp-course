// Given an array, return an array with only numbers divisible by 10.


const arr = [5, 20, 15, 40, 3, 30, 11]

const divisibleBy10 = (num) => num % 10 === 0;

const filteredArray = arr.filter(divisibleBy10);

console.log(filteredArray)