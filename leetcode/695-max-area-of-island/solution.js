/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
  function getIslandArea(x, y) {
    if (grid[x]?.[y] == null || grid[x][y] === 0) {
      return 0;
    }

    grid[x][y] = 0;

    return 1 + getIslandArea(x - 1, y) + getIslandArea(x, y + 1) + getIslandArea(x + 1, y) + getIslandArea(x, y - 1);
  }

  let curMaxArea = 0;
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[i].length; ++j) {
      if (grid[i][j] === 1) {
        curMaxArea = Math.max(curMaxArea, getIslandArea(i, j));
      }
    }
  }

  return curMaxArea;
}
