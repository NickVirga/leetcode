/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  let outputPrice = 10001;
  let stops = 0;

  const findFlight = (city, ignoredCities, priceCumul, stops) => {
    for (let i = 0; i < flights.length; i++) {
      let sourc = flights[i][0];
      let dest = flights[i][1];
      let price = flights[i][2];
      let stopsMade = stops;
      let ignoredDest = ignoredCities;
      console.log(
        "city",
        city,
        "ignoreCities",
        ignoredCities,
        "priceCumul",
        priceCumul,
        "stops",
        stops
      );
      console.log("sourc", sourc, "dest", dest, "price", price);
      //find source city in flights and don't include previous cities for next dest
      if (sourc === city && ((2 ** dest) & ignoredDest) === 0) {
        console.log("source and dest considered");
        // console.log("priceCumul", priceCumul)
        totalPrice = priceCumul + price;
        if (dest === dst) {
          console.log("arrived at dest");
          if (totalPrice < outputPrice) {
            outputPrice = totalPrice;
          }
        } else {
          console.log("not at dest yet");
          if (stopsMade + 1 <= k) {
            stopsMade++;
            console.log("find next dest");
            ignoredDest = ignoredDest | (2 ** dest);
            findFlight(dest, ignoredDest, totalPrice, stopsMade, i);
          } else {
            console.log("too many stops");
          }
        }
      }
    }
  };

  findFlight(src, 2 ** src, 0, stops);

  if (outputPrice === 10001) {
    return -1;
  }

  return outputPrice;
};

var findCheapestPrice1 = function (n, flights, src, dst, k) {
  let prices = [];
  for (let i = 0; i < n; i++) {
    prices.push(Infinity);
  }
  prices[src] = 0;
  

  for (let j = 0; j < k + 1; j++) {
    // console.log(prices)
    let tmpPrices = [...prices];

    for (const [s, d, p] of flights) {
      if (prices[s] !== Infinity) {
        if (prices[s] + p < tmpPrices[d]) {
          tmpPrices[d] = prices[s] + p;
        }
      }
    }
    prices = tmpPrices;
  }
//   console.log(prices)
  if (prices[dst] === Infinity) {
    return -1;
  }
  return prices[dst];
};

console.log(findCheapestPrice1(4, [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], 0, 3, 1)) //700
console.log(findCheapestPrice1(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1)) //200
console.log(findCheapestPrice1(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 0)) //500
console.log(
  findCheapestPrice1(
    4,
    [
      [0, 1, 1],
      [0, 2, 5],
      [1, 2, 1],
      [2, 3, 1],
    ],
    0,
    3,
    1
  )
); //6
console.log(findCheapestPrice1(5, [[0,1,100],[0,2,100],[0,3,10],[1,2,100],[1,4,10],[2,1,10],[2,3,100],[2,4,100],[3,2,10],[3,4,100]], 0, 4, 3)) //40
