// 1. Write a function birthday() to take a person’s name and age in an object and then increase the age by 1. Return the updated object.

const birthday = obj => ({...person, age: person.age + 1})

const person = { mother: 'Kanak', age: 32 }
const tanayAfterBirthday = birthday(person)
console.log(tanayAfterBirthday) // { mother: "Kanak", age: 33 }