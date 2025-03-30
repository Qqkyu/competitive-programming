/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let lo = 0,
    hi = nums.length - 1;
  while (lo <= hi) {
    const m = lo + Math.floor((hi - lo) / 2);
    if (nums[m] === target) {
      return m;
    }

    if (nums[lo] <= nums[m]) {
      if (nums[lo] <= target && target <= nums[m]) {
        hi = m - 1;
      } else {
        lo = m + 1;
      }
    } else {
      if (nums[m] <= target && target <= nums[hi]) {
        lo = m + 1;
      } else {
        hi = m - 1;
      }
    }
  }

  return -1;
}
