function missingNumber(nums) {
  const n = nums.length;
  const rangeSum = (n * (n + 1)) / 2;
  return nums.reduce((sum, elem) => sum - elem, rangeSum);
}
