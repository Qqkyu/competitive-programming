/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];

  function findSum(curIdx, curCandidates, curSum) {
    if (curSum > target) {
      return;
    }

    if (curSum === target) {
      result.push(curCandidates);
      return;
    }

    for (let i = curIdx; i < candidates.length; ++i) {
      if (i !== curIdx && candidates[i] === candidates[i - 1]) {
        continue;
      }

      if (candidates[i] > target - curSum) {
        break;
      }

      findSum(i + 1, curCandidates.concat(candidates[i]), curSum + candidates[i]);
    }
  }

  findSum(0, [], 0);

  return result;
}
