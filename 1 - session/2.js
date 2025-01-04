// 2. Write a function that takes two numbers as input and determines which one is greater.

const isGreater = (a, b) => {
    if(a > b){
        console.log(a, "is greater than ", b)
    } else {
        console.log (b, "b is greater than a", a)
    }
}


// Your ES6 code here
console.log(isGreater(2, 5)) // 5 is greater than 2
console.log(isGreater(10, 5)) // 10 is greater than 5
