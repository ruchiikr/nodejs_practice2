// db/book.js

let books = [
  { id: 1, title: 'Book One', author: 'Author One' },
  { id: 2, title: 'Book Two', author: 'Author Two' },
];

// Get all books
function getAllBooks() {
  return books;
}

// Get book by ID
function getBookById(id) {
  return books.find((book) => book.id === id);
}

// Add new book
function addBook(title, author) {
  const newId = books.length ? books[books.length - 1].id + 1 : 1;

  const newBook = { id: newId, title, author };
  books.push(newBook);

  return newBook;
}

// Delete book by ID
function deleteBookById(id) {
  const index = books.findIndex((book) => book.id === id);

  if (index === -1) return false;

  books.splice(index, 1);
  return true;
}

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  deleteBookById,
};
