export declare const state: {
  isShutdown: boolean;
};
interface Logger {
  info: (message: string, payload?: any) => void;
  error: (message: string, payload?: any) => void;
}
export declare const watchShutdown: (
  shutdownFn: () => Promise<void>,
  logger?: Logger | undefined,
) => void;
export {};
