/**
 * @param {string[]} arr
 * @return {number}
 */
const maxLength = (arr) => {
    //incomplete soltuion
  let maxLenConcat = 0;
  const combos = [];
  let concat = ""

  for (let groupSize = arr.length; groupSize > 1; groupSize--) {
    for (let i = 0; i < arr.length - groupSize + 1; i++) {
      // console.log("i", i);
      concat = ""
      for (let j = i + 1; j < arr.length - groupSize + 2; j++) {
        //   console.log("j", j);
        const currCombo = [arr[i]];
        concat = concat + arr[i]

        for (let k = 1; k < groupSize; k++) {
          // console.log("k", k);
          concat = concat + arr[j + k - 1]
          currCombo.push(arr[j + k - 1]);
        }

        console.log(concat)
        combos.push(currCombo);
      }
    }
  }
  for (l = 0; l < combos.length; l++) {
    console.log(combos[l]);
  }
};

maxLength(["un", "iq", "ue", "ne", "ss"]);
