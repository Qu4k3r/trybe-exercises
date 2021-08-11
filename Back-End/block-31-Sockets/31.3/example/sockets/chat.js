module.exports = (io) =>
  io.on('connection', (socket) => {
    socket.on('clientMessage', (message) => {
      console.log(`Mensagem de ${socket.id}: ${message}`);
      io.emit('serverMessage', message);
    });
  });
