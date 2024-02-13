/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    
    let cnt = 0

    for (let i = 1; i < s.length; i++) {

        let upperOffset = 1
        let lowerOffset = 1

        while (i - lowerOffset >= 0 && i + upperOffset < s.length) {
            if (s[i + upperOffset] === s[i - lowerOffset]) {
                cnt++
                console.log("i", i, "origin:", s[i], "left:", s[i - lowerOffset], "right:", s[i + upperOffset], "cnt:", cnt)
                upperOffset++
                lowerOffset++
            } else {
                break
            }
        }

        if (s[i] === s[i-1]) {
            cnt++
            console.log("i", i, "originRight:", s[i], "originLeft:", s[i-1], "cnt:", cnt)
            upperOffset = 1
            lowerOffset = 2

            while (i - lowerOffset >= 0 && i + upperOffset < s.length) {
                if (s[i + upperOffset] === s[i - lowerOffset]) {
                    cnt++
                    console.log("i", i, "originRight:", s[i], "originLeft:", s[i-1], "left:", s[i - lowerOffset], "right:", s[i + upperOffset], "cnt:", cnt)
                    upperOffset++
                    lowerOffset++
                } else {
                    break
                }
            }
        } 

    }

    

    return cnt + s.length

};


// console.log(countSubstrings("bbbbefgfeabacbcabzgzz"))
// console.log(countSubstrings("abc"))
// console.log(countSubstrings("aaa"))
console.log(countSubstrings("addaccadbabdbdbdbcabdcbcadacccbdddcbddacdaacbbdcbdbccdaaddadcaacdacbaaddbcaadcdab")) //126