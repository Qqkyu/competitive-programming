/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const output = new Array(nums.length);
  output[nums.length - 1] = nums[nums.length - 1];
  for (let i = output.length - 2; i >= 0; --i) {
    output[i] = nums[i] * output[i + 1];
  }
  for (let i = 0; i < nums.length; ++i) {
    const leftProduct = nums[i - 1] ?? 1;
    const rightProduct = output[i + 1] ?? 1;
    nums[i] *= leftProduct;
    output[i] = leftProduct * rightProduct;
  }
  return output;
};
