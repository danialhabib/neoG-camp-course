// 2. Create a function that takes a product object as an argument and returns a string that includes the product name, price, and a message based on whether it is in stock or not.

// Your ES6 code here
const product = {
    name: 'Socks',
    price: 249,
    inStock: true,
}

const formatProduct = product => {
const stock = product.inStock ? " in stock" : "out of stock"
  return  `${product.name} costs PRK ${product.price} and ${stock}`
}

const message = formatProduct(product)
console.log(message)
// Socks costs INR 249 and is in stock.   