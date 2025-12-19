// routes/book.routes.js

const express = require('express');
const router = express.Router();

const {
  getBooks,
  getBook,
  createBook,
  removeBook,
} = require('../controllers/book.controller');

// ---------------------------
// Routes
// ---------------------------

router.get('/', getBooks);
router.get('/:id', getBook);
router.post('/', createBook);
router.delete('/:id', removeBook);

module.exports = router;
