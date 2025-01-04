// 10. Write an ES6 function to return sum of all numbers at even indices of the given array.

const sumOfEvenIndices = (arr) => 
    arr.reduce((sum, num, index) => index % 2 === 0 ? sum + num : sum, 0);

// Your ES6 code here
console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])) // 6
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])) // 30