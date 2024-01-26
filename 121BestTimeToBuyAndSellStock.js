/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let price = 0;
  for (let i = 1; i < prices.length; i++) {

    if (prices[i] < min) {
      min = prices[i];
    }

    if (prices[i] - min > price) {
      price = prices[i] - min;
    }
  }

  return price;
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([3, 2, 6, 5, 0, 3]));
