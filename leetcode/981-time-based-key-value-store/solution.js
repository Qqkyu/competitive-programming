var TimeMap = function () {
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (this.map.has(key)) {
    this.map.get(key).push({ value, timestamp });
  } else {
    this.map.set(key, [{ value, timestamp }]);
  }
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  const keyEntry = this.map.get(key) ?? [];

  let result = null;
  let left = 0,
    right = keyEntry.length - 1;
  while (left <= right) {
    const m = left + Math.floor((right - left) / 2);
    const { timestamp: timestampPrev, value } = keyEntry[m];

    if (timestamp > timestampPrev) {
      result = keyEntry[m];
      left = m + 1;
    } else if (timestamp < timestampPrev) {
      right = m - 1;
    } else {
      return value;
    }
  }

  return result?.value ?? "";
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
