/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums) {
  let idx = 0;
  while (idx < nums.length) {
    const num = nums[idx];

    if (num > 0 && num <= nums.length && nums[idx] !== nums[num - 1]) {
      swap(nums, idx, num - 1);
    } else {
      ++idx;
    }
  }

  let result = 1;
  while (result <= nums.length && nums[result - 1] === result) {
    result++;
  }

  return result;
}

function swap(array, idx1, idx2) {
  const tmp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = tmp;
}
