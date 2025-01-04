// 2. Write an ES6 function that takes an array of strings and returns an array with the length of each string using the map method

const strings = ['danial', 'coding', 'ali']

const getLength = (stringsArray) => stringsArray.map((str) => str.length)
// const getLength = strings.map(str => str.length);

console.log(getLength)
