// 2. Write a function that takes an array of objects representing books with properties title, author, and pages, and returns the total number of pages of all the books using the reduce function.


const books = [
    { title: 'The Alchemist', author: 'Paulo Coelho', pages: 197 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180 },
]

const getTotal = (totalPages, book) => { 
    console.log(totalPages, book.pages)
    return totalPages + book.pages; 
     }

const getTotalPages = (books) => books.reduce(getTotal, 0)

console.log(getTotalPages(books)) // Output: 658