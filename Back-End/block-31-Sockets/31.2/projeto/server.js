const express = require('express');
const path = require('path');

const app = express();
const http = require('http').createServer(app);

/**
 * Se http é um servidor http, entao o que é nosso app?
 * por que preciso usar http e express juntos, por que nao somente um?
 * Da pra usar somente express, pq nao usar entao? Altera o desempenho, performance ou manutencao?
 * boas praticas usando socket.io
 * usar socket.io significa nao usar nunca mais o pacote net?
 * como fazer para que quando um novo usuario entre, ele visualize mensagens anteriores? Isso é possível?
 */

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  },
});

// io.on('connection', (socket) => {
//   // .emit é a origem, ou seja, quem sempre manda
//   // .on é o destino, ou seja, quem sempre recebe
//   // o meu ID é sempre diferente ao recarregar a pagina, é como se ele encerrasse a conexao cliente/servidor e abrisse outra?

//   console.log(`Novo usuário conectado, ID: ${socket.id}`);
//   socket.emit('ola', 'Que bom que você chegou aqui! Fica mais um cadin, vai ter bolo :)');
//   socket.on('ping', () => console.log(`${socket.id} emitiu um ping`));
// });

app.use(express.static(path.join(__dirname, '..', 'public')));

require('../sockets/ping')(io);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});
