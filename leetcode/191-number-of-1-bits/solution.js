function hammingWeight(n) {
  if (n === 1) {
    return 1;
  }
  return (n % 2 === 0 ? 0 : 1) + hammingWeight(Math.floor(n / 2));
}
