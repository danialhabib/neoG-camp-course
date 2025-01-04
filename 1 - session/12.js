/* 12. Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages. */

const book = {
    title: 'javascript',
    author: 'danial',
    page: 120
}

const book1 = {
    title: 'javascript',
    author: 'danial',
    page: 20
}

const getBookDetails = book => (book.page > 100 ? "true above 100" : "false below  100")

// Your ES6 code here
console.log(getBookDetails(book)) // logs 'true' if the pages are above 100
console.log(getBookDetails(book1)) // logs 'false' if the pages are 100 or below
