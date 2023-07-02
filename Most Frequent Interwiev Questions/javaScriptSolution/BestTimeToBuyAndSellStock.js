/*
You are given an array prices where prices[i] is the price
of a given stock on the ith day.

You want to maximize your profit by choosing a single day to
buy one stock and choosing a different day in the future to
sell that stock.

Return the maximum profit you can achieve from this transaction.
If you cannot achieve any profit, return 0.
*/

function profit(prices) {
  let maxProfit = 0;
  let minPrice = Infinity;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }

  return maxProfit;
}

const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [7, 6, 4, 3, 1];

console.log(profit(prices1)); // Output: 5
console.log(profit(prices2)); // Output: 0
