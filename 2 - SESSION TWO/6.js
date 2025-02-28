// 6. Write an ES6 function that takes an array of strings and returns an array with only the strings that have a length greater than 5

const fruits = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple']

const filterLongStrings = fruits => fruits.filter((str) => str.length > 5)

console.log(filterLongStrings(fruits))
// Output: ["banana", "cherry", "watermelon", "pineapple"]