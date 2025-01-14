function moveZeroes(nums) {
  let i = 0;
  let j = 1;

  while (nums[i] !== 0 && j < nums.length) {
    ++i;
    ++j;
  }

  while (j < nums.length) {
    if (nums[j] !== 0) {
      const tmp = nums[i];
      nums[i] = nums[j];
      nums[j] = tmp;
      ++i;
    }
    ++j;
  }
}
