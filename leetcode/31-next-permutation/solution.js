/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  let firstElemIdx = undefined;
  for (let i = nums.length - 2; i >= 0; --i) {
    if (nums[i] < nums[i + 1]) {
      firstElemIdx = i;
      break;
    }
  }

  if (firstElemIdx == null) {
    nums.reverse();
    return nums;
  }

  let smallestUnorderedElemIdx = undefined;
  for (let i = nums.length - 1; i > firstElemIdx; --i) {
    if (nums[firstElemIdx] < nums[i] && (smallestUnorderedElemIdx == null || nums[smallestUnorderedElemIdx] > nums[i])) {
      smallestUnorderedElemIdx = i;
    }
  }

  swap(nums, firstElemIdx, smallestUnorderedElemIdx);

  let i = firstElemIdx + 1,
    j = nums.length - 1;
  while (i < j) {
    swap(nums, i, j);
    ++i;
    --j;
  }

  return nums;
}

function swap(arr, idx1, idx2) {
  const tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
}
