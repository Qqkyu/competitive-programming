/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
  const result = [];
  const combination = [];

  function createCombinations(num) {
    if (combination.length === k) {
      result.push(combination.slice());
      return;
    }

    for (let i = num; i <= n; ++i) {
      combination.push(i);
      createCombinations(i + 1);
      combination.pop();
    }
  }

  createCombinations(1);
  return result;
}
