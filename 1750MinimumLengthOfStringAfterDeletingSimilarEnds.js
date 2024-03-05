/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  let l = 0;
  let r = s.length - 1;

  if (r === 0) {
    return 1
  }

  let cnt = 0;

  let leftMode = true;
  console.log(s)

  while (l + 1 < r && cnt < 100) {
    // console.log("left", "[", l, "]: ", s[l])
    // console.log("right", "[", r, "]: ", s[r])

    if (leftMode) {
      console.log("left", "[", l, "]: ", s[l]);
      console.log("right", "[", r, "]: ", s[r]);
      console.log("check left");
      if (s[l] !== s[r]) {
        console.log("right side ahead doesn't match");
        return r - l + 1;
      }

      if (s[l] === s[l + 1]) {
        console.log("same char detected, look at next left char");
        l++;
      } else {
        console.log("no more similars chars on left, look at right char");
        leftMode = false;
      }
    }

    if (!leftMode) {
      console.log("left", "[", l, "]: ", s[l]);
      console.log("right", "[", r, "]: ", s[r]);
      console.log("check right");
      if (s[r] === s[r - 1]) {
        console.log("same char detected, look at next right char");
        r--;
      } else {
        console.log("no more similars chars on right, go back to left side (new char)");
        leftMode = true;
        l++;
        r--;
      }
    }

    cnt++;
  }

  if (l === r) {
    return 1
  }
  
  if (l + 1 === r) {
    if (s[l] === s[r]) {
        return 0
    } else {
        return 2
    }
  } 

  return r - l ;
};

// console.log(minimumLength("ca")) //2
// console.log(minimumLength("aabccabba")) //3
// console.log(minimumLength("cabaabac")); //0
// console.log(minimumLength("cbc")); //1
// console.log(minimumLength("bbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbccbcbcbccbbabbb")); //1
