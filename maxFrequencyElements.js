/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const freq = {}
    let max = 0
    let cnt = 0
    
    for (let i=0; i < nums.length; i++){
        value = nums[i]

        if (!freq[value]) {
            freq[value] = 0
        }
        freq[value]++

        if (freq[value] > max) {
            max = freq[value]
            cnt = 0
        }

        if (freq[value] === max) {
            cnt++
        }
    }

    console.log(freq)
    console.log(max)
    console.log(cnt)
    return cnt * max
};

maxFrequencyElements([1,2,2,3,1,4,3,5,5])
maxFrequencyElements([1,2,3,4,5])