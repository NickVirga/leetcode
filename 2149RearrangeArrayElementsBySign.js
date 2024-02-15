/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  let pos = [];
  let neg = [];
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      pos.push(nums[i]);
    } else {
      neg.push(nums[i]);
    }
  }

  for (let j = 0; j < pos.length; j++){
    ans.push(pos[j])
    ans.push(neg[j]) 
  }


  return ans;
};

console.log(rearrangeArray([-2, -5, 3, 1, -4, 2]));
