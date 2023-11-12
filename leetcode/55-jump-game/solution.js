/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let curJumpNeeded = 1;

  for (let i = nums.length - 2; i > 0; --i) {
    const curPossibleJump = nums[i];

    if (curPossibleJump < curJumpNeeded) {
      curJumpNeeded++;
    } else 
      curJumpNeeded = 1;
    }

  return nums[0] >= curJumpNeeded || nums.length === 1;
};

