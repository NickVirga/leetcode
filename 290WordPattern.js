/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  words = s.split(" ");

  if (words.length !== pattern.length) {
    return false;
  }

  const letterToWord = {};
  const wordsDic = {};

  for (let i = 0; i < pattern.length; i++) {
    if (!letterToWord[pattern[i]]) {
      if (wordsDic.hasOwnProperty(words[i])) {
        return false;
      } else {
        letterToWord[pattern[i]] = words[i];
        wordsDic[words[i]] = true;
      }
    } else {
      if (letterToWord[pattern[i]] !== words[i]) {
        return false;
      }
    }
  }

  return true;
};

//this solution has similar performance. Difference is that rather than keep a
//dictionary of used words, it insteads compares unique sets of words and pattern letters
var wordPattern1 = function (pattern, s) {
  words = s.split(" ");

  if (words.length !== pattern.length) {
    return false;
  }
  if (new Set(words).size !== new Set(pattern.split("")).size) {
    return false;
  }

  const letterToWord = {};

  for (let i = 0; i < pattern.length; i++) {
    if (!letterToWord[pattern[i]]) {
      letterToWord[pattern[i]] = words[i];
    } else {
      if (letterToWord[pattern[i]] !== words[i]) {
        return false;
      }
    }
  }

  return true;
};

console.log(wordPattern1("abba", "dog cat cat dog"));
console.log(wordPattern1("abba", "dog cat cat fish"));
console.log(wordPattern1("aaaa", "dog cat cat dog"));
console.log(wordPattern1("abba", "dog dog dog dog"));
console.log(wordPattern1("abba", "dog constructor constructor dog"));
