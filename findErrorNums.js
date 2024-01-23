/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = (nums) => {
  checkList = [];
  output = [];
  for (let i = 0; i < nums.length; i++) {
    checkList[i] = 1;
  }

  for (let i = 0; i < nums.length; i++) { 

    if (checkList[nums[i] - 1] == 1) {
      
      checkList[nums[i] - 1] = 0;
     
    } else {
  
      checkList[nums[i] - 1] = -1;
      output[0] = nums[i]
    }
  }

  output[1] = checkList.indexOf(1) + 1
  return output
};

console.log(findErrorNums([1, 2, 2, 4])); //[2, 3]
console.log(findErrorNums([1, 1])); //[1, 2]
console.log(findErrorNums([2, 2])); //[2, 1]
console.log(findErrorNums([3, 2, 2])); //[2, 1]
console.log(findErrorNums([4, 3, 2, 2]));
