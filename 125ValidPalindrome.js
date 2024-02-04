/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    
    const alphanum = "abcedfghijklmnopqrstuvwxyz1234567890"
    let j = s.length - 1
    for (let i = 0; i < j; i++) {
        // console.log(s[i], s[j])
        const left = s[i].toLowerCase()
        const right = s[j].toLowerCase()

        if (alphanum.includes(left)) {

            if (alphanum.includes(right)) {
                // console.log(left, "=", right)
                if (left !== right) {
                    return false
                } else {
                    j--
                }

            } else {
                j--
                i-- //i should repeat
            }

        } else {
            //skip, i++
        }


    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))