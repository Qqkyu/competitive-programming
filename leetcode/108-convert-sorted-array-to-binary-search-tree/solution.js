function sortedArrayToBSTRecurse(nums, lo, hi) {
  if (lo > hi) {
    return null;
  }

  const m = lo + Math.floor((hi - lo) / 2);
  return new TreeNode(
    nums[m],
    sortedArrayToBSTRecurse(nums, lo, m - 1),
    sortedArrayToBSTRecurse(nums, m + 1, hi),
  );
}

function sortedArrayToBST(nums) {
  return sortedArrayToBSTRecurse(nums, 0, nums.length - 1);
}
