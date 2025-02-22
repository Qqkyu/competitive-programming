/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
  let topRow = 0,
    rightCol = matrix.length - 1,
    bottomRow = matrix.length - 1,
    leftCol = 0;

  while (topRow < bottomRow) {
    for (let offset = 0; offset < rightCol - leftCol; ++offset) {
      swap(matrix, topRow, leftCol + offset, topRow + offset, rightCol);
      swap(matrix, topRow, leftCol + offset, bottomRow, rightCol - offset);
      swap(matrix, topRow, leftCol + offset, bottomRow - offset, leftCol);
    }

    topRow++;
    rightCol--;
    bottomRow--;
    leftCol++;
  }

  return matrix;
}

function swap(matrix, x1, y1, x2, y2) {
  const tmp = matrix[x1][y1];
  matrix[x1][y1] = matrix[x2][y2];
  matrix[x2][y2] = tmp;
}
