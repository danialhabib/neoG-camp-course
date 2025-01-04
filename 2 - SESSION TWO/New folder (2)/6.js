const numbers = [1, 2, 3, 4, 5];

// const squareNumber = num => numbers.map(num => num * num)

const numberSquar = num => num * num;

const squareNumber = numbers.map(numberSquar)

console.log(squareNumber)
// squareNumber()