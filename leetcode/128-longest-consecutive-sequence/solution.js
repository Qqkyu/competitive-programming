/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  const numsSet = new Set(nums);
  let curLongestSeq = 0;

  for (let curNum of numsSet) {
    if (numsSet.has(curNum - 1)) continue;

    let curSeq = 1;
    while (numsSet.has(curNum + curSeq)) {
      ++curSeq;
    }

    curLongestSeq = Math.max(curLongestSeq, curSeq);
  }

  return curLongestSeq;
}
