/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  let row = null;

  let lo = 0,
    hi = matrix.length - 1;
  while (lo <= hi) {
    const m = lo + Math.floor((hi - lo) / 2);
    const rowMin = matrix[m].at(0),
      rowMax = matrix[m].at(-1);
    if (rowMin <= target && rowMax >= target) {
      if (rowMin === target || rowMax === target) {
        return true;
      }
      row = matrix[m];
      break;
    } else if (rowMin > target) {
      hi = m - 1;
    } else {
      lo = m + 1;
    }
  }

  if (row == null) {
    return false;
  }

  lo = 0;
  hi = matrix[0].length - 1;

  while (lo <= hi) {
    const m = lo + Math.floor((hi - lo) / 2);
    if (row[m] === target) {
      return true;
    } else if (row[m] > target) {
      hi = m - 1;
    } else {
      lo = m + 1;
    }
  }

  return false;
}
