/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function findClosestElements(arr, k, x) {
  let lo = 0,
    hi = arr.length - k;
  while (lo < hi) {
    const m = lo + Math.floor((hi - lo) / 2);
    if (x - arr[m] > arr[m + k] - x) {
      lo = m + 1;
    } else {
      hi = m;
    }
  }
  return arr.slice(lo, lo + k);
}
