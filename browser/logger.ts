import * as logLevel from 'loglevel';

const LOG_LEVEL = 'debug';

logLevel.setDefaultLevel(LOG_LEVEL);

const logger = {
  debug(...args: any[]): void {
    logLevel.debug(...args);
  },
  info(...args: any[]): void {
    logLevel.info(...args);
  },
  warn(...args: any[]): void {
    logLevel.warn(...args);
  },
  error(...args: any[]): void {
    logLevel.error(...args);
  }
};

export default logger;
