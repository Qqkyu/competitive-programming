/**
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
  let healthyCount = 0;
  const rottenOranges = [];

  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      const cell = grid[i][j];
      if (cell === 1) {
        ++healthyCount;
      } else if (cell === 2) {
        rottenOranges.push([i, j]);
      }
    }
  }

  let minute = 0,
    prevHealhyCount = -1;
  while (healthyCount > 0 && healthyCount != prevHealhyCount) {
    prevHealhyCount = healthyCount;
    ++minute;

    const rottenOrangesLen = rottenOranges.length;
    for (let i = 0; i < rottenOrangesLen; ++i) {
      const [x, y] = rottenOranges.shift();

      DIRECTIONS.forEach(([xOffset, yOffset]) => {
        if (grid[x + xOffset]?.[y + yOffset] === 1) {
          rottenOranges.push([x + xOffset, y + yOffset]);
          grid[x + xOffset][y + yOffset] = 2;
          --healthyCount;
        }
      });

      grid[x][y] = 0;
    }
  }

  return healthyCount === 0 ? minute : -1;
}

const DIRECTIONS = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
