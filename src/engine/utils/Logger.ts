const LOG_PREFIX = `[DINDE] `;
export default function (message: string, level: number = 0): void {
  // @ts-ignore
  if (window["DINDE_DEBUG"]) {
    if (level === 0) {
      console.info(`${LOG_PREFIX}${message}`);
      return;
    }
    if (level === 1) {
      console.log(`${LOG_PREFIX}${message}`);
      return;
    }
    if (level === 2) {
      console.warn(`${LOG_PREFIX}${message}`);
      return;
    }
    if (level === 3) {
      console.error(`${LOG_PREFIX}${message}`);
      return;
    }
    throw new Error(`Log level ${level} is not implemented`);
  }
}
