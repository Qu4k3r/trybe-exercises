require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

let likeCounter = 0;

const socketIoServer = require('http').createServer();

const io = require('socket.io')(socketIoServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  socket.emit('loadingLikes', likeCounter);
  socket.on('likePost', (data) => {
    likeCounter = data;
    console.log(likeCounter);
  });
});

const { SOCKET_PORT = 3001, PORT = 3000 } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', controllers.like(likeCounter));
app.get('/ping', controllers.ping);

app.use(express.static(path.join(__dirname, 'views')));

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

socketIoServer.listen(SOCKET_PORT, () => {
  console.log(`Socket.io ouvindo na porta ${SOCKET_PORT}`);
});
