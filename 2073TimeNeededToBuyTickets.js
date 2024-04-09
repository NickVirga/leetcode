/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
const timeRequiredToBuy = (tickets, k) => {
  let time = 0;

  for (let i = 0; i < tickets.length; i++) {
    if (i <= k) {
      if (tickets[i] <= tickets[k]) {
        time += tickets[i];
      } else {
        time += tickets[k];
      }
    } else {
      if (tickets[i] < tickets[k]) {
        time += tickets[i];
      } else {
        time += tickets[k] - 1;
      }
    }
  }

  return time;
};

console.log(timeRequiredToBuy([2, 2, 2], 1));
console.log(timeRequiredToBuy([5, 1, 1, 1], 0));
