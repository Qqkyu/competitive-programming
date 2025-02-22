/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
  const row = new Array(n).fill(1);

  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      row[j] = row[j - 1] + row[j];
    }
  }

  return row[n - 1];
}
