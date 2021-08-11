const express = require('express');
const path = require('path');

const app = express();
// const http = require('http').createServer(app);
const port = 3000;
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  },
});

app.use(express.static(path.join(__dirname, 'public')));

require('./sockets/chat')(io);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/chat.html'));
});

// http.listen(3000, () => {
//   console.log('Servidor ouvindo na porta 3000');
// });
