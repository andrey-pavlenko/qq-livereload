import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import log from './logger';
import * as config from './config';

import wsServer from './ws-server';

const server = http.createServer((req, res) => {
  let processed = false;

  log.debug('HTTP request, method: "%s", url: "%s"', req.method, req.url);

  if (req.method === 'GET') {
    if (req.url === config.LIVERELOAD_PATH + '.js') {
      processed = true;

      try {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.write(fs.readFileSync(path.resolve(__dirname, './livereload.js')));
        log.debug('File "./livereload.js" success loaded');
      } catch (e) {
        log.error('Failed to open "./livereload.js",\n%s', e);
        if (e.code === 'ENOENT') {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          res.write('Not found');
        }
      }
    }
  }
  if (!processed) {
    log.debug('HTTP request not processed, default response');
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.write('Not implemented yet');
  }
  res.end();
});

server.listen(config.PORT);
log.debug('HTTP server started at port %s', config.PORT);

server.on('upgrade', (req, socket, head) => {
  if (req.url === config.LIVERELOAD_PATH) {
    log.debug(`HTTP server upgrade for ${config.LIVERELOAD_PATH}`);
    wsServer.handleUpgrade(req, socket, head, (ws) => {
      log.debug('HTTP server upgraded');
      wsServer.emit('connection', ws, req);
    });
  } else {
    log.debug('No path for HTTP server upgrade. Destroy sokcet');
    socket.destroy();
  }
});

export default server;
