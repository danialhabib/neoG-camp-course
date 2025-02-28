// 2. Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the cars that were made after the year 2012.

const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2010 },
    { make: 'Honda', model: 'Civic', year: 2012 },
    { make: 'Toyota', model: 'Camry', year: 2015 },
    { make: 'Ford', model: 'Mustang', year: 2018 },
]

const getCarDetails = cars => cars.filter(car => car.year > 2012)

const getCars = getCarDetails(cars)
console.log(getCars)
// Output: [{ make: "Toyota", model: "Camry", year: 2015 }, { make: "Ford", model: "Musta