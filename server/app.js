const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/book');
const app = express();
const BookCntroler = require('./controllers/booksController')
const port = 3003;


const mongoDB = async() => {
	try {
		const conn = await mongoose.connect('mongodb://127.0.0.1:27017/book');
		console.log(`MongoDB connected: ${conn.connection.host}:${conn.connection.port}`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};
// const cors = require('cors');

  // app.use(express.json());
  app.post('/api/books', async (req, res) => {
    try {
      book = addBook(req.body);
      res.status(201).json(book);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

mongoDB();



app.use(express.json());
app.post('/api/books', async(req, res) => {
	try {
		const book = new Book(req.body);
		const x = await book.save();
		res.status(201).json(book);
	} catch (error) {
		res.status(400).json({message: error});
	}
});

app.use('/book',BookCntroler)









app.listen(port, () => {
	console.log(`Server is running on port:${port}`);

})


