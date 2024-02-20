/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  //   const bracketPairs = {
  //     "(": ")",
  //     "[": "]",
  //     "{": "}",
  //   };

  //   const bracketQueue = []

  //   for (let i = 0; i < s.length; i++) {
  //     console.log(s[i])
  //     console.log(bracketQueue)
  //     if (bracketPairs[s[i]]) { //if is opening bracket
  //         bracketQueue.push(bracketPairs[s[i]]) //queue closing bracket
  //     } else {
  //         // console.log(s[i], bracketQueue)
  //         if (s[i] === bracketQueue[bracketQueue.length - 1]) {
  //             bracketQueue.pop()
  //         } else {
  //             return false
  //         }

  //     }

  //   }

  //   if (bracketQueue.length === 0) {
  //     return true
  //   }

  //   return false

  stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(")");
    } else if (s[i] === "{") {
      stack.push("}");
    } else if (s[i] === "[") {
      stack.push("]");
    } else if (stack.length === 0 || stack.pop() !== s[i]) {
      return false;
    }
  }
  return stack.length === 0;
};

// console.log(isValid("()"))?
console.log(isValid("([{}])"));
console.log(isValid("()[]{}"));
