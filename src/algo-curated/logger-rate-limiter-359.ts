class Logger {
  logs: Map<string, number>;

  constructor() {
    this.logs = new Map();
  }

  shouldPrintMessage(timestamp: number, message: string): boolean {
    if (this.logs.has(message)) {
      const prevT = this.logs.get(message);
      const willPrint = Math.abs(prevT - timestamp) >= 10;

      if (willPrint) {
        this.logs.set(message, timestamp);
      }

      return willPrint;
    }

    this.logs.set(message, timestamp);

    return true;
  }
}
