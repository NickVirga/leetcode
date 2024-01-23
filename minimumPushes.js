/**
 * @param {string} word
 * @return {number}
 */
const minimumPushes = (word) => {
    //this solution was an extreme overcomplicait on. The letters are distinct so there's no need to
    //account for duplicates. Therefore, frequency maps unneeded
  const letterFreqMap = {};
  let maxFreq = 0;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (!letterFreqMap[letter]) {
      letterFreqMap[letter] = 1;
    } else {
      letterFreqMap[letter]++;
    }

    if (letterFreqMap[letter] > maxFreq) {
      maxFreq = letterFreqMap[letter];
    }
  }

  const freqCntMap = {};

  Object.keys(letterFreqMap).forEach((key) => {
    const freq = letterFreqMap[key];
    if (!freqCntMap[freq]) {
      freqCntMap[freq] = 1;
    } else {
      freqCntMap[freq]++;
    }
  });

  let keyPushCost = 1;
  let keysAvailable = 8;
  let keyPushCnt = 0;
  let j = maxFreq;
  let freqCnt = 0;
  while (j > 0) {
    if (freqCntMap[j]) {
      freqCnt += freqCntMap[j];
        // console.log("j", j)
      while (freqCnt > 0) {
        // console.log("freqCnt", freqCnt)
        if (freqCnt > keysAvailable) {
            // console.log(">")
            keyPushCnt += keysAvailable * keyPushCost * j
            keyPushCost++
            freqCnt -= keysAvailable
            keysAvailable = 8
        } else if ((freqCnt === keysAvailable)) {
            // console.log("=")
            keyPushCnt += keysAvailable * keyPushCost * j
            keyPushCost++
            freqCnt = 0
            keysAvailable = 8
            j--
        } else { //freqCnt < keysAvailable
            // console.log("<")
            keyPushCnt += freqCnt * keyPushCost * j
            keysAvailable -= freqCnt
            freqCnt = 0
            j--
        }
      }
    } else {
        j--
    }
  }

  return keyPushCnt
//   console.log(letterFreqMap);
//   console.log(freqCntMap);
};


console.log(minimumPushes("abcde")); //5
console.log(minimumPushes("xycdefghij")); //12
console.log(minimumPushes("jxycdefxghijcbbb")); //19
console.log(minimumPushes("aabbccddeeffgghhiiiiii")); //24
