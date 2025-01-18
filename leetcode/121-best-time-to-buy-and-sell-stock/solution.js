function maxProfit(prices) {
  let curMaxProfit = 0;
  let curMin = prices[0];

  for (let i = 1; i < prices.length; ++i) {
    const curPrice = prices[i];

    if (curPrice - curMin > curMaxProfit) {
      curMaxProfit = curPrice - curMin;
    } else if (curPrice < curMin) {
      curMin = curPrice;
    }
  }

  return curMaxProfit;
}
