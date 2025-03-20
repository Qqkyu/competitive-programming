const DIRECTIONS = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

/**
 * @param {character[][]} grid
 * @return {number}
 */
function getFood(grid) {
  const n = grid.length,
    m = grid[0].length;

  const queue = [];

  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[i].length; ++j) {
      if (grid[i][j] === "*") {
        queue.push([i, j]);
        break;
      }
    }
  }

  let curDistance = 0;
  while (queue.length) {
    for (let i = queue.length; i > 0; --i) {
      const [x, y] = queue.shift();

      for (let [xOffset, yOffset] of DIRECTIONS) {
        const x2 = x + xOffset,
          y2 = y + yOffset;
        if (x2 >= 0 && x2 < n && y2 >= 0 && y2 < m && grid[x2][y2] !== "X") {
          if (grid[x2][y2] === "#") {
            return curDistance + 1;
          }
          grid[x2][y2] = "X";
          queue.push([x + xOffset, y + yOffset]);
        }
      }
    }

    ++curDistance;
  }

  return -1;
}
