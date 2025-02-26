class MinStack {
  constructor() {
    this.stack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    const curMinVal = this.stack.at(-1)?.minVal;
    this.stack.push({ val, minVal: curMinVal == null ? val : Math.min(curMinVal, val) });
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack.at(-1).val;
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.stack.at(-1).minVal;
  }
}
