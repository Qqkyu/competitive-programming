/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySum(nums, k) {
  const prefixSumCount = new Map([[0, 1]]);

  function findSubarray(idx, curSum) {
    if (idx === nums.length) {
      return 0;
    }

    curSum += nums[idx];

    const count = prefixSumCount.get(curSum - k) ?? 0;
    prefixSumCount.set(curSum, (prefixSumCount.get(curSum) ?? 0) + 1);

    return count + findSubarray(idx + 1, curSum);
  }

  return findSubarray(0, 0);
}
