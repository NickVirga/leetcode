/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    // my solution was too slow
    // let result = left

    // for (let i = left + 1; i <= right; i++) {
    //     // console.log(i)
    //     result = result & i

    //     if (result === 0) {
    //         return 0
    //     }

    // }

    // return result

    let result = right

    while (result > left) {
        result = result & result - 1
    }

    return result & left


    
};

// console.log(rangeBitwiseAnd(5,7))
// console.log(rangeBitwiseAnd(0,0))
// console.log(rangeBitwiseAnd(1,2147483647))
console.log(rangeBitwiseAnd(1073741824,2147483647))