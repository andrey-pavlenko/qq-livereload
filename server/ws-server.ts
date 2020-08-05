import WebSocket from 'ws';
import log from './logger';

const wsServer = new WebSocket.Server({
  noServer: true
});

wsServer.on('connection', (ws) => {
  log.debug('WebSocket connected');

  ws.on('message', (socket) => {
    log.debug('message %s', socket);
  });
});

function broadcast(msg: string): void {
  log.debug('Broadcast: "%s"', msg);
  wsServer.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(msg);
    }
  });
}

export default wsServer;
export { broadcast };
