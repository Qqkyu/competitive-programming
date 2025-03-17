const DIRECTIONS = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const MAX_DISTANCE = 2147483647;

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
function wallsAndGates(rooms) {
  const queue = [];

  for (let i = 0; i < rooms.length; ++i) {
    for (let j = 0; j < rooms[i].length; ++j) {
      if (rooms[i][j] === 0) {
        queue.push([i, j]);
      }
    }
  }

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let [xOffset, yOffset] of DIRECTIONS) {
      const row = x + xOffset,
        col = y + yOffset;
      if (row < 0 || col < 0 || row >= rooms.length || col >= rooms[0].length || rooms[row][col] !== MAX_DISTANCE) {
        continue;
      }

      rooms[row][col] = rooms[x][y] + 1;
      queue.push([row, col]);
    }
  }
}
