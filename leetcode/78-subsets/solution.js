/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums, biggestRemoved = -Infinity) {
  const result = [nums];
  if (nums.length <= 1 && nums[0] < biggestRemoved) {
    return result;
  }

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] > biggestRemoved) {
      result.push(...subsets(nums.toSpliced(i, 1), nums[i]));
    }
  }

  return result;
}
