// 1. Take an object with your mother’s name and your age. Now create an object for your sibling by age difference.

const danial = {name: 'danial', age: 21}
const danish = {...danial, age: danial.age -2 }

console.log(danial)
console.log(danish)