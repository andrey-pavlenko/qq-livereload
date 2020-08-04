import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import * as config from './config';

const server = http.createServer((req, res) => {
  let processed = false;

  if (req.method === 'GET') {
    if (req.url === config.LIVERELOAD_PATH + '.js') {
      processed = true;

      try {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.write(fs.readFileSync(path.resolve(__dirname, './livereload.js')));
      } catch (e) {
        if (e.code === 'ENOENT') {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          res.write('Not found');
        }
      }
    }
  }
  if (!processed) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.write('Not implemented yet');
  }
  res.end();
});

server.listen(config.PORT);

export default server;
