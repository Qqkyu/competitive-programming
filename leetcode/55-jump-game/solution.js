/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  let curPos = 0;

  while (nums[curPos] + curPos < nums.length - 1) {
    if (nums[curPos] === 0) {
      return false;
    }
    let candidate = curPos + 1;
    for (let i = curPos + 2; i <= curPos + nums[curPos]; ++i) {
      candidate = nums[i] + i >= nums[candidate] + candidate ? i : candidate;
    }
    curPos = candidate;
  }

  return true;
}
