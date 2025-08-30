import Book from "../models/book.model.js";



// CREATE a new book
async function createBook(req, res) {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    console.log("Validation Error:", error);
    
    if (error.name === "ValidationError") {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(400).json(error);
  }
}

// GET all books
async function getAllBooks(req, res) {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

// GET one book by ID
async function getOneBook(req, res) {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

// UPDATE a book by ID
async function updateBook(req, res) {
  const options = { new: true, runValidators: true };
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, options);
    res.json(updatedBook);
  } catch (error) {
    console.log("Validation Error:", error);
    if (error.name === "ValidationError") {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(400).json(error);
  }
}

// DELETE a book by ID
async function deleteBook(req, res) {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.json(deletedBook);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export {
  createBook,
  getAllBooks,
  getOneBook,
  updateBook,
  deleteBook,
};
