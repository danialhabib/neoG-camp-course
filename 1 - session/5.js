// 5. Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.

const checkForAlphabetA = str => (str.includes('a') || str.includes("A") ? "Includes a" : "Does not include a")

// Your ES6 code here
console.log(checkForAlphabetA('Tanay')) // Includes a
console.log(checkForAlphabetA('Jeep')) // Does not include a
console.log(checkForAlphabetA('Jane')) // Includes a
