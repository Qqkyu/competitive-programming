function twoSum(nums, target) {
  const numsIndexes = new Map();
  for (let i = 0; i < nums.length; ++i) {
    const cur = nums[i];
    if (numsIndexes.has(target - cur)) {
      return [numsIndexes.get(target - cur), i];
    }
    numsIndexes.set(cur, i);
  }
}
