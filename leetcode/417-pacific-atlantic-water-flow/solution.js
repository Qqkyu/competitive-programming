const DIRECTIONS = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
function pacificAtlantic(heights) {
  const m = heights.length,
    n = heights[0].length;

  const atlantic = [];
  const pacific = [];
  for (let i = 0; i < m; i++) {
    atlantic.push(new Array(n));
    pacific.push(new Array(n));
  }

  function recurse(currX, currY, ocean) {
    if (ocean[currX][currY]) {
      return;
    }

    ocean[currX][currY] = 1;

    DIRECTIONS.forEach(([xOffset, yOffset]) => {
      const newX = currX + xOffset,
        newY = currY + yOffset;

      if (newX >= 0 && newX < m && newY >= 0 && newY < n && heights[currX][currY] <= heights[newX][newY]) {
        recurse(newX, newY, ocean);
      }
    });
  }

  for (let col = 0; col < n; ++col) {
    recurse(0, col, pacific);
    recurse(m - 1, col, atlantic);
  }

  for (let row = 0; row < m; ++row) {
    recurse(row, 0, pacific);
    recurse(row, n - 1, atlantic);
  }

  const ans = [];

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (pacific[i][j] && atlantic[i][j]) {
        ans.push([i, j]);
      }
    }
  }

  return ans;
}
