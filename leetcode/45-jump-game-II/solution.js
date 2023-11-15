/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jumps = 0;
  let i = 0,
    j = 1;
  while (j < nums.length) {
    const prevFurthestDest = i + nums[i];

    let furthestDest = i;
    while (j <= prevFurthestDest && j < nums.length) {
      const curFurthestDest = j + nums[j];
      if (curFurthestDest >= furthestDest) {
        furthestDest = curFurthestDest;
        i = j;
      }
      ++j;
    }

    ++jumps;
  }

  return jumps;
};
