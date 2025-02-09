function spiralOrder(matrix) {
  let upperBound = 0,
    rightBound = matrix[0].length - 1,
    lowerBound = matrix.length - 1,
    leftBound = 0;

  const result = [];

  while (true) {
    for (let col = leftBound; col <= rightBound; ++col) {
      result.push(matrix[upperBound][col]);
    }
    upperBound++;

    if (upperBound > lowerBound) {
      break;
    }

    for (let row = upperBound; row <= lowerBound; ++row) {
      result.push(matrix[row][rightBound]);
    }
    rightBound--;

    if (rightBound < leftBound) {
      break;
    }

    for (let col = rightBound; col >= leftBound; --col) {
      result.push(matrix[lowerBound][col]);
    }
    lowerBound--;

    if (upperBound > lowerBound) {
      break;
    }

    for (let row = lowerBound; row >= upperBound; --row) {
      result.push(matrix[row][leftBound]);
    }
    leftBound++;

    if (rightBound < leftBound) {
      break;
    }
  }

  return result;
}
