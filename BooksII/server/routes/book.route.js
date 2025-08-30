
import express from "express";
import {
  createBook,
  getAllBooks,
  getOneBook,
  updateBook,
  deleteBook,
} from "../controllers/book.controller.js";

const router = express.Router();


router.post("/books", createBook);
router.get("/books", getAllBooks);
router.get("/books/:id", getOneBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);
export default router;