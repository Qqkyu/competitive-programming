/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k %= nums.length;
  if (k === 0) {
    return;
  }  

  const subArrays = Math.ceil(nums.length / k);
  for (let i = 1; i < subArrays; i++) {
    for (let j = 0; j < k; ++j) {
      const moduloJ = ((i * k) + j) % nums.length;
      swap(nums, j, moduloJ);
    }
  }

  if (k !== nums.length / k) {
    for (let i = nums.length % k; i > 0; ++i) {
      const idx = i + ((subArrays * k) % nums.length) - 1; 
      swap(nums, idx, idx + 1);
    }
  }
};

function swap(arr, idxA, idxB) {
  const tmp = arr[idxA];
  arr[idxA] = arr[idxB];
  arr[idxB] = tmp;
}

