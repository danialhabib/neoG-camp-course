// 14. Write a function that takes an array and returns the sum of first and last element.

// const sumFirstAndLast = num => (num[0] + num[4]);
const sumFirstAndLast = num => (num[0] + num[num.length - 1]);

// Your ES6 code here
console.log(sumFirstAndLast([1, 2, 3, 4, 8])) // 9