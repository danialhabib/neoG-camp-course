// 3. Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.

const people = [
    { name: 'Ankit', age: 25 },
    { name: 'Vinit', age: 24 },
    { name: 'Shashi', age: 29 },
]

const getAges = people => people.map((people) => people.age)

const ages = getAges(people)
console.log(ages) // Output: [25, 24, 29]