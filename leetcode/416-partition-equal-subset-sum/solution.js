/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canPartition(nums) {
  const sumToSearch = nums.reduce((sum, num) => sum + num) / 2;

  if (!Number.isInteger(sumToSearch)) {
    return false;
  }

  const sumComplements = new Set([sumToSearch]);
  for (let i = 0; i < nums.length; ++i) {
    if (sumComplements.has(nums[i])) {
      return true;
    }
    let iterations = sumComplements.size;
    for (let sumComplement of sumComplements) {
      if (iterations === 0) {
        break;
      }
      if (sumComplement - nums[i] > 0) {
        sumComplements.add(sumComplement - nums[i]);
      }
      --iterations;
    }
    sumComplements.add(sumToSearch - nums[i]);
  }

  return false;
}
