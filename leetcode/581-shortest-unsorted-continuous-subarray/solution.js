/**
 * @param {number[]} nums
 * @return {number}
 */
function findUnsortedSubarray(nums) {
  let leftElem = undefined;
  for (let i = 0; i < nums.length; ++i) {
    if (leftElem == null && nums[i] > nums[i + 1]) {
      leftElem = nums[i + 1];
    } else if (leftElem != null && nums[i] < leftElem) {
      leftElem = nums[i];
    }
  }

  let rightElem = undefined;
  for (let i = nums.length - 1; i >= 0; --i) {
    if (rightElem == null && nums[i] < nums[i - 1]) {
      rightElem = nums[i - 1];
    } else if (rightElem != null && nums[i] > rightElem) {
      rightElem = nums[i];
    }
  }

  let leftElemIdx = 0;
  while (leftElemIdx < nums.length) {
    if (nums[leftElemIdx] > leftElem) {
      break;
    }
    ++leftElemIdx;
  }

  let rightElemIdx = nums.length - 1;
  while (rightElemIdx >= 0) {
    if (nums[rightElemIdx] < rightElem) {
      break;
    }
    --rightElemIdx;
  }

  return Math.max(rightElemIdx - leftElemIdx + 1, 0);
}
