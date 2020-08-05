import * as config from '../server/config';
import log from './logger';

log.debug(
  'Connect to',
  `ws://${config.HOST}:${config.PORT}${config.LIVERELOAD_PATH}`
);

const socket = new WebSocket(
  `ws://${config.HOST}:${config.PORT}${config.LIVERELOAD_PATH}`
);

socket.onopen = function (event: Event): void {
  log.debug('socket.onopen', (event.target as WebSocket).url);
};

socket.onclose = function (event: CloseEvent): void {
  log.debug('socket.onopen', (event.target as WebSocket).url);
};

socket.onmessage = function (event: MessageEvent): void {
  log.debug(
    'socket.onmessage',
    (event.target as WebSocket).url,
    'data:',
    event.data
  );

  if (event.data === 'reload') {
    log.debug('Got reload message');
    socket.close();
    window.location.reload();
  }
};
