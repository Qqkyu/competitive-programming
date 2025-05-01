/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);

  let curClosest = nums[0] + nums[1] + nums[2];
  nums.forEach((num, idx) => {
    let leftIdx = idx + 1,
      rightIdx = nums.length - 1;
    while (leftIdx < rightIdx) {
      const sum = num + nums[leftIdx] + nums[rightIdx];

      if (Math.abs(target - curClosest) > Math.abs(target - sum)) {
        curClosest = sum;
      }

      if (sum > target) {
        rightIdx--;
      } else if (sum < target) {
        leftIdx++;
      } else {
        return sum;
      }
    }
  });

  return curClosest;
}
