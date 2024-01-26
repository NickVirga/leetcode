/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0
    let val
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] != val) {
            nums[k] = nums[i]
            val = nums[i]
            k++
        }

    }

    console.log(nums)
    return k
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([1,1,2]))
