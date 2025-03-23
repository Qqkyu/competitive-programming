/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
function findMissingRanges(nums, lower, upper) {
  const result = [];

  let idx = 0;
  while (lower <= upper) {
    if (nums[idx] !== lower) {
      const upperBound = idx === nums.length ? upper : nums[idx] - 1;
      result.push([lower, upperBound]);
      lower = upperBound + 1;
    }
    ++lower;
    ++idx;
  }

  return result;
}
