/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let beg = 0,
    end = 0;
  while (end < nums.length) {
    if (nums[end] === 0) k--;
    if (k < 0) {
      if (nums[beg] === 0) k++;
      beg++;
    }
    end++;
  }
  return end - beg;
};
