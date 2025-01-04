// 10. Write an ES6 function that takes an array of objects and returns the sum of all ages.


// Your ES6 code here
var array = [
    {
        name: 'Jay',
        age: 60,
    },
    {
        name: 'Gloria',
        age: 36,
    },
    {
        name: 'Manny',
        age: 16,
    },
    {
        name: 'Joe',
        age: 9,
    },
]

// const sumOfAges = ([a, b, c, d]) => (a.age + b.age + c.age + d.age)

const sumOfAges = (array) => {
    return array.reduce((sum, person) => sum + person.age, 0);
  };

console.log(sumOfAges(array)) // 121   