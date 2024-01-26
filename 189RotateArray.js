/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k %= nums.length; // if k > nums.length we only care about shift remainder
  const reverse = (nums, start, end) => {
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  };
  console.log(nums);
  reverse(nums, 0, nums.length - 1);
  console.log(nums);
  reverse(nums, 0, k - 1);
  console.log(nums);
  reverse(nums, k, nums.length - 1);
  console.log(nums);
};

// rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([-1], 2);
