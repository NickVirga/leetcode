/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const zigzagConvert = (s, numRows) => {
    let output = []
    let offset = 0
    let direction = -1

    for (let i = 0; i <= s.length - 1; i++) {
        if (!output[offset]) {
            output[offset] = '';
        }
        output[offset] += s[i]
 
        if (offset === 0 || offset === numRows - 1) {
            direction = -direction
        }
        offset += direction
      
    }
    return output.join('')
};

console.log(zigzagConvert("PAYPALISHIRING", 3))
console.log(zigzagConvert("PAYPALISHIRING", 4))
console.log(zigzagConvert("A", 3))


// const zigzagConvert1 = (s, numRows) => {
//     // insertions = Array.from({ length: numRows}, () => 0)
//     output = ""
//     offset = 0
//     direction = -1
//     for (let i = 0; i <= s.length - 1; i++) {
//         position = i + offset 
//         output = output.slice(0, i) + s[i] + output.slice(i)
 
//         if (offset === 0 || offset === numRows - 1) {
//             direction = -direction
//         }
//         offset += direction
      
//     }
//     return output
// };

