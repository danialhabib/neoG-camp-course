// Write an ES6 function that takes an array of strings and returns an object with the count of each string.

const fruits = [
    'apple',
    'banana',
    'banana',
    'cherry',
    'apple',
    'apple',
    'banana',
]

const countStrings = fruits => fruits.reduce((acc, frute) => {
    acc[frute] = (acc[frute] || 0) + 1;
    return acc;
}, {})

console.log(countStrings(fruits))
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }