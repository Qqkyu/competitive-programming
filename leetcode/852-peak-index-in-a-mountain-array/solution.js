/**
 * @param {number[]} arr
 * @return {number}
 */
function peakIndexInMountainArray(arr) {
  let lo = 0,
    hi = arr.length - 1;

  while (lo <= hi) {
    const m = lo + Math.floor((hi - lo) / 2);

    const leftHeight = arr[m - 1] ?? 0;
    const rightHeight = arr[m + 1] ?? 0;

    if (arr[m] > leftHeight && arr[m] > rightHeight) {
      return m;
    } else if (leftHeight > rightHeight) {
      hi = m - 1;
    } else {
      lo = m + 1;
    }
  }
}
