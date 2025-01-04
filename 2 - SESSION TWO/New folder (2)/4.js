// 1. Write an ES6 function increaseStock() to take a products’s name and quantity in an object and then increase the quantity by 5.

const product = { name: 'ruled notebook', quantity: 20 }

const increaseStock = products => ({...products, quantity: products.quantity + 5})

const inventoryStock = increaseStock(product)
console.log(inventoryStock) // { name: "ruled notebook", quantity: 25 }