// 3. Write a function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.


const findPerson = (arr, name) => {
    return arr.find(person => person.name === name) || null;
}

// Your ES6 code here
console.log(
    findPerson(
        [
            { name: 'Amay', age: 25 },
            { name: 'Akhil', age: 25 },
        ],
        'Akhil',
    ),
)
