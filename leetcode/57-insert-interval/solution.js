function hasOverlap(x, y) {
  return x[1] >= y[0] && x[0] <= y[1];
}

function insert(intervals, newInterval) {
  const result = [];
  let idx = 0;

  while (idx < intervals.length && intervals[idx][1] < newInterval[0]) {
    result.push(intervals[idx]);
    ++idx;
  }

  if (idx === intervals.length || !hasOverlap(newInterval, intervals[idx])) {
    return [...result, newInterval, ...intervals.slice(idx)];
  }

  const curInterval = [
    Math.min(intervals[idx][0], newInterval[0]),
    Math.max(intervals[idx][1], newInterval[1]),
  ];
  ++idx;

  while (idx < intervals.length && intervals[idx][0] <= curInterval[1]) {
    curInterval[1] = Math.max(intervals[idx][1], curInterval[1]);
    ++idx;
  }

  return [...result, curInterval, ...intervals.slice(idx)];
}
