/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let max = 0;

  let prev0 = null;
  let beg = 0,
    end = 0;
  while (end < nums.length) {
    const curSeq = end - beg;
    if (nums[end] === 0) {
      if (prev0 == null) {
        prev0 = end;
        max = Math.max(max, curSeq);
      } else {
        beg = prev0 + 1;
      }
      prev0 = end;
    } else if (curSeq > max) {
      max = curSeq;
    }

    ++end;
  }

  return max;
};
