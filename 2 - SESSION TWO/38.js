// 14. Write an ES6 function that takes an array of strings and returns a single string that is the concatenation of all the strings using the reduce function.

const strings = ['Hello', ' ', 'world', '!']

const concatenateStrings = strings => strings.reduce((acc, cv) => acc + cv)

console.log(concatenateStrings(strings))
// Output: "Hello world!"