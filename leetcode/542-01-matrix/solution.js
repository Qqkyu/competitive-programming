function updateMatrix(mat) {
  const queue = [];

  for (let i = 0; i < mat.length; ++i) {
    for (let j = 0; j < mat[0].length; ++j) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      } else {
        mat[i][j] = -1;
      }
    }
  }

  while (queue.length > 0) {
    const [i, j] = queue.shift();

    if (mat[i - 1]?.[j] === -1) {
      mat[i - 1][j] = mat[i][j] + 1;
      queue.push([i - 1, j]);
    }
    if (mat[i][j + 1] === -1) {
      mat[i][j + 1] = mat[i][j] + 1;
      queue.push([i, j + 1]);
    }
    if (mat[i + 1]?.[j] === -1) {
      mat[i + 1][j] = mat[i][j] + 1;
      queue.push([i + 1, j]);
    }
    if (mat[i][j - 1] === -1) {
      mat[i][j - 1] = mat[i][j] + 1;
      queue.push([i, j - 1]);
    }
  }

  return mat;
}
