/**
 * @param {number[][]} intervals
 * @return {number}
 */
function eraseOverlapIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let result = 0,
    curEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; ++i) {
    const [start, end] = intervals[i];

    if (start < curEnd) {
      ++result;
      curEnd = Math.min(curEnd, end);
    } else {
      curEnd = end;
    }
  }

  return result;
}
