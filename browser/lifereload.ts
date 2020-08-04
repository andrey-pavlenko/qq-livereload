import * as config from '../server/config';

// eslint-disable-next-line no-console
console.info(
  'Life reload browser',
  `ws://${config.HOST}:${config.PORT}${config.LIVERELOAD_PATH}`
);
