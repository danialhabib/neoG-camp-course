// Write an ES6 function that takes an array of strings as input and concatenates them into a single string.

const concatStrings = string => string.reduce((acc, curret) => acc + curret)

console.log(concatStrings(['this', 'is', 'fun'])) // Output: 'thisisfun'