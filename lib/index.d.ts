export declare const state: {
  isShutdown: boolean;
};
interface Logger {
  info: (msg: string) => void;
  error: (error: Error) => void;
}
export declare const watchShutdown: (
  shutdownFn: () => Promise<void>,
  logger?: Logger | undefined,
) => void;
export {};
