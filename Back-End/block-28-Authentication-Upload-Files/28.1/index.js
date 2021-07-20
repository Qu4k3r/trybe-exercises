const express = require('express');
const bodyParser = require('body-parser');

const controllers = require('./controllers');

const middlewares = require('./middlewares');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.post('/login', controllers.login);

// Nesse endpoint teriamos de verificar se o payload gerado pelo token passado no headers.authorization é igual ao req.params, pois se nao for, quer dizer que o usuario nao fez login ou nao esta cadastrado no DB;
app.get('/users/:userName', middlewares.validateToken);

app.use((err, _req, res, _next) => res.status(400).json({ erro: err.message }));

app.listen(PORT, () => console.log('App Running...'));
