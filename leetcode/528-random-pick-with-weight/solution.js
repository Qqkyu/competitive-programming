/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.intervalEnds = [];

  for (let idx = 0; idx < w.length; ++idx) {
    const curIntervalStart = this.intervalEnds.length > 0 ? this.intervalEnds.at(-1) + 1 : 0;
    this.intervalEnds.push(curIntervalStart + w[idx] - 1);
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const randomIdx = Math.floor(Math.random() * (this.intervalEnds.at(-1) + 1));

  let lo = 0,
    hi = this.intervalEnds.length - 1;
  while (lo <= hi) {
    const m = lo + Math.floor((hi - lo) / 2);

    const intervalStart = m === 0 ? 0 : this.intervalEnds[m - 1] + 1;
    const intervalEnd = this.intervalEnds[m];

    if (randomIdx >= intervalStart && randomIdx <= intervalEnd) {
      return m;
    } else if (randomIdx < intervalStart) {
      hi = m - 1;
    } else {
      lo = m + 1;
    }
  }
};
