/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
  const prevNums = new Set();

  let num = n;
  while (num !== 1 && !prevNums.has(num)) {
    prevNums.add(num);

    let sum = 0;
    while (num > 0) {
      sum += Math.pow(num % 10, 2);
      num = Math.floor(num / 10);
    }

    num = sum;
  }

  return num === 1;
}
