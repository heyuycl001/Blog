// 121. 买卖股票的最佳时机

/**
 * @param {number[]} prices
 * @return {number}
 */
/* var maxProfit = function (prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
    } else if (prices[i] - min > max) {
      max = prices[i] - min;
    }
  }
  return max;
}; */

var maxProfit = function (prices) {
  let min = prices[0],
    max = 0;
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};
console.log(maxProfit([2, 4, 1]));
