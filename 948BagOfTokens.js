/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
  tokens.sort((a, b) => a - b);

  let maxScore = 0;
  let score = 0;
  let left = 0;
  let right = tokens.length - 1;

  while (left <= right) {
    console.log(tokens, power, score);
    if (tokens[left] <= power) {
      console.log("consume power", "[", left, "]:", tokens[left]);
      power -= tokens[left];
      left++;
      score++;
    } else {
      console.log("increase power", "[", right, "]:", tokens[right]);
      if (score === 0) {
        return maxScore
      }
        power += tokens[right];
        score--;
        right--;
    }

    if (score > maxScore) {
      maxScore = score;
    }
  }

  return maxScore;
};

// console.log(bagOfTokensScore([100], 50)); //0
// console.log(bagOfTokensScore([200, 100], 150)); //1
// console.log(bagOfTokensScore([100, 200, 300, 400], 200)); //2
// console.log(bagOfTokensScore([71, 55, 82], 54)); //0
