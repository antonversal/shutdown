export const state = { isShutdown: false };

interface Logger {
  info: (message: string, payload?: any) => void;
  error: (message: string, payload?: any) => void;
}

export const watchShutdown = (
  shutdownFn: () => Promise<void>,
  logger?: Logger,
) => {
  process.on('SIGTERM', async () => {
    if (logger) {
      logger.info('Got SIGTERM. Graceful shutdown start');
    }
    state.isShutdown = true;
    try {
      await shutdownFn();
      if (logger) {
        logger.info('Graceful shutdown finished');
      }
      process.exit();
    } catch (e) {
      if (logger) {
        logger.error('Shutdown error', e);
      }
      process.abort();
    }
  });
};
