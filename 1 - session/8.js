// 8. Write a function that takes a string as input and determines if it contains the word "hello".

const isHelloPresent = str => (str.includes('hello') || str.includes('Hello') ? "true" : "false")

// Your ES6 code here
console.log(isHelloPresent('Hello World')) // true
console.log(isHelloPresent('World')) // false
