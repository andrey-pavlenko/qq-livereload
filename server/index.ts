import httpServer from './http-server';
import wsServer from './ws-server';

// eslint-disable-next-line no-console
console.info(wsServer);

httpServer.on('upgrade', (req, socket, head) => {
  // eslint-disable-next-line no-console
  console.info('server upgrade', req.url);
});
