/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // let j = Math.floor(numbers.length/2)
  // if (target < numbers[j]) {
  //     j = numbers.length
  // }

  let i = 0;
  let j = 1;

  while (i < j) {
    console.log("i", i, "j", j);

    const sum = numbers[i] + numbers[j];
    console.log("sum", sum);
    if (sum === target) {
      return [i + 1, j + 1];
    } else if (sum > target || j === numbers.length) {
      i++;
      j = i + 1;
    } else {
      j++;
    }

    // if (numbers[j] === numbers[j - 1]) {
    //   while (numbers[j] === numbers[j - 1] && j < numbers.length) {
    //     j++;
    //   }
    // }
  }
};

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([2, 3, 4], 6));
// console.log(twoSum([-1, 0], -1));
// console.log(twoSum([0, 0, 3 ,4], 0));
console.log(twoSum([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1], 2));
