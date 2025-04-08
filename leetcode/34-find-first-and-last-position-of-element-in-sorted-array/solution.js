/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  function searchFirst(lo, hi) {
    if (lo > hi) {
      return -1;
    }

    const m = lo + Math.floor((hi - lo) / 2);
    if (nums[m] === target) {
      const leftRes = searchFirst(lo, m - 1);
      return leftRes === -1 ? m : leftRes;
    } else {
      return searchFirst(m + 1, hi);
    }
  }

  function searchLast(lo, hi) {
    if (lo > hi) {
      return -1;
    }

    const m = lo + Math.floor((hi - lo) / 2);
    if (nums[m] === target) {
      const rightRes = searchLast(m + 1, hi);
      return rightRes === -1 ? m : rightRes;
    } else {
      return searchLast(lo, m - 1);
    }
  }

  let lo = 0,
    hi = nums.length - 1;
  while (hi >= lo) {
    const m = lo + Math.floor((hi - lo) / 2);

    if (nums[m] === target) {
      return [searchFirst(lo, m), searchLast(m, hi)];
    } else if (nums[m] > target) {
      hi = m - 1;
    } else {
      lo = m + 1;
    }
  }

  return [-1, -1];
}
