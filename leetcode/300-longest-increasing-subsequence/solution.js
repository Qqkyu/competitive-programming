/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
  const dp = new Array(nums.length).fill(1);

  let curLen = 1;
  while (curLen <= nums.length) {
    let hasIncreased = false;

    let curMax = undefined;
    for (let i = nums.length - 1; i >= 0; --i) {
      if (dp[i] === curLen) {
        if (curMax == null || nums[i] > curMax) {
          curMax = nums[i];
        } else if (nums[i] < curMax) {
          dp[i]++;
          hasIncreased = true;
        }
      }
    }

    ++curLen;

    if (!hasIncreased) {
      break;
    }
  }

  return curLen - 1;
}
