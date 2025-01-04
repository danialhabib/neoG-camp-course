// 15. Create a function which takes a product object and returns a sentence about the product using ES6 features.

const printProductDetails = ({name, specification: {capacity, size}, price}) => (`${name} which is fo ${size} and ${capacity} and ${price}`)


const product = {
    name: 'Apple MacBook Air 2020',
    specification: {
        capacity: '256GB',
        size: '13.3 Inch',
    },
    price: 82900,
}
console.log(printProductDetails(product)) // Apple MacBook Air 2020 which is of 13.3 Inch