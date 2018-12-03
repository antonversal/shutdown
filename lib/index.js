"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.state = { isShutdown: false };
exports.watchShutdown = (shutdownFn, logger) => {
    process.on('SIGTERM', async () => {
        if (logger) {
            logger.info('Got SIGTERM. Graceful shutdown start');
        }
        exports.state.isShutdown = true;
        try {
            await shutdownFn();
            if (logger) {
                logger.info('Graceful shutdown finished');
            }
            process.exit();
        }
        catch (e) {
            if (logger) {
                logger.error('Shutdown error', e);
            }
            process.abort();
        }
    });
};
//# sourceMappingURL=index.js.map