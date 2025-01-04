// 6. Write an ES6 function that takes an array of objects and a property name and returns a new array with only the values of that property. Avoid using in-built methods.

const getValues = (arr, prop) => {
    let values = [];

    for(let i = 0; i < arr.length; i++ ) {
        values.push(arr[i][prop])
        console.log(arr[i], "first", prop)
    }

    return values;
}


console.log(
    getValues([
        { name: 'John', age: 21 },
        { name: 'Mary', age: 22 },
        { name: 'Peter', age: 23 },
    ],
        'name',
    ),
) // ["John", "Mary", "Peter"]
