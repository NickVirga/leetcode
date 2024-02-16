/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  freq = {};

  arr.forEach((num) => {
    if (!freq[num]) {
      freq[num] = 1;
    } else {
      freq[num] += 1;
    }
  });
  //   console.log(freq);

  const freqArr = Object.entries(freq);

  if (k === 0) {
    return freqArr.length;
  }

  freqArr.sort((a, b) => a[1] - b[1]);

  //   freqArr.forEach(freq => console.log(freq))

  let cnt = 0;
  let sum = 0;
  for (let i = 0; i < freqArr.length; i++) {
    sum += freqArr[i][1];

    if (sum === k) {
      return freqArr.length - cnt - 1;
    } else if (sum > k) {
      return freqArr.length - cnt;
    } else {
      cnt++;
    }
  }

  return 0;
};

console.log(findLeastNumOfUniqueInts([5, 5, 4], 1));
console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3));
