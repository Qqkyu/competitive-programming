/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  for (let i = 2; i < nums.length; ++i) {
    nums[i] += Math.max(nums[i - 2], nums[i - 3] ?? 0);
  }
  return Math.max(nums.at(-1), nums.at(-2) ?? 0);
}
