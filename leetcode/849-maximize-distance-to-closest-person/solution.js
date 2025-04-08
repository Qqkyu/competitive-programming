/**
 * @param {number[]} seats
 * @return {number}
 */
function maxDistToClosest(seats) {
  let lastOccupiedSeat = undefined,
    curMaxDistance = 0;
  for (let i = 0; i < seats.length; ++i) {
    if (seats[i] === 1) {
      if (lastOccupiedSeat == null) {
        curMaxDistance = i;
      } else {
        curMaxDistance = Math.max(curMaxDistance, Math.floor((i - lastOccupiedSeat) / 2));
      }

      lastOccupiedSeat = i;
    }
  }

  curMaxDistance = Math.max(curMaxDistance, seats.length - 1 - lastOccupiedSeat);
  return curMaxDistance;
}
