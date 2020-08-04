import WebSocket from 'ws';

const wsServer = new WebSocket.Server({
  noServer: true
});

wsServer.on('connection', (socket) => {
  // eslint-disable-next-line no-console
  console.info('io connection', socket);
});

export default wsServer;
