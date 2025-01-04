// 5. Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method.

const cities = [
    { name: 'New York', population: 8538000 },
    { name: 'Los Angeles', population: 3976000 },
    { name: 'Bangalore', population: 13608000 },
]

const getCityNames = citie => citie.map((str) => str.name) 

console.log(getCityNames(cities))
// Output: ["New York", "Los Angeles", "Bangalore"]