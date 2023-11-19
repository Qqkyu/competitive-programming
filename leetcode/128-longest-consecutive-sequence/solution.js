/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let longestConsecutiveSeq = 0;
  const startToEnd = new Map();
  const endToStart = new Map();

  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i];
    if (startToEnd.has(num) || endToStart.has(num)) continue;

    const leftSequenceStart = endToStart.get(num - 1) ?? num;
    const leftSequenceEnd = startToEnd.get(leftSequenceStart);

    const rightSequenceEnd = startToEnd.get(num + 1) ?? num;
    const rightSequenceStart = endToStart.get(rightSequenceEnd);

    startToEnd.set(leftSequenceStart, rightSequenceEnd);
    startToEnd.delete(rightSequenceStart);

    endToStart.set(rightSequenceEnd, leftSequenceStart);
    endToStart.delete(leftSequenceEnd);

    const sequenceLength = rightSequenceEnd - leftSequenceStart + 1;
    if (sequenceLength > longestConsecutiveSeq) {
      longestConsecutiveSeq = sequenceLength;
    }
  }

  return longestConsecutiveSeq;
};
