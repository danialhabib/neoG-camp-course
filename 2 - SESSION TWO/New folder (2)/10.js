const arr = [1, 2, 3, 4, 5, 10, 11, 13, 12, 14, 123, 343, 554];

const lessThan10 = num => num > 10;

const filterArray = arr.filter(lessThan10)

console.log(filterArray)