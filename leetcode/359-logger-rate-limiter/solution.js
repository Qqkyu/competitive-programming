var Logger = function () {
  this.timestamps = new Map();
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  if (!this.timestamps.has(message) || timestamp >= this.timestamps.get(message)) {
    this.timestamps.set(message, timestamp + 10);
    return true;
  }
  return false;
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
