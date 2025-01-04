// 2. Write an ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods.

const calculateAverage = arr => {
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        // console.log(sum)
    }

    return sum / arr.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5])) // 3