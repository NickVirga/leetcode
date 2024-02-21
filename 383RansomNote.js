/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    const letters = {}

    for (let i = 0; i < magazine.length; i++) {
        if (!letters[magazine[i]]) {
            letters[magazine[i]] = 1
        } else {
            letters[magazine[i]] += 1
        }
    }

    for (let j = 0; j < ransomNote.length; j++) {

        if (!letters[ransomNote[j]] ||  letters[ransomNote[j]] === 0) {
            return false
        } else {
            letters[ransomNote[j]] -= 1
        }

    }

    return true

};


// console.log(canConstruct("a","b"))
// console.log(canConstruct("aa","ab"))
// console.log(canConstruct("aa","aab"))
console.log(canConstruct("atesta","steasta"))