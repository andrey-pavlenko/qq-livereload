import chokidar from 'chokidar';
import log from './logger';
import { broadcast } from './ws-server';

const WATCH_PATH = '/home/andrey/Develope/qui-quo/';
const WATCH_EXTS = [/\.css$/i, /\.html?$/i, /\.js$/i, /\.clj$/i];

chokidar.watch(WATCH_PATH).on('change', (path) => {
  log.debug('FS file change: %s', path);
  if (WATCH_EXTS.some((reExt) => reExt.test(path))) {
    log.debug('Emit reload');
    broadcast('reload');
  }
});
