var RandomizedSet = function () {
  this.valueIdx = new Map();
  this.values = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.valueIdx.has(val)) {
    return false;
  }

  this.values.push(val);
  this.valueIdx.set(val, this.values.length - 1);

  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.valueIdx.has(val)) {
    return false;
  }

  const valIdx = this.valueIdx.get(val);
  const lastValue = this.values.pop();

  if (valIdx < this.values.length) {
    this.values[valIdx] = lastValue;
    this.valueIdx.set(lastValue, valIdx);
  }

  this.valueIdx.delete(val);

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIdx = Math.floor(Math.random() * this.values.length);
  return this.values[randomIdx];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
