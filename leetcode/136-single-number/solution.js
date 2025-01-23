function singleNumber(nums) {
  return nums.reduce((prev, cur) => prev ^ cur);
}
