/**
 * @param {string} s
 * @param {string} a
 * @param {string} b
 * @param {number} k
 * @return {number[]}
 */
var beautifulIndices = function (s, a, b, k) {
  // too slow to past all test cases
  beautifuls = [];
  let aPos = 0;
  for (let i = 0; i < s.split(a).length - 1; i++) {
    aPos += s.split(a)[i].length;

    let bPos = 0;
    for (let j = 0; j < s.split(b).length - 1; j++) {
      bPos += s.split(b)[j].length;

      if (Math.abs(bPos - aPos) <= k) {
        beautifuls.push(aPos);
        break;
      }

      bPos += b.length;
    }

    aPos += a.length;
  }

  return beautifuls;
};

// beautifulIndices("isawsquirrelnearmysquirrelhouseohmy","my","squirrel",15)
// beautifulIndices("abcd","a","a",4)

var beautifulIndices1 = function (s, a, b, k) {
  let aIndex = 0;
  let bIndex = 0;
  const aList = [];
  const bList = [];
  const beautifuls = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === b[bIndex]) {
      if (bIndex === b.length - 1) {
        bList.push(i - b.length + 1);
        bIndex = 0;
      } else {
        bIndex++;
      }
    } else {
        bIndex = 0
        if (s[i] === b[bIndex]) {
            bIndex++;
        }
    }

    // console.log(s[i])
    // console.log(a[aIndex])
    if (s[i] === a[aIndex]) {
        // console.log(s[i])
        // console.log(aIndex)
      if (aIndex === a.length - 1) {
        aList.push(i - a.length + 1);
        aIndex = 0;
      } else {
        // console.log("index++")
        aIndex++;
      }
    } else {
        aIndex = 0
        if (s[i] === a[aIndex]) {
            aIndex++;
        }
    }
  }

  console.log(aList)
  console.log(bList)
  for (let j = 0; j < aList.length; j++) {
    for (let l = 0; l < bList.length; l++) {
      if (Math.abs(aList[j] - bList[l]) <= k) {
        beautifuls.push(aList[j]);
        break;
      }
    }
  }

  console.log(beautifuls)
  return beautifuls;
};

// beautifulIndices1("isawsquirrelnearmysquirrelhouseohmy", "my", "squirrel", 15);
// beautifulIndices1("abcd","a","a",4)
// beautifulIndices1("ocmm", "m", "oc", 3);
// beautifulIndices1("xkatkatpsw", "tt", "kat", 8);
// beautifulIndices1("ggfsg", "gfsg", "g", 4);
beautifulIndices1("yaibjjsec", "yaibj", "jsec", 9);
