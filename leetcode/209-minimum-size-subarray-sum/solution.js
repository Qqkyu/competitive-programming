/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(target, nums) {
  let result = Infinity;
  let left = 0,
    right = 0,
    sum = nums[0];

  while (right < nums.length) {
    if (sum < target) {
      ++right;
      sum += nums[right] ?? 0;
    } else {
      result = Math.min(result, right - left + 1);
      sum -= nums[left];
      ++left;
    }
  }

  return result === Infinity ? 0 : result;
}
