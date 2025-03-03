/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  const result = [];

  function findCombinations(idx, comb, sum) {
    if (sum === target) {
      result.push([...comb]);
      return;
    }

    if (sum > target || idx >= candidates.length) {
      return;
    }

    comb.push(candidates[idx]);
    findCombinations(idx, comb, sum + candidates[idx]);
    comb.pop();
    findCombinations(idx + 1, comb, sum);
  }

  findCombinations(0, [], 0);
  return result;
}
