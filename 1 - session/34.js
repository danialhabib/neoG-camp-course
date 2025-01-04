// 4. Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.

// const pickFirstAndSecond = str => {

// }

// // Your ES6 code here
// console.log(pickFirstAndSecond(['orange', 'banana', 'apple']))
// // {first: 'orange', second: 'banana'}
// console.log(pickFirstAndSecond(['red', 'blue', 'green']))
// // {first: 'red', second: 'blue'}

const pickFirstAndSecond = ([first, second]) => {
    return { first, second };
};

// Example usage:
console.log(pickFirstAndSecond(['orange', 'banana', 'apple']));
// Output: { first: 'orange', second: 'banana' }

console.log(pickFirstAndSecond(['red', 'blue', 'green']));
// Output: { first: 'red', second: 'blue' }

