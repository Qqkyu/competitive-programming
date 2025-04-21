/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

function reverse(nums, i, j) {
  while (i < j) {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
    i++;
    --j;
  }
}
