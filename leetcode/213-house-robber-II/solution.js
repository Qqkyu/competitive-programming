/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  let curRob = new Array(nums.length - 1);
  curRob[0] = nums[0];

  let curMaxRob = Math.max(curRob[0]);
  for (let i = 1; i < nums.length - 1; ++i) {
    const prevRob = curRob[i - 2] ?? 0,
      prevPrevRob = curRob[i - 3] ?? 0;
    curRob[i] = Math.max(prevRob, prevPrevRob) + nums[i];
    curMaxRob = Math.max(curMaxRob, curRob[i]);
  }

  curRob[0] = nums[1] ?? 0;
  curMaxRob = Math.max(curMaxRob, curRob[0]);
  for (let i = 1; i < nums.length - 1; ++i) {
    const prevRob = curRob[i - 2] ?? 0,
      prevPrevRob = curRob[i - 3] ?? 0;
    curRob[i] = Math.max(prevRob, prevPrevRob) + nums[i + 1];
    curMaxRob = Math.max(curMaxRob, curRob[i]);
  }

  return curMaxRob;
}
