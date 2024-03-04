/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const votes = {};

  for (let j = 1; j <= n; j++) {
    votes[j] = 0;
  }

  for (let i = 0; i < trust.length; i++) {
    if (votes.hasOwnProperty(trust[i][0])) {
      delete votes[trust[i][0]];
    }
    if (votes.hasOwnProperty(trust[i][1])) {
      votes[trust[i][1]]++;
    }
  }

  if (Object.keys(votes).length === 0) {
    return -1;
  }

  for (let ppl in votes) {
    if (votes[ppl] === n - 1) {
      return ppl;
    } else {
      return -1;
    }
  }
};

//this solution is much faster since it doesn't deal with removing entries,
//and checking for their existence
var findJudge1 = function (n, trust) {
  const votes = [];

  for (let i = 0; i < n; i++) {
    votes[i] = 0;
  }

  for (let i = 0; i < trust.length; i++) {
    votes[trust[i][0] - 1]--;
    votes[trust[i][1] - 1]++;
  }
  console.log(votes)

  for (let j = 0; j < votes.length; j++) {
    if (votes[j] === n - 1) {
      return j + 1;
    }
  }

  return -1;
};

console.log(findJudge1(2, [[1, 2]])); //2
console.log(findJudge1(3, [[1,3],[2,3]])) //3
console.log(findJudge1(3, [[1,3],[2,3],[3,1]])) //-1
console.log(findJudge1(3, [[1,2],[2,3]])) //-1
console.log(findJudge1(4, [[1,3],[1,4],[2,3],[2,4],[4,3]])) //3
