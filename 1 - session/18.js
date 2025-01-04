// 3. Write a function that takes an object person and a number num as arguments and returns true if the person's age plus num is greater than 21. Otherwise, it should return false.

// Your ES6 code here
const person1 = { name: 'Ajay', age: 20 }

const isEligible = (person1, num) => person1.age + num > 21

console.log(isEligible(person1, 1)) // false
console.log(isEligible(person1, 2)) // true
