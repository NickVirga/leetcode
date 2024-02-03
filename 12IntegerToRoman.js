/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let s = "";

  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roms = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

  let i = 0;
  while (num) {
    while (num >= nums[i]) {
      s += roms[i];
      num -= nums[i];
    }
    i++;
  }

  return s;
};

console.log(intToRoman(1998));
