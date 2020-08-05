import pino from 'pino';
import * as config from './config';

const logger = pino({
  level: process.env.NODE_ENV === 'production' ? config.LOG_LEVEL : 'debug',
  prettyPrint: {
    translateTime: 'SYS:HH:MM:ss'
  }
});

export default logger;
