/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const rowOccurences = new Map();
  for (let i = 0; i < grid.length; ++i) {
    const rowHash = grid[i].join();
    const occurences = rowOccurences.get(rowHash) ?? 0;
    rowOccurences.set(rowHash, occurences + 1);
  }

  let matches = 0;
  for (let i = 0; i < grid.length; ++i) {
    let col = `${grid[0][i]}`;
    for (let j = 1; j < grid.length; ++j) {
      col += "," + grid[j][i];
    }
    const occurences = rowOccurences.get(col) ?? 0;
    matches += occurences;
  }
  return matches;
};
