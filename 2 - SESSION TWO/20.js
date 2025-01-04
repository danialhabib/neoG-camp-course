// 8. Write an ES6 function that takes an array of strings and returns the first string that is longer than 8 characters


const names = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan"]

const isNamesGreaterThan8 = names => names.find(str => str.length > 8)

console.log(isNamesGreaterThan8(names));
// Output: "Geetanjali"