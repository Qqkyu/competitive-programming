/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
  const result = [];
  const queue = [];

  for (let i = 0; i < nums.length; ++i) {
    while (nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop();
    }
    queue.push(i);

    if (queue[0] === i - k) {
      queue.shift();
    }

    if (i >= k - 1) {
      result.push(nums[queue[0]]);
    }
  }

  return result;
}
