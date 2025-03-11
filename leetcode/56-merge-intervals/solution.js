/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  intervals.sort((interval1, interval2) => interval1[0] - interval2[0]);
  const mergedIntervals = [];
  for (let i = 0; i < intervals.length; ++i) {
    const mergedInterval = intervals[i];
    while (intervals[i + 1]?.[0] <= mergedInterval[1]) {
      mergedInterval[1] = Math.max(mergedInterval[1], intervals[i + 1][1]);
      ++i;
    }
    mergedIntervals.push(mergedInterval);
  }
  return mergedIntervals;
}
