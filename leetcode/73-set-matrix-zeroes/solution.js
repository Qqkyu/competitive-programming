/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
  const rowsToZero = new Set();
  const colsToZero = new Set();

  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[0].length; ++j) {
      if (matrix[i][j] === 0) {
        rowsToZero.add(i);
        colsToZero.add(j);
      }
    }
  }

  for (let row of rowsToZero) {
    for (let col = 0; col < matrix[0].length; ++col) {
      matrix[row][col] = 0;
    }
  }
  for (let col of colsToZero) {
    for (let row = 0; row < matrix.length; ++row) {
      matrix[row][col] = 0;
    }
  }

  return matrix;
}
