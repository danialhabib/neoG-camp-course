// 1. Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.

let array = [4, 78, 8, 3, 6, 0, 12, 34]

const getMaxElement = arr => {
    let a = arr[0];
    console.log(a)
    for(let i = 1; i < arr.length; i++) {
        console.log(arr[i]," i first", a)
        if(arr[i] > a) {
            console.log(arr[i],"first", a)
            a = arr[i]
            console.log(arr[i],"sec", a)
        }
    }

    return a;
}

console.log(getMaxElement(array)) // 78