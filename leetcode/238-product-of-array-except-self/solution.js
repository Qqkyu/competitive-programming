function productExceptSelf(nums) {
  const result = new Array(nums.length);
  for (let i = nums.length - 1; i >= 0; --i) {
    result[i] = nums[i] * (result[i + 1] ?? 1);
  }

  let curProduct = 1;
  for (let i = 0; i < nums.length; ++i) {
    result[i] = curProduct * (result[i + 1] ?? 1);
    curProduct *= nums[i];
  }
  return result;
}
