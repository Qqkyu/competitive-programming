function increasingTriplet(nums) {
  let i = Infinity;
  let j = Infinity;

  for (let k = 0; k < nums.length; ++k) {
    if (nums[k] <= i) {
      i = nums[k];
    } else if (nums[k] <= j) {
      j = nums[k];
    } else {
      return true;
    }
  }

  return false;
}
