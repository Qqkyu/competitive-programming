/**
 * @param {number[]} coins
 * @param number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  const minCoins = new Array(amount + 1).fill(amount + 1);
  minCoins[0] = 0;

  for (let curAmount = 1; curAmount <= amount; ++curAmount) {
    coins.forEach((coin) => {
      if (curAmount - coin >= 0) {
        minCoins[curAmount] = Math.min(minCoins[curAmount], minCoins[curAmount - coin] + 1);
      }
    });
  }

  return minCoins[amount] !== amount + 1 ? minCoins[amount] : -1;
}
