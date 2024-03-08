/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  const freqMap = {};
  let maxFreq = 0;
  let cnt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!freqMap[nums[i]]) {
      freqMap[nums[i]] = 0;
    }
    freqMap[nums[i]]++;

    if (freqMap[nums[i]] > maxFreq) {
      maxFreq = freqMap[nums[i]];
      cnt = 0;
    }
    if (freqMap[nums[i]] === maxFreq) {
      cnt += maxFreq;
    }
  }

  console.log(cnt)
  return cnt;
};

maxFrequencyElements([1,2,3,4,5]);
