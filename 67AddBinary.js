/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // console.log(parseInt(a, 2))
  // console.log(parseInt(b, 2))
  // console.log(parseInt(a, 2) + parseInt(b, 2))

  // const num = parseInt(a, 2) + parseInt(b, 2)
  // let result = ""
  // while (num > 0) {

  // }

  console.log(a);
  console.log(b);

  let i = 0;
  let result = "";
  let carry = 0;
  while (a[a.length - i - 1] || b[b.length - i - 1]) {
    numA = parseInt(a[a.length - i - 1]) || 0;
    numB = parseInt(b[b.length - i - 1]) || 0;
    console.log(numA);
    console.log(numB);
    let add = numA + numB + carry;
    console.log("add", add);
    if (add === 0) {
      result = "0" + result;
    } else if (add === 1) {
      result = "1" + result;
      carry = 0;
    } else if (add === 2) {
      result = "0" + result;
      carry = 1;
    } else if (add === 3) {
      result = "1" + result;
      carry = 1;
    }
    console.log("result", result);

    i++;
  }

  if ((carry === 1)) {
    return "1" + result;
  } else {
    return result;
  }
};

// console.log(addBinary("1010", "1011"));
console.log(addBinary("1", "111"));
