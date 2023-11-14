/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let i = 0,
    j = 0;
  let curSubarraySum = 0;
  let curMinLen = 0;

  while (j < nums.length) {
    curSubarraySum += nums[j];

    while (curSubarraySum >= target) {
      if (curMinLen === 0 || j - i + 1 < curMinLen) curMinLen = j - i + 1;
      curSubarraySum -= nums[i];
      ++i;
    }

    ++j;
  }

  return curMinLen;
};
