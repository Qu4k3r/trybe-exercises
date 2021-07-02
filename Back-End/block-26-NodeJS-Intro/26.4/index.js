const express = require('express');
const app = express();

app.get('/', [
  (req, res, next) => {
    console.log('Testando, som!');
    next();
  },
  (req, res) => {
    console.log('Tão me ouvindo?');
    res.send('Agora, sim, estamos ouvindo!')
  },
]);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// se precisar usar callbacks em forma de cascata, lembre-se que nao se pode usar o metodo res.send() com next() na mesma callback.
// o metodo .send() é a resposta do servidor ao cliente, ele encerra a comunicacao;

// outra maneira de escrever, mas de um jeito mais minimalista
/**
* app
  * .route('/')
  * .get(function (req, res) {
  *   res.send('hello world get');
  * })
  * .post(function (req, res) {
  *   res.send('hello world post');
  * });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

 */
