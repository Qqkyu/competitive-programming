function climbStairs(n) {
  if (n <= 3) {
    return n;
  }

  let [n1, n2] = [2, 3];

  for (let i = 4; i < n; ++i) {
    n2 = n1 + n2;
    n1 = n2 - n1;
  }

  return n1 + n2;
}
