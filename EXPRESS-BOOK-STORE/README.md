### Task: Setting Up the Server with Express, Listening on Port 8000, and Creating Book Routes

-----

#### Step 1: Project Initialization

Create Project Folder:
Start by creating a new folder for the project, such as "node-express-server".

Initialize Node.js Project:
In the terminal, run: npm init -y
This creates a package.json file.

Install Express:
Run: npm install express
This adds Express to the project.

Create index.js File:
This will be your main entry point.

#### Step 2: Set Up Basic Express Server

Import Express:
In index.js, import the Express module.

Create Express App:
Use "const app = express()" to initialize the Express application.

Set Up a Port:
Define a constant, "const PORT = 8000;" to store the port number.

Listen on Port:
Use "app.listen(PORT, () => {...})" to make the server listen on port 8000 and log a confirmation message.

#### Step 3: Create Book Data

Create a Mock Book Array:
Define a simple array, "const books = [...]", containing sample book objects.
Each book should have an "id", "title", and "author".

Example:
const books = [
{ id: 1, title: 'Book One', author: 'Author One' },
{ id: 2, title: 'Book Two', author: 'Author Two' },
];

#### Step 4: Set Up GET Route to Fetch All Books

Define Route:
Use "app.get('/books', (req, res) => {...})" to create a route for fetching all books.

Send Book Data:
In the route handler, use "res.json(books)" to send the entire array of books as JSON.

#### Step 5: Set Up GET Route to Fetch a Book by ID

Use Path Parameter:
Define a route with a path parameter using "app.get('/books/:id', (req, res) => {...})".

Extract ID:
Extract the "id" from "req.params".

Find Book:
Use "books.find()" to search for the book by id.

Handle Not Found:
If no book is found, send a 404 response with a relevant message.

Return Book:
If the book exists, send it in the response.

#### Step 6: Set Up POST Route to Add a New Book

Use Middleware:
Add "app.use(express.json())" to parse JSON bodies.

Define POST Route:
Use "app.post('/books', (req, res) => {...})" for adding a new book.

Receive Book Data:
Access the new book data from "req.body".

Generate New ID:
Set an ID by incrementing the last book's ID or using a random method.

Add Book to Array:
Push the new book into the "books" array.

Send Success Response:
Respond with the updated book list or a success message.

#### Step 7: Set Up DELETE Route to Remove a Book by ID

Define DELETE Route:
Use "app.delete('/books/:id', (req, res) => {...})".

Retrieve Book ID:
Extract "id" from "req.params".

Find and Remove Book:
Use "books.filter()" to exclude the book with the matching id.

Check Deletion:
If no book was deleted, send a 404 response.

Send Confirmation:
Return a success message indicating the book was deleted, or send the updated book list.

#### Step 8: Test the Routes

Start the Server:
Run "node index.js" and check for the confirmation message.

Use Postman or cURL:
Demonstrate how to test each route using Postman or cURL.

GET /books
GET /books/:id
POST /books
DELETE /books/:id