// index.js

const express = require('express');
const bookRoutes = require('./routes/book.routes');
const logger = require('./middlewares/logger');

const app = express();
const PORT = 8000;

// ---------------------------
// Middlewares
// ---------------------------
app.use(express.json());
app.use(logger);

// ---------------------------
// Routes
// ---------------------------
app.use('/books', bookRoutes);

// ---------------------------
// Server
// ---------------------------
app.listen(PORT, () => {
  console.log(`HTTP Server running on PORT ${PORT}`);
});
