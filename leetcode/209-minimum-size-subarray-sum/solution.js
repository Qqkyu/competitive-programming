/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let i = 0,
    j = 0;
  let curSubarraySum = nums[i];
  let curMinLen = null;
  while (i < nums.length) {
    while (j < nums.length - 1 && curSubarraySum < target) {
      ++j;
      curSubarraySum += nums[j];
    }

    if (curSubarraySum < target) {
      break;
    }

    while (curSubarraySum - nums[i] >= target) {
      curSubarraySum -= nums[i];
      ++i;
    }

    if (curMinLen == null || j - i + 1 < curMinLen) {
      curMinLen = j - i + 1;
    }

    curSubarraySum = curSubarraySum - nums[i];
    i++;
    if (i > j) {
      j = i;
    }
  }

  return curMinLen ?? 0;
};
