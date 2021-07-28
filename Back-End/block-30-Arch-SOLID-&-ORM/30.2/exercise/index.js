const express = require('express');
const bodyParser = require('body-parser');

const bookController = require('./controllers/bookController');
const app = express();

app.use(bodyParser.json());

app.get('/books', bookController.getAllBooks);
app.post('/books', bookController.createNewBook);

app.listen(3000, () => console.log('App running ...'));
