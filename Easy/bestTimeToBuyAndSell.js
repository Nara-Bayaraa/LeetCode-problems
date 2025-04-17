var maxProfit = (prices) => {
  let totalProfit = 0;
  if (!prices || prices.length < 2) {
    return 0;
  }
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      totalProfit += prices[i + 1] - prices[i];
    }
  }
  return totalProfit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
