/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
// my slow solution commented out

//   let k = 0;
//   let val;
//   let allowDup = true;

//   const insertEle = (num) => {
//     nums[k] = num;
//     val = num;
//     k++;
//   };

//   for (let i = 0; i < nums.length; i++) {

//     if (nums[i] !== val ) {
//       insertEle(nums[i]);
//       allowDup = true
//     } else {
//       if (allowDup === true) {
//             insertEle(nums[i])
//             allowDup = false;
//       }
//     }
 
//   }

//   return k;

  if (nums.length <= 2) {
    return nums.length;
  }

  let k = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2] || nums[i] != nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  console.log(nums);
  return k;
};

// console.log(removeDuplicates([1,1,1,2,2,3]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
// console.log(removeDuplicates([1,2,2,3]))
