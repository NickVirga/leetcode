/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  str = x.toString();
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length-i-1]) {
        return false
    }
  }
  return true
};

console.log(isPalindrome(1234567654321))
