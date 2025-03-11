/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  let curMin = nums[0];
  let lo = 0,
    hi = nums.length - 1;
  while (lo <= hi) {
    const m = lo + Math.floor((hi - lo) / 2);
    curMin = Math.min(curMin, nums[lo], nums[hi], nums[m]);
    if (nums[lo] < nums[hi]) {
      break;
    } else if (nums[m - 1] < nums[m + 1]) {
      hi = m - 1;
    } else {
      lo = m + 1;
    }
  }
  return curMin;
}
