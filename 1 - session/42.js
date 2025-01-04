// 12. Write an ES6 function to return the first element which is a multiple of 5 in the given array.

const printMultipleOfFive = arr => arr.find(arr => arr % 5 === 0)

// Your ES6 code here
console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3])) // 10
console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])) // 5