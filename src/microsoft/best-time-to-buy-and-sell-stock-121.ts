function maxProfit(prices: number[]): number {
  // find the minimum point to buy
  // find maximal point to sell
  let minBuy: number = prices[0];
  let profit: number = 0;

  for (let i = 1; i < prices.length; i++) {
    minBuy = Math.min(minBuy, prices[i]);
    profit = Math.max(profit, prices[i] - minBuy);
  }

  return profit;
}

export { maxProfit };
