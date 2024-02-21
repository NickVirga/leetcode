/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    pairs = {}
    letters = ""

    for (let i = 0; i < s.length; i++) {
        if (!pairs[s[i]]) {
            if (letters.includes(t[i])) {
                return false
            } else {
                pairs[s[i]] = t[i]
                letters = letters + t[i]
            }
        } else {
            if (pairs[s[i]] !== t[i]) {
                return false
            }
        }
    }

    return true

};

console.log(isIsomorphic("egg","add"))
console.log(isIsomorphic("foo","bar"))
console.log(isIsomorphic("paper","title"))
console.log(isIsomorphic("badc","baba"))