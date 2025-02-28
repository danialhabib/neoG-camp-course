// 1. Create a function that takes an array of strings as an argument and returns a string that includes the number of items in the array and the first and last items.

// Your ES6 code here
const items = ['apple', 'banana', 'orange']

const formatArray = (items) => (`The array has ${items.length}, and first item is "${items[0]}", and the last item is "${items[2]}"`)

const message = formatArray(items)
console.log(message)
// The array has 3 items, and the first item is "apple", and the last item is "orange".
