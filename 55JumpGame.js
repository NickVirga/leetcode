/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if ((nums.length === 1)) {
    return true;
  }

  if (nums[0] === 0) {
    return false
}

  for (let i = 0; i < nums.length - 1; i++) {
    console.log(i + nums[i])
    
    
    if (i + nums[i] >= nums.length - 1) {
      console.log(i);
      console.log(nums[i]);
      return true;
    }
  }

  return false;
};

// console.log(canJump([2,3,1,1,4]))
// console.log(canJump([3, 2, 1, 0, 4]));
// console.log(canJump([2, 5, 0, 0]));
// console.log(canJump([1]));
// console.log(canJump([1,2]));
// console.log(canJump([0,2,3]));
console.log(canJump([3,0,8,2,0,0,1]));

