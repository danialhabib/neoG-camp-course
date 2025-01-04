// 3. write an ES6 function that takes an array of numbers and converts even numbers to odd numbers by adding 1 to that number.

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const convertEvenToOdd = arr => {
//     return arr.forEach(element => {
//        if (element % 2 == 0) {
//         return element + 1  
//        } else {
//         return element
//        }
//     });
    
// }

const convertEvenToOdd = arr => arr.map(num => (num % 2 === 0 ? num + 1: num) )

console.log(convertEvenToOdd(numArr))
// [1, 3, 3, 5, 5, 7, 7, 9, 9]