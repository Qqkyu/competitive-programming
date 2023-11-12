/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let shifts = 0;
  let i, j = 0;
  while (i < nums.length) {
    while (j + 1 < nums.length && nums[i] === nums[j + 1]) {
      ++j;
    }
    const numberOfDuplicates = j - i;
    for (let k = 0; k < shifts && k < numberOfDuplicates + 1; ++k) {
      swap(nums, i - (shifts - k), j - k);	
    }
    shifts += numberOfDuplicates > 1 ? numberOfDuplicates - 1 : 0;
    ++j;
    i = j;
  }
  return nums.length - shifts;
};

function swap(arr, idxA, idxB) {
  const tmp = arr[idxA];
  arr[idxA] = arr[idxB];
  arr[idxB] = tmp;
}

