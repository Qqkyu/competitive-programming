/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxLength(nums) {
  const balances = new Map([[0, -1]]);

  let balance = 0,
    result = 0;

  nums.forEach((num, idx) => {
    balance = num === 0 ? balance - 1 : balance + 1;

    if (balances.has(balance)) {
      result = Math.max(result, idx - balances.get(balance));
    } else {
      balances.set(balance, idx);
    }
  });

  return result;
}
