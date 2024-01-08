const Book = require('../models/book.js')

const BookService = {
   
    async getAllBooks() {
        return Book.find({}).lean()
    },
    

    
}
module.exports = BookService