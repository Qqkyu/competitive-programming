/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  const m = grid.length,
    n = grid[0].length;

  function exploreIsland(grid, x, y) {
    if (grid[x][y] === "0") {
      return;
    }

    grid[x][y] = "0";

    x - 1 >= 0 && exploreIsland(grid, x - 1, y);
    y + 1 < n && exploreIsland(grid, x, y + 1);
    x + 1 < m && exploreIsland(grid, x + 1, y);
    y - 1 >= 0 && exploreIsland(grid, x, y - 1);
  }

  let islandsCount = 0;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === "1") {
        islandsCount++;
        exploreIsland(grid, i, j);
      }
    }
  }

  return islandsCount;
}
