/**
 * @param {string} s
 * @return {number[]}
 */
function partitionLabels(s) {
  const lastCharIdx = new Map();
  for (let i = s.length - 1; i >= 0; --i) {
    if (!lastCharIdx.has(s[i])) {
      lastCharIdx.set(s[i], i);
    }
  }

  const result = [];

  let curPartitionBeg = 0,
    curPartitionLastIdx = 0;
  for (let i = 0; i < s.length; ++i) {
    curPartitionLastIdx = Math.max(curPartitionLastIdx, lastCharIdx.get(s[i]));
    if (curPartitionLastIdx === i) {
      result.push(curPartitionLastIdx - curPartitionBeg + 1);
      curPartitionBeg = i + 1;
    }
  }

  if (curPartitionBeg < s.length) {
    result.push(s.length - curPartitionBeg);
  }

  return result;
}
