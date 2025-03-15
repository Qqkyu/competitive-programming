// #1

/**
 * @param {number[][]} intervals
 * @return {number}
 */
function minMeetingRooms(intervals) {
  intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  const curMeetings = [];
  let minRoomsRequired = 0;
  intervals.forEach((interval) => {
    while (curMeetings.length && curMeetings.at(-1)[1] <= interval[0]) {
      curMeetings.pop();
    }

    // Normally would use a Min heap here
    let idx = 0;
    while (idx < curMeetings.length && curMeetings[idx][1] >= interval[1]) {
      ++idx;
    }
    curMeetings.splice(idx, 0, interval);
    minRoomsRequired = Math.max(minRoomsRequired, curMeetings.length);
  });

  return minRoomsRequired;
}

// #2

/**
 * @param {number[][]} intervals
 * @return {number}
 */
function minMeetingRooms(intervals) {
  const starts = intervals.map(([start]) => start).sort((a, b) => a - b);
  const ends = intervals.map(([_, end]) => end).sort((a, b) => a - b);

  let roomsNeeded = 0,
    end = 0;
  for (let i = 0; i < starts.length; ++i) {
    if (starts[i] < ends[end]) {
      ++roomsNeeded;
    } else {
      ++end;
    }
  }

  return roomsNeeded;
}
