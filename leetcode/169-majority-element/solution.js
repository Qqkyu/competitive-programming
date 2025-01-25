function majorityElement(nums) {
  let curMajorityElem = undefined;
  let count = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (count === 0) {
      curMajorityElem = nums[i];
    }

    count = curMajorityElem === nums[i] ? count + 1 : count - 1;
  }

  return curMajorityElem;
}
