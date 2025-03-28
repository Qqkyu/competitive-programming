function findDuplicate(nums) {
  let slow = nums[0],
    fast = nums[nums[0]];
  while (fast != slow) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  slow = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}
