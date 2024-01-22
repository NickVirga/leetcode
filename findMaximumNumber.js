/**
 * @param {number} k
 * @param {number} x
 * @return {number}
 */
var findMaximumNumber = function (k, x) {
    //solution is too inefficient; exceeds time limit
  const getPrice = (int, x) => {
    let price = 0;
    const mask = 2 ** (x - 1);

    while (int > 0) {
      if ((int & mask) === mask) {
        price++;
      }

      int = int >> x;
    }

    return price;
  };

  let sumPrices
  let testSumPrices = 0;
  let num = 1;
  let numPrice;
  while (testSumPrices <= k) {
    sumPrices = testSumPrices
    numPrice = getPrice(num, x);

    if (sumPrices + numPrice > k) {
    console.log("break")
    console.log("num: ", num, " price: ", numPrice, " sum: ", sumPrices)
      break;
    }

    testSumPrices += numPrice;

    num++;
  }

  console.log(num - 1)
  return num - 1;
};

// findMaximumNumber(9, 1); //6
// findMaximumNumber(7, 2); //9
findMaximumNumber(281, 5); //531
// findMaximumNumber(4096, 6); //4127
