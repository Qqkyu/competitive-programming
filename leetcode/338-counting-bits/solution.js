function countBits(n) {
  if (n === 0) {
    return [0];
  }

  const result = [0, 1];

  for (let i = 2; i <= n; i *= 2) {
    for (let j = 0; j < i && i + j <= n; ++j) {
      result.push(1 + result[j]);
    }
  }

  return result;
}
