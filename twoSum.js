/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (compliment in map) {
      return [map[compliment], i];
    }
    map[nums[i]] = i;
  }
  return null;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
