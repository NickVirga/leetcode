/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  let output = "";

  for (let i = 0; i < words.length; i++) {
    let isPalindrome = true;
    for (let j = 0; j < words[i].length / 2; j++) {
      if (words[i][j] !== words[i][words[i].length - (j + 1)]) {
        isPalindrome = false;
        break;
      }
    }

    if (isPalindrome) {
      output = words[i];
      break;
    }
  }

  return output;
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
console.log(firstPalindrome(["notapalindrome", "racecar"]));
console.log(firstPalindrome(["def", "ghi"]));
console.log(firstPalindrome(["", ""]));
