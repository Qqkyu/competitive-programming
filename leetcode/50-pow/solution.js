/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
  if (x === 0 || x === 1) {
    return x;
  }

  if (n < 0) {
    return myPow(1 / x, -n);
  }

  if (n === 0) {
    return 1;
  }

  if (n % 2 === 0) {
    const halfRes = myPow(x, n / 2);
    return halfRes * halfRes;
  } else {
    return x * myPow(x, n - 1);
  }
}
