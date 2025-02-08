function swap(nums, i, j) {
  const tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

function sortColors(nums) {
  let r = 0,
    w = 0;

  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i];
    if (num === 1) {
      swap(nums, i, w);
      ++w;
    } else if (num === 0) {
      swap(nums, i, w);
      swap(nums, w, r);
      ++r;
      ++w;
    }
  }
}
