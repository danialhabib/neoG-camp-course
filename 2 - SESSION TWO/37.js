// 13. Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns the total cost of all the products using the reduce function.


const products = [
    { name: 'Shirt', price: 20, quantity: 2 },
    { name: 'Pants', price: 30, quantity: 1 },
    { name: 'Shoes', price: 50, quantity: 1 },
    { name: 'Hat', price: 10, quantity: 3 },
]

const getTotalCost = products => products.reduce((acc, {price, quantity}) => acc + price * quantity, 0)

console.log(getTotalCost(products))
// Output: 150