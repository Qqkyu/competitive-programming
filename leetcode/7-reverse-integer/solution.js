/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  if (x < 0) {
    return -reverse(-x);
  }

  let result = 0;
  while (x > 0) {
    result = result * 10 + (x % 10);
    x = Math.trunc(x / 10);
  }

  return result >= Math.pow(2, 31) ? 0 : result;
}
