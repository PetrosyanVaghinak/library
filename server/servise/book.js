const Book = require('../models/book.js')

const BookService = {
   
    async getAllBooks() {
        return await Book.find({}).lean()
    },
    

    
}
module.exports = BookService