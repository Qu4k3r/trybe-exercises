const app = require('express')();
const bodyParser = require('body-parser');
const cepRequestions = require('./controllers/cepRequestions');

const PORT = 3000;

app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.json({message: "pong!"}));

app.get('/cep/:cep', cepRequestions.getRequestionCep);
app.post('/cep', cepRequestions.postRequestionCep);

app.use(({error, status}, _req, res, _next) => res
  .status(status)
  .json({ error }));

app.listen(PORT, () => console.log(`App listen on port ${PORT}`));
