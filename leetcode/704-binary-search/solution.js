function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const m = left + Math.floor((right - left) / 2);

    if (nums[m] === target) {
      return m;
    } else if (nums[m] < target) {
      left = m + 1;
    } else {
      right = m - 1;
    }
  }

  return -1;
}
