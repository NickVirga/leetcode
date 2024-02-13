/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    
    let squareRoot = Math.floor(Math.sqrt(n))
    let sum = squareRoot ** 2
    let cnt = 1

    while (squareRoot > 0) {
        const square = squareRoot ** 2
        console.log("square", square, "sum", sum)

        if (squareRoot > 1 && n % square === 0){
            cnt = n / square
            break
        }

        if (sum + square < n) {
            sum += square
            cnt++
        } else if (sum + square === n){
            cnt++
            break
        } 
        else {
            squareRoot--
        }
    }
    return cnt
};


console.log(numSquares(19))