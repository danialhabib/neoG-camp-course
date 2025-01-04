// 8. Write an ES6 function that takes an array of objects representing people with properties name and age, and returns an object with the average age of all the people.

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 },
]

// const getAverageAge = people => people.reduce((acc, {age}) => (acc + age), 0 ) / people.length

const getAverageAge = people => {
    const totalAge = people.reduce((acc, person) => acc + person.age, 0);
    const averageAge = totalAge / people.length;
    return { averageAge };
}

console.log(getAverageAge(people))
// Output: { averageAge: 32.5 }