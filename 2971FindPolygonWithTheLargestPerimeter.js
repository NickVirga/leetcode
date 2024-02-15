/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {

  nums.sort((a, b) => b - a);
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }

  for (let j = 0; j < nums.length - 2; j++) {
    sum -= nums[j]
    if (sum > nums[j]) {
        return sum + nums[j]
    }
  }
  
  return -1
};

console.log(largestPerimeter([5,5,5]));
console.log(largestPerimeter([1, 12, 1, 2, 5, 50, 3]));
console.log(largestPerimeter([5,5,50]));
