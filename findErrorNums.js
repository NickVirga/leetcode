/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = (nums) => {
    let ascending = False
    if (nums[0] < nums[nums.length-1]) {
        ascending = True
    }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      if (nums[i] > i + 1) {
        return [nums[i], nums[i] - 1];
      }
      return [nums[i], nums[i] + 1];
    }
  }
};

console.log(findErrorNums([1, 2, 2, 4])); //[2, 3]
console.log(findErrorNums([1, 1])); //[1, 2]
console.log(findErrorNums([2, 2])); //[2, 1]
console.log(findErrorNums([3, 2, 2])); //[2, 1]
