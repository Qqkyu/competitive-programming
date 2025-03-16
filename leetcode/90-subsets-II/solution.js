/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);

  const subsets = [];

  function findSubsets(curIdx, curNums) {
    subsets.push([...curNums]);

    for (let i = curIdx; i < nums.length; ++i) {
      if (i > curIdx && nums[i] === nums[i - 1]) {
        continue;
      }
      curNums.push(nums[i]);
      findSubsets(i + 1, curNums);
      curNums.pop();
    }
  }

  findSubsets(0, []);
  return subsets;
};
