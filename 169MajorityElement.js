/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let major = nums[0]
    let count = 1
    for (let i = 1; i < nums.length; i++){
        if (nums[i] === major) {
            count++
        } else if (count === 0) {
            major = nums[i]
        }
        else {
            count--
        }  
    }

    return major

    // nums.sort((a,b) => a - b)
    // return nums[Math.floor((nums.length - 1)/2)]
};

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElement([1,1,1,2,2,2]))