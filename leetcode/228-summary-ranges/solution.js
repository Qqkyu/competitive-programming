/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let i = 0,
    j = 0;
  const ranges = [];
  while (i < nums.length) {
    while (j + 1 < nums.length && nums[j] + 1 === nums[j + 1]) {
      ++j;
    }
    ranges.push(i === j ? `${i}` : `${nums[i]}->${nums[j]}`);
    ++j;
    i = j;
  }
  return ranges;
};
