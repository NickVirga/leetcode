/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  symToNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let numIprev = symToNum[s[0]];
  let sum = 0;
  let subSum = 0;

  for (let i = 1; i < s.length; i++) {
    
    const numI = symToNum[s[i]];
    subSum += numIprev;

    if (numIprev > numI) { 
      sum += subSum;
      subSum = 0 
    }
    if (numIprev < numI) { 
      sum -= subSum;
      subSum = 0;
    }
    numIprev = numI

  }

  return sum + numIprev + subSum;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));

