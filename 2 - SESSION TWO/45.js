// Write an ES6 function that takes an array of strings and returns the longest string.

const strings = ['neogcamp', 'Haule Haule', 'code', 'Batman', 'Awesome']

const longestString = strings => strings.reduce((acc, current) => (acc.length < current.length ? current : acc))

console.log(longestString(strings))
// Output: 'Haule Haule'