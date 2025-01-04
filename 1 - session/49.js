// 4. write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.

const filterWords = arr => arr.filter((word) => word.length > 5)

// Your ES6 code here
var words = ['eat', 'sleep', 'code', 'repeat', 'neog', 'community']
console.log(filterWords(words)) // ["repeat", "community"]