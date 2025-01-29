function sortedSquares(nums) {
  const result = new Array(nums.length);

  for (
    let i = nums.length - 1, forwardIdx = 0, backwardIdx = nums.length - 1;
    i >= 0;
    --i
  ) {
    const forwardNum = nums[forwardIdx];
    const backwardNum = nums[backwardIdx];

    if (Math.abs(forwardNum) > Math.abs(backwardNum)) {
      result[i] = Math.pow(forwardNum, 2);
      ++forwardIdx;
    } else {
      result[i] = Math.pow(backwardNum, 2);
      --backwardIdx;
    }
  }

  return result;
}
