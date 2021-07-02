const app = require('express')();
const bodyParser = require('body-parser');
const createAuthor = require('./middlewares/createAuthor');
const getAllAuthors = require('./middlewares/getAllAuthors');
const getAuthorById = require('./middlewares/getAuthorById');
const mongoCreateAuthor = require('./middlewares/mongoCreateAuthor');
const mongoGetAllAuthors = require('./middlewares/mongoGetAllAuthors');
const mongoGetById = require('./middlewares/mongoGetById');
const { validateUser, firstName, lastName, password } = require('./middlewares/validateCredential');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/authors', mongoGetAllAuthors);
app.get('/authors/:id', mongoGetById);
app.post('/authors', mongoCreateAuthor);
app.post('/user', firstName, lastName, password, validateUser);

app.use((err, _req, res, _next) => res.status(err.status).json({ error: err.error, message: err.message }));

app.listen(PORT, () => console.log(`App listen on port ${PORT}`));
